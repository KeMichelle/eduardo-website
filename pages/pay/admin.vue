<template>
  <div class="min-h-screen bg-slate-950 text-white">
    <section
      class="relative overflow-hidden border-b border-white/10 bg-slate-950"
    >
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,214,10,0.18),_transparent_26%),radial-gradient(circle_at_center_right,_rgba(0,56,168,0.28),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(220,38,38,0.18),_transparent_28%)]"
      ></div>
      <div class="container relative mx-auto px-4 py-12 lg:px-8 lg:py-16">
        <div class="max-w-3xl animate-fade-in-up">
          <p
            class="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-ecuador-yellow"
          >
            Private payments
          </p>
          <h1 class="mb-6 font-display text-4xl font-bold md:text-5xl">
            Secure payment link generator
          </h1>
          <p
            class="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg"
          >
            Create one-off payment links for approved customers without exposing
            PayPal credentials in the browser.
          </p>
        </div>
      </div>
    </section>

    <section
      class="relative overflow-hidden bg-[linear-gradient(180deg,#eef4ff_0%,#fff8e7_52%,#f8fafc_100%)] py-16 text-slate-900 lg:py-20"
    >
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-ecuador-blue/10 blur-3xl"
        ></div>
        <div
          class="absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-ecuador-yellow/20 blur-3xl"
        ></div>
        <div
          class="absolute bottom-[-8rem] left-1/3 h-72 w-72 rounded-full bg-ecuador-red/10 blur-3xl"
        ></div>
      </div>

      <div class="container relative mx-auto px-4 lg:px-8">
        <div class="mx-auto max-w-7xl">
          <div
            v-if="setupError"
            class="mb-8 rounded-3xl border border-red-200 bg-red-50/90 px-6 py-4 text-red-700 shadow-lg"
          >
            {{ setupError }}
          </div>

          <div
            v-else-if="sessionPending"
            class="rounded-[2rem] border border-white/60 bg-white/75 p-10 text-center shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl"
          >
            Checking payment admin session...
          </div>

          <div
            v-else-if="!session.authenticated"
            class="grid gap-8 lg:grid-cols-[0.95fr,1.05fr]"
          >
            <div
              class="rounded-[2rem] border border-white/60 bg-white/75 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl animate-fade-in-up lg:p-10"
            >
              <p
                class="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-ecuador-blue"
              >
                Admin sign-in
              </p>
              <h2 class="mb-3 font-display text-3xl font-bold text-slate-950">
                Open the private portal
              </h2>
              <p class="mb-8 text-slate-600">
                Use the admin password configured on the server to create and
                manage secure payment requests.
              </p>

              <form class="space-y-5" @submit.prevent="login">
                <label class="block space-y-2">
                  <span class="text-sm font-semibold text-slate-700"
                    >Password</span
                  >
                  <input
                    v-model="loginPassword"
                    type="password"
                    autocomplete="current-password"
                    class="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 outline-none transition focus:border-ecuador-blue focus:ring-2 focus:ring-ecuador-blue/15"
                    placeholder="Enter the private admin password"
                  />
                </label>

                <p v-if="loginError" class="text-sm text-red-600">
                  {{ loginError }}
                </p>

                <button
                  type="submit"
                  class="btn-primary w-full justify-center"
                  :disabled="authLoading"
                >
                  {{ authLoading ? 'Signing in...' : 'Open payment portal' }}
                </button>
              </form>
            </div>

            <div class="grid gap-6 animate-slide-in-right md:grid-cols-2">
              <div
                class="rounded-[2rem] border border-slate-200/70 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] md:col-span-2"
              >
                <p
                  class="text-sm font-semibold uppercase tracking-[0.22em] text-ecuador-yellow"
                >
                  Why this portal
                </p>
                <h3 class="mt-3 font-display text-2xl font-bold">
                  Built for quick manual payment requests
                </h3>
                <p class="mt-4 max-w-2xl text-slate-300">
                  Generate a link, copy it, send it to a customer, and monitor
                  payment status from one place without exposing provider
                  credentials.
                </p>
              </div>

              <div
                class="rounded-[1.75rem] border border-white/60 bg-white/70 p-6 shadow-lg backdrop-blur-xl"
              >
                <p class="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Customer flow
                </p>
                <p class="mt-3 text-lg font-semibold text-slate-950">
                  Link -> PayPal -> paid status
                </p>
              </div>

              <div
                class="rounded-[1.75rem] border border-white/60 bg-white/70 p-6 shadow-lg backdrop-blur-xl"
              >
                <p class="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Security
                </p>
                <p class="mt-3 text-lg font-semibold text-slate-950">
                  Password protected with secure session cookies
                </p>
              </div>
            </div>
          </div>

          <div v-else class="space-y-6">
            <div
              class="rounded-[2rem] border border-white/60 bg-white/78 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl animate-fade-in-up lg:p-8"
            >
              <div
                class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
              >
                <div>
                  <p
                    class="text-sm font-semibold uppercase tracking-[0.22em] text-ecuador-blue"
                  >
                    Hi Eduardo
                  </p>
                  <h2
                    class="mt-2 font-display text-3xl font-bold text-slate-950"
                  >
                    Create and share payment links
                  </h2>
                  <p
                    class="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600"
                  >
                    Add the payment details, create the link, then copy and send
                    it to the customer.
                  </p>
                </div>

                <div class="flex flex-wrap gap-3">
                  <div
                    class="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-600"
                  >
                    <span class="font-semibold text-slate-950">{{
                      stats.total
                    }}</span>
                    total
                  </div>
                  <div
                    class="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
                  >
                    <span class="font-semibold">{{ stats.paid }}</span>
                    paid
                  </div>
                  <button class="btn-secondary" type="button" @click="logout">
                    Sign out
                  </button>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <div
                class="rounded-[2rem] border border-white/60 bg-white/78 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:p-10"
              >
                <div class="mb-8 border-b border-slate-200 pb-6">
                  <p
                    class="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-ecuador-blue"
                  >
                    New payment
                  </p>
                  <h2 class="font-display text-3xl font-bold text-slate-950">
                    Create a payment request
                  </h2>
                </div>

                <form class="space-y-6" @submit.prevent="createLink">
                  <div class="grid gap-6 md:grid-cols-2">
                    <label class="block space-y-2 md:col-span-2">
                      <span class="text-sm font-semibold text-slate-700"
                        >Description</span
                      >
                      <input
                        v-model="form.description"
                        type="text"
                        class="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 outline-none transition focus:border-ecuador-blue focus:ring-2 focus:ring-ecuador-blue/15"
                        placeholder="Deposit for treatment package"
                      />
                    </label>

                    <label class="block space-y-2">
                      <span class="text-sm font-semibold text-slate-700"
                        >Customer name</span
                      >
                      <input
                        v-model="form.customerName"
                        type="text"
                        class="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 outline-none transition focus:border-ecuador-blue focus:ring-2 focus:ring-ecuador-blue/15"
                        placeholder="Optional"
                      />
                    </label>

                    <label class="block space-y-2">
                      <span class="text-sm font-semibold text-slate-700"
                        >Customer email</span
                      >
                      <input
                        v-model="form.customerEmail"
                        type="email"
                        class="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 outline-none transition focus:border-ecuador-blue focus:ring-2 focus:ring-ecuador-blue/15"
                        placeholder="Optional"
                      />
                    </label>

                    <label class="block space-y-2">
                      <span class="text-sm font-semibold text-slate-700"
                        >Amount</span
                      >
                      <input
                        v-model.number="form.amountMajor"
                        type="number"
                        min="0.01"
                        step="0.01"
                        class="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 outline-none transition focus:border-ecuador-blue focus:ring-2 focus:ring-ecuador-blue/15"
                      />
                    </label>

                    <label class="block space-y-2">
                      <span class="text-sm font-semibold text-slate-700"
                        >Currency</span
                      >
                      <input
                        v-model="form.currency"
                        type="text"
                        maxlength="3"
                        class="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 uppercase outline-none transition focus:border-ecuador-blue focus:ring-2 focus:ring-ecuador-blue/15"
                        placeholder="GBP"
                      />
                    </label>

                    <label class="block space-y-2 md:col-span-2">
                      <span class="text-sm font-semibold text-slate-700"
                        >Expires at</span
                      >
                      <input
                        v-model="form.expiresAt"
                        type="datetime-local"
                        class="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 outline-none transition focus:border-ecuador-blue focus:ring-2 focus:ring-ecuador-blue/15"
                      />
                    </label>
                  </div>

                  <div
                    class="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-600"
                  >
                    PayPal is enabled for all links.
                  </div>

                  <p v-if="formError" class="text-sm text-red-600">
                    {{ formError }}
                  </p>

                  <button
                    type="submit"
                    class="btn-primary"
                    :disabled="creating"
                  >
                    {{
                      creating
                        ? 'Creating link...'
                        : 'Create secure payment link'
                    }}
                  </button>
                </form>

                <div
                  v-if="latestShareUrl"
                  class="mt-6 rounded-[1.5rem] border border-ecuador-blue/15 bg-ecuador-blue/5 p-5"
                >
                  <p class="text-sm font-semibold text-slate-950">
                    {{
                      latestRequest?.description ||
                      'Newest request ready to share'
                    }}
                  </p>
                  <p class="mt-2 break-all text-sm text-slate-600">
                    {{ latestShareUrl }}
                  </p>
                  <div class="mt-4 flex flex-wrap gap-3">
                    <button
                      class="btn-secondary"
                      type="button"
                      @click="copyLink(latestShareUrl)"
                    >
                      {{
                        copiedLink === latestShareUrl ? 'Copied' : 'Copy link'
                      }}
                    </button>
                    <a
                      :href="latestShareUrl"
                      target="_blank"
                      rel="noreferrer"
                      class="btn-primary"
                    >
                      Open link
                    </a>
                  </div>
                </div>
              </div>

              <div
                class="rounded-[2rem] border border-white/60 bg-white/78 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl"
              >
                <div
                  class="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
                >
                  <div>
                    <p
                      class="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-ecuador-blue"
                    >
                      Recent links
                    </p>
                    <h2 class="font-display text-2xl font-bold text-slate-950">
                      Payment requests
                    </h2>
                  </div>

                  <div class="grid gap-3 sm:grid-cols-[minmax(0,1fr),10rem]">
                    <input
                      v-model="searchQuery"
                      type="search"
                      class="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm outline-none transition focus:border-ecuador-blue focus:ring-2 focus:ring-ecuador-blue/15"
                      placeholder="Search description or customer"
                    />
                    <select
                      v-model="statusFilter"
                      class="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm outline-none transition focus:border-ecuador-blue focus:ring-2 focus:ring-ecuador-blue/15"
                    >
                      <option value="all">All statuses</option>
                      <option value="ready">Ready</option>
                      <option value="processing">Processing</option>
                      <option value="paid">Paid</option>
                      <option value="expired">Expired</option>
                      <option value="cancelled">Cancelled</option>
                      <option value="failed">Failed</option>
                    </select>
                  </div>
                </div>

                <div
                  class="mb-5 flex flex-wrap items-center gap-3 text-sm text-slate-500"
                >
                  <span>{{ displayedRequests.length }} shown</span>
                  <button
                    v-if="searchQuery || statusFilter !== 'all'"
                    type="button"
                    class="rounded-full border border-slate-200 bg-white px-3 py-1 font-semibold text-slate-700 transition hover:border-slate-300"
                    @click="resetFilters"
                  >
                    Clear filters
                  </button>
                </div>

                <div v-if="linksLoading" class="text-slate-600">
                  Loading links...
                </div>

                <div
                  v-else-if="!requests.length"
                  class="rounded-[1.5rem] border border-dashed border-slate-200 bg-white/70 px-5 py-8 text-center text-slate-600"
                >
                  No payment links created yet.
                </div>

                <div
                  v-else-if="!visibleRequests.length"
                  class="rounded-[1.5rem] border border-dashed border-slate-200 bg-white/70 px-5 py-8 text-center text-slate-600"
                >
                  No payment requests match the current filters.
                </div>

                <div v-else class="space-y-4">
                  <article
                    v-for="request in displayedRequests"
                    :key="request.id"
                    class="rounded-[1.5rem] border p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                    :class="requestCardClass(request.status)"
                  >
                    <div
                      class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between"
                    >
                      <div class="min-w-0 flex-1">
                        <div class="flex flex-wrap items-center gap-3">
                          <h3 class="text-lg font-semibold text-slate-950">
                            {{ request.description }}
                          </h3>
                          <span
                            class="rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]"
                            :class="statusClass(request.status)"
                          >
                            {{ formatStatus(request.status) }}
                          </span>
                          <span
                            v-if="
                              isExpiringSoon(request.expiresAt) &&
                              request.status !== 'paid'
                            "
                            class="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-700"
                          >
                            Expiring soon
                          </span>
                        </div>

                        <div class="mt-4 grid gap-4 text-sm md:grid-cols-2">
                          <div class="rounded-xl bg-white/70 px-4 py-3">
                            <span
                              class="block text-[11px] uppercase tracking-[0.18em] text-slate-400"
                              >Customer</span
                            >
                            <span class="mt-2 block font-medium text-slate-800">
                              {{ request.customerName || 'Unnamed customer' }}
                            </span>
                          </div>
                          <div class="rounded-xl bg-white/70 px-4 py-3">
                            <span
                              class="block text-[11px] uppercase tracking-[0.18em] text-slate-400"
                              >Amount</span
                            >
                            <span class="mt-2 block font-medium text-slate-800">
                              {{
                                formatMoney(
                                  request.amountMinor,
                                  request.currency,
                                )
                              }}
                            </span>
                          </div>
                          <div class="rounded-xl bg-white/70 px-4 py-3">
                            <span
                              class="block text-[11px] uppercase tracking-[0.18em] text-slate-400"
                              >Expires</span
                            >
                            <span class="mt-2 block font-medium text-slate-800">
                              {{ formatDate(request.expiresAt) }}
                            </span>
                          </div>
                          <div class="rounded-xl bg-white/70 px-4 py-3">
                            <span
                              class="block text-[11px] uppercase tracking-[0.18em] text-slate-400"
                              >Created</span
                            >
                            <span class="mt-2 block font-medium text-slate-800">
                              {{ formatDate(request.createdAt) }}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div class="flex shrink-0 flex-wrap gap-3">
                        <a
                          :href="request.shareUrl"
                          target="_blank"
                          rel="noreferrer"
                          class="btn-primary"
                        >
                          Open link
                        </a>
                        <button
                          type="button"
                          class="btn-secondary"
                          @click="copyLink(request.shareUrl)"
                        >
                          {{
                            copiedLink === request.shareUrl
                              ? 'Copied'
                              : 'Copy link'
                          }}
                        </button>
                      </div>
                    </div>
                  </article>

                  <div
                    v-if="hasOverflowRequests"
                    class="flex justify-center pt-2"
                  >
                    <button
                      type="button"
                      class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300"
                      @click="showAllRequests = !showAllRequests"
                    >
                      {{
                        showAllRequests
                          ? 'Show latest 5'
                          : `Show all ${visibleRequests.length}`
                      }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';

import type {
  AdminSessionResponse,
  PaymentRequestRecord,
} from '~/shared/payment/types';

type AdminPaymentLink = PaymentRequestRecord & { shareUrl: string };
type StatusFilter = 'all' | PaymentRequestRecord['status'];

function defaultExpiryInput() {
  const date = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0, 16);
}

