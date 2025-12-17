<template>
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Simple Ecuador Flag Gradient Background -->
    <div class="gradient-background"></div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 lg:px-8 text-center">
      <div class="max-w-4xl mx-auto">
        <!-- Welcome & Logo Section -->
        <div class="animate-fade-in-up mb-16" style="animation-delay: 0.2s">
          <!-- Welcome Text with Logo -->
          <div class="flex flex-col items-center justify-center space-y-8">
            <h1
              class="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-black drop-shadow-lg"
            >
              Welcome to :
            </h1>

            <!-- Much Bigger Logo -->
            <div class="flex justify-center">
              <img
                src="/assets/images/logo/edulogohorizontal.png"
                alt="EDUP Global Flex"
                class="h-48 md:h-64 lg:h-80 xl:h-96 object-contain filter drop-shadow-2xl animate-bounce-subtle"
                @error="handleLogoError"
              />
              <!-- Enhanced Fallback -->
              <div v-if="!logoLoaded" class="text-center">
                <div class="inline-flex items-center space-x-6">
                  <span
                    class="text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent drop-shadow-xl"
                    >EDUP</span
                  >
                  <span
                    class="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-light text-black drop-shadow-lg"
                    >GlobalFlex</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Simple Tagline -->
        <div class="mb-16 animate-fade-in-up" style="animation-delay: 0.4s">
          <p
            class="text-xl md:text-2xl lg:text-3xl text-black font-medium drop-shadow-md"
          >
            Your Authorised Nipponflex Distributor in the UK
          </p>
          <p
            class="text-lg md:text-xl text-black/80 font-normal drop-shadow-md mt-4"
          >
            Eduardo Penafiel • EDUP GlobalFlex
          </p>
        </div>

        <!-- CTA Buttons -->
        <div
          class="animate-fade-in-up flex flex-col sm:flex-row gap-6 justify-center items-center"
          style="animation-delay: 0.6s"
        >
          <NuxtLink
            to="/products"
            class="btn-primary px-8 py-4 text-lg font-semibold"
          >
            Explore Products
          </NuxtLink>

          <NuxtLink
            to="/technology"
            class="btn-secondary px-8 py-4 text-lg font-semibold"
          >
            Nipponflex Technology
          </NuxtLink>

          <a
            href="/assets/pdf/catalog.pdf"
            download="EDUP-Global-Flex-Catalog.pdf"
            target="_blank"
            class="flex items-center space-x-2 text-white hover:text-ecuador-yellow transition-colors duration-300 group"
          >
            <svg
              class="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Download Catalog (PDF)</span>
          </a>
        </div>

        <!-- Scroll Indicator -->
        <div class="animate-fade-in-up mt-16" style="animation-delay: 1s">
          <button
            @click="scrollToNext"
            class="inline-flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 group"
          >
            <span class="text-sm mb-2">Discover More</span>
            <svg
              class="w-6 h-6 animate-bounce group-hover:text-ecuador-yellow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const logoLoaded = ref(true);
const parallaxY = ref(0);

const handleLogoError = () => {
  logoLoaded.value = false;
};

const scrollToNext = () => {
  const nextSection =
    document.querySelector('.wellness-section') ||
    document.querySelector('main > section:nth-child(2)');
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleParallax = () => {
  if (process.client) {
    parallaxY.value = window.scrollY * 0.3;
  }
};

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleParallax);
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleParallax);
  }
});
</script>

<style scoped>
/* Simple Ecuador Flag Gradient Background */
.gradient-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(135deg, #ffd500 0%, #0033a0 50%, #dc2626 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease-in-out infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes bounceSubtle {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-bounce-subtle {
  animation: bounceSubtle 4s ease-in-out infinite;
}

.parallax {
  will-change: transform;
}

/* Ensure animations work on initial load */
.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 1s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
