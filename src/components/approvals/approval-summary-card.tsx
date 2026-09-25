import { Card, CardContent } from "@/components/ui/card";
import { StatusBadge } from "@/components/shared/status-badge";
import type { Approval, ApprovalStatus } from "@/types/approval";

const APPROVAL_STATUS_LABELS: Record<ApprovalStatus, string> = {
  awaiting: "Awaiting",
  approved: "Approved",
  "changes-requested": "Changes requested",
};

interface ApprovalSummaryCardProps {
  approval: Approval;
}

export function ApprovalSummaryCard({ approval }: ApprovalSummaryCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-start gap-2">
        <StatusBadge
          tone={approval.status}
          label={APPROVAL_STATUS_LABELS[approval.status]}
        />
        <p className="text-sm font-semibold">{approval.title}</p>
        <p className="text-sm text-muted-foreground">{approval.statusNote}</p>
      </CardContent>
    </Card>
  );
}