const session = ref<AdminSessionResponse>({ authenticated: false });
const sessionPending = ref(true);
const setupError = ref('');
const loginPassword = ref('');
const loginError = ref('');
const authLoading = ref(false);
const creating = ref(false);
const linksLoading = ref(false);
const formError = ref('');
const latestLink = ref('');
const copiedLink = ref('');
const searchQuery = ref('');
const statusFilter = ref<StatusFilter>('all');
const showAllRequests = ref(false);
const requests = ref<AdminPaymentLink[]>([]);

const form = reactive({
  description: '',
  customerName: '',
  customerEmail: '',
  amountMajor: 0,
  currency: 'GBP',
  expiresAt: defaultExpiryInput(),
  allowedProviders: ['paypal' as const],
});

useHead({
  title: 'Private Payment Admin | EDUP Global Flex',
  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
});

const latestRequest = computed(() => requests.value[0] || null);
const latestShareUrl = computed(
  () => latestLink.value || latestRequest.value?.shareUrl || '',
);

const stats = computed(() => {
  const total = requests.value.length;
  const paid = requests.value.filter(
    (request) => request.status === 'paid',
  ).length;
  const open = requests.value.filter((request) =>
    ['ready', 'processing'].includes(request.status),
  ).length;
  const expiringSoon = requests.value.filter(
    (request) => isExpiringSoon(request.expiresAt) && request.status !== 'paid',
  ).length;

  return {
    total,
    paid,
    open,
    expiringSoon,
  };
});

