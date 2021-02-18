export const getConfig = () => ({
  DATABASE_URL: process.env.DATABASE_URL ?? 'mongodb://localhost/local',
  APP_PORT: process.env.APP_PORT ?? 3000,
  MAILER_USER: process.env.MAILER_USER ?? '',
  MAILER_PASSWORD: process.env.MAILER_PASSWORD ?? '',
});
