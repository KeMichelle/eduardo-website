// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  srcDir: '.',

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-GB', name: 'English' },
      { code: 'es', iso: 'es-ES', name: 'Español' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
  },

  tailwindcss: {
    cssPath: './assets/css/main.css',
    configPath: './tailwind.config.js',
    exposeConfig: false,
    viewer: true,
  },

  ssr: true,

  pages: true,

  router: {
    options: {
      strict: false,
    },
  },

  typescript: {
    strict: true,
    typeCheck: false,
  },

  runtimeConfig: {
    paymentAdminPassword: process.env.PAYMENT_ADMIN_PASSWORD || '',
    paymentSessionSecret: process.env.PAYMENT_SESSION_SECRET || '',
    paymentAdminSessionHours: process.env.PAYMENT_ADMIN_SESSION_HOURS || '8',
    paymentAdminAllowedIps: process.env.PAYMENT_ADMIN_ALLOWED_IPS || '',
    paymentStorageDriver: process.env.PAYMENT_STORAGE_DRIVER || '',
    paymentStorageFile:
      process.env.PAYMENT_STORAGE_FILE || '.data/payment-requests.json',
    paypalClientId: process.env.PAYPAL_CLIENT_ID || '',
    paypalClientSecret: process.env.PAYPAL_CLIENT_SECRET || '',
    paypalBaseUrl:
      process.env.PAYPAL_BASE_URL || 'https://api-m.sandbox.paypal.com',
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || '',
      emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
    },
  },

  app: {
    head: {
      title: 'EDUP Global Flex - Wellness Made Simple',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'EDUP Global Flex - Leading provider of wellness technologies and products for personalised wellbeing.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js',
          type: 'text/javascript',
          defer: true,
        },
      ],
    },
  },
});
