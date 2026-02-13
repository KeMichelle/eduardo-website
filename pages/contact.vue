<template>
  <div class="min-h-screen">
    <!-- Page Header -->
    <section
      class="py-16 lg:py-20 bg-gradient-to-br from-ecuador-blue to-ecuador-blue/90 text-white relative overflow-hidden"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-10 left-10 w-64 h-64 bg-ecuador-yellow rounded-full filter blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-10 right-10 w-48 h-48 bg-ecuador-red rounded-full filter blur-3xl animate-float"
        ></div>
      </div>

      <div class="container mx-auto px-4 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1
            class="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-in-up"
          >
            {{ t('contact.title') }}
          </h1>
          <div
            class="w-24 h-1 bg-gradient-to-r from-ecuador-yellow to-white mx-auto mb-8"
          ></div>
          <p
            class="text-lg md:text-xl text-blue-100 leading-relaxed animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            {{ t('contact.intro') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <!-- Contact Information -->
            <div class="lg:col-span-1 animate-slide-in-left">
              <div class="sticky top-24 space-y-8">
                <!-- Contact Details -->
                <div class="bg-white rounded-2xl p-8 shadow-lg">
                  <h2
                    class="text-2xl font-display font-bold text-gray-900 mb-6"
                  >
                    {{ t('contact.getInTouch') }}
                  </h2>

                  <div class="space-y-6">
                    <div class="flex items-start space-x-4">
                      <div
                        class="flex-shrink-0 w-12 h-12 rounded-full bg-ecuador-blue/10 flex items-center justify-center"
                      >
                        <svg
                          class="w-6 h-6 text-ecuador-blue"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 class="font-semibold text-gray-900 mb-1">
                          {{ t('contact.londonOffice') }}
                        </h3>
                        <p class="text-gray-600 text-sm">
                          {{ t('contact.basedInLondon') }}
                        </p>
                        <p class="text-gray-500 text-sm mt-1">
                          {{ t('contact.servingWorldwide') }}
                        </p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-4">
                      <div
                        class="flex-shrink-0 w-12 h-12 rounded-full bg-ecuador-yellow/10 flex items-center justify-center"
                      >
                        <svg
                          class="w-6 h-6 text-ecuador-yellow"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                          />
                          <path
                            d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 class="font-semibold text-gray-900 mb-1">
                          {{ t('contact.emailLabel') }}
                        </h3>
                        <a
                          href="mailto:eduardo.p.gflex@outlook.com"
                          class="text-ecuador-blue hover:text-ecuador-blue/80 transition-colors duration-300"
                        >
                          eduardo.p.gflex@outlook.com
                        </a>
                        <p class="text-gray-500 text-sm mt-1">
                          {{ t('contact.emailResponseTime') }}
                        </p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-4">
                      <div
                        class="flex-shrink-0 w-12 h-12 rounded-full bg-ecuador-red/10 flex items-center justify-center"
                      >
                        <svg
                          class="w-6 h-6 text-ecuador-red"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 class="font-semibold text-gray-900 mb-1">
                          {{ t('contact.phoneLabel') }}
                        </h3>
                        <a
                          href="tel:+447305873174"
                          class="text-ecuador-red hover:text-ecuador-red/80 transition-colors duration-300"
                        >
                          +44 7305 873174
                        </a>
                        <p class="text-gray-500 text-sm mt-1">
                          {{ t('contact.phoneHours') }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Quick Actions -->
                <div class="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 class="text-xl font-display font-bold text-gray-900 mb-4">
                    {{ t('contact.quickActionsTitle') }}
                  </h3>
                  <div class="space-y-3">
                    <a
                      href="/assets/pdf/catalog.pdf"
                      download="EDUP-Global-Flex-Catalogue.pdf"
                      target="_blank"
                      class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
                    >
                      <svg
                        class="w-5 h-5 text-ecuador-blue group-hover:scale-110 transition-transform duration-300"
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
                      <span class="font-medium text-gray-700">
                        {{ t('contact.quickActions.downloadCatalog') }}
                      </span>
                    </a>

                    <NuxtLink
                      to="/products"
                      class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
                    >
                      <svg
                        class="w-5 h-5 text-ecuador-blue group-hover:scale-110 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      <span class="font-medium text-gray-700">
                        {{ t('contact.quickActions.browseProducts') }}
                      </span>
                    </NuxtLink>

                    <NuxtLink
                      to="/technology"
                      class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
                    >
                      <svg
                        class="w-5 h-5 text-ecuador-blue group-hover:scale-110 transition-transform duration-300"
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
                      <span class="font-medium text-gray-700">
                        {{ t('contact.quickActions.ourTechnology') }}
                      </span>
                    </NuxtLink>
                  </div>
                </div>

                <!-- Business Hours -->
                <div class="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 class="text-xl font-display font-bold text-gray-900 mb-4">
                    {{ t('contact.businessHoursTitle') }}
                  </h3>
                  <div class="space-y-2 text-sm">
                    <div class="flex justify-between">
                      <span class="text-gray-600">
                        {{ t('contact.days.weekday') }}
                      </span>
                      <span class="font-medium text-gray-900">
                        {{ t('contact.days.weekdayHours') }}
                      </span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600">
                        {{ t('contact.days.saturday') }}
                      </span>
                      <span class="font-medium text-gray-900">
                        {{ t('contact.days.saturdayHours') }}
                      </span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600">
                        {{ t('contact.days.sunday') }}
                      </span>
                      <span class="font-medium text-gray-900">
                        {{ t('contact.days.sundayHours') }}
                      </span>
                    </div>
                    <div class="mt-3 pt-3 border-t border-gray-100">
                      <p class="text-gray-500 text-xs">
                        {{ t('contact.businessHoursNote') }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Form -->
            <div class="lg:col-span-2 animate-slide-in-right">
              <div class="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
                <h2
                  class="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-8"
                >
                  {{ t('contact.formTitle') }}
                </h2>

                <form @submit.prevent="submitForm" class="space-y-6">
                  <!-- Name Fields -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        for="firstName"
                        class="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {{ t('contact.form.firstName') }}
                      </label>
                      <input
                        id="firstName"
                        v-model="form.firstName"
                        type="text"
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ecuador-blue/50 focus:border-ecuador-blue transition-colors duration-300"
                        :class="{
                          'border-red-500 focus:ring-red-500/50 focus:border-red-500':
                            errors.firstName,
                        }"
                      />
                      <p
                        v-if="errors.firstName"
                        class="mt-1 text-sm text-red-600"
                      >
                        {{ errors.firstName }}
                      </p>
                    </div>

                    <div>
                      <label
                        for="lastName"
                        class="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {{ t('contact.form.lastName') }}
                      </label>
                      <input
                        id="lastName"
                        v-model="form.lastName"
                        type="text"
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ecuador-blue/50 focus:border-ecuador-blue transition-colors duration-300"
                        :class="{
                          'border-red-500 focus:ring-red-500/50 focus:border-red-500':
                            errors.lastName,
                        }"
                      />
                      <p
                        v-if="errors.lastName"
                        class="mt-1 text-sm text-red-600"
                      >
                        {{ errors.lastName }}
                      </p>
                    </div>
                  </div>

                  <!-- Contact Fields -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        for="email"
                        class="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {{ t('contact.form.email') }}
                      </label>
                      <input
                        id="email"
                        v-model="form.email"
                        type="email"
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ecuador-blue/50 focus:border-ecuador-blue transition-colors duration-300"
                        :class="{
                          'border-red-500 focus:ring-red-500/50 focus:border-red-500':
                            errors.email,
                        }"
                      />
                      <p v-if="errors.email" class="mt-1 text-sm text-red-600">
                        {{ errors.email }}
                      </p>
                    </div>

                    <div>
                      <label
                        for="phone"
                        class="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {{ t('contact.form.phone') }}
                      </label>
                      <input
                        id="phone"
                        v-model="form.phone"
                        type="tel"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ecuador-blue/50 focus:border-ecuador-blue transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <!-- Company & Country -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        for="company"
                        class="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {{ t('contact.form.company') }}
                      </label>
                      <input
                        id="company"
                        v-model="form.company"
                        type="text"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ecuador-blue/50 focus:border-ecuador-blue transition-colors duration-300"
                      />
                    </div>

                    <div>
                      <label
                        for="country"
                        class="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {{ t('contact.form.country') }}
                      </label>
                      <select
                        id="country"
                        v-model="form.country"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ecuador-blue/50 focus:border-ecuador-blue transition-colors duration-300"
                      >
                        <option value="">
                          {{ t('contact.form.countryPlaceholder') }}
                        </option>
                        <option
                          v-for="country in countries"
                          :key="country"
                          :value="country"
                        >
                          {{ country }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <!-- Subject -->
                  <div>
                    <label
                      for="subject"
                      class="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {{ t('contact.form.subject') }}
                    </label>
                    <select
                      id="subject"
                      v-model="form.subject"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ecuador-blue/50 focus:border-ecuador-blue transition-colors duration-300"
                      :class="{
                        'border-red-500 focus:ring-red-500/50 focus:border-red-500':
                          errors.subject,
                      }"
                    >
                      <option value="">
                        {{ t('contact.form.subjectPlaceholder') }}
                      </option>
                      <option value="product-inquiry">
                        {{ t('contact.form.subjectOptions.productInquiry') }}
                      </option>
                      <option value="technology-questions">
                        {{
                          t('contact.form.subjectOptions.technologyQuestions')
                        }}
                      </option>
                      <option value="partnership">
                        {{ t('contact.form.subjectOptions.partnership') }}
                      </option>
                      <option value="technical-support">
                        {{ t('contact.form.subjectOptions.technicalSupport') }}
                      </option>
                      <option value="consultation">
                        {{ t('contact.form.subjectOptions.consultation') }}
                      </option>
                      <option value="custom-solutions">
                        {{ t('contact.form.subjectOptions.customSolutions') }}
                      </option>
                      <option value="other">
                        {{ t('contact.form.subjectOptions.other') }}
                      </option>
                    </select>
                    <p v-if="errors.subject" class="mt-1 text-sm text-red-600">
                      {{ errors.subject }}
                    </p>
                  </div>

                  <!-- Message -->
                  <div>
                    <label
                      for="message"
                      class="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {{ t('contact.form.message') }}
                    </label>
                    <textarea
                      id="message"
                      v-model="form.message"
                      rows="6"
                      required
                      :placeholder="t('contact.form.messagePlaceholder')"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ecuador-blue/50 focus:border-ecuador-blue transition-colors duration-300 resize-none"
                      :class="{
                        'border-red-500 focus:ring-red-500/50 focus:border-red-500':
                          errors.message,
                      }"
                    ></textarea>
                    <p v-if="errors.message" class="mt-1 text-sm text-red-600">
                      {{ errors.message }}
                    </p>
                  </div>

                  <!-- Submit Button -->
                  <div class="pt-4">
                    <button
                      type="submit"
                      :disabled="isSubmitting"
                      class="w-full md:w-auto btn-primary px-8 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      <svg
                        v-if="isSubmitting"
                        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          class="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          class="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>{{
                        isSubmitting
                          ? t('contact.form.sending')
                          : t('contact.form.submit')
                      }}</span>
                      <svg
                        v-if="!isSubmitting"
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Toast -->
    <Teleport to="body">
      <Transition name="toast">
        <div v-if="showSuccessToast" class="fixed top-24 right-4 z-50">
          <div
            class="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 max-w-sm"
          >
            <svg
              class="w-6 h-6 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <div class="font-semibold">
                {{ t('contact.toast.title') }}
              </div>
              <div class="text-sm opacity-90">
                {{ t('contact.toast.body') }}
              </div>
            </div>
            <button @click="showSuccessToast = false" class="ml-4">
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// Meta data
useHead({
  title: 'Contact Eduardo Penafiel - EDUP GlobalFlex | Get In Touch',
  meta: [
    {
      name: 'description',
      content:
        "Contact EDUP GlobalFlex for wellness consultations, product inquiries, and personalised wellness solutions. We're here to help with your wellness journey.",
    },
  ],
});

