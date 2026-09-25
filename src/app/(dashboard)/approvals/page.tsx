import { PageHeader } from "@/components/dashboard/page-header";
import { TipBanner } from "@/components/shared/tip-banner";
import { TabCountBadge } from "@/components/shared/tab-count-badge";
import { ApprovalsList } from "@/components/approvals/approvals-list";
import { ApprovalSummaryGrid } from "@/components/approvals/approval-summary-grid";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { DEMO_USER } from "@/lib/mock-data/user";
import { DEFAULT_LOCATION_LABEL } from "@/lib/mock-data/locations";
import { ALL_APPROVALS, APPROVALS_SUMMARY } from "@/lib/mock-data/approvals";

export default function ApprovalsPage() {
  const awaitingApprovals = ALL_APPROVALS.filter(
    (approval) => approval.status === "awaiting",
  );
  const approvedApprovals = ALL_APPROVALS.filter(
    (approval) => approval.status === "approved",
  );
  const changesRequestedApprovals = ALL_APPROVALS.filter(
    (approval) => approval.status === "changes-requested",
  );

  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Approvals"
        description="Proofs and revisions wait here before anything goes to print. Every decision is saved to your Business Memory."
        location={DEFAULT_LOCATION_LABEL}
        role={DEMO_USER.role}
      />

      <div className="flex flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <Tabs defaultValue="awaiting">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <TabsList>
              <TabsTrigger
                value="awaiting"
                className="gap-1.5 data-active:text-brand-pink"
              >
                Awaiting Approval
                <TabCountBadge count={awaitingApprovals.length} />
              </TabsTrigger>
              <TabsTrigger
                value="approved"
                className="gap-1.5 data-active:text-brand-pink"
              >
                Approved
                <TabCountBadge count={approvedApprovals.length} />
              </TabsTrigger>
              <TabsTrigger
                value="changes-requested"
                className="gap-1.5 data-active:text-brand-pink"
              >
                Changes Requested
                <TabCountBadge count={changesRequestedApprovals.length} />
              </TabsTrigger>
              <TabsTrigger
                value="all"
                className="gap-1.5 data-active:text-brand-pink"
              >
                All
                <TabCountBadge count={ALL_APPROVALS.length} />
              </TabsTrigger>
            </TabsList>
            <p className="text-sm whitespace-nowrap text-muted-foreground">
              {APPROVALS_SUMMARY}
            </p>
          </div>

          <TabsContent value="awaiting" className="mt-4 flex flex-col gap-4">
            <p className="text-sm text-muted-foreground">
              Nothing moves to production until you approve or request
              changes here.
            </p>
            <ApprovalsList approvals={awaitingApprovals} />
          </TabsContent>

          <TabsContent value="approved" className="mt-4 flex flex-col gap-4">
            <p className="text-sm text-muted-foreground">
              Approved proofs — ready for production.
            </p>
            <ApprovalSummaryGrid approvals={approvedApprovals} />
          </TabsContent>

          <TabsContent
            value="changes-requested"
            className="mt-4 flex flex-col gap-4"
          >
            <p className="text-sm text-muted-foreground">
              Proofs sent back for revision.
            </p>
            <ApprovalSummaryGrid approvals={changesRequestedApprovals} />
          </TabsContent>

          <TabsContent value="all" className="mt-4 flex flex-col gap-4">
            <p className="text-sm text-muted-foreground">
              Everything decided or waiting, most recent first.
            </p>
            <ApprovalSummaryGrid approvals={ALL_APPROVALS} />
          </TabsContent>
        </Tabs>

        <TipBanner
          lead="Every decision is on file."
          text="Approvals and revision notes save to Business Memory, so no job starts from a blank page."
        />
      </div>
    </div>
  );
}
