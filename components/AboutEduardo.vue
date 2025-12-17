<template>
  <section class="py-16 lg:py-24 bg-white relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-20 right-20 w-40 h-40 border border-ecuador-blue rounded-full animate-spin-slow"
      ></div>
      <div
        class="absolute bottom-20 left-20 w-32 h-32 bg-ecuador-yellow/10 rounded-full"
      ></div>
    </div>

    <div class="container mx-auto px-4 lg:px-8 relative z-10">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6"
          >
            Meet Eduardo Penafiel
          </h2>
          <div
            class="w-24 h-1 bg-gradient-to-r from-ecuador-yellow via-ecuador-blue to-ecuador-red mx-auto mb-8"
          ></div>
          <p
            class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover the vision and passion behind EDUP GlobalFlex through the
            eyes of Eduardo Penafiel, founder and wellness innovator.
          </p>
        </div>

        <!-- Content Grid -->
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <!-- Eduardo's Portrait -->
          <div class="animate-slide-in-left">
            <div class="relative">
              <!-- Main Portrait Container -->
              <div
                class="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-ecuador-blue/10 to-ecuador-yellow/10 p-2"
              >
                <div class="aspect-[4/5] rounded-xl overflow-hidden bg-white">
                  <!-- Placeholder for Eduardo's portrait -->
                  <img
                    src="/assets/images/eduardo-portrait.jpg"
                    alt="Eduardo Penafiel - Founder of EDUP GlobalFlex"
                    class="w-full h-full object-cover object-top"
                    @error="handleImageError"
                  />

                  <!-- Fallback when image is not available -->
                  <div
                    v-if="!portraitLoaded"
                    class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-ecuador-blue/20 to-ecuador-yellow/20 text-center p-8"
                  >
                    <div
                      class="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-ecuador-blue to-ecuador-yellow p-0.5"
                    >
                      <div
                        class="w-full h-full rounded-full bg-white flex items-center justify-center"
                      >
                        <svg
                          class="w-12 h-12 text-ecuador-blue"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">
                      Eduardo
                    </h3>
                    <p class="text-gray-600">Founder & Visionary</p>
                    <p class="text-sm text-gray-500 mt-2">
                      Professional Portrait
                    </p>
                  </div>
                </div>
              </div>

              <!-- Decorative Elements -->
              <div
                class="absolute -top-6 -right-6 w-20 h-20 bg-ecuador-yellow rounded-full flex items-center justify-center shadow-lg animate-float z-10"
              >
                <svg
                  class="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div
                class="absolute -bottom-6 -left-6 w-16 h-16 bg-ecuador-red rounded-full flex items-center justify-center shadow-lg animate-bounce-subtle z-10"
              >
                <svg
                  class="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <!-- Eduardo's Story -->
          <div class="animate-slide-in-right space-y-8">
            <div>
              <h3
                class="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4"
              >
                Your Wellness Technology Partner
              </h3>
              <p class="text-gray-600 leading-relaxed">
                With extensive knowledge of Nipponflex wellness principles and
                technologies, Eduardo Penafiel is dedicated to helping people
                find the right wellness solutions for their needs. His
                commitment to quality customer service and product expertise
                makes him your trusted partner for premium Nipponflex wellness
                technology.
              </p>
              <p class="text-gray-600 leading-relaxed mt-4">
                Explore the complete
                <a
                  href="https://www.nipponflex.com/produtos"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-ecuador-blue hover:text-ecuador-yellow font-medium transition-colors duration-300 inline-flex items-center"
                >
                  Nipponflex product range
                  <svg
                    class="w-4 h-4 ml-1"
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
                to discover all available wellness solutions.
              </p>
            </div>

            <!-- Key Achievements -->
            <div>
              <h4 class="text-xl font-semibold text-gray-900 mb-4">
                Key Achievements
              </h4>
              <ul class="space-y-3">
                <li
                  v-for="(achievement, index) in achievements"
                  :key="index"
                  class="flex items-start space-x-3 animate-fade-in-up"
                  :style="{ animationDelay: `${index * 200}ms` }"
                >
                  <div
                    class="flex-shrink-0 w-6 h-6 rounded-full bg-ecuador-blue flex items-center justify-center mt-1"
                  >
                    <svg
                      class="w-4 h-4 text-white"
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
                  <span class="text-gray-700">{{ achievement }}</span>
                </li>
              </ul>
            </div>

            <!-- Eduardo's Quote -->
            <blockquote
              class="border-l-4 border-ecuador-yellow pl-6 py-4 bg-gray-50 rounded-r-lg"
            >
              <p class="text-lg text-gray-700 italic leading-relaxed mb-4">
                "Wellness is not a destination, but a journey. My mission is to
                help you find the right Nipponflex products and technologies
                that make this journey not just possible, but enjoyable and
                transformative."
              </p>
              <footer class="flex items-center space-x-3">
                <div
                  class="w-12 h-12 rounded-full bg-gradient-to-r from-ecuador-blue to-ecuador-yellow p-0.5"
                >
                  <div
                    class="w-full h-full rounded-full bg-white flex items-center justify-center"
                  >
                    <span class="text-sm font-bold text-ecuador-blue">E</span>
                  </div>
                </div>
                <div>
                  <div class="font-semibold text-gray-900">
                    Eduardo Penafiel
                  </div>
                  <div class="text-sm text-gray-600">
                    Authorised Nipponflex Distributor
                  </div>
                </div>
              </footer>
            </blockquote>

            <!-- Contact Button -->
            <div>
              <NuxtLink
                to="/contact"
                class="btn-primary flex items-center justify-center space-x-2 w-fit"
              >
                <span>Connect with Eduardo</span>
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Additional Info Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div
            v-for="(info, index) in additionalInfo"
            :key="index"
            class="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 animate-fade-in-up"
            :style="{ animationDelay: `${index * 200}ms` }"
          >
            <div
              class="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-ecuador-blue to-ecuador-yellow p-0.5"
            >
              <div
                class="w-full h-full rounded-full bg-white flex items-center justify-center"
              >
                <component :is="info.icon" class="w-8 h-8 text-ecuador-blue" />
              </div>
            </div>
            <h4 class="text-lg font-semibold text-gray-900 mb-2">
              {{ info.title }}
            </h4>
            <p class="text-gray-600 text-sm">{{ info.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const portraitLoaded = ref(true);

const handleImageError = () => {
  portraitLoaded.value = false;
};

const achievements = [
  'Authorised Nipponflex distributor based in London, UK',
  'Knowledgeable in Nipponflex FIR Bioceramic®, negative ion therapy, magnetic wellness applications and wellness technologies',
  'Experienced in helping customers find the right Nipponflex solutions',
  'Focused on bringing quality Nipponflex products to international markets',
  'Committed to providing excellent customer service and product support',
];

interface AdditionalInfo {
  title: string;
  description: string;
  icon: any;
}

// Icon components using functional approach
const ResearchIcon = () =>
  h(
    'svg',
    {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24',
    },
    [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      }),
    ]
  );

const GlobalIcon = () =>
  h(
    'svg',
    {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24',
    },
    [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
      }),
    ]
  );

const InnovationIcon = () =>
  h(
    'svg',
    {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24',
    },
    [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
      }),
    ]
  );

const additionalInfo: AdditionalInfo[] = [
  {
    title: 'Customer Service',
    description:
      'Dedicated to providing excellent support and guidance for Nipponflex products',
    icon: ResearchIcon,
  },
  {
    title: 'Product Expertise',
    description:
      'Extensive knowledge of Nipponflex technologies and their wellness benefits',
    icon: GlobalIcon,
  },
  {
    title: 'Quality Assurance',
    description:
      'Committed to delivering authentic Nipponflex products with guaranteed quality',
    icon: InnovationIcon,
  },
];
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 20s linear infinite;
}

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