// Form data
const form = ref<ContactForm>({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  country: '',
  subject: '',
  message: '',
});

const errors = ref<FormErrors>({});
const isSubmitting = ref(false);
const showSuccessToast = ref(false);

// Countries list (simplified)
const countries = [
  'United States',
  'Canada',
  'United Kingdom',
  'Germany',
  'France',
  'Spain',
  'Italy',
  'Netherlands',
  'Sweden',
  'Norway',
  'Denmark',
  'Australia',
  'New Zealand',
  'Japan',
  'South Korea',
  'Singapore',
  'Ecuador',
  'Brazil',
  'Argentina',
  'Colombia',
  'Mexico',
  'Chile',
];

// Form validation
const validateForm = (): boolean => {
  errors.value = {};

  if (!form.value.firstName.trim()) {
    errors.value.firstName = 'First name is required';
  }

  if (!form.value.lastName.trim()) {
    errors.value.lastName = 'Last name is required';
  }

  if (!form.value.email.trim()) {
    errors.value.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    errors.value.email = 'Please enter a valid email address';
  }

  if (!form.value.subject) {
    errors.value.subject = 'Please select a subject';
  }

  if (!form.value.message.trim()) {
    errors.value.message = 'Message is required';
  } else if (form.value.message.trim().length < 10) {
    errors.value.message = 'Message must be at least 10 characters long';
  }

  return Object.keys(errors.value).length === 0;
};

