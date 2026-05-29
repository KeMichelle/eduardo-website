import { createError } from 'h3';

function parseAllowedAdminIps(rawValue: string | undefined) {
  return (rawValue || '')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);
}

function resolvePaymentStorageDriver(rawValue: string | undefined) {
  if (rawValue === 'file' || rawValue === 'vercel-blob') {
    return rawValue;
  }

  if (process.env.BLOB_STORE_ID || process.env.BLOB_READ_WRITE_TOKEN) {
    return 'vercel-blob';
  }

  return 'file';
}

export function getPaymentConfig() {
  const runtimeConfig = useRuntimeConfig();

  return {
    adminPassword: runtimeConfig.paymentAdminPassword,
    sessionSecret: runtimeConfig.paymentSessionSecret,
    sessionDurationHours: Number(runtimeConfig.paymentAdminSessionHours || 8),
    allowedAdminIps: parseAllowedAdminIps(runtimeConfig.paymentAdminAllowedIps),
    storageDriver: resolvePaymentStorageDriver(
      runtimeConfig.paymentStorageDriver,
    ),
    storageFile:
      runtimeConfig.paymentStorageFile || '.data/payment-requests.json',
    publicSiteUrl: runtimeConfig.public.siteUrl,
    paypal: {
      clientId: runtimeConfig.paypalClientId,
      clientSecret: runtimeConfig.paypalClientSecret,
      baseUrl:
        runtimeConfig.paypalBaseUrl || 'https://api-m.sandbox.paypal.com',
    },
  };
}

export function assertPaymentSiteUrl() {
  const { publicSiteUrl } = getPaymentConfig();

  if (!publicSiteUrl) {
    throw createError({
      statusCode: 500,
      statusMessage:
        'NUXT_PUBLIC_SITE_URL must be configured for payment callbacks.',
    });
  }

  return publicSiteUrl.replace(/\/$/, '');
}

export function assertAdminPaymentConfig() {
  const { adminPassword, sessionSecret } = getPaymentConfig();

  if (!adminPassword || !sessionSecret) {
    throw createError({
      statusCode: 500,
      statusMessage:
        'Payment admin access is not configured. Set PAYMENT_ADMIN_PASSWORD and PAYMENT_SESSION_SECRET.',
    });
  }
}
