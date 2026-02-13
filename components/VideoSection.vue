<template>
  <section
    class="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-ecuador-yellow/5 relative overflow-hidden"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-20 left-20 w-40 h-40 bg-ecuador-blue rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 right-20 w-40 h-40 bg-ecuador-yellow rounded-full blur-3xl animate-pulse"
        style="animation-delay: 1s"
      ></div>
    </div>

    <div class="container mx-auto px-4 lg:px-8 relative z-10">
      <div class="max-w-5xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6"
          >
            {{ t('video.title') }}
          </h2>
          <div
            class="w-24 h-1 bg-gradient-to-r from-ecuador-yellow via-ecuador-blue to-ecuador-red mx-auto mb-8"
          ></div>
          <p
            class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {{ t('video.description') }}
          </p>
        </div>

        <!-- Video Container -->
        <div class="relative animate-fade-in-up">
          <div
            class="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-ecuador-blue/10 to-ecuador-yellow/10 p-2"
          >
            <div class="relative rounded-2xl overflow-hidden bg-black">
              <!-- YouTube Video Embed (client-only to avoid SSR hydration mismatches) -->
              <div class="relative pb-[56.25%] h-0">
                <ClientOnly>
                  <iframe
                    class="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/j11YLHORK48?si=6b_5QVGHd6WktJkj"
                    :title="t('video.iframeTitle')"
                    allow="
                      accelerometer;
                      autoplay;
                      clipboard-write;
                      encrypted-media;
                      gyroscope;
                      picture-in-picture;
                      web-share;
                    "
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </ClientOnly>
              </div>
            </div>
          </div>

          <!-- Decorative Elements -->
          <div
            class="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-ecuador-yellow to-ecuador-blue rounded-full flex items-center justify-center shadow-xl animate-float z-10"
          >
            <svg
              class="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
              />
            </svg>
          </div>

          <div
            class="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-r from-ecuador-red to-ecuador-yellow rounded-full flex items-center justify-center shadow-xl animate-bounce-subtle z-10"
          >
            <svg
              class="w-7 h-7 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        <!-- Call to Action Below Video -->
        <div
          class="text-center mt-12 animate-fade-in-up"
          style="animation-delay: 200ms"
        >
          <p class="text-lg text-gray-700 mb-6">
            {{ t('video.ctaPrompt') }}
          </p>
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <NuxtLink
              :to="localePath('/products')"
              class="btn-primary px-8 py-4 text-lg font-semibold"
            >
              {{ t('video.buttons.exploreProducts') }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/contact')"
              class="btn-secondary px-8 py-4 text-lg font-semibold"
            >
              {{ t('video.buttons.contactEduardo') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const localePath = useLocalePath();
</script>

<style scoped>
.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-bounce-subtle {
  animation: bounceSubtle 2s ease-in-out infinite;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes bounceSubtle {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
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
