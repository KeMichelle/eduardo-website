import { createError, readBody } from 'h3';

import type { AdminSessionResponse } from '~/shared/payment/types';
import {
  createAdminSession,
  validateAdminPassword,
} from '~/server/utils/payments/admin-auth';

export default eventHandler<Promise<AdminSessionResponse>>(async (event) => {
  const body = await readBody<{ password?: string }>(event);

  if (!body.password || !validateAdminPassword(body.password)) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid admin password.',
    });
  }

  const expiresAt = createAdminSession(event);

  return {
    authenticated: true,
    expiresAt: new Date(expiresAt).toISOString(),
  };
});
