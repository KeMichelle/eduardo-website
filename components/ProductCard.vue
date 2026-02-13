<template>
  <NuxtLink :to="viewDetailsLink" class="block">
    <div class="card card-hover group overflow-hidden cursor-pointer">
      <!-- Product Image -->
      <div class="relative h-48 md:h-56 overflow-hidden bg-gray-100">
        <img
          :src="product.images[0]"
          :alt="displayName"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          @error="handleImageError"
        />

        <!-- Fallback gradient when image fails to load -->
        <div
          v-if="!imageLoaded"
          class="absolute inset-0 bg-gradient-to-br from-ecuador-yellow/20 via-ecuador-blue/20 to-ecuador-red/20 flex items-center justify-center"
        >
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-3 rounded-full bg-white/50 flex items-center justify-center"
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
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p class="text-sm text-gray-600 font-medium">{{ product.name }}</p>
          </div>
        </div>

        <!-- Overlay gradient -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>

        <!-- Quick view overlay -->
        <div
          class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <span
            class="bg-white text-ecuador-blue px-4 py-2 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-ecuador-blue hover:text-white"
          >
            {{ t('productCard.quickView') }}
          </span>
        </div>
      </div>

      <!-- Product Info -->
      <div class="p-6">
        <!-- Product Category -->
        <div class="mb-2">
          <span
            class="text-xs font-medium text-ecuador-blue bg-ecuador-blue/10 px-2 py-1 rounded-md"
          >
            {{ displayCategory }}
          </span>
        </div>

        <!-- Product Name -->
        <h3
          class="text-lg md:text-xl font-display font-bold text-gray-900 mb-2 group-hover:text-ecuador-blue transition-colors duration-300"
        >
          {{ displayName }}
        </h3>

        <!-- Product Description -->
        <p class="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {{ displayShortDescription }}
        </p>

        <!-- Product Features -->
        <div v-if="displayFeatures && displayFeatures.length > 0" class="mb-4">
          <ul class="space-y-1">
            <li
              v-for="feature in displayFeatures.slice(0, 3)"
              :key="feature"
              class="flex items-center text-xs text-gray-500"
            >
              <svg
                class="w-3 h-3 text-ecuador-blue mr-2 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>

        <!-- Product Tags -->
        <div class="flex flex-wrap gap-1">
          <span
            v-for="tag in product.tags.slice(0, 3)"
            :key="tag"
            class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
          >
            #{{ translateTag(tag) }}
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { EduProduct } from '~/data/products';
import { useI18n } from 'vue-i18n';
import { useLocalePath } from '#imports';

const { t, te, locale } = useI18n();
const localePath = useLocalePath();

interface Props {
  product: EduProduct;
}

const props = defineProps<Props>();

// No emits needed anymore

const imageLoaded = ref(true);

const categoryKeyMap: Record<string, string> = {
  'Water Filtration': 'waterFiltration',
  'Wellness Accessories': 'wellnessAccessories',
  Mattresses: 'mattresses',
  Pillows: 'pillows',
  'Kids Wellness': 'kidsWellness',
  'Athletic Wear': 'athleticWear',
  Footwear: 'footwear',
  'Wellness Apparel': 'wellnessApparel',
  'Sleep & Recovery': 'sleepRecovery',
  'Support & Braces': 'supportBraces',
  'Wellness Kits': 'wellnessKits',
  Automotive: 'automotive',
  "Women's Wellness": 'womensWellness',
};

const displayName = computed(() => {
  const currentLocale = locale.value;
  const translatedName = props.product.translations?.[currentLocale]?.name;

  if (translatedName) {
    return translatedName;
  }

  const key = `productsData.${props.product.slug}.name`;
  return te(key) ? t(key) : props.product.name;
});

const displayShortDescription = computed(() => {
  const currentLocale = locale.value;
  const translatedShort =
    props.product.translations?.[currentLocale]?.shortDescription;

  if (translatedShort) {
    return translatedShort;
  }

  const key = `productsData.${props.product.slug}.shortDescription`;
  return te(key) ? t(key) : props.product.shortDescription;
});

const displayCategory = computed(() => {
  const mapKey = categoryKeyMap[props.product.category];
  return mapKey
    ? t(`productsPage.categories.${mapKey}`)
    : props.product.category;
});

const displayFeatures = computed(() => {
  const currentLocale = locale.value;
  const translatedFeatures =
    props.product.translations?.[currentLocale]?.features;

  if (translatedFeatures && translatedFeatures.length > 0) {
    return translatedFeatures;
  }

  return props.product.features ?? [];
});

const tagKeyMap: Record<string, string> = {
  "women's wellness": 'womensWellness',
  "women's health": 'womensWellness',
};

const translateTag = (tag: string): string => {
  const normalised = tag.toLowerCase();
  const mappedKey = tagKeyMap[normalised];

  if (mappedKey) {
    const key = `productTags.${mappedKey}`;
    if (te(key)) {
      return t(key);
    }
  }

  return tag;
};

const viewDetailsLink = computed(() => {
  return localePath(`/products/${props.product.slug}`);
});

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.src = '/assets/images/logo/edulogohorizontal.png';
  imageLoaded.value = false;
};
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
