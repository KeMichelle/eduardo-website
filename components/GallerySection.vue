<template>
  <section
    class="py-20 pb-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    id="gallery"
  >
    <!-- Artistic Background -->
    <div class="absolute inset-0">
      <div
        class="absolute top-20 left-10 w-64 h-64 bg-ecuador-yellow/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-32 right-20 w-48 h-48 bg-ecuador-blue/10 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 1s"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-ecuador-red/5 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 2s"
      ></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <h2
          class="text-4xl md:text-6xl font-display font-bold bg-gradient-to-r from-ecuador-yellow via-white to-ecuador-blue bg-clip-text text-transparent mb-6"
        >
          Product Gallery
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Discover our innovative wellness technologies crafted with passion in
          Brazil
        </p>
      </div>

      <!-- Horizontal Scrollable Gallery -->
      <div class="relative mb-24 px-4">
        <div
          ref="galleryContainer"
          class="horizontal-scroll-container overflow-x-hidden overflow-y-visible cursor-grab active:cursor-grabbing"
          @wheel.prevent="handleWheel"
          @mousedown="startDrag"
          @mousemove="drag"
          @mouseup="endDrag"
          @mouseleave="endDrag"
        >
          <div
            ref="galleryTrack"
            class="flex gap-8 py-8 transition-transform duration-300 ease-out"
            :style="{ transform: `translateX(${scrollPosition}px)` }"
          >
            <div
              v-for="(product, index) in products"
              :key="product.id"
              class="flex-shrink-0 w-80 group relative cursor-pointer mb-8"
              @click="openModal(product)"
              :data-product-id="product.id"
            >
              <!-- Artistic Card -->
              <div
                class="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-ecuador-yellow/20 transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1"
              >
                <!-- Product Badge -->
                <div
                  v-if="product.badge"
                  class="absolute top-4 left-4 z-20 px-4 py-2 bg-gradient-to-r from-ecuador-red to-ecuador-yellow text-white text-xs font-bold rounded-full shadow-lg"
                >
                  {{ product.badge }}
                </div>

                <!-- Product Image with Parallax -->
                <div class="relative h-56 overflow-hidden">
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"
                  ></div>
                  <img
                    :src="product.image || '/assets/images/logo/edulogo.png'"
                    :alt="product.name"
                    class="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125"
                    @error="handleImageError"
                  />
                </div>

                <!-- Product Content -->
                <div class="p-6 relative z-20">
                  <div class="mb-3">
                    <span
                      class="text-xs font-medium text-ecuador-yellow bg-ecuador-yellow/20 px-3 py-1 rounded-full border border-ecuador-yellow/30"
                    >
                      {{ product.category }}
                    </span>
                  </div>

                  <h3
                    class="text-xl font-bold text-white mb-3 group-hover:text-ecuador-yellow transition-colors duration-300"
                  >
                    {{ product.name }}
                  </h3>

                  <p class="text-gray-300 text-sm mb-4 line-clamp-2">
                    {{ product.description }}
                  </p>

                  <div class="flex items-center justify-between">
                    <div class="flex text-ecuador-yellow">
                      <svg
                        v-for="star in 5"
                        :key="star"
                        class="w-4 h-4"
                        :class="
                          star <= product.rating
                            ? 'fill-current'
                            : 'fill-gray-500'
                        "
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    </div>

                    <NuxtLink
                      :to="`/products/${product.slug || product.id}`"
                      class="text-ecuador-blue hover:text-ecuador-yellow font-medium text-sm bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-ecuador-yellow/20"
                      @click.stop
                    >
                      Explore →
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll Indicators -->
        <div class="flex justify-center mt-8 space-x-2">
          <button
            v-for="(dot, index) in totalSections"
            :key="index"
            @click="scrollToSection(index)"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="
              currentSection === index
                ? 'bg-ecuador-yellow scale-125'
                : 'bg-white/30 hover:bg-white/50'
            "
          ></button>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center animate-fade-in-up">
        <h3 class="text-2xl md:text-3xl font-bold text-white mb-6">
          Ready to Transform Your Wellness Journey?
        </h3>
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <NuxtLink
            to="/products"
            class="btn-primary px-8 py-4 text-lg font-semibold"
          >
            View All Products
          </NuxtLink>
          <a
            href="/assets/pdf/catalog.pdf"
            download="EDUP-Global-Flex-Catalog.pdf"
            target="_blank"
            class="flex items-center space-x-2 text-white hover:text-ecuador-yellow transition-colors duration-300 group bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20"
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
            <span>Download Catalog</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Product Modal -->
    <div
      v-if="selectedProduct"
      class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      @click="closeModal"
    >
      <div
        class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="relative">
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute top-4 right-4 z-30 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Product Image -->
          <div class="h-64 bg-gray-200 overflow-hidden rounded-t-2xl">
            <img
              :src="selectedProduct.image || '/assets/images/logo/edulogo.png'"
              :alt="selectedProduct.name"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Product Details -->
          <div class="p-8">
            <div class="mb-4">
              <span
                class="text-sm font-medium text-ecuador-blue bg-ecuador-blue/10 px-3 py-1 rounded-full"
              >
                {{ selectedProduct.category }}
              </span>
            </div>

            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              {{ selectedProduct.name }}
            </h2>

            <div class="flex items-center justify-end mb-6">
              <div class="flex text-ecuador-yellow">
                <svg
                  v-for="star in 5"
                  :key="star"
                  class="w-5 h-5"
                  :class="
                    star <= selectedProduct.rating
                      ? 'fill-current'
                      : 'fill-gray-300'
                  "
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
            </div>

            <p class="text-gray-600 mb-6 leading-relaxed">
              {{
                selectedProduct.fullDescription || selectedProduct.description
              }}
            </p>

            <div class="flex gap-4">
              <NuxtLink
                :to="`/products/${selectedProduct.slug || selectedProduct.id}`"
                class="btn-primary flex-1 text-center"
              >
                Learn More
              </NuxtLink>
              <NuxtLink to="/contact" class="btn-secondary flex-1 text-center">
                Contact Me
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue';

