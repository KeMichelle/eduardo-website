import { get, list, put } from '@vercel/blob';
import { randomBytes, randomUUID } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

import type {
  CreatePaymentLinkInput,
  PaymentRequestRecord,
  PublicPaymentRequestView,
} from '~/shared/payment/types';
import { PAYMENT_PROVIDERS } from '~/shared/payment/types';
import {
  toMinorUnits,
  toMajorUnitsString,
} from '~/server/utils/payments/amount';
import { getPaymentConfig } from '~/server/utils/payments/config';

interface PaymentStorageShape {
  requests: PaymentRequestRecord[];
}

interface ProviderOrderRecord {
  publicId: string;
  providerOrderId: string;
}

const DEFAULT_ALLOWED_PROVIDERS: PaymentRequestRecord['allowedProviders'] = [
  'paypal',
];

function terminalStatuses() {
  return new Set(['paid', 'cancelled', 'failed']);
}

function getStoragePath() {
  const { storageFile } = getPaymentConfig();
  return resolve(process.cwd(), storageFile);
}

function getBlobRequestPath(publicId: string) {
  return `payments/requests/${publicId}.json`;
}

function getBlobProviderOrderPath(providerOrderId: string) {
  return `payments/provider-orders/${providerOrderId}.json`;
}

function normalizeAllowedProviders(
  allowedProviders: readonly string[],
): PaymentRequestRecord['allowedProviders'] {
  const normalized = allowedProviders.filter(
    (provider): provider is PaymentRequestRecord['allowedProviders'][number] =>
      PAYMENT_PROVIDERS.includes(
        provider as PaymentRequestRecord['allowedProviders'][number],
      ),
  );

  return normalized.length ? normalized : [...DEFAULT_ALLOWED_PROVIDERS];
}

async function readBlobJson<T>(pathname: string) {
  const result = await get(pathname, { access: 'private' });

  if (!result?.stream) {
    return null;
  }

  const raw = await new Response(result.stream).text();
  return JSON.parse(raw) as T;
}

async function writeBlobJson(pathname: string, value: unknown) {
  await put(pathname, JSON.stringify(value, null, 2), {
    access: 'private',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json',
    cacheControlMaxAge: 60,
  });
}

async function ensureStorageFile() {
  const storagePath = getStoragePath();
  await mkdir(dirname(storagePath), { recursive: true });

  try {
    await readFile(storagePath, 'utf8');
  } catch {
    await writeFile(
      storagePath,
      JSON.stringify({ requests: [] }, null, 2),
      'utf8',
    );
  }

  return storagePath;
}

function normalizeStatus(record: PaymentRequestRecord) {
  const allowedProviders = normalizeAllowedProviders(record.allowedProviders);
  const providerSession =
    record.providerSession?.provider === 'paypal'
      ? record.providerSession
      : undefined;
  const nextRecord =
    allowedProviders.length !== record.allowedProviders.length ||
    providerSession !== record.providerSession
      ? {
          ...record,
          allowedProviders,
          providerSession,
        }
      : record;

  if (
    !terminalStatuses().has(nextRecord.status) &&
    new Date(nextRecord.expiresAt).getTime() < Date.now()
  ) {
    return {
      ...nextRecord,
      status: 'expired' as const,
      updatedAt: new Date().toISOString(),
    };
  }

  return nextRecord;
}

async function readStorage() {
  const storagePath = await ensureStorageFile();
  const raw = await readFile(storagePath, 'utf8');
  const parsed = JSON.parse(raw) as PaymentStorageShape;
  let changed = false;

  const requests = parsed.requests.map((record) => {
    const normalized = normalizeStatus(record);
    if (normalized !== record) {
      changed = true;
    }
    return normalized;
  });

  if (changed) {
    await writeStorage({ requests });
  }

  return { requests };
}

async function writeStorage(data: PaymentStorageShape) {
  const storagePath = await ensureStorageFile();
  await writeFile(storagePath, JSON.stringify(data, null, 2), 'utf8');
}

async function listBlobPaymentRequests() {
  const { blobs } = await list({ prefix: 'payments/requests/', limit: 50 });
  const records = (
    await Promise.all(
      blobs.map((blob) => readBlobJson<PaymentRequestRecord>(blob.pathname)),
    )
  ).filter((record): record is PaymentRequestRecord => Boolean(record));

  const normalized = await Promise.all(
    records.map(async (record) => {
      const nextRecord = normalizeStatus(record);

      if (nextRecord !== record) {
        await writeBlobJson(
          getBlobRequestPath(nextRecord.publicId),
          nextRecord,
        );
      }

      return nextRecord;
    }),
  );

  return normalized.sort((left, right) =>
    right.createdAt.localeCompare(left.createdAt),
  );
}