const visibleRequests = computed(() => {
  const term = searchQuery.value.trim().toLowerCase();

  return requests.value.filter((request) => {
    if (statusFilter.value !== 'all' && request.status !== statusFilter.value) {
      return false;
    }

    if (!term) {
      return true;
    }

    return [
      request.description,
      request.customerName,
      request.customerEmail,
      request.publicId,
    ]
      .filter(Boolean)
      .some((value) => value?.toLowerCase().includes(term));
  });
});

const hasOverflowRequests = computed(() => visibleRequests.value.length > 5);
const displayedRequests = computed(() =>
  showAllRequests.value
    ? visibleRequests.value
    : visibleRequests.value.slice(0, 5),
);

function statusClass(status: PaymentRequestRecord['status']) {
  if (status === 'paid') {
    return 'border-emerald-200 bg-emerald-50 text-emerald-700';
  }

  if (status === 'expired' || status === 'failed' || status === 'cancelled') {
    return 'border-red-200 bg-red-50 text-red-700';
  }

  if (status === 'processing') {
    return 'border-amber-200 bg-amber-50 text-amber-700';
  }

  return 'border-slate-200 bg-slate-50 text-slate-700';
}

function requestCardClass(status: PaymentRequestRecord['status']) {
  if (status === 'paid') {
    return 'border-emerald-200 bg-emerald-50/80';
  }

  if (status === 'cancelled' || status === 'expired' || status === 'failed') {
    return 'border-red-200 bg-red-50/80';
  }

  if (status === 'processing') {
    return 'border-amber-200 bg-amber-50/80';
  }

  return 'border-slate-200 bg-white/90';
}

