# EDUP Global Flex - Wellness Technology Website

A modern, animated website for EDUP Global Flex built with Nuxt 3, TypeScript, and TailwindCSS. This website showcases wellness technology products with a focus on clean design, smooth animations, and responsive user experience.

## 🌟 Features

- **Modern Design**: Clean, professional design with Ecuadorian color palette
- **Responsive Layout**: Fully responsive for mobile, tablet, and desktop
- **Smooth Animations**: Custom CSS animations with TailwindCSS
- **TypeScript**: Type-safe development with full TypeScript support
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Contact Form**: Interactive contact form with validation
- **Component Architecture**: Modular, reusable Vue 3 components

## 🎨 Color Palette

The website uses the Ecuadorian flag colors as the primary palette:

- **Yellow**: `#FFD500` (ecuador-yellow)
- **Blue**: `#0033A0` (ecuador-blue)
- **Red**: `#EF3340` (ecuador-red)

## 🏗️ Project Structure

```
eduardo-website/
├── layouts/
│   └── default.vue          # Main layout with Header/Footer
├── pages/
│   ├── index.vue            # Home page
│   ├── products.vue         # Products showcase
│   ├── technology.vue       # Technology overview
│   ├── about.vue            # Company information
│   └── contact.vue          # Contact form
├── components/
│   ├── Header.vue           # Navigation header
│   ├── Footer.vue           # Site footer
│   ├── ProductCard.vue      # Product display card
│   ├── TechnologyCard.vue   # Technology feature card
│   ├── HeroSection.vue      # Landing hero section
│   ├── WellnessSection.vue  # Company intro section
│   ├── GallerySection.vue   # Product gallery
│   ├── AboutEduardo.vue     # Founder profile
│   └── CTASection.vue       # Call-to-action section
├── assets/
│   ├── css/main.css         # Global styles & animations
│   └── images/              # Image assets and placeholders
└── public/                  # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd eduardo-website
   ```

2. **Install dependencies**

   ```bash
   # npm
   npm install

   # yarn
   yarn install

   # pnpm
   pnpm install
   ```

3. **Start development server**

   ```bash
   # npm
   npm run dev

   # yarn
   yarn dev

   # pnpm
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📱 Pages Overview

### Home Page (`/`)

- Hero section with animated background
- Company introduction and statistics
- Product gallery with filtering
- Founder profile section
- Call-to-action with benefits

### Products Page (`/products`)

- Product grid with search and filters
- Category-based organization
- Detailed product modals
- Pagination support

### Technology Page (`/technology`)

- Technology showcase cards
- Comparison tables
- Research and development info
- Interactive expandable content

### About Page (`/about`)

- Company story and milestones
- Mission and vision statements
- Detailed founder profile
- Core values and achievements

### Contact Page (`/contact`)

- Interactive contact form with validation
- Business hours and contact info
- Success notifications
- Quick action links

## 🎨 Styling & Animations

### TailwindCSS Configuration

- Custom Ecuadorian color palette
- Responsive breakpoints
- Custom animations and transitions
- Component-specific styles

### Custom Animations

- `fade-in-up`: Smooth entrance animations
- `slide-in-left/right`: Directional slide effects
- `float`: Floating elements
- `bounce-subtle`: Gentle bouncing effects

### Responsive Design

- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Optimized layouts for all screen sizes

## 🔧 Development

### Building for Production

```bash
# Build the application
npm run build

# Preview production build locally
npm run preview
```

### Code Quality

- **TypeScript**: Strict mode enabled for type safety
- **ESLint**: Configured for Vue 3 and TypeScript
- **Prettier**: Code formatting (if configured)

### Performance Optimization

- **Image Loading**: Lazy loading with error fallbacks
- **Component Splitting**: Dynamic imports where beneficial
- **CSS Optimization**: TailwindCSS purging unused styles
- **SEO**: Meta tags and structured data

## 📦 Deployment

### Static Site Generation (SSG)

```bash
# Generate static site
npm run generate

# Deploy the ./output/public directory
```

### Server-Side Rendering (SSR)

```bash
# Build for SSR
npm run build

# Start production server
npm run start
```

### Popular Deployment Platforms

- **Vercel**: `vercel --prod`
- **Netlify**: Deploy `./output/public` folder
- **AWS S3**: Upload static files to S3 bucket
- **DigitalOcean**: Use App Platform or Droplets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email info@edupglobalflex.com or create an issue in this repository.

## 🙏 Acknowledgments

- Built with [Nuxt 3](https://nuxt.com/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Ecuadorian color palette inspiration
