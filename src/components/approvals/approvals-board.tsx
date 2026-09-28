"use client";

import { useState } from "react";
import { toast } from "sonner";

import { TabCountBadge } from "@/components/shared/tab-count-badge";
import { ApprovalsList } from "@/components/approvals/approvals-list";
import { ApprovalSummaryGrid } from "@/components/approvals/approval-summary-grid";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import type { Approval } from "@/types/approval";

interface ApprovalsBoardProps {
  initialApprovals: Approval[];
  summary: string;
}

export function ApprovalsBoard({
  initialApprovals,
  summary,
}: ApprovalsBoardProps) {
  const [approvals, setApprovals] = useState(initialApprovals);

  const awaitingApprovals = approvals.filter((a) => a.status === "awaiting");
  const approvedApprovals = approvals.filter((a) => a.status === "approved");
  const changesRequestedApprovals = approvals.filter(
    (a) => a.status === "changes-requested",
  );

  function handleApprove(id: string) {
    const approval = approvals.find((a) => a.id === id);
    if (!approval) return;
    setApprovals((prev) =>
      prev.map((a) =>
        a.id === id
          ? { ...a, status: "approved", statusNote: "Approved just now" }
          : a,
      ),
    );
    toast.success(`${approval.title} approved — released to production.`);
  }

  function handleRequestChanges(id: string) {
    setApprovals((prev) =>
      prev.map((a) =>
        a.id === id
          ? {
              ...a,
              status: "changes-requested",
              statusNote: "Requested just now",
            }
          : a,
      ),
    );
    toast.info("Feedback sent — a revised proof will appear here soon.");
  }

  return (
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
          <TabsTrigger value="all" className="gap-1.5 data-active:text-brand-pink">
            All
            <TabCountBadge count={approvals.length} />
          </TabsTrigger>
        </TabsList>
        <p className="text-sm whitespace-nowrap text-muted-foreground">
          {summary}
        </p>
      </div>

      <TabsContent value="awaiting" className="mt-4 flex flex-col gap-4">
        <p className="text-sm text-muted-foreground">
          Nothing moves to production until you approve or request changes
          here.
        </p>
        <ApprovalsList
          approvals={awaitingApprovals}
          onApprove={handleApprove}
          onRequestChanges={handleRequestChanges}
        />
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
        <ApprovalSummaryGrid approvals={approvals} />
      </TabsContent>
    </Tabs>
  );
}