function formatStatus(status: PaymentRequestRecord['status']) {
  return status.replace('-', ' ');
}

function formatMoney(amountMinor: number, currency: string) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency,
  }).format(amountMinor / 100);
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value));
}

function isExpiringSoon(value: string) {
  const timeRemaining = new Date(value).getTime() - Date.now();
  return timeRemaining > 0 && timeRemaining <= 72 * 60 * 60 * 1000;
}

function resetForm() {
  form.description = '';
  form.customerName = '';
  form.customerEmail = '';
  form.amountMajor = 0;
  form.currency = 'GBP';
  form.expiresAt = defaultExpiryInput();
  form.allowedProviders = ['paypal'];
}

function resetFilters() {
  searchQuery.value = '';
  statusFilter.value = 'all';
  showAllRequests.value = false;
}

async function copyLink(url: string) {
  await navigator.clipboard.writeText(url);
  copiedLink.value = url;
  globalThis.setTimeout(() => {
    if (copiedLink.value === url) {
      copiedLink.value = '';
    }
  }, 2000);
}

async function loadLinks() {
  linksLoading.value = true;

  try {
    requests.value = await $fetch<AdminPaymentLink[]>('/api/payments/links');
    showAllRequests.value = false;
  } catch (error) {
    formError.value =
      error instanceof Error ? error.message : 'Unable to load payment links.';
  } finally {
    linksLoading.value = false;
  }
}