// Component state
const selectedProduct = ref<GalleryProduct | null>(null);
const scrollPosition = ref(0);
const isDragging = ref(false);
const dragStartX = ref(0);
const dragStartScroll = ref(0);
const galleryContainer = ref<HTMLElement>();
const galleryTrack = ref<HTMLElement>();
const currentSection = ref(0);

// Gallery product interface (renamed to avoid conflicts)
interface GalleryProduct {
  id: number;
  name: string;
  description: string;
  fullDescription?: string;
  image?: string;
  category: string;
  badge?: string;
  rating: number;
  slug?: string;
  gradient?: string;
}

// Updated products with NipponFlex items (selection of 10 products)
const products: GalleryProduct[] = [
  {
    id: 1,
    name: 'S.W.S. Alcaline Max',
    description:
      'Advanced alkaline water system with superior filtration technology.',
    fullDescription:
      'Revolutionary water system featuring advanced alkaline technology designed to enhance hydration and wellness through superior filtration and mineral balance.',
    image: '/assets/images/products/alcineMaxsws.png',
    category: 'Water Systems',
    badge: 'Bestseller',
    rating: 5,
    slug: 'sws-alcaline-max',
    gradient: 'from-ecuador-blue/20 to-ecuador-yellow/20',
  },
  {
    id: 2,
    name: 'Water Bottle with Ion Balls',
    description:
      'Portable hydration solution with integrated ion therapy technology.',
    fullDescription:
      'Innovative water bottle featuring ion therapy balls that enhance water quality and provide continuous wellness benefits throughout your day.',
    image: '/assets/images/products/waterBottleIonBalls.png',
    category: 'Accessories',
    badge: 'New',
    rating: 4,
    slug: 'water-bottle-ion-balls',
    gradient: 'from-ecuador-yellow/20 to-ecuador-red/20',
  },
  {
    id: 3,
    name: 'Nipponflex Triple S Firm',
    description:
      'Firm support mattress with FIR technology for optimum spinal alignment.',
    fullDescription:
      'Professional-grade firm mattress incorporating Triple S technology and FIR materials for superior support and therapeutic benefits.',
    image: '/assets/images/products/NipponflexTripleSFirm.png',
    category: 'Sleep Solutions',
    badge: 'Premium',
    rating: 5,
    slug: 'nipponflex-triple-s-firm',
    gradient: 'from-ecuador-red/20 to-ecuador-blue/20',
  },
  {
    id: 4,
    name: 'Sleep Cool Pillow',
    description:
      'Temperature-regulating pillow with advanced cooling technology.',
    fullDescription:
      'Revolutionary pillow designed with advanced cooling technology and FIR materials to maintain optimum sleep temperature throughout the night.',
    image: '/assets/images/products/SleepCoolPillow.png',
    category: 'Sleep Solutions',
    rating: 4,
    slug: 'sleep-cool-pillow',
    gradient: 'from-ecuador-blue/20 to-ecuador-yellow/20',
  },
  {
    id: 5,
    name: 'FIR ION Kids Bracelet',
    description:
      'Safe and effective wellness bracelet designed specifically for children.',
    fullDescription:
      'Child-safe wellness bracelet featuring FIR technology and negative ion generation, specially designed for young users with adjustable sizing.',
    image: '/assets/images/products/KidsBracelet.png',
    category: 'Kids Wellness',
    badge: 'Featured',
    rating: 5,
    slug: 'fir-ion-kids-bracelet',
    gradient: 'from-ecuador-yellow/20 to-ecuador-red/20',
  },
  {
    id: 6,
    name: 'BAND FIR ION',
    description:
      'Versatile wellness band with FIR and ion therapy integration.',
    fullDescription:
      'Multi-purpose wellness band combining FIR technology with negative ion therapy for targeted wellness support and daily comfort.',
    image: '/assets/images/products/bandFirIon.png',
    category: 'Therapy Tools',
    rating: 4,
    slug: 'band-fir-ion',
    gradient: 'from-ecuador-red/20 to-ecuador-blue/20',
  },
  {
    id: 7,
    name: "Women's Training FIR Bra Top",
    description:
      'Athletic support with integrated FIR technology for active wellness.',
    fullDescription:
      'High-performance athletic bra incorporating FIR technology to provide support during workouts while delivering continuous wellness benefits.',
    image: '/assets/images/products/BraTopFIR.png',
    category: 'Activewear',
    badge: 'Sport',
    rating: 4,
    slug: 'womens-training-fir-bra',
    gradient: 'from-ecuador-blue/20 to-ecuador-yellow/20',
  },
  {
    id: 8,
    name: 'Knee Brace Adjustable',
    description:
      'One-size adjustable knee support with therapeutic technology.',
    fullDescription:
      'Professional adjustable knee brace featuring therapeutic materials and FIR technology for enhanced support and recovery.',
    image: '/assets/images/products/kneeBrace.png',
    category: 'Support Wear',
    rating: 5,
    slug: 'knee-brace-adjustable',
    gradient: 'from-ecuador-yellow/20 to-ecuador-red/20',
  },
  {
    id: 9,
    name: 'Black Magnetic Insole',
    description:
      'Therapeutic insoles with magnetic field technology for foot wellness.',
    fullDescription:
      'Advanced magnetic insoles designed to provide therapeutic benefits through targeted magnetic field therapy and improved circulation.',
    image: '/assets/images/products/blackSoles.png',
    category: 'Foot Care',
    rating: 4,
    slug: 'black-magnetic-insole',
    gradient: 'from-ecuador-red/20 to-ecuador-blue/20',
  },
  {
    id: 10,
    name: 'Wellness Kit Premium',
    description:
      'Complete wellness solution with multiple therapeutic technologies.',
    fullDescription:
      'Comprehensive wellness kit combining our most effective technologies in one complete package for total body wellness support.',
    image: '/assets/images/products/wellnessKitPremium.png',
    category: 'Complete Systems',
    badge: 'Bundle',
    rating: 5,
    slug: 'wellness-kit-premium',
    gradient: 'from-ecuador-blue/20 to-ecuador-yellow/20',
  },
];

