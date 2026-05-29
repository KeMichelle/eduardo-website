import { requireAdminSession } from '~/server/utils/payments/admin-auth';
import { assertPaymentSiteUrl } from '~/server/utils/payments/config';
import { listPaymentRequests } from '~/server/utils/payments/repository';

export default eventHandler(async (event) => {
  requireAdminSession(event);
  const siteUrl = assertPaymentSiteUrl();
  const requests = await listPaymentRequests();

  return requests.map((record) => ({
    ...record,
    shareUrl: `${siteUrl}/pay/${record.publicId}`,
  }));
});