async function refreshSession() {
  sessionPending.value = true;
  setupError.value = '';

  try {
    session.value = await $fetch<AdminSessionResponse>(
      '/api/payments/admin/session',
    );

    if (session.value.authenticated) {
      await loadLinks();
    }
  } catch (error) {
    setupError.value =
      error instanceof Error
        ? error.message
        : 'Unable to open the payment admin portal.';
  } finally {
    sessionPending.value = false;
  }
}

async function login() {
  authLoading.value = true;
  loginError.value = '';

  try {
    await $fetch('/api/payments/admin/session', {
      method: 'POST',
      body: { password: loginPassword.value },
    });

    loginPassword.value = '';
    await refreshSession();
  } catch (error) {
    loginError.value =
      error instanceof Error ? error.message : 'Unable to authenticate.';
  } finally {
    authLoading.value = false;
  }
}

async function logout() {
  await $fetch('/api/payments/admin/session', { method: 'DELETE' });
  session.value = { authenticated: false };
  requests.value = [];
  latestLink.value = '';
}

async function createLink() {
  creating.value = true;
  formError.value = '';

  try {
    const response = await $fetch<{
      record: PaymentRequestRecord;
      shareUrl: string;
    }>('/api/payments/links', {
      method: 'POST',
      body: {
        description: form.description,
        customerName: form.customerName,
        customerEmail: form.customerEmail,
        amountMajor: form.amountMajor,
        currency: form.currency,
        expiresAt: form.expiresAt,
        allowedProviders: form.allowedProviders,
      },
    });

    latestLink.value = response.shareUrl;
    resetForm();
    await loadLinks();
  } catch (error) {
    formError.value =
      error instanceof Error
        ? error.message
        : 'Unable to create the payment link.';
  } finally {
    creating.value = false;
  }
}

onMounted(refreshSession);
</script>
