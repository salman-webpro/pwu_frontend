import { PageHeader } from "@/components/dashboard/page-header";
import { DEMO_USER } from "@/lib/mock-data/user";
import { DEFAULT_LOCATION_LABEL } from "@/lib/mock-data/locations";

export default function BillingPaymentPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Billing & payment"
        description="One final price per order, freight and tax already absorbed. Tax appears once — on the invoice, never as a line item at checkout."
        location={DEFAULT_LOCATION_LABEL}
        role={DEMO_USER.role}
      />
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          Content for this screen is coming next.
        </p>
      </div>
    </div>
  );
}
