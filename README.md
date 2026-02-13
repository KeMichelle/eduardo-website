# EDUP Global Flex – Wellness Technology Website

Production-ready marketing site for EDUP Global Flex (authorised Nipponflex distributor), built end‑to‑end by me with Nuxt 3, TypeScript, TailwindCSS and first‑class mobile support. This README is written for recruiters and fellow developers.

## 🔍 Project Overview

- **Stack**: Nuxt 3 (Vue 3, file-based routing), TypeScript, TailwindCSS, Pinia, @nuxt/image, @vueuse/nuxt
- **Domain**: Wellness technology products (Nipponflex eEnergy line)
- **Focus**: High‑trust marketing site with clear legal disclaimers, bilingual content, and strong mobile UX
- **Role**: Sole designer & developer (architecture, implementation, i18n, content integration)

## ✨ Key Features

- **Fully Responsive UI** – Mobile‑first layouts, tested on phones and tablets
- **Bilingual i18n (EN / ES)** – Implemented with `@nuxtjs/i18n`, including:
  - Localised navigation, hero content, and section copy
  - Localised product names, categories, tags and warnings
  - Locale‑aware routes for products and marketing pages
- **Product Catalogue & Detail Views**
  - Product listing with category tags and wellness focus (e.g. Women’s Wellness)
  - SEO‑friendly dynamic product pages under `/products/[slug]`
  - Localised specs, benefits and warnings
  - Prominent health/legal disclaimer on every product detail page
- **Modern Marketing Sections**
  - Hero, wellness & technology sections with subtle motion
  - Gallery component with improved touch/drag behaviour on mobile
  - “Free health test” CTA section driven by i18n, not hard‑coded copy
- **Legal & Compliance Pages**
  - Custom Privacy Policy and Terms pages written for EDUP Global Flex’s role as a UK‑based authorised Nipponflex distributor
  - Clear statement that Nipponflex eEnergy products are not intended to diagnose, treat, cure or prevent disease, and that results may vary
- **Internationalisation UX**
  - Desktop language selector in the header
  - Dedicated mobile language switcher inside the mobile nav

## 🧱 Notable Implementation Details

- **Nuxt 3 + TypeScript**
  - `script setup` with typed props and computed state
  - Simple, flat store usage via Pinia where needed
- **Routing & Structure** (high level)
  - `/` – Marketing homepage (hero, wellness sections, gallery, CTA, founder/about content)
  - `/products` – Product overview using reusable `ProductCard` components
  - `/products/[slug]` – Dynamic product pages with translated content and disclaimer
  - `/technology` – Technology explanation and benefits
  - `/contact` – Contact form and business details
  - `/privacy` – Styled privacy policy page
  - `/terms` – Styled terms of service/disclaimer page
- **i18n Configuration**
  - Central `i18n.config.ts` with `en` and `es` message trees
  - Product text resolved by slug (`productsData[slug]`) for consistency
  - Custom namespaces for health‑test copy and product tags (e.g. women’s wellness)
- **Design System**
  - Ecuadorian flag palette via Tailwind theme (`ecuador-yellow`, `ecuador-blue`, `ecuador-red`)
  - Reusable cards, sections and gradients for a consistent look

## 🖥️ Running the Project

### Prerequisites

- Node.js 18+
- npm, pnpm or yarn

### Install & Develop

```bash
git clone <repository-url>
cd eduardo-website

npm install   # or pnpm install / yarn install
npm run dev   # starts Nuxt on http://localhost:3000
```

### Build & Preview

```bash
npm run build
npm run preview
```

### Static Generation

```bash
npm run generate
```

## 📌 What to Look At (for Recruiters / Devs)

- **components/Header.vue** – Desktop + mobile navigation, language switchers, icon‑based menu
- **components/GallerySection.vue** – Mobile‑friendly drag/scroll implementation for the product gallery
- **components/ProductCard.vue** – Category & tag translation logic, card composition
- **pages/products/[slug].vue** – Dynamic product routing, translated content, legal disclaimer block
- **pages/privacy.vue / pages/terms.vue** – Custom‑written legal content styled to match the brand
- **i18n/i18n.config.ts** – Structured EN/ES translations, product‑by‑slug model

## 👤 About the Author

This project was designed and developed entirely by me as a real client site. The goal was to demonstrate:

- Ability to own a Nuxt 3 project end‑to‑end
- Practical front‑end architecture and component design
- Careful handling of legal and compliance copy in a wellness/health‑adjacent context
- Strong attention to mobile experience and localisation

If you’d like more context on decisions or trade‑offs in this codebase, feel free to reach out.

## 📫 Contact

- Email: info@edupglobalflex.com (business contact)
- For technical questions about this repo, please mention the project name in the subject.
