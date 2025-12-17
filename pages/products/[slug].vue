<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-ecuador-yellow/5"
    v-if="product"
  >
    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-br from-ecuador-yellow via-ecuador-blue to-ecuador-red py-24 overflow-hidden"
    >
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"
        ></div>
        <div
          class="absolute top-40 right-20 w-24 h-24 bg-white/50 rounded-full animate-bounce"
        ></div>
        <div
          class="absolute bottom-20 left-1/3 w-40 h-40 bg-white/20 rounded-full"
        ></div>
      </div>
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            {{ product.name }}
          </h1>
          <p class="text-xl md:text-2xl font-medium opacity-90 mb-4">
            {{ product.shortDescription }}
          </p>
          <div
            class="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold"
          >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Authentic Nipponflex Product
          </div>
        </div>
      </div>
    </section>

    <!-- Product Details -->
    <section class="py-20 -mt-10 relative z-10">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <!-- Main Product Card -->
          <div
            class="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 mb-16"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <!-- Product Image -->
              <div class="space-y-6">
                <div
                  class="aspect-square bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl overflow-hidden ring-1 ring-gray-200/50 group"
                >
                  <img
                    :src="product.images[0]"
                    :alt="product.name"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    @error="handleImageError"
                  />
                  <div class="absolute inset-0"></div>
                </div>

                <!-- Additional Images -->
                <div
                  v-if="product.images.length > 1"
                  class="grid grid-cols-4 gap-4"
                >
                  <div
                    v-for="(image, index) in product.images.slice(1, 5)"
                    :key="index"
                    class="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ring-1 ring-gray-200/50"
                  >
                    <img
                      :src="image"
                      :alt="`${product.name} view ${index + 2}`"
                      class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              <!-- Product Information -->
              <div class="space-y-10">
                <!-- Category Badge -->
                <div class="flex items-center space-x-4">
                  <div
                    class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-ecuador-yellow to-yellow-400 text-ecuador-blue font-bold rounded-full text-sm shadow-lg hover:shadow-xl transition-shadow duration-300 animate-pulse"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    {{ product.category }}
                  </div>
                  <div class="flex items-center space-x-1">
                    <svg
                      v-for="i in 5"
                      :key="i"
                      class="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <span class="text-sm font-semibold text-gray-600 ml-2"
                      >(Premium Quality)</span
                    >
                  </div>
                </div>

                <!-- Description -->
                <div
                  class="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-200/50"
                >
                  <h2
                    class="text-3xl font-bold bg-gradient-to-r from-ecuador-blue to-blue-600 bg-clip-text text-transparent mb-6 flex items-center"
                  >
                    <svg
                      class="w-8 h-8 text-ecuador-blue mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    About This Product
                  </h2>
                  <p class="text-gray-700 leading-relaxed text-lg font-medium">
                    {{ product.fullDescription }}
                  </p>
                </div>

                <!-- Tags -->
                <div v-if="product.tags.length > 0">
                  <h3
                    class="text-xl font-bold text-gray-900 mb-4 flex items-center"
                  >
                    <svg
                      class="w-6 h-6 text-ecuador-yellow mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Product Tags
                  </h3>
                  <div class="flex flex-wrap gap-3">
                    <span
                      v-for="tag in product.tags"
                      :key="tag"
                      class="px-4 py-2 bg-gradient-to-r from-ecuador-blue/10 to-blue-100 text-ecuador-blue rounded-full text-sm font-semibold border border-ecuador-blue/20 hover:shadow-md transition-all duration-300 hover:scale-105"
                    >
                      #{{ tag }}
                    </span>
                  </div>
                </div>

                <!-- CTA Buttons -->
                <div class="flex flex-col sm:flex-row gap-6">
                  <a
                    href="/assets/pdf/catalog.pdf"
                    download="EDUP-Global-Flex-Catalog.pdf"
                    target="_blank"
                    class="group relative bg-gradient-to-r from-ecuador-red to-red-600 text-white rounded-2xl hover:from-red-600 hover:to-red-700 transition-all duration-300 px-10 py-5 text-lg font-bold text-center shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                  >
                    <span
                      class="relative z-10 flex items-center justify-center"
                    >
                      <svg
                        class="w-6 h-6 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        ></path>
                      </svg>
                      Download Catalog
                    </span>
                    <div
                      class="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    ></div>
                  </a>
                  <NuxtLink
                    to="/contact"
                    class="group relative bg-white border-3 border-ecuador-blue text-ecuador-blue rounded-2xl hover:bg-ecuador-blue hover:text-white transition-all duration-300 px-10 py-5 text-lg font-bold text-center shadow-xl hover:shadow-2xl hover:-translate-y-1"
                  >
                    <span class="flex items-center justify-center">
                      <svg
                        class="w-6 h-6 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        ></path>
                      </svg>
                      Contact Eduardo Penafiel
                    </span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Features & Benefits -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <!-- Features -->
            <div
              class="group bg-gradient-to-br from-white via-blue-50/50 to-blue-50/20 rounded-3xl shadow-2xl p-10 border border-blue-100/60 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-200/80"
            >
              <h2
                class="text-3xl font-bold text-gray-900 mb-8 flex items-center"
              >
                <div
                  class="p-3 bg-gradient-to-br from-ecuador-blue to-blue-600 rounded-2xl mr-4 shadow-lg"
                >
                  <svg
                    class="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <span
                  class="bg-gradient-to-r from-ecuador-blue to-blue-600 bg-clip-text text-transparent"
                  >Key Features</span
                >
              </h2>
              <ul class="space-y-4">
                <li
                  v-for="feature in product.features"
                  :key="feature"
                  class="flex items-start"
                >
                  <svg
                    class="w-5 h-5 text-ecuador-yellow mt-1 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-gray-700">{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- Benefits -->
            <div
              class="group bg-gradient-to-br from-white via-red-50/50 to-red-50/20 rounded-3xl shadow-2xl p-10 border border-red-100/60 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:border-red-200/80"
            >
              <h2
                class="text-3xl font-bold text-gray-900 mb-8 flex items-center"
              >
                <div
                  class="p-3 bg-gradient-to-br from-ecuador-red to-red-600 rounded-2xl mr-4 shadow-lg"
                >
                  <svg
                    class="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <span
                  class="bg-gradient-to-r from-ecuador-red to-red-600 bg-clip-text text-transparent"
                  >Benefits</span
                >
              </h2>
              <ul class="space-y-4">
                <li
                  v-for="benefit in product.benefits"
                  :key="benefit"
                  class="flex items-start"
                >
                  <svg
                    class="w-5 h-5 text-ecuador-red mt-1 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-gray-700">{{ benefit }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Specifications -->
          <div
            v-if="
              product.specifications &&
              Object.keys(product.specifications).length > 0
            "
            class="bg-gradient-to-br from-white to-gray-50/50 rounded-3xl shadow-2xl p-10 mb-20 border border-gray-200/50 backdrop-blur-sm"
          >
            <h2 class="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <div
                class="p-3 bg-gradient-to-br from-ecuador-blue to-blue-600 rounded-2xl mr-4 shadow-lg"
              >
                <svg
                  class="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  ></path>
                </svg>
              </div>
              <span
                class="bg-gradient-to-r from-ecuador-blue to-blue-600 bg-clip-text text-transparent"
                >Technical Specifications</span
              >
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                v-for="(value, key) in product.specifications"
                :key="key"
                class="flex justify-between items-center py-4 px-6 bg-white/70 rounded-xl border border-gray-200/50 hover:shadow-lg transition-all duration-300 hover:bg-white/90"
              >
                <span class="font-bold text-gray-900 flex items-center">
                  <div class="w-2 h-2 bg-ecuador-blue rounded-full mr-3"></div>
                  {{ key }}:
                </span>
                <span
                  class="text-gray-700 font-semibold bg-ecuador-blue/10 px-3 py-1 rounded-lg"
                  >{{ value }}</span
                >
              </div>
            </div>
          </div>

          <!-- Warnings -->
          <div
            v-if="product.warnings && product.warnings.length > 0"
            class="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-3xl p-10 mb-20 shadow-xl"
          >
            <h2 class="text-2xl font-bold text-red-800 mb-6 flex items-center">
              <div
                class="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mr-4 shadow-lg animate-pulse"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  ></path>
                </svg>
              </div>
              Important Safety Information
            </h2>
            <ul class="space-y-2 text-red-700">
              <li
                v-for="warning in product.warnings"
                :key="warning"
                class="flex items-start"
              >
                <svg
                  class="w-4 h-4 text-red-500 mt-1 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>{{ warning }}</span>
              </li>
            </ul>
          </div>

          <!-- Related Products -->
          <div
            class="bg-gradient-to-br from-white to-ecuador-yellow/5 rounded-3xl shadow-2xl p-10 backdrop-blur-sm border border-yellow-200/30"
          >
            <h2 class="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <div
                class="p-3 bg-gradient-to-br from-ecuador-yellow to-yellow-500 rounded-2xl mr-4 shadow-lg"
              >
                <svg
                  class="w-8 h-8 text-ecuador-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
              </div>
              <span
                class="bg-gradient-to-r from-ecuador-blue to-blue-600 bg-clip-text text-transparent"
                >You Might Also Like</span
              >
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <NuxtLink
                v-for="relatedProduct in relatedProducts"
                :key="relatedProduct.id"
                :to="`/products/${relatedProduct.slug}`"
                class="group block bg-white/95 backdrop-blur-md rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-200/60 hover:border-gray-300/80"
              >
                <div
                  class="aspect-square bg-gradient-to-br from-gray-50 to-white rounded-2xl mb-6 overflow-hidden shadow-lg ring-1 ring-gray-200/50"
                >
                  <img
                    :src="relatedProduct.images[0]"
                    :alt="relatedProduct.name"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3
                  class="font-bold text-lg text-gray-900 group-hover:text-ecuador-blue transition-colors duration-300 mb-2"
                >
                  {{ relatedProduct.name }}
                </h3>
                <p
                  class="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-block"
                >
                  {{ relatedProduct.category }}
                </p>
                <div
                  class="mt-4 flex items-center text-ecuador-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span class="text-sm font-semibold">View Details</span>
                  <svg
                    class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="relative bg-gradient-to-br from-ecuador-blue via-blue-600 to-ecuador-red py-24 overflow-hidden"
    >
      <!-- Background Effects -->
      <div class="absolute inset-0 opacity-20">
        <div
          class="absolute top-20 left-20 w-40 h-40 bg-white rounded-full animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 right-20 w-32 h-32 bg-ecuador-yellow rounded-full animate-bounce"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/10 rounded-full"
        ></div>
      </div>

      <div class="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <div class="max-w-4xl mx-auto">
          <h2
            class="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg"
          >
            Ready to Experience
            <span class="text-ecuador-yellow">{{ product.name }}</span
            >?
          </h2>
          <p
            class="text-xl md:text-2xl text-white/95 mb-12 font-medium leading-relaxed"
          >
            Contact Eduardo Penafiel, your authorized Nipponflex distributor in
            the UK, to learn more about this authentic Nipponflex product and
            how it can transform your wellness journey into something
            extraordinary.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <NuxtLink
              to="/contact"
              class="group bg-ecuador-yellow text-ecuador-blue px-12 py-6 rounded-2xl font-bold text-lg hover:bg-yellow-400 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-2"
            >
              <span class="flex items-center justify-center">
                <svg
                  class="w-6 h-6 mr-3 group-hover:animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                Contact Eduardo Penafiel Now
              </span>
            </NuxtLink>
            <a
              href="/assets/pdf/catalog.pdf"
              download="EDUP-Global-Flex-Catalog.pdf"
              target="_blank"
              class="group bg-white/20 backdrop-blur-sm border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-white hover:text-ecuador-blue transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-2"
            >
              <span class="flex items-center justify-center">
                <svg
                  class="w-6 h-6 mr-3 group-hover:animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                Download Full Catalog
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Fallback for when product is not found -->
  <div v-else class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
      <p class="text-gray-600 mb-8">
        The product "{{ $route.params.slug }}" could not be found.
      </p>
      <NuxtLink
        to="/products"
        class="bg-ecuador-blue text-white px-6 py-3 rounded-lg"
      >
        View All Products
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { getProductBySlug, getProductsByCategory } from '~/data/products';

const route = useRoute();

// Make product lookup reactive to route changes
const product = computed(() => {
  const slug = route.params.slug;
  const foundProduct = getProductBySlug(slug);

  if (!foundProduct) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found',
    });
  }

  return foundProduct;
});

// Get related products (same category, excluding current product)
const relatedProducts = computed(() => {
  if (!product.value) return [];
  const currentProduct = product.value;
  return getProductsByCategory(currentProduct.category)
    .filter((p) => p.id !== currentProduct.id)
    .slice(0, 3);
});

// Handle image errors
const handleImageError = (event) => {
  const img = event.target;
  img.src = '/assets/images/logo/edulogohorizontal.png';
}; // Set page meta
watchEffect(() => {
  if (product.value) {
    useHead({
      title: `${product.value.name} - EDUP GlobalFlex`,
      meta: [
        { name: 'description', content: product.value.shortDescription },
        { name: 'keywords', content: product.value.tags.join(', ') },
        {
          property: 'og:title',
          content: `${product.value.name} - EDUP GlobalFlex`,
        },
        { property: 'og:description', content: product.value.shortDescription },
        { property: 'og:image', content: product.value.images[0] },
        { property: 'og:type', content: 'product' },
      ],
    });
  }
});
</script>
