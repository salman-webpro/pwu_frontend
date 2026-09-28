import { Check, Sparkles } from "lucide-react";

import { PageHeader } from "@/components/dashboard/page-header";
import { BillingProfileCard } from "@/components/billing-payment/billing-profile-card";
import { InvoiceHistoryTable } from "@/components/billing-payment/invoice-history-table";
import { PaymentMethodCard } from "@/components/billing-payment/payment-method-card";
import { TipBanner } from "@/components/shared/tip-banner";
import { DEMO_USER } from "@/lib/mock-data/user";
import { DEFAULT_LOCATION_LABEL } from "@/lib/mock-data/locations";
import { DEMO_BILLING_PROFILE } from "@/lib/mock-data/billing";
import {
  BILLED_DELTA_VS_PRIOR_PERIOD,
  BILLED_LAST_90_DAYS,
  DEMO_INVOICES,
} from "@/lib/mock-data/invoices";

export default function BillingPaymentPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Billing & payment"
        description="One final price per order, freight and tax already absorbed. Tax appears once — on the invoice, never as a line item at checkout."
        location={DEFAULT_LOCATION_LABEL}
        role={DEMO_USER.role}
      />
      <div className="flex flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-green-50 px-3 py-1.5 text-sm font-medium text-green-700">
            <Check className="size-4" />
            Auto-pay active
          </span>
          <div className="text-right">
            <p className="text-3xl font-bold">
              ${BILLED_LAST_90_DAYS.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">
              billed, last 90 days
            </p>
            <p className="text-sm font-medium text-green-600">
              ↑ ${BILLED_DELTA_VS_PRIOR_PERIOD.toLocaleString()} vs prior
              period
            </p>
          </div>
        </div>

        <InvoiceHistoryTable invoices={DEMO_INVOICES} />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <BillingProfileCard profile={DEMO_BILLING_PROFILE} />
          <PaymentMethodCard />
        </div>

        <TipBanner
          icon={Sparkles}
          lead="Every price you see is the price you pay."
          text="Production, freight, and margin are folded in before an order ever reaches you."
        />
        <TipBanner
          lead="One price. No hidden fees."
          text="Production, freight, and margin are already folded in — tax is the only thing that appears separately, on the invoice."
        />
      </div>
    </div>
  );
}
