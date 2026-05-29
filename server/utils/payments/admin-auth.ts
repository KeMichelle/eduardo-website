import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
import { createError, getCookie, getHeader, getRequestIP, setCookie } from 'h3';

import {
  assertAdminPaymentConfig,
  getPaymentConfig,
} from '~/server/utils/payments/config';

const ADMIN_COOKIE_NAME = 'edup_payment_admin';
const USE_SECURE_COOKIE = process.env.NODE_ENV === 'production';

function base64UrlEncode(value: string) {
  return Buffer.from(value, 'utf8').toString('base64url');
}

function base64UrlDecode(value: string) {
  return Buffer.from(value, 'base64url').toString('utf8');
}

function hashUserAgent(userAgent: string) {
  return createHash('sha256').update(userAgent).digest('hex');
}

function safeCompare(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}

function createAdminToken(userAgent: string, expiresAt: number) {
  const { sessionSecret } = getPaymentConfig();
  const payload = JSON.stringify({
    exp: expiresAt,
    ua: hashUserAgent(userAgent),
  });
  const payloadPart = base64UrlEncode(payload);
  const signature = createHmac('sha256', sessionSecret)
    .update(payloadPart)
    .digest('base64url');

  return `${payloadPart}.${signature}`;
}

function readAdminToken(event: Parameters<typeof getCookie>[0]) {
  return getCookie(event, ADMIN_COOKIE_NAME);
}

function verifyAdminToken(token: string, userAgent: string) {
  const { sessionSecret } = getPaymentConfig();
  const [payloadPart, signature] = token.split('.');

  if (!payloadPart || !signature) {
    return null;
  }

  const expectedSignature = createHmac('sha256', sessionSecret)
    .update(payloadPart)
    .digest('base64url');

  if (!safeCompare(signature, expectedSignature)) {
    return null;
  }

  const payload = JSON.parse(base64UrlDecode(payloadPart)) as {
    exp: number;
    ua: string;
  };

  if (payload.exp < Date.now()) {
    return null;
  }

  if (!safeCompare(payload.ua, hashUserAgent(userAgent))) {
    return null;
  }

  return payload;
}

function assertAllowedAdminIp(event: Parameters<typeof getCookie>[0]) {
  const { allowedAdminIps } = getPaymentConfig();

  if (!allowedAdminIps.length) {
    return;
  }

  const requestIp = getRequestIP(event, { xForwardedFor: true }) || '';

  if (!allowedAdminIps.includes(requestIp)) {
    throw createError({
      statusCode: 403,
      statusMessage: 'This IP address is not allowed to manage payment links.',
    });
  }
}

export function getAdminSession(event: Parameters<typeof getCookie>[0]) {
  assertAdminPaymentConfig();
  assertAllowedAdminIp(event);

  const token = readAdminToken(event);

  if (!token) {
    return null;
  }

  const userAgent = getHeader(event, 'user-agent') || 'unknown';

  return verifyAdminToken(token, userAgent);
}

export function requireAdminSession(event: Parameters<typeof getCookie>[0]) {
  const session = getAdminSession(event);

  if (!session) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Admin authentication is required.',
    });
  }

  return session;
}

export function createAdminSession(event: Parameters<typeof setCookie>[0]) {
  assertAdminPaymentConfig();
  assertAllowedAdminIp(event);

  const { sessionDurationHours } = getPaymentConfig();
  const userAgent = getHeader(event, 'user-agent') || 'unknown';
  const expiresAt = Date.now() + sessionDurationHours * 60 * 60 * 1000;
  const token = createAdminToken(userAgent, expiresAt);

  setCookie(event, ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: USE_SECURE_COOKIE,
    sameSite: 'strict',
    path: '/',
    expires: new Date(expiresAt),
  });

  return expiresAt;
}

export function clearAdminSession(event: Parameters<typeof setCookie>[0]) {
  setCookie(event, ADMIN_COOKIE_NAME, '', {
    httpOnly: true,
    secure: USE_SECURE_COOKIE,
    sameSite: 'strict',
    path: '/',
    expires: new Date(0),
  });
}

export function validateAdminPassword(password: string) {
  assertAdminPaymentConfig();
  const { adminPassword } = getPaymentConfig();

  return safeCompare(password, adminPassword);
}
