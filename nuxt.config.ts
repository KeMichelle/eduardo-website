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
  ],

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
    public: {
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