// Parallax wheel handling
const handleWheel = (event: WheelEvent) => {
  const cardWidth = 320; // 320px per card
  const gap = 32; // 32px gap (gap-8)
  const cardWithGap = cardWidth + gap;
  const maxScroll = -(
    products.length * cardWithGap -
    gap -
    (galleryContainer.value?.clientWidth || 0)
  );
  const scrollSpeed = 2;

  scrollPosition.value += event.deltaY * scrollSpeed;
  scrollPosition.value = Math.max(maxScroll, Math.min(0, scrollPosition.value));

  // Update current section based on cards visible
  updateCurrentSection();
};

// Drag functionality
const startDrag = (event: MouseEvent) => {
  isDragging.value = true;
  dragStartX.value = event.clientX;
  dragStartScroll.value = scrollPosition.value;
};

const drag = (event: MouseEvent) => {
  if (!isDragging.value) return;

  const dragDistance = event.clientX - dragStartX.value;
  const cardWidth = 320;
  const gap = 32;
  const cardWithGap = cardWidth + gap;
  const maxScroll = -(
    products.length * cardWithGap -
    gap -
    (galleryContainer.value?.clientWidth || 0)
  );

  scrollPosition.value = dragStartScroll.value + dragDistance;
  scrollPosition.value = Math.max(maxScroll, Math.min(0, scrollPosition.value));

  updateCurrentSection();
};

