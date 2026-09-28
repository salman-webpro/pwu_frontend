"use client";

import { useState } from "react";
import { FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProofApprovalDialog } from "@/components/shared/proof-approval-dialog";
import type { Approval } from "@/types/approval";

interface ApprovalItemProps {
  approval: Approval;
  onApprove: (id: string) => void;
  onRequestChanges: (id: string, feedback: string) => void;
}

export function ApprovalItem({
  approval,
  onApprove,
  onRequestChanges,
}: ApprovalItemProps) {
  const [dialog, setDialog] = useState<"proof" | "feedback" | null>(null);

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
        <Button
          variant="outline"
          size="sm"
          onClick={() => setDialog("feedback")}
        >
          Request changes
        </Button>
        <Button size="sm" onClick={() => onApprove(approval.id)}>
          Approve
        </Button>
        <button
          type="button"
          onClick={() => setDialog("proof")}
          className="cursor-pointer text-sm font-medium text-brand-pink hover:underline"
        >
          View proof
        </button>
      </div>

      {dialog && (
        <ProofApprovalDialog
          open={Boolean(dialog)}
          onOpenChange={(open) => {
            if (!open) setDialog(null);
          }}
          title={approval.title}
          subtitle={approval.subtitle}
          defaultView={dialog}
          onApprove={() => onApprove(approval.id)}
          onRequestChanges={(feedback) =>
            onRequestChanges(approval.id, feedback)
          }
        />
      )}
    </div>
  );
}
