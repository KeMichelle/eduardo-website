import { createError } from 'h3';

import {
  PAYMENT_PROVIDERS,
  type CreatePaymentLinkInput,
  type PaymentProvider,
} from '~/shared/payment/types';

export function validateCreatePaymentLinkInput(
  value: Partial<CreatePaymentLinkInput>,
): CreatePaymentLinkInput {
  if (!value.description?.trim()) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Description is required.',
    });
  }

  const amountMajor = Number(value.amountMajor);

  if (!Number.isFinite(amountMajor) || amountMajor <= 0) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Amount must be greater than zero.',
    });
  }

  const expiresAt = new Date(value.expiresAt || '');

  if (Number.isNaN(expiresAt.getTime()) || expiresAt.getTime() <= Date.now()) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Expiry must be in the future.',
    });
  }

  const currency = value.currency?.trim()?.toUpperCase();

  if (currency?.length !== 3) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Currency must be a 3-letter code.',
    });
  }

  const allowedProviders = Array.isArray(value.allowedProviders)
    ? value.allowedProviders.filter((provider): provider is PaymentProvider =>
        PAYMENT_PROVIDERS.includes(provider as PaymentProvider),
      )
    : [];

  if (!allowedProviders.length) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Select at least one payment provider.',
    });
  }

  return {
    description: value.description.trim(),
    customerName: value.customerName?.trim() || undefined,
    customerEmail: value.customerEmail?.trim() || undefined,
    amountMajor,
    currency,
    expiresAt: expiresAt.toISOString(),
    allowedProviders,
  };
}

export function validateProvider(value: unknown): PaymentProvider {
  if (typeof value !== 'string') {
    throw createError({
      statusCode: 400,
      statusMessage: 'Payment provider is required.',
    });
  }

  if (!PAYMENT_PROVIDERS.includes(value as PaymentProvider)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Unsupported payment provider.',
    });
  }

  return value as PaymentProvider;
}
