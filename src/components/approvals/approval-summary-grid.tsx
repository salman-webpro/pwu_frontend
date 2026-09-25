import { ApprovalSummaryCard } from "@/components/approvals/approval-summary-card";
import type { Approval } from "@/types/approval";

interface ApprovalSummaryGridProps {
  approvals: Approval[];
}

export function ApprovalSummaryGrid({ approvals }: ApprovalSummaryGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {approvals.map((approval) => (
        <ApprovalSummaryCard key={approval.id} approval={approval} />
      ))}
    </div>
  );
}