async function getBlobPaymentRequestByPublicId(publicId: string) {
  const record = await readBlobJson<PaymentRequestRecord>(
    getBlobRequestPath(publicId),
  );

  if (!record) {
    return null;
  }

  const normalized = normalizeStatus(record);

  if (normalized !== record) {
    await writeBlobJson(getBlobRequestPath(publicId), normalized);
  }

  return normalized;
}

async function writeBlobPaymentRequest(record: PaymentRequestRecord) {
  await writeBlobJson(getBlobRequestPath(record.publicId), record);

  if (record.providerSession?.providerOrderId) {
    const providerOrderRecord: ProviderOrderRecord = {
      publicId: record.publicId,
      providerOrderId: record.providerSession.providerOrderId,
    };
    await writeBlobJson(
      getBlobProviderOrderPath(record.providerSession.providerOrderId),
      providerOrderRecord,
    );
  }
}

async function getBlobPaymentRequestByProviderOrderId(providerOrderId: string) {
  const mapping = await readBlobJson<ProviderOrderRecord>(
    getBlobProviderOrderPath(providerOrderId),
  );

  if (!mapping) {
    return null;
  }

  const record = await getBlobPaymentRequestByPublicId(mapping.publicId);

  if (record?.providerSession?.providerOrderId !== providerOrderId) {
    return null;
  }

  return record;
}

function createPublicId() {
  return randomBytes(12).toString('hex');
}

export function toPublicPaymentRequestView(
  record: PaymentRequestRecord,
): PublicPaymentRequestView {
  return {
    publicId: record.publicId,
    description: record.description,
    customerName: record.customerName,
    currency: record.currency,
    amountMajor: toMajorUnitsString(record.amountMinor),
    status: record.status,
    allowedProviders: record.allowedProviders,
    expiresAt: record.expiresAt,
    paidAt: record.paidAt,
  };
}

export async function listPaymentRequests() {
  if (getPaymentConfig().storageDriver === 'vercel-blob') {
    return listBlobPaymentRequests();
  }

  const { requests } = await readStorage();
  return requests.sort((left, right) =>
    right.createdAt.localeCompare(left.createdAt),
  );
}

export async function getPaymentRequestByPublicId(publicId: string) {
  if (getPaymentConfig().storageDriver === 'vercel-blob') {
    return getBlobPaymentRequestByPublicId(publicId);
  }

  const { requests } = await readStorage();
  return requests.find((record) => record.publicId === publicId) || null;
}

export async function getPaymentRequestByProviderOrderId(
  providerOrderId: string,
) {
  if (getPaymentConfig().storageDriver === 'vercel-blob') {
    return getBlobPaymentRequestByProviderOrderId(providerOrderId);
  }

  const { requests } = await readStorage();
  return (
    requests.find(
      (record) => record.providerSession?.providerOrderId === providerOrderId,
    ) || null
  );
}

export async function createPaymentRequest(
  input: CreatePaymentLinkInput,
  createdByIp?: string,
) {
  const now = new Date().toISOString();
  const record: PaymentRequestRecord = {
    id: randomUUID(),
    publicId: createPublicId(),
    description: input.description.trim(),
    customerName: input.customerName?.trim() || undefined,
    customerEmail: input.customerEmail?.trim() || undefined,
    currency: input.currency.trim().toUpperCase(),
    amountMinor: toMinorUnits(input.amountMajor),
    status: 'ready',
    allowedProviders: input.allowedProviders,
    expiresAt: input.expiresAt,
    createdAt: now,
    updatedAt: now,
    createdByIp,
  };

  if (getPaymentConfig().storageDriver === 'vercel-blob') {
    await writeBlobPaymentRequest(record);
    return record;
  }

  const storage = await readStorage();

  storage.requests.unshift(record);
  await writeStorage(storage);

  return record;
}

export async function updatePaymentRequest(
  publicId: string,
  updater: (record: PaymentRequestRecord) => PaymentRequestRecord,
) {
  if (getPaymentConfig().storageDriver === 'vercel-blob') {
    const current = await getBlobPaymentRequestByPublicId(publicId);

    if (!current) {
      return null;
    }

    const nextRecord = {
      ...updater(current),
      updatedAt: new Date().toISOString(),
    };

    await writeBlobPaymentRequest(nextRecord);
    return nextRecord;
  }

  const storage = await readStorage();
  const index = storage.requests.findIndex(
    (record) => record.publicId === publicId,
  );

  if (index === -1) {
    return null;
  }

  const current = storage.requests[index];
  const nextRecord = {
    ...updater(current),
    updatedAt: new Date().toISOString(),
  };

  storage.requests[index] = nextRecord;
  await writeStorage(storage);

  return nextRecord;
}
