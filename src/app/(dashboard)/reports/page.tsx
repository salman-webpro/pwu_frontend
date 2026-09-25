import { PageHeader } from "@/components/dashboard/page-header";
import { TipBanner } from "@/components/shared/tip-banner";
import { RecentOrdersTable } from "@/components/reports/recent-orders-table";
import { SpendPerformanceSection } from "@/components/reports/spend-performance-section";
import { DEMO_USER } from "@/lib/mock-data/user";
import { DEFAULT_LOCATION_LABEL } from "@/lib/mock-data/locations";
import {
  AT_A_GLANCE_BY_RANGE,
  RECENT_ORDERS,
  RECENT_ORDERS_SUMMARY,
  SPEND_BY_RANGE,
  SPEND_TIME_RANGES,
} from "@/lib/mock-data/reports";

export default function ReportsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Reports"
        description="Orders, spend, and turnaround — everything on record since your account began."
        location={DEFAULT_LOCATION_LABEL}
        role={DEMO_USER.role}
      />

      <div className="flex flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <RecentOrdersTable
          orders={RECENT_ORDERS}
          summary={RECENT_ORDERS_SUMMARY}
        />

        <div>
          <h2 className="text-lg font-semibold">Spend & performance</h2>
          <p className="text-sm text-muted-foreground">
            How Print Wave activity has trended for your account.
          </p>
        </div>

        <SpendPerformanceSection
          timeRanges={SPEND_TIME_RANGES}
          spendByRange={SPEND_BY_RANGE}
          atAGlanceByRange={AT_A_GLANCE_BY_RANGE}
        />

        <TipBanner
          lead="Your record, always current."
          text="Every order updates Business Memory automatically — reorder from history any time."
        />
      </div>
    </div>
  );
}
