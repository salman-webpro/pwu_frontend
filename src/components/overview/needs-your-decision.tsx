"use client";

import { useState } from "react";
import { CreditCard, Mail, type LucideIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ConfirmBillingProfileDialog } from "@/components/shared/confirm-billing-profile-dialog";
import { ProofApprovalDialog } from "@/components/shared/proof-approval-dialog";
import { cn } from "@/lib/utils";
import type { DecisionItem } from "@/lib/mock-data/dashboard";

interface NeedsYourDecisionProps {
  items: DecisionItem[];
}

const ICON_TONE_STYLES: Record<DecisionItem["iconTone"], string> = {
  pink: "bg-brand-pink/10 text-brand-pink",
  amber: "bg-amber-50 text-amber-600",
};

const ICON_BY_KIND: Record<DecisionItem["kind"], LucideIcon> = {
  proof: Mail,
  billing: CreditCard,
};

export function NeedsYourDecision({ items }: NeedsYourDecisionProps) {
  const [resolvedIds, setResolvedIds] = useState<string[]>([]);
  const [proofDialog, setProofDialog] = useState<{
    item: DecisionItem;
    view: "proof" | "feedback";
  } | null>(null);

  const visibleItems = items.filter((item) => !resolvedIds.includes(item.id));

  function resolve(id: string) {
    setResolvedIds((prev) => [...prev, id]);
  }

  return (
    <>
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center gap-2">
            <CardTitle>Needs your decision</CardTitle>
            <span className="flex size-5 items-center justify-center rounded-full bg-brand-pink text-xs font-bold text-white">
              {visibleItems.length}
            </span>
          </div>
        </CardHeader>
        <CardContent className="divide-y divide-border p-0">
          {visibleItems.length === 0 && (
            <p className="px-(--card-spacing) py-4 text-sm text-muted-foreground">
              Nothing waiting on you right now.
            </p>
          )}
          {visibleItems.map((item) => {
            const Icon = ICON_BY_KIND[item.kind];
            return (
              <div
                key={item.id}
                className="flex flex-col gap-3 px-(--card-spacing) py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "flex size-9 shrink-0 items-center justify-center rounded-lg",
                      ICON_TONE_STYLES[item.iconTone],
                    )}
                  >
                    <Icon className="size-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 gap-2 sm:ml-4">
                  {item.kind === "proof" ? (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setProofDialog({ item, view: "feedback" })
                        }
                      >
                        Request changes
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => setProofDialog({ item, view: "proof" })}
                      >
                        Approve proof
                      </Button>
                    </>
                  ) : (
                    <ConfirmBillingProfileDialog
                      triggerLabel="Review & sign off"
                      onConfirmed={() => resolve(item.id)}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {proofDialog && (
        <ProofApprovalDialog
          open={Boolean(proofDialog)}
          onOpenChange={(open) => {
            if (!open) setProofDialog(null);
          }}
          title={proofDialog.item.title}
          subtitle={proofDialog.item.subtitle}
          defaultView={proofDialog.view}
          onApprove={() => {
            resolve(proofDialog.item.id);
            toast.success(
              `${proofDialog.item.title} approved — released to production.`,
            );
          }}
          onRequestChanges={() => {
            toast.info(
              "Feedback sent — a revised proof will appear here soon.",
            );
          }}
        />
      )}
    </>
  );
}
