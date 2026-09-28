import { PageHeader } from "@/components/dashboard/page-header";
import { OrderCutoffBanner } from "@/components/shared/order-cutoff-banner";
import { NewRequestDialog } from "@/components/shared/new-request-dialog";
import { StatCard } from "@/components/shared/stat-card";
import { TipBanner } from "@/components/shared/tip-banner";
import { NeedsYourDecision } from "@/components/overview/needs-your-decision";
import { ApprovedProductsTable } from "@/components/overview/approved-products-table";
import { BusinessMemorySummaryCard } from "@/components/overview/business-memory-summary";
import { ActivityFeed } from "@/components/overview/activity-feed";
import { Card } from "@/components/ui/card";
import { DEMO_USER } from "@/lib/mock-data/user";
import { DEFAULT_LOCATION_LABEL } from "@/lib/mock-data/locations";
import { APPROVED_PRODUCTS_TOTAL } from "@/lib/mock-data/products";
import {
  DASHBOARD_STATS,
  NEEDS_DECISION_ITEMS,
  APPROVED_PRODUCTS_PREVIEW,
  BUSINESS_MEMORY_SUMMARY,
  ACTIVITY_FEED_ITEMS,
} from "@/lib/mock-data/dashboard";

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Dashboard"
        description="Business Memory is healthy. Two decisions need your attention today."
        location={DEFAULT_LOCATION_LABEL}
        role={DEMO_USER.role}
      />

      <div className="flex flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex-1">
            <OrderCutoffBanner countdown="1h 14m" />
          </div>
          <NewRequestDialog />
        </div>

        <Card className="grid grid-cols-1 divide-y divide-border p-0 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {DASHBOARD_STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </Card>

        <NeedsYourDecision items={NEEDS_DECISION_ITEMS} />

        <ApprovedProductsTable
          products={APPROVED_PRODUCTS_PREVIEW}
          totalCount={APPROVED_PRODUCTS_TOTAL}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <BusinessMemorySummaryCard summary={BUSINESS_MEMORY_SUMMARY} />
          <ActivityFeed items={ACTIVITY_FEED_ITEMS} />
        </div>

        <TipBanner
          lead="No cart. No checkout. No surprises."
          text="Systems preserve the routine — Business Memory preserves the decisions."
        />
      </div>
    </div>
  );
}
