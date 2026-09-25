import { Card, CardContent } from "@/components/ui/card";
import { ApprovalItem } from "@/components/approvals/approval-item";
import type { Approval } from "@/types/approval";

interface ApprovalsListProps {
  approvals: Approval[];
}

export function ApprovalsList({ approvals }: ApprovalsListProps) {
  return (
    <Card>
      <CardContent className="divide-y divide-border">
        {approvals.map((approval) => (
          <ApprovalItem key={approval.id} approval={approval} />
        ))}
      </CardContent>
    </Card>
  );
}
