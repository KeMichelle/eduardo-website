<template>
  <div
    class="min-h-screen bg-[linear-gradient(180deg,#eff5ff_0%,#fffaf0_52%,#f8fafc_100%)] text-slate-950"
  >
    <section
      class="relative overflow-hidden px-4 py-8 sm:px-6 lg:px-8 lg:py-10"
    >
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,56,168,0.14),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(220,38,38,0.08),_transparent_28%),radial-gradient(circle_at_right,_rgba(255,214,10,0.10),_transparent_30%)]"
      ></div>

      <div class="relative mx-auto max-w-xl">
        <div class="mb-6 text-center animate-fade-in-up">
          <p
            class="text-xs font-semibold uppercase tracking-[0.28em] text-ecuador-blue"
          >
            {{ copy.kicker }}
          </p>
          <h1
            class="mt-3 font-display text-3xl font-bold text-slate-950 sm:text-4xl"
          >
            {{ copy.title }}
          </h1>
        </div>

        <div
          v-if="errorMessage"
          class="mb-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 shadow-lg"
        >
          {{ errorMessage }}
        </div>

        <div
          v-if="flashMessage"
          class="mb-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 shadow-lg"
        >
          {{ flashMessage }}
        </div>

        <div
          v-if="pending"
          class="rounded-[2rem] border border-white/60 bg-white/85 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.16)] backdrop-blur-xl"
        >
          {{ copy.loading }}
        </div>

        <div
          v-else-if="!request"
          class="rounded-[2rem] border border-white/60 bg-white/85 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.16)] backdrop-blur-xl"
        >
          {{ copy.unavailable }}
        </div>

        <article
          v-else
          class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/92 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl animate-fade-in-up"
        >
          <div class="border-b border-slate-200 px-5 py-5 sm:px-7">
            <p class="text-sm text-slate-600">
              {{ copy.subtitle }}
            </p>
          </div>

          <div class="divide-y divide-slate-200">
            <section class="px-5 py-5 sm:px-7">
              <p
                class="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500"
              >
                {{ copy.orderDetails }}
              </p>
              <h2 class="mt-3 text-xl font-semibold text-slate-950 sm:text-2xl">
                {{ request.description }}
              </h2>
              <p
                v-if="request.customerName"
                class="mt-2 text-sm text-slate-600"
              >
                {{ copy.forLabel }} {{ request.customerName }}
              </p>
            </section>

            <section class="px-5 py-5 sm:px-7">
              <p
                class="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500"
              >
                {{ copy.total }}
              </p>
              <p class="mt-3 text-4xl font-bold text-slate-950 sm:text-5xl">
                {{ formattedAmount }}
              </p>
            </section>

            <section class="grid gap-4 px-5 py-5 sm:grid-cols-2 sm:px-7">
              <div
                class="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4"
              >
                <p
                  class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500"
                >
                  {{ copy.paymentMethod }}
                </p>
                <p class="mt-3 text-lg font-semibold text-slate-950">
                  {{ copy.methodValue }}
                </p>
              </div>

              <div
                class="rounded-[1.5rem] border p-4"
                :class="statusPanelClass"
              >
                <p
                  class="text-xs font-semibold uppercase tracking-[0.22em] opacity-70"
                >
                  {{ copy.status }}
                </p>
                <p class="mt-3 text-lg font-semibold">
                  {{ statusLabel }}
                </p>
                <p v-if="statusDetail" class="mt-2 text-sm opacity-80">
                  {{ statusDetail }}
                </p>
              </div>
            </section>

            <section class="px-5 py-5 sm:px-7">
              <p
                class="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500"
              >
                {{ copy.howItWorks }}
              </p>
              <div
                class="mt-3 space-y-2 text-sm leading-relaxed text-slate-600"
              >
                <p>{{ copy.howItWorksLine1 }}</p>
                <p>{{ copy.howItWorksLine2 }}</p>
              </div>
            </section>

            <section class="px-5 py-5 sm:px-7">
              <div
                v-if="request.status === 'paid' || request.status === 'expired'"
                class="rounded-[1.5rem] border px-4 py-4 text-sm font-medium"
                :class="finalStateClass"
              >
                {{ finalStateText }}
              </div>

              <div v-else class="space-y-4">
                <div
                  v-if="statusHelper"
                  class="rounded-[1.5rem] border px-4 py-4 text-sm"
                  :class="statusHelperClass"
                >
                  {{ statusHelper }}
                </div>

                <button
                  type="button"
                  class="flex w-full items-center justify-center rounded-[1.5rem] bg-slate-950 px-5 py-4 text-base font-semibold text-white shadow-[0_20px_60px_rgba(15,23,42,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-70"
                  :disabled="activeProvider === 'paypal'"
                  @click="startCheckout('paypal')"
                >
                  {{
                    activeProvider === 'paypal'
                      ? copy.actions.opening
                      : copy.actions.payNow
                  }}
                </button>
              </div>
            </section>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import type {
  CheckoutStartResponse,
  PaymentProvider,
  PublicPaymentRequestView,
} from '~/shared/payment/types';

