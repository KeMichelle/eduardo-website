import { getRequestIP, readBody } from 'h3';

import { requireAdminSession } from '~/server/utils/payments/admin-auth';
import { assertPaymentSiteUrl } from '~/server/utils/payments/config';
import { createPaymentRequest } from '~/server/utils/payments/repository';
import { validateCreatePaymentLinkInput } from '~/server/utils/payments/validation';

export default eventHandler(async (event) => {
  requireAdminSession(event);
  const body = await readBody(event);
  const input = validateCreatePaymentLinkInput(body || {});
  const requestIp = getRequestIP(event, { xForwardedFor: true }) || undefined;
  const record = await createPaymentRequest(input, requestIp);

  return {
    record,
    shareUrl: `${assertPaymentSiteUrl()}/pay/${record.publicId}`,
  };
});
