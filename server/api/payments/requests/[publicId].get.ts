import { createError, getRouterParam } from 'h3';

import {
  getPaymentRequestByPublicId,
  toPublicPaymentRequestView,
} from '~/server/utils/payments/repository';

export default eventHandler(async (event) => {
  const publicId = getRouterParam(event, 'publicId');
  const record = publicId ? await getPaymentRequestByPublicId(publicId) : null;

  if (!record) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Payment link not found.',
    });
  }

  return toPublicPaymentRequestView(record);
});
