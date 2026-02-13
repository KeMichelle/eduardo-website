<template>
  <section
    class="wellness-section py-16 lg:py-24 bg-white relative overflow-hidden"
  >
    <!-- Background Decorations -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-10 left-10 w-32 h-32 border-2 border-ecuador-blue rounded-full"
      ></div>
      <div
        class="absolute bottom-10 right-10 w-24 h-24 border-2 border-ecuador-yellow rounded-full"
      ></div>
      <div
        class="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-ecuador-red rounded-full"
      ></div>
    </div>

    <div class="container mx-auto px-4 lg:px-8 relative z-10">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6"
          >
            {{ t('wellness.title') }}
          </h2>
          <div
            class="w-24 h-1 bg-gradient-to-r from-ecuador-yellow via-ecuador-blue to-ecuador-red mx-auto mb-8"
          ></div>
          <p
            class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {{ t('wellness.intro') }}
          </p>
        </div>

        <!-- Content Grid -->
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16"
        >
          <!-- Text Content -->
          <div class="space-y-8">
            <div class="animate-slide-in-left">
              <h3
                class="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4"
              >
                {{ t('wellness.subheading') }}
              </h3>
              <p class="text-gray-600 leading-relaxed mb-6">
                {{ t('wellness.subcopy') }}
              </p>

              <!-- Key Points -->
              <ul class="space-y-4">
                <li
                  v-for="(point, index) in keyPoints"
                  :key="index"
                  class="flex items-start space-x-4 animate-fade-in-up"
                  :style="{ animationDelay: `${index * 200}ms` }"
                >
                  <div
                    class="flex-shrink-0 w-6 h-6 rounded-full bg-ecuador-blue/10 flex items-center justify-center mt-1"
                  >
                    <svg
                      class="w-4 h-4 text-ecuador-blue"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">
                      {{ t(point.titleKey) }}
                    </h4>
                    <p class="text-gray-600 text-sm">
                      {{ t(point.descriptionKey) }}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- Visual Content -->
          <div class="animate-slide-in-right">
            <div class="relative">
              <!-- Main Image Container -->
              <div
                class="relative rounded-2xl shadow-2xl bg-gradient-to-br from-ecuador-yellow/20 to-ecuador-blue/20 p-8"
              >
                <!-- Placeholder for wellness illustration -->
                <div
                  class="aspect-square rounded-xl bg-white/50 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8"
                >
                  <div
                    class="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-ecuador-blue to-ecuador-yellow p-0.5"
                  >
                    <div
                      class="w-full h-full rounded-full bg-white flex items-center justify-center"
                    >
                      <svg
                        class="w-12 h-12 text-ecuador-blue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h4 class="text-xl font-semibold text-gray-800 mb-2">
                    {{ t('wellness.cardTitle') }}
                  </h4>
                  <p class="text-sm text-gray-600">
                    {{ t('wellness.cardSubtitle') }}
                  </p>
                </div>
                <!-- Floating Elements -->
                <div
                  class="absolute -top-4 -right-4 w-16 h-16 bg-ecuador-yellow rounded-full flex items-center justify-center shadow-lg animate-float z-10"
                >
                  <svg
                    class="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>

                <div
                  class="absolute -bottom-4 -left-4 w-12 h-12 bg-ecuador-red rounded-full flex items-center justify-center shadow-lg animate-bounce-subtle z-10"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats Section -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="text-center animate-fade-in-up"
            :style="{ animationDelay: `${index * 150}ms` }"
          >
            <div class="text-3xl md:text-4xl font-bold text-ecuador-blue mb-2">
              {{ stat.number }}
            </div>
            <div class="text-sm md:text-base text-gray-600 font-medium">
              {{ t(stat.labelKey) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

interface KeyPoint {
  titleKey: string;
  descriptionKey: string;
}

interface Stat {
  number: string;
  labelKey: string;
}

const keyPoints: KeyPoint[] = [
  {
    titleKey: 'wellness.keyPoints.point1.title',
    descriptionKey: 'wellness.keyPoints.point1.description',
  },
  {
    titleKey: 'wellness.keyPoints.point2.title',
    descriptionKey: 'wellness.keyPoints.point2.description',
  },
  {
    titleKey: 'wellness.keyPoints.point3.title',
    descriptionKey: 'wellness.keyPoints.point3.description',
  },
  {
    titleKey: 'wellness.keyPoints.point4.title',
    descriptionKey: 'wellness.keyPoints.point4.description',
  },
];

const stats: Stat[] = [
  { number: '30+', labelKey: 'wellness.stats.products' },
  { number: '100%', labelKey: 'wellness.stats.guarantee' },
  { number: 'UK', labelKey: 'wellness.stats.location' },
  { number: '1', labelKey: 'wellness.stats.distributor' },
];
</script>

<style scoped>
.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-bounce-subtle {
  animation: bounceSubtle 2s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes bounceSubtle {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}
</style>