const portalCopy = {
  en: {
    headTitle: 'Payment | EDUP Global Flex',
    kicker: 'Payment',
    title: 'Complete your payment with PayPal.',
    subtitle: 'Complete your payment with PayPal.',
    loading: 'Loading payment...',
    unavailable: 'This payment link is not available.',
    orderDetails: 'Order details',
    forLabel: 'For',
    total: 'Total',
    paymentMethod: 'Payment method',
    methodValue: 'PayPal',
    status: 'Status',
    howItWorks: 'How it works',
    howItWorksLine1: "You'll be redirected to PayPal to approve the payment.",
    howItWorksLine2: 'Once completed, you will return here automatically.',
    statuses: {
      ready: 'Pending',
      processing: 'Processing',
      paid: 'Paid',
      cancelled: 'Cancelled',
      failed: 'Failed',
      expired: 'Expired',
    },
    actions: {
      payNow: 'Pay with PayPal',
      opening: 'Opening PayPal...',
    },
    flash: {
      completed: 'Your PayPal payment was completed successfully.',
      cancelled: 'The PayPal checkout was cancelled.',
    },
    errors: {
      startCheckout: 'Unable to start checkout.',
      confirmCheckout: 'Unable to confirm the PayPal payment.',
    },
    helpers: {
      cancelled: 'This payment was cancelled. You can try again below.',
      failed: 'This payment could not be completed. Please try again.',
    },
    finalStates: {
      paid: 'This payment has already been completed.',
      expired:
        'This payment link has expired. Please contact Eduardo for a new one.',
    },
    paidOn: (date: string) => `Paid on ${date}`,
    expiresOn: (date: string) => `Expires ${date}`,
  },
  es: {
    headTitle: 'Pago | EDUP Global Flex',
    kicker: 'Pago',
    title: 'Complete su pago con PayPal.',
    subtitle: 'Complete su pago con PayPal.',
    loading: 'Cargando pago...',
    unavailable: 'Este enlace de pago no esta disponible.',
    orderDetails: 'Detalles del pedido',
    forLabel: 'Para',
    total: 'Total',
    paymentMethod: 'Metodo de pago',
    methodValue: 'PayPal',
    status: 'Estado',
    howItWorks: 'Como funciona',
    howItWorksLine1: 'Sera redirigido a PayPal para aprobar el pago.',
    howItWorksLine2: 'Cuando termine, volvera aqui automaticamente.',
    statuses: {
      ready: 'Pendiente',
      processing: 'En proceso',
      paid: 'Pagado',
      cancelled: 'Cancelado',
      failed: 'Fallido',
      expired: 'Expirado',
    },
    actions: {
      payNow: 'Pagar con PayPal',
      opening: 'Abriendo PayPal...',
    },
    flash: {
      completed: 'Su pago con PayPal se completo correctamente.',
      cancelled: 'El proceso de PayPal fue cancelado.',
    },
    errors: {
      startCheckout: 'No se pudo iniciar el pago.',
      confirmCheckout: 'No se pudo confirmar el pago con PayPal.',
    },
    helpers: {
      cancelled: 'Este pago fue cancelado. Puede intentarlo de nuevo abajo.',
      failed: 'No se pudo completar el pago. Intentelo de nuevo.',
    },
    finalStates: {
      paid: 'Este pago ya se completo.',
      expired: 'Este enlace de pago ha expirado. Pida a Eduardo uno nuevo.',
    },
    paidOn: (date: string) => `Pagado el ${date}`,
    expiresOn: (date: string) => `Vence ${date}`,
  },
} as const;

type PortalLocale = keyof typeof portalCopy;

const route = useRoute();
const router = useRouter();
const { locale } = useI18n();
const publicId = computed(() => String(route.params.publicId || ''));
const activeProvider = ref<PaymentProvider | null>(null);
const flashMessage = ref('');
const errorMessage = ref('');

const activeLocale = computed<PortalLocale>(() =>
  locale.value.startsWith('es') ? 'es' : 'en',
);
const copy = computed(() => portalCopy[activeLocale.value]);
const localeTag = computed(() =>
  activeLocale.value === 'es' ? 'es-ES' : 'en-GB',
);

