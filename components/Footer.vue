<template>
  <footer class="bg-gray-900 text-white">
    <!-- Main footer content -->
    <div class="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
      >
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-3 mb-6">
            <div
              class="w-12 h-12 rounded-full bg-gradient-to-r from-ecuador-yellow to-ecuador-blue p-0.5"
            >
              <div
                class="w-full h-full rounded-full bg-white flex items-center justify-center"
              >
                <img
                  src="/assets/images/logo/edulogohorizontal.png"
                  alt="EDUP GlobalFlex"
                  class="w-10 h-10 object-contain"
                  @error="handleImageError"
                />
                <span v-if="!logoLoaded" class="text-ecuador-blue font-bold"
                  >EGF</span
                >
              </div>
            </div>
            <div>
              <h3 class="text-xl font-display font-bold">EDUP GlobalFlex</h3>
              <p class="text-gray-400 text-sm">
                Authorized Nipponflex Distributor
              </p>
            </div>
          </div>

          <p class="text-gray-300 mb-6 max-w-md leading-relaxed">
            Eduardo Penafiel's authorized Nipponflex distribution business in
            the UK. Bringing you authentic Nipponflex wellness technologies and
            products designed for personalised wellbeing directly from the
            manufacturer.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-6 text-ecuador-yellow">
            Quick Links
          </h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.to">
              <NuxtLink
                v-if="
                  link.name !== 'Download Catalogue' &&
                  link.name !== 'Nipponflex Products'
                "
                :to="link.to"
                class="text-gray-300 hover:text-ecuador-yellow transition-colors duration-300 flex items-center group"
              >
                <span
                  class="w-0 group-hover:w-2 h-0.5 bg-ecuador-yellow mr-0 group-hover:mr-2 transition-all duration-300"
                ></span>
                {{ link.name }}
              </NuxtLink>
              <a
                v-else-if="link.name === 'Download Catalogue'"
                :href="link.to"
                download="EDUP-GlobalFlex-Catalogue.pdf"
                target="_blank"
                class="text-gray-300 hover:text-ecuador-yellow transition-colors duration-300 flex items-center group"
              >
                <span
                  class="w-0 group-hover:w-2 h-0.5 bg-ecuador-yellow mr-0 group-hover:mr-2 transition-all duration-300"
                ></span>
                {{ link.name }}
              </a>
              <a
                v-else
                :href="link.to"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-300 hover:text-ecuador-yellow transition-colors duration-300 flex items-center group"
              >
                <span
                  class="w-0 group-hover:w-2 h-0.5 bg-ecuador-yellow mr-0 group-hover:mr-2 transition-all duration-300"
                ></span>
                {{ link.name }}
                <svg
                  class="w-3 h-3 ml-1 opacity-60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold mb-6 text-ecuador-yellow">
            Contact Info
          </h4>
          <ul class="space-y-4 text-gray-300">
            <li class="flex items-start space-x-3">
              <svg
                class="w-5 h-5 text-ecuador-blue mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              <div>
                <p class="font-medium">London Office</p>
                <p class="text-sm text-gray-400">UK & International</p>
              </div>
            </li>

            <li class="flex items-start space-x-3">
              <svg
                class="w-5 h-5 text-ecuador-blue mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              <div>
                <p class="font-medium">Email</p>
                <a
                  href="mailto:eduardo.p.gflex@outlook.com"
                  class="text-sm text-gray-400 hover:text-ecuador-yellow transition-colors duration-300"
                >
                  eduardo.p.gflex@outlook.com
                </a>
              </div>
            </li>

            <li class="flex items-start space-x-3">
              <svg
                class="w-5 h-5 text-ecuador-blue mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              <div>
                <p class="font-medium">Phone</p>
                <a
                  href="tel:+447305873174"
                  class="text-sm text-gray-400 hover:text-ecuador-yellow transition-colors duration-300"
                >
                  +44 7305 873174
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-gray-800">
      <div class="container mx-auto px-4 lg:px-8 py-6">
        <div
          class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <div class="text-sm text-gray-400">
            © {{ currentYear }} EDUP GlobalFlex. All rights reserved.
          </div>

          <div class="flex items-center space-x-6 text-sm text-gray-400">
            <a
              href="/privacy"
              class="hover:text-ecuador-yellow transition-colors duration-300"
              >Privacy Policy</a
            >
            <a
              href="/terms"
              class="hover:text-ecuador-yellow transition-colors duration-300"
              >Terms of Service</a
            >
            <div class="flex items-center space-x-2">
              <span
                class="w-2 h-2 bg-ecuador-yellow rounded-full animate-pulse"
              ></span>
              <span>London Based</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
interface QuickLink {
  name: string;
  to: string;
}

const logoLoaded = ref(true);
const currentYear = new Date().getFullYear();

const quickLinks: QuickLink[] = [
  { name: 'Home', to: '/' },
  { name: 'Products', to: '/products' },
  { name: 'Technology', to: '/technology' },
  { name: 'Contact', to: '/contact' },
  { name: 'Nipponflex Products', to: 'https://www.nipponflex.com/produtos' },
  { name: 'Download Catalogue', to: '/assets/pdf/catalog.pdf' },
];

const handleImageError = () => {
  logoLoaded.value = false;
};
</script>
