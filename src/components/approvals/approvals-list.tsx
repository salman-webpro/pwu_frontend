import { Card, CardContent } from "@/components/ui/card";
import { ApprovalItem } from "@/components/approvals/approval-item";
import type { Approval } from "@/types/approval";

interface ApprovalsListProps {
  approvals: Approval[];
  onApprove: (id: string) => void;
  onRequestChanges: (id: string, feedback: string) => void;
}

export function ApprovalsList({
  approvals,
  onApprove,
  onRequestChanges,
}: ApprovalsListProps) {
  return (
    <Card>
      <CardContent className="divide-y divide-border">
        {approvals.map((approval) => (
          <ApprovalItem
            key={approval.id}
            approval={approval}
            onApprove={onApprove}
            onRequestChanges={onRequestChanges}
          />
        ))}
      </CardContent>
    </Card>
  );
}
