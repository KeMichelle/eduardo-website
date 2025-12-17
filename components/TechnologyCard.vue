<template>
  <div class="card overflow-hidden">
    <div class="p-6">
      <!-- Header -->
      <button
        @click="toggle"
        class="w-full flex items-center justify-between text-left group focus:outline-none focus:ring-2 focus:ring-ecuador-blue/50 rounded-lg"
        :aria-expanded="isOpen"
      >
        <div class="flex items-center space-x-4">
          <!-- Technology Icon -->
          <div
            class="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-ecuador-blue to-ecuador-yellow p-0.5"
          >
            <div
              class="w-full h-full rounded-full bg-white flex items-center justify-center"
            >
              <component
                v-if="technology.icon"
                :is="technology.icon"
                class="w-6 h-6 text-ecuador-blue"
              />
              <svg
                v-else
                class="w-6 h-6 text-ecuador-blue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>

          <!-- Technology Title -->
          <div class="flex-1 min-w-0">
            <h3
              class="text-lg md:text-xl font-display font-bold text-gray-900 group-hover:text-ecuador-blue transition-colors duration-300"
            >
              {{ technology.title }}
            </h3>
            <p v-if="technology.subtitle" class="text-sm text-gray-500 mt-1">
              {{ technology.subtitle }}
            </p>
          </div>
        </div>

        <!-- Toggle Icon -->
        <div class="flex-shrink-0 ml-4">
          <svg
            class="w-5 h-5 text-gray-400 transform transition-transform duration-300"
            :class="{ 'rotate-180': isOpen }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      <!-- Expandable Content -->
      <Transition name="expand">
        <div v-if="isOpen" class="mt-6 border-t border-gray-100 pt-6">
          <!-- Technology Description -->
          <div class="prose prose-sm max-w-none mb-6">
            <p class="text-gray-600 leading-relaxed">
              {{ technology.description }}
            </p>
          </div>

          <!-- Key Features -->
          <div
            v-if="technology.features && technology.features.length > 0"
            class="mb-6"
          >
            <h4 class="font-semibold text-gray-900 mb-3">Key Features:</h4>
            <ul class="space-y-2">
              <li
                v-for="(feature, index) in technology.features"
                :key="index"
                class="flex items-start space-x-3 animate-fade-in-up"
                :style="{ animationDelay: `${index * 100}ms` }"
              >
                <svg
                  class="w-4 h-4 text-ecuador-blue mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-600">{{ feature }}</span>
              </li>
            </ul>
          </div>

          <!-- Benefits -->
          <div
            v-if="technology.benefits && technology.benefits.length > 0"
            class="mb-6"
          >
            <h4 class="font-semibold text-gray-900 mb-3">Benefits:</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                v-for="(benefit, index) in technology.benefits"
                :key="index"
                class="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 animate-slide-in-left"
                :style="{ animationDelay: `${index * 150}ms` }"
              >
                <div
                  class="w-2 h-2 bg-ecuador-yellow rounded-full flex-shrink-0"
                ></div>
                <span class="text-sm text-gray-700 font-medium">{{
                  benefit
                }}</span>
              </div>
            </div>
          </div>

          <!-- Applications -->
          <div
            v-if="technology.applications && technology.applications.length > 0"
            class="mb-6"
          >
            <h4 class="font-semibold text-gray-900 mb-3">Applications:</h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(application, index) in technology.applications"
                :key="index"
                class="px-3 py-1 text-xs font-medium bg-ecuador-blue/10 text-ecuador-blue rounded-full animate-fade-in-up"
                :style="{ animationDelay: `${index * 100}ms` }"
              >
                {{ application }}
              </span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div
            class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100"
          >
            <NuxtLink
              v-if="technology.learnMoreUrl"
              :to="technology.learnMoreUrl"
              class="flex-1 btn-primary text-center"
            >
              Learn More
            </NuxtLink>

            <NuxtLink to="/products" class="flex-1 btn-secondary text-center">
              View Products
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Technology {
  title: string;
  subtitle?: string;
  description: string;
  icon?: string;
  features?: string[];
  benefits?: string[];
  applications?: string[];
  learnMoreUrl?: string;
}

interface Props {
  technology: Technology;
  initialOpen?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  initialOpen: false,
});

const isOpen = ref(props.initialOpen);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

// Icon components for different technologies
const components = {
  RabatanIcon: {
    template: `
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    `,
  },
  FIRIcon: {
    template: `
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    `,
  },
  IonBallsIcon: {
    template: `
      <svg viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
        <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="2"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    `,
  },
  MagneticIcon: {
    template: `
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 12h2v6h14v-6h2v6c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6zm5-8h8v6c0 2.21-1.79 4-4 4s-4-1.79-4-4V4z"/>
      </svg>
    `,
  },
  DensityIcon: {
    template: `
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
      </svg>
    `,
  },
};
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 1000px;
  transform: translateY(0);
}
</style>
