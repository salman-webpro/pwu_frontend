import { FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Approval } from "@/types/approval";

interface ApprovalItemProps {
  approval: Approval;
}

export function ApprovalItem({ approval }: ApprovalItemProps) {
  return (
    <div className="flex flex-col gap-3 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
          <FileText className="size-4" />
        </div>
        <div>
          <p className="text-sm font-semibold">{approval.title}</p>
          <p className="text-sm text-muted-foreground">{approval.subtitle}</p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2 sm:ml-4">
        <Button variant="outline" size="sm">
          Request changes
        </Button>
        <Button size="sm">Approve</Button>
        <button
          type="button"
          className="cursor-pointer text-sm font-medium text-brand-pink hover:underline"
        >
          View proof
        </button>
      </div>
    </div>
  );
}