// Form submission
const submitForm = async () => {
  if (!validateForm()) {
    return;
  }

  // Guard against SSR
  if (typeof window === 'undefined' || !(window as any).emailjs) {
    console.error('EmailJS not loaded or running on server');
    alert('Form service not loaded. Please refresh the page and try again.');
    return;
  }

  isSubmitting.value = true;

  try {
    // Get runtime config on client side
    const config = useRuntimeConfig();

    const EMAILJS_SERVICE_ID = config.public.emailjsServiceId;
    const EMAILJS_TEMPLATE_ID = config.public.emailjsTemplateId;
    const EMAILJS_PUBLIC_KEY = config.public.emailjsPublicKey;

    // Validate env variables are loaded
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS environment variables are missing');
      throw new Error('EmailJS configuration is missing');
    }

    // Send email using EmailJS
    const templateParams = {
      from_name: `${form.value.firstName} ${form.value.lastName}`,
      from_email: form.value.email,
      phone: form.value.phone || 'Not provided',
      company: form.value.company || 'Not provided',
      country: form.value.country || 'Not provided',
      subject: form.value.subject,
      message: form.value.message,
    };

    await (window as any).emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY,
    );

    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      country: '',
      subject: '',
      message: '',
    };

    // Show success message
    showSuccessToast.value = true;

    // Auto hide toast after 5 seconds
    setTimeout(() => {
      showSuccessToast.value = false;
    }, 5000);
  } catch (error) {
    console.error('Form submission error:', error);
    alert(
      'Failed to send message. Please try again or email directly at eduardo.p.gflex@outlook.com',
    );
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.animate-float {
  animation: float 6s ease-in-out infinite;
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

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
