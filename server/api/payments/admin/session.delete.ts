import { clearAdminSession } from '~/server/utils/payments/admin-auth';

export default eventHandler((event) => {
  clearAdminSession(event);

  return {
    authenticated: false,
  };
});