const endDrag = () => {
  isDragging.value = false;
};

// Calculate sections and navigation
const cardsPerSection = computed(() => {
  const containerWidth = galleryContainer.value?.clientWidth || 1200;
  const cardWidth = 320;
  const gap = 32;
  const cardsVisible = Math.floor((containerWidth + gap) / (cardWidth + gap));
  return Math.max(1, cardsVisible); // Ensure at least 1 card per section
});

const totalSections = computed(() => {
  return Math.ceil(products.length / cardsPerSection.value);
});

const updateCurrentSection = () => {
  const cardWidth = 320;
  const gap = 32;
  const cardWithGap = cardWidth + gap;
  const scrolled = Math.abs(scrollPosition.value);
  const cardsScrolled = Math.floor(scrolled / cardWithGap);
  const calculatedSection = Math.floor(cardsScrolled / cardsPerSection.value);

  // Ensure section is within bounds
  currentSection.value = Math.max(
    0,
    Math.min(calculatedSection, totalSections.value - 1)
  );
};

// Scroll to specific section
const scrollToSection = (section: number) => {
  const cardWidth = 320;
  const gap = 32;
  const cardWithGap = cardWidth + gap;
  const cardsToScroll = section * cardsPerSection.value;
  const maxScroll = -(
    products.length * cardWithGap -
    gap -
    (galleryContainer.value?.clientWidth || 0)
  );

  // Calculate target scroll position
  const targetScroll = -cardsToScroll * cardWithGap;

  // Ensure we don't scroll beyond the content
  scrollPosition.value = Math.max(maxScroll, Math.min(0, targetScroll));
  currentSection.value = Math.max(
    0,
    Math.min(section, totalSections.value - 1)
  );
};

// Modal functions
const openModal = (product: GalleryProduct) => {
  selectedProduct.value = product;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  selectedProduct.value = null;
  document.body.style.overflow = '';
};

// Image error handling
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.src = '/assets/images/logo/edulogo.png';
};

// Cleanup on unmount
onUnmounted(() => {
  document.body.style.overflow = '';
});
</script>

<style scoped>
.horizontal-scroll-container {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
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

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Smooth scrolling animations */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
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
