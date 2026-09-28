"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import type { BillingProfile } from "@/lib/mock-data/billing";

interface EditBillingProfileDialogProps {
  profile: BillingProfile;
  onSave: (profile: BillingProfile) => void;
}

const FIELDS: { key: keyof BillingProfile; label: string }[] = [
  { key: "legalName", label: "Legal name" },
  { key: "billingAddress", label: "Billing address" },
  { key: "billingContact", label: "Billing contact" },
  { key: "invoiceEmail", label: "Invoice email" },
  { key: "terms", label: "Terms" },
];

export function EditBillingProfileDialog({
  profile,
  onSave,
}: EditBillingProfileDialogProps) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(profile);

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (next) setDraft(profile);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setOpen(false);
    toast.success("Changes saved.");
    onSave(draft);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger render={<Button variant="outline" size="sm" />}>
        Edit
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit billing profile</DialogTitle>
        </DialogHeader>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {FIELDS.map((field) => (
            <div key={field.key} className="flex flex-col gap-1.5">
              <Label htmlFor={`billing-${field.key}`}>{field.label}</Label>
              <Input
                id={`billing-${field.key}`}
                value={draft[field.key]}
                onChange={(event) =>
                  setDraft((prev) => ({
                    ...prev,
                    [field.key]: event.target.value,
                  }))
                }
              />
            </div>
          ))}

          <DialogFooter>
            <DialogClose render={<Button type="button" variant="outline" />}>
              Cancel
            </DialogClose>
            <Button
              type="submit"
              className="bg-brand-pink text-white hover:bg-brand-pink/90"
            >
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
