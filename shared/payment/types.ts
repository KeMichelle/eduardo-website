export const PAYMENT_PROVIDERS = ['paypal'] as const;

export type PaymentProvider = (typeof PAYMENT_PROVIDERS)[number];

export type PaymentRequestStatus =
  | 'draft'
  | 'ready'
  | 'processing'
  | 'paid'
  | 'cancelled'
  | 'expired'
  | 'failed';

export interface PaymentRequestRecord {
  id: string;
  publicId: string;
  description: string;
  customerName?: string;
  customerEmail?: string;
  currency: string;
  amountMinor: number;
  status: PaymentRequestStatus;
  allowedProviders: PaymentProvider[];
  expiresAt: string;
  createdAt: string;
  updatedAt: string;
  createdByIp?: string;
  providerSession?: {
    provider: PaymentProvider;
    providerOrderId: string;
    approvalUrl?: string;
    lastStartedAt: string;
  };
  paidAt?: string;
  providerCaptureId?: string;
  metadata?: Record<string, string>;
}

export interface AdminSessionResponse {
  authenticated: boolean;
  expiresAt?: string;
}

export interface CreatePaymentLinkInput {
  description: string;
  customerName?: string;
  customerEmail?: string;
  currency: string;
  amountMajor: number;
  expiresAt: string;
  allowedProviders: PaymentProvider[];
}

export interface PublicPaymentRequestView {
  publicId: string;
  description: string;
  customerName?: string;
  currency: string;
  amountMajor: string;
  status: PaymentRequestStatus;
  allowedProviders: PaymentProvider[];
  expiresAt: string;
  paidAt?: string;
}

export interface CheckoutStartResponse {
  provider: PaymentProvider;
  redirectUrl?: string;
}
