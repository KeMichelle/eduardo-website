import { createError } from 'h3';

import type { PaymentRequestRecord } from '~/shared/payment/types';
import {
  assertPaymentSiteUrl,
  getPaymentConfig,
} from '~/server/utils/payments/config';
import { toMajorUnitsString } from '~/server/utils/payments/amount';

interface PayPalAccessTokenResponse {
  access_token: string;
}

interface PayPalCreateOrderResponse {
  id: string;
  links?: Array<{ rel: string; href: string }>;
}

interface PayPalCaptureResponse {
  id: string;
  status: string;
  purchase_units?: Array<{
    payments?: {
      captures?: Array<{
        id: string;
        status: string;
      }>;
    };
  }>;
}

async function getPayPalAccessToken() {
  const { paypal } = getPaymentConfig();

  if (!paypal.clientId || !paypal.clientSecret) {
    throw createError({
      statusCode: 503,
      statusMessage: 'PayPal credentials are not configured.',
    });
  }

  const basicAuth = Buffer.from(
    `${paypal.clientId}:${paypal.clientSecret}`,
    'utf8',
  ).toString('base64');

  const response = await $fetch<PayPalAccessTokenResponse>(
    `${paypal.baseUrl}/v1/oauth2/token`,
    {
      method: 'POST',
      headers: {
        authorization: `Basic ${basicAuth}`,
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    },
  );

  return response.access_token;
}

export async function createPayPalCheckout(record: PaymentRequestRecord) {
  const accessToken = await getPayPalAccessToken();
  const siteUrl = assertPaymentSiteUrl();

  const response = await $fetch<PayPalCreateOrderResponse>(
    `${getPaymentConfig().paypal.baseUrl}/v2/checkout/orders`,
    {
      method: 'POST',
      headers: {
        authorization: `Bearer ${accessToken}`,
        'content-type': 'application/json',
      },
      body: {
        intent: 'CAPTURE',
        purchase_units: [
          {
            reference_id: record.publicId,
            custom_id: record.id,
            invoice_id: record.publicId,
            description: record.description,
            amount: {
              currency_code: record.currency,
              value: toMajorUnitsString(record.amountMinor),
            },
          },
        ],
        application_context: {
          brand_name: 'EDUP Global Flex',
          shipping_preference: 'NO_SHIPPING',
          user_action: 'PAY_NOW',
          return_url: `${siteUrl}/pay/${record.publicId}?provider=paypal&status=approved`,
          cancel_url: `${siteUrl}/pay/${record.publicId}?provider=paypal&status=cancelled`,
        },
      },
    },
  );

  const approvalUrl = response.links?.find(
    (link) => link.rel === 'approve',
  )?.href;

  if (!approvalUrl) {
    throw createError({
      statusCode: 502,
      statusMessage: 'PayPal did not return an approval URL.',
    });
  }

  return {
    providerOrderId: response.id,
    approvalUrl,
  };
}

export async function capturePayPalCheckout(orderId: string) {
  const accessToken = await getPayPalAccessToken();
  const response = await $fetch<PayPalCaptureResponse>(
    `${getPaymentConfig().paypal.baseUrl}/v2/checkout/orders/${orderId}/capture`,
    {
      method: 'POST',
      headers: {
        authorization: `Bearer ${accessToken}`,
        'content-type': 'application/json',
      },
    },
  );

  const capture = response.purchase_units?.[0]?.payments?.captures?.[0];

  if (response.status !== 'COMPLETED' && capture?.status !== 'COMPLETED') {
    throw createError({
      statusCode: 502,
      statusMessage: 'PayPal payment was not completed.',
    });
  }

  return {
    providerOrderId: response.id,
    captureId: capture?.id,
  };
}
