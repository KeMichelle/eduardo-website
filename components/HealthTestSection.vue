<template>
  <section
    class="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
  >
    <!-- Subtle Background Decorations -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-20 right-20 w-40 h-40 border-2 border-ecuador-blue rounded-full"
      ></div>
      <div
        class="absolute bottom-20 left-20 w-32 h-32 border-2 border-ecuador-yellow rounded-full"
      ></div>
    </div>

    <div class="container mx-auto px-4 lg:px-8 relative z-10">
      <div class="max-w-4xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-8">
          <div
            class="inline-flex items-center space-x-2 bg-white border-2 border-ecuador-yellow rounded-full px-5 py-2 mb-6 shadow-md"
          >
            <svg
              class="w-4 h-4 text-ecuador-blue"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fill-rule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="font-bold text-ecuador-blue text-sm"
              >Free Health Test Available</span
            >
          </div>

          <h2
            class="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4 leading-tight"
          >
            Are you in good health but suspect
            <span class="text-ecuador-blue">something is missing?</span>
          </h2>
        </div>

        <!-- Bilingual Content Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <!-- English Card -->
          <div
            class="bg-gradient-to-br from-ecuador-blue/5 via-white to-ecuador-blue/10 rounded-xl shadow-md p-6 border-2 border-ecuador-blue/20 hover:border-ecuador-blue/40 animate-fade-in-up transition-all duration-300"
          >
            <div class="flex items-start space-x-2 mb-3">
              <span
                class="text-xs font-bold text-white bg-ecuador-blue px-3 py-1 rounded-full shadow-sm"
                >EN</span
              >
            </div>
            <p class="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              A simple test will confirm your suspicions. Nipponflex's
              <span
                class="font-semibold text-ecuador-blue px-1 py-0.5 bg-ecuador-blue/10 rounded"
                >eEnergy® technology</span
              >
              is here to improve your well-being.
            </p>

            <div
              class="flex items-center space-x-2 text-white bg-gradient-to-r from-ecuador-blue to-ecuador-blue/80 rounded-lg px-3 py-2 shadow-sm"
            >
              <svg
                class="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span class="text-sm md:text-base font-semibold"
                >Contact for free test</span
              >
            </div>
          </div>

          <!-- Spanish Card -->
          <div
            class="bg-gradient-to-br from-ecuador-yellow/5 via-white to-ecuador-yellow/10 rounded-xl shadow-md p-6 border-2 border-ecuador-yellow/30 hover:border-ecuador-yellow/50 animate-fade-in-up transition-all duration-300"
            style="animation-delay: 0.1s"
          >
            <div class="flex items-start space-x-2 mb-3">
              <span
                class="text-xs font-bold text-gray-900 bg-ecuador-yellow px-3 py-1 rounded-full shadow-sm"
                >ES</span
              >
            </div>
            <p class="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              Una sencilla prueba confirmará sus sospechas. La tecnología
              <span
                class="font-semibold text-ecuador-blue px-1 py-0.5 bg-ecuador-blue/10 rounded"
                >eEnergy® de Nipponflex</span
              >
              está aquí para mejorar su bienestar.
            </p>

            <div
              class="flex items-center space-x-2 text-gray-900 bg-gradient-to-r from-ecuador-yellow to-ecuador-yellow/80 rounded-lg px-3 py-2 shadow-sm"
            >
              <svg
                class="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span class="text-sm md:text-base font-semibold"
                >Prueba gratuita</span
              >
            </div>
          </div>
        </div>

        <!-- CTA Button -->
        <div
          class="text-center animate-fade-in-up"
          style="animation-delay: 0.4s"
        >
          <NuxtLink
            to="/contact"
            class="group inline-flex items-center space-x-2 bg-gradient-to-r from-ecuador-blue to-ecuador-yellow text-white px-8 py-3 rounded-lg font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>Book Your Free Test</span>
            <svg
              class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </NuxtLink>

          <!-- Trust Indicators -->
          <div
            class="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-gray-600"
          >
            <div class="flex items-center space-x-1">
              <svg
                class="w-4 h-4 text-ecuador-yellow"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="font-medium">100% Free</span>
            </div>
            <div class="flex items-center space-x-1">
              <svg
                class="w-4 h-4 text-ecuador-blue"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="font-medium">No Commitment</span>
            </div>
            <div class="flex items-center space-x-1">
              <svg
                class="w-4 h-4 text-ecuador-red"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                />
              </svg>
              <span class="font-medium">Expert Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Component uses global animations from Nuxt config */
</style>
