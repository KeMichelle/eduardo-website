<template>
  <header
    class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-ecuador-blue/20 transition-all duration-300"
  >
    <nav class="container mx-auto px-4 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Modern EDUP Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <div
            class="w-12 h-12 rounded-xl bg-gradient-to-br from-ecuador-blue via-ecuador-red to-ecuador-yellow p-0.5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-xl"
          >
            <div
              class="w-full h-full rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center"
            >
              <img
                src="/assets/images/logo/edupicon.png"
                alt="EDUP"
                class="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
                @error="handleImageError"
              />
              <!-- Modern Fallback -->
              <span
                v-if="!logoLoaded"
                class="text-ecuador-blue font-bold text-lg bg-gradient-to-r from-ecuador-blue to-ecuador-red bg-clip-text text-transparent"
                >E</span
              >
            </div>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation with Icons -->
        <div class="hidden lg:flex items-center space-x-8">
          <NuxtLink
            v-for="(link, index) in navigationLinks"
            :key="link.to"
            :to="link.to"
            class="relative flex items-center space-x-2 text-gray-300 hover:text-ecuador-yellow font-medium transition-all duration-300 group py-2 px-3 rounded-lg hover:bg-ecuador-blue/20"
            :class="{
              'text-ecuador-yellow bg-ecuador-blue/20': $route.path === link.to,
            }"
          >
            <!-- Navigation Icons -->
            <svg
              class="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="index === 0"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
              <path
                v-else-if="index === 1"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
              <path
                v-else-if="index === 2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
              <path
                v-else-if="index === 3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>{{ link.name }}</span>
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-ecuador-blue to-ecuador-red transition-all duration-300 group-hover:w-full"
              :class="{ 'w-full': $route.path === link.to }"
            ></span>
          </NuxtLink>
        </div>

        <!-- Modern CTA Button -->
        <div class="hidden md:flex">
          <NuxtLink
            to="/contact"
            class="flex items-center space-x-2 bg-gradient-to-r from-ecuador-blue to-ecuador-red text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 group"
          >
            <svg
              class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            <span>Get Started</span>
          </NuxtLink>
        </div>

        <!-- Modern Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden p-2 rounded-xl text-gray-300 hover:text-ecuador-yellow hover:bg-ecuador-blue/20 transition-all duration-300 group"
          aria-label="Toggle mobile menu"
        >
          <svg
            class="w-6 h-6"
            :class="{ 'rotate-90': mobileMenuOpen }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Modern Mobile Menu -->
      <Transition name="mobile-menu">
        <div
          v-if="mobileMenuOpen"
          class="lg:hidden py-6 border-t border-ecuador-blue/20 bg-gradient-to-b from-gray-800/95 to-gray-900/95 backdrop-blur-xl"
        >
          <div class="flex flex-col space-y-2 px-4">
            <NuxtLink
              v-for="(link, index) in navigationLinks"
              :key="link.to"
              :to="link.to"
              @click="closeMobileMenu"
              class="flex items-center space-x-3 text-gray-300 hover:text-ecuador-yellow font-medium transition-all duration-300 py-3 px-4 rounded-xl hover:bg-ecuador-blue/20 group"
              :class="{
                'text-ecuador-yellow bg-ecuador-blue/20 shadow-sm':
                  $route.path === link.to,
              }"
            >
              <!-- Mobile Navigation Icons -->
              <svg
                class="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  v-if="index === 0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
                <path
                  v-else-if="index === 1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
                <path
                  v-else-if="index === 2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
                <path
                  v-else-if="index === 3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
                <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>{{ link.name }}</span>
            </NuxtLink>
            <div class="pt-4 mt-4 border-t border-ecuador-blue/20">
              <NuxtLink
                to="/contact"
                @click="closeMobileMenu"
                class="flex items-center justify-center space-x-2 bg-gradient-to-r from-ecuador-blue to-ecuador-red text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 w-full group"
              >
                <svg
                  class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
                <span>Get Started</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
interface NavigationLink {
  name: string;
  to: string;
}

const navigationLinks: NavigationLink[] = [
  { name: 'Home', to: '/' },
  { name: 'Products', to: '/products' },
  { name: 'Technology', to: '/technology' },
  { name: 'Contact', to: '/contact' },
];

const mobileMenuOpen = ref(false);
const logoLoaded = ref(true);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const handleImageError = () => {
  logoLoaded.value = false;
};

// Close mobile menu when route changes
watch(
  () => useRoute().path,
  () => {
    closeMobileMenu();
  }
);
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
