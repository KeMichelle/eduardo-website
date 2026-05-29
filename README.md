# EDUP Global Flex

Client website and private payment portal built end-to-end with Nuxt, TypeScript, and Tailwind CSS.

This project showcases full ownership of a production-style marketing site: bilingual UX, reusable component architecture, mobile-first design, legal/compliance content, and a server-side payment flow for manually generated customer payment links.

## What This Project Shows

- End-to-end delivery of a real client-facing Nuxt application
- Responsive UI design with a consistent visual system
- English and Spanish localisation across content and routes
- Dynamic product pages driven by structured data
- Secure server-side payment handling with a private admin flow

## Stack

- Nuxt 3
- Vue 3
- TypeScript
- Tailwind CSS
- Pinia
- @nuxtjs/i18n

## Highlights

- Marketing site for a wellness technology distributor with clear trust and compliance messaging
- Localised product catalogue and dynamic product detail pages under `pages/products/[slug].vue`
- Mobile-friendly navigation, gallery interactions, and section layouts
- Private payment portal with admin link generation and customer payment pages
- SSR/Nitro server routes for payment operations and secure secret handling

## Local Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Environment

Create a local `.env` from `.env.example` and configure the required values there.

The payment flow requires server-side runtime configuration and SSR deployment. It should not be deployed as a static-only `nuxt generate` site.

## Files Worth Reviewing

- `pages/products/[slug].vue` for dynamic product rendering
- `pages/pay/admin.vue` for the private payment admin flow
- `pages/pay/[publicId].vue` for the customer payment experience
- `server/api/payments/**` for server-side payment routes
- `i18n/i18n.config.ts` for localisation structure

## Notes

This repository is public as a code sample. Sensitive credentials are kept out of source control and must be provided through environment variables in the deployment platform.
