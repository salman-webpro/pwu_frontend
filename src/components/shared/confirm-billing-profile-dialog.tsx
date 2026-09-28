"use client";

import { useState, type ComponentProps } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { DEMO_BILLING_PROFILE } from "@/lib/mock-data/billing";

interface ConfirmBillingProfileDialogProps {
  triggerLabel?: string;
  triggerVariant?: ComponentProps<typeof Button>["variant"];
  triggerSize?: ComponentProps<typeof Button>["size"];
  onConfirmed?: () => void;
}

export function ConfirmBillingProfileDialog({
  triggerLabel = "Review & sign off",
  triggerVariant = "default",
  triggerSize = "sm",
  onConfirmed,
}: ConfirmBillingProfileDialogProps) {
  const [open, setOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (next) setConfirmed(false);
  }

  function handleConfirm() {
    if (!confirmed) {
      toast.warning("Check the box to confirm before signing off.");
      return;
    }
    setOpen(false);
    toast.success("Billing profile confirmed.");
    onConfirmed?.();
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger render={<Button variant={triggerVariant} size={triggerSize} />}>
        {triggerLabel}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Confirm billing profile</DialogTitle>
          <DialogDescription>{DEMO_BILLING_PROFILE.legalName}</DialogDescription>
        </DialogHeader>

        <div className="divide-y divide-border rounded-lg bg-muted/50 text-sm">
          <SummaryRow label="Billing address" value={DEMO_BILLING_PROFILE.billingAddress} />
          <SummaryRow label="Billing contact" value={DEMO_BILLING_PROFILE.billingContact} />
          <SummaryRow label="Terms" value={DEMO_BILLING_PROFILE.terms} />
        </div>

        <Label className="items-start gap-2 font-normal">
          <Checkbox
            checked={confirmed}
            onCheckedChange={(checked) => setConfirmed(checked === true)}
            className="mt-0.5"
          />
          <span className="text-sm text-foreground">
            I confirm these billing details are correct and authorize charges
            on submitted orders.
          </span>
        </Label>

        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <Button
            onClick={handleConfirm}
            className="bg-brand-pink text-white hover:bg-brand-pink/90"
          >
            Confirm & sign off
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between px-3 py-2">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
