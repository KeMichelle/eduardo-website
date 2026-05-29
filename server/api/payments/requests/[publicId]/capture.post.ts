import { createError, getRouterParam, readBody } from 'h3';

import { capturePayPalCheckout } from '~/server/utils/payments/paypal';
import {
  getPaymentRequestByPublicId,
  updatePaymentRequest,
} from '~/server/utils/payments/repository';
import { validateProvider } from '~/server/utils/payments/validation';

export default eventHandler(async (event) => {
  const publicId = getRouterParam(event, 'publicId');
  const body = await readBody<{ provider?: string; orderId?: string }>(event);
  const provider = validateProvider(body.provider);
  const record = publicId ? await getPaymentRequestByPublicId(publicId) : null;

  if (!record) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Payment link not found.',
    });
  }

  if (provider !== 'paypal') {
    throw createError({
      statusCode: 400,
      statusMessage: 'Only PayPal requires capture from this endpoint.',
    });
  }

  if (
    !body.orderId ||
    record.providerSession?.providerOrderId !== body.orderId
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: 'PayPal order does not match the active payment session.',
    });
  }

  const capture = await capturePayPalCheckout(body.orderId);
  const updated = await updatePaymentRequest(record.publicId, (current) => ({
    ...current,
    status: 'paid',
    paidAt: new Date().toISOString(),
    providerCaptureId: capture.captureId,
    providerSession: {
      provider: 'paypal',
      providerOrderId: capture.providerOrderId,
      approvalUrl: current.providerSession?.approvalUrl,
      lastStartedAt:
        current.providerSession?.lastStartedAt || new Date().toISOString(),
    },
  }));

  return {
    status: updated?.status || 'paid',
    paidAt: updated?.paidAt,
  };
});
