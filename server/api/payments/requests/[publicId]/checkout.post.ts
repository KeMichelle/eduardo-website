import { createError, getRouterParam, readBody } from 'h3';

import type { CheckoutStartResponse } from '~/shared/payment/types';
import { createPayPalCheckout } from '~/server/utils/payments/paypal';
import {
  getPaymentRequestByPublicId,
  updatePaymentRequest,
} from '~/server/utils/payments/repository';
import { validateProvider } from '~/server/utils/payments/validation';

export default eventHandler<Promise<CheckoutStartResponse>>(async (event) => {
  const publicId = getRouterParam(event, 'publicId');
  const body = await readBody<{ provider?: string }>(event);
  const provider = validateProvider(body.provider);
  const record = publicId ? await getPaymentRequestByPublicId(publicId) : null;

  if (!record) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Payment link not found.',
    });
  }

  if (!record.allowedProviders.includes(provider)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'This provider is not enabled for the payment link.',
    });
  }

  if (record.status === 'paid') {
    throw createError({
      statusCode: 409,
      statusMessage: 'This payment has already been completed.',
    });
  }

  if (record.status === 'expired') {
    throw createError({
      statusCode: 410,
      statusMessage: 'This payment link has expired.',
    });
  }

  if (provider === 'paypal') {
    const checkout = await createPayPalCheckout(record);

    await updatePaymentRequest(record.publicId, (current) => ({
      ...current,
      status: 'processing',
      providerSession: {
        provider: 'paypal',
        providerOrderId: checkout.providerOrderId,
        approvalUrl: checkout.approvalUrl,
        lastStartedAt: new Date().toISOString(),
      },
    }));

    return {
      provider: 'paypal',
      redirectUrl: checkout.approvalUrl,
    };
  }

  throw createError({
    statusCode: 400,
    statusMessage: 'Unsupported payment provider.',
  });
});