useHead(() => ({
  title: copy.value.headTitle,
  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
}));

const {
  data: request,
  pending,
  refresh,
} = await useAsyncData(`payment-request-${publicId.value}`, () =>
  $fetch<PublicPaymentRequestView>(`/api/payments/requests/${publicId.value}`),
);

const formattedAmount = computed(() => {
  if (!request.value) {
    return '';
  }

  return new Intl.NumberFormat(localeTag.value, {
    style: 'currency',
    currency: request.value.currency,
  }).format(Number(request.value.amountMajor));
});

const formattedExpiry = computed(() => {
  if (!request.value) {
    return '';
  }

  return formatDate(request.value.expiresAt);
});

const statusLabel = computed(() => {
  if (!request.value) {
    return '';
  }

  return copy.value.statuses[request.value.status];
});

const statusPanelClass = computed(() => {
  if (request.value?.status === 'paid') {
    return 'border-emerald-200 bg-emerald-50 text-emerald-800';
  }

  if (
    request.value?.status === 'cancelled' ||
    request.value?.status === 'failed' ||
    request.value?.status === 'expired'
  ) {
    return 'border-red-200 bg-red-50 text-red-800';
  }

  if (request.value?.status === 'processing') {
    return 'border-amber-200 bg-amber-50 text-amber-800';
  }

  return 'border-slate-200 bg-slate-50 text-slate-800';
});

const statusDetail = computed(() => {
  if (!request.value) {
    return '';
  }

  if (request.value.status === 'paid' && request.value.paidAt) {
    return copy.value.paidOn(formatDate(request.value.paidAt));
  }

  return copy.value.expiresOn(formattedExpiry.value);
});

const statusHelper = computed(() => {
  if (!request.value) {
    return '';
  }

  if (request.value.status === 'cancelled') {
    return copy.value.helpers.cancelled;
  }

  if (request.value.status === 'failed') {
    return copy.value.helpers.failed;
  }

  return '';
});

const statusHelperClass = computed(() => {
  if (
    request.value?.status === 'cancelled' ||
    request.value?.status === 'failed'
  ) {
    return 'border-red-200 bg-red-50 text-red-700';
  }

  return 'border-slate-200 bg-slate-50 text-slate-700';
});

const finalStateClass = computed(() => {
  if (request.value?.status === 'paid') {
    return 'border-emerald-200 bg-emerald-50 text-emerald-700';
  }

  return 'border-red-200 bg-red-50 text-red-700';
});

const finalStateText = computed(() => {
  if (request.value?.status === 'paid') {
    return copy.value.finalStates.paid;
  }

  return copy.value.finalStates.expired;
});

function formatDate(value: string) {
  return new Intl.DateTimeFormat(localeTag.value, {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value));
}

async function startCheckout(provider: PaymentProvider) {
  errorMessage.value = '';
  flashMessage.value = '';
  activeProvider.value = provider;

  try {
    const response = await $fetch<CheckoutStartResponse>(
      `/api/payments/requests/${publicId.value}/checkout`,
      {
        method: 'POST',
        body: { provider },
      },
    );

    if (response.redirectUrl) {
      globalThis.location.href = response.redirectUrl;
      return;
    }

    throw new Error(copy.value.errors.startCheckout);
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : copy.value.errors.startCheckout;
  } finally {
    activeProvider.value = null;
  }
}

async function consumeCallbackQuery() {
  const nextQuery = { ...route.query };
  delete nextQuery.provider;
  delete nextQuery.status;
  delete nextQuery.token;
  await router.replace({ query: nextQuery });
}

async function handleProviderCallback() {
  const provider = route.query.provider;
  const status = route.query.status;
  const token = route.query.token;

  if (
    provider === 'paypal' &&
    status === 'approved' &&
    typeof token === 'string'
  ) {
    activeProvider.value = 'paypal';
    errorMessage.value = '';

    try {
      await $fetch(`/api/payments/requests/${publicId.value}/capture`, {
        method: 'POST',
        body: {
          provider: 'paypal',
          orderId: token,
        },
      });

      flashMessage.value = copy.value.flash.completed;
      await refresh();
    } catch (error) {
      errorMessage.value =
        error instanceof Error
          ? error.message
          : copy.value.errors.confirmCheckout;
    } finally {
      activeProvider.value = null;
      await consumeCallbackQuery();
    }

    return;
  }

  if (provider === 'paypal' && status === 'cancelled') {
    flashMessage.value = copy.value.flash.cancelled;
    await consumeCallbackQuery();
  }
}

onMounted(handleProviderCallback);
</script>
