<template>
  <div class="min-h-screen">
    <!-- Page Header -->
    <section
      class="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0 opacity-5">
        <div
          class="absolute top-10 left-10 w-32 h-32 border-2 border-ecuador-blue rounded-full animate-spin-slow"
        ></div>
        <div
          class="absolute bottom-10 right-10 w-24 h-24 border-2 border-ecuador-yellow rounded-full"
        ></div>
      </div>

      <div class="container mx-auto px-4 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1
            class="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 animate-fade-in-up"
          >
            Our Products
          </h1>
          <div
            class="w-24 h-1 bg-gradient-to-r from-ecuador-yellow via-ecuador-blue to-ecuador-red mx-auto mb-8"
          ></div>
          <p
            class="text-lg md:text-xl text-gray-600 leading-relaxed animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            Discover Eduardo's comprehensive range of authentic Nipponflex
            wellness products. As your authorised UK distributor, EDUP Global
            Flex brings you genuine Nipponflex innovations designed with
            cutting-edge technology to enhance your quality of life and promote
            personalised wellbeing.
          </p>

          <!-- Quick Stats -->
          <div
            class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-fade-in-up"
            style="animation-delay: 0.4s"
          >
            <div
              v-for="(stat, index) in quickStats"
              :key="index"
              class="text-center"
            >
              <div
                class="text-2xl md:text-3xl font-bold text-ecuador-blue mb-1"
              >
                {{ stat.value }}
              </div>
              <div class="text-sm text-gray-600">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter and Search Section -->
    <section class="py-8 bg-white border-b border-gray-100 top-16 z-40">
      <div class="container mx-auto px-4 lg:px-8">
        <div
          class="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0"
        >
          <!-- Search Bar -->
          <div class="relative w-full lg:w-80">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search products..."
              class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ecuador-blue/50 focus:border-ecuador-blue transition-colors duration-300"
            />
            <svg
              class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <!-- Category Filters -->
          <div class="flex flex-wrap justify-center gap-3">
            <button
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = category"
              class="px-4 py-2 rounded-full font-medium transition-all duration-300"
              :class="
                selectedCategory === category
                  ? 'bg-ecuador-blue text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-ecuador-blue/10 hover:text-ecuador-blue'
              "
            >
              {{ category }}
            </button>
          </div>

          <!-- Sort Options -->
          <select
            v-model="sortBy"
            class="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ecuador-blue/50 focus:border-ecuador-blue"
          >
            <option value="name">Sort by Name</option>
            <option value="rating">Rating</option>
            <option value="newest">Newest First</option>
          </select>
        </div>

        <!-- Results Info -->
        <div class="mt-4 text-sm text-gray-600">
          Showing {{ filteredProducts.length }} of
          {{ allProducts.length }} products
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-8">
        <!-- Loading State -->
        <div
          v-if="isLoading"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div v-for="n in 6" :key="n" class="card animate-pulse">
            <div class="h-48 bg-gray-200 rounded-t-xl"></div>
            <div class="p-6 space-y-3">
              <div class="h-4 bg-gray-200 rounded w-3/4"></div>
              <div class="h-4 bg-gray-200 rounded w-1/2"></div>
              <div class="h-8 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>
        </div>

        <!-- Products Grid -->
        <div
          v-else-if="filteredProducts.length > 0"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div
            v-for="(product, index) in paginatedProducts"
            :key="product.id"
            class="animate-fade-in-up"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <ProductCard :product="product" />
          </div>
        </div>

        <!-- No Results -->
        <div v-else class="text-center py-16">
          <div
            class="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <svg
              class="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.175-5.535-2.882M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            No products found
          </h3>
          <p class="text-gray-600 mb-6">
            Try adjusting your search terms or filters.
          </p>
          <button @click="resetFilters" class="btn-primary">
            Clear Filters
          </button>
        </div>

        <!-- Pagination -->
        <div v-if="filteredProducts.length > productsPerPage" class="mt-12">
          <div class="flex items-center justify-center space-x-2">
            <button
              @click="currentPage = Math.max(1, currentPage - 1)"
              :disabled="currentPage === 1"
              class="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div class="flex space-x-1">
              <button
                v-for="page in totalPages"
                :key="page"
                @click="currentPage = page"
                class="px-4 py-2 rounded-lg font-medium transition-colors duration-300"
                :class="
                  currentPage === page
                    ? 'bg-ecuador-blue text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                "
              >
                {{ page }}
              </button>
            </div>

            <button
              @click="currentPage = Math.min(totalPages, currentPage + 1)"
              :disabled="currentPage === totalPages"
              class="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Download Catalog Section -->
    <section class="py-16 bg-ecuador-blue text-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-display font-bold mb-6">
            Get Our Complete Product Catalog
          </h2>
          <p class="text-lg text-blue-100 mb-8 leading-relaxed">
            Download our comprehensive product catalog with detailed
            specifications and ordering information for all our wellness
            solutions.
          </p>
          <a
            href="/assets/pdf/catalog.pdf"
            download="EDUP-Global-Flex-Catalog.pdf"
            target="_blank"
            class="btn-secondary inline-flex items-center space-x-2 text-lg px-8 py-4"
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
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Download Product Catalog (PDF)</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { products, getCategories } from '~/data/products';
import type { EduProduct } from '~/data/products';
import ProductCard from '~/components/ProductCard.vue';

interface QuickStat {
  value: string;
  label: string;
}

// Meta data
useHead({
  title: 'Products - EDUP GlobalFlex | Wellness Technology Solutions',
  meta: [
    {
      name: 'description',
      content:
        'Explore our comprehensive range of wellness products featuring FIR POWER, Ion Balls, magnetic therapy, and advanced wellness technologies by NipponFlex.',
    },
  ],
});

// Reactive data
const searchQuery = ref('');
const selectedCategory = ref('All Products');
const sortBy = ref('name');
const currentPage = ref(1);
const productsPerPage = 9;
const isLoading = ref(false);

// Use imported products data
const allProducts: EduProduct[] = products;

// Get categories dynamically from products data
const categories = computed(() => {
  return ['All Products', ...getCategories()];
});

const quickStats: QuickStat[] = [
  { value: `${allProducts.length}+`, label: 'Products' },
  { value: `${getCategories().length}`, label: 'Categories' },
  { value: '100%', label: 'Quality' },
  { value: '10K+', label: 'Happy Users' },
];

// Computed properties
const filteredProducts = computed((): EduProduct[] => {
  let productList = [...allProducts];

  // Filter by category
  if (selectedCategory.value !== 'All Products') {
    productList = productList.filter(
      (product) => product.category === selectedCategory.value
    );
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    productList = productList.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }

  // Sort products
  if (sortBy.value === 'newest') {
    productList.sort((a, b) => Number.parseInt(b.id) - Number.parseInt(a.id));
  } else {
    productList.sort((a, b) => a.name.localeCompare(b.name));
  }

  return productList;
});

const totalPages = computed(() =>
  Math.ceil(filteredProducts.value.length / productsPerPage)
);

const paginatedProducts = computed((): EduProduct[] => {
  const start = (currentPage.value - 1) * productsPerPage;
  const end = start + productsPerPage;
  return filteredProducts.value.slice(start, end);
});

// Methods
const resetFilters = () => {
  searchQuery.value = '';
  selectedCategory.value = 'All Products';
  sortBy.value = 'name';
  currentPage.value = 1;
};

// Watch for filter changes and reset pagination
watch([searchQuery, selectedCategory, sortBy], () => {
  currentPage.value = 1;
});

// Simulate loading state
onMounted(() => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
});
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 20s linear infinite;
}
</style>
