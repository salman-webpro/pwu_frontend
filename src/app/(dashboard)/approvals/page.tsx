import { PageHeader } from "@/components/dashboard/page-header";
import { TipBanner } from "@/components/shared/tip-banner";
import { ApprovalsBoard } from "@/components/approvals/approvals-board";
import { DEMO_USER } from "@/lib/mock-data/user";
import { DEFAULT_LOCATION_LABEL } from "@/lib/mock-data/locations";
import { ALL_APPROVALS, APPROVALS_SUMMARY } from "@/lib/mock-data/approvals";

export default function ApprovalsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Approvals"
        description="Proofs and revisions wait here before anything goes to print. Every decision is saved to your Business Memory."
        location={DEFAULT_LOCATION_LABEL}
        role={DEMO_USER.role}
      />

      <div className="flex flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <ApprovalsBoard
          initialApprovals={ALL_APPROVALS}
          summary={APPROVALS_SUMMARY}
        />

        <TipBanner
          lead="Every decision is on file."
          text="Approvals and revision notes save to Business Memory, so no job starts from a blank page."
        />
      </div>
    </div>
  );
}
