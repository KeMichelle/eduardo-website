import type { AdminSessionResponse } from '~/shared/payment/types';
import { getAdminSession } from '~/server/utils/payments/admin-auth';

export default eventHandler<Promise<AdminSessionResponse>>((event) => {
  const session = getAdminSession(event);

  return Promise.resolve({
    authenticated: Boolean(session),
    expiresAt: session ? new Date(session.exp).toISOString() : undefined,
  });
});
