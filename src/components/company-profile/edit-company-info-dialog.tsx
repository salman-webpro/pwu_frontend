"use client";

import { useState, type FormEvent } from "react";
import { Pencil } from "lucide-react";
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
import type { Company } from "@/types/company";

export interface CompanyInfoDraft {
  legalName: string;
  industry: string;
  accountOwner: string;
  taxId: string;
}

interface EditCompanyInfoDialogProps {
  company: Company;
  onSave: (updates: CompanyInfoDraft) => void;
}

function toDraft(company: Company): CompanyInfoDraft {
  return {
    legalName: company.legalName,
    industry: company.industry,
    accountOwner: company.accountOwner,
    taxId: company.taxId ?? "",
  };
}

const FIELDS: { key: keyof CompanyInfoDraft; label: string; placeholder?: string }[] = [
  { key: "legalName", label: "Legal business name" },
  { key: "industry", label: "Industry" },
  { key: "accountOwner", label: "Account owner" },
  { key: "taxId", label: "Tax ID / EIN", placeholder: "e.g. 12-3456789" },
];

export function EditCompanyInfoDialog({
  company,
  onSave,
}: EditCompanyInfoDialogProps) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<CompanyInfoDraft>(() => toDraft(company));

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (next) setDraft(toDraft(company));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setOpen(false);
    toast.success("Changes saved.");
    onSave(draft);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            size="sm"
            className="border-brand-pink text-brand-pink hover:bg-brand-pink/10 hover:text-brand-pink"
          />
        }
      >
        <Pencil data-icon="inline-start" />
        Edit info
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit company info</DialogTitle>
        </DialogHeader>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {FIELDS.map((field) => (
            <div key={field.key} className="flex flex-col gap-1.5">
              <Label htmlFor={`company-${field.key}`}>{field.label}</Label>
              <Input
                id={`company-${field.key}`}
                value={draft[field.key]}
                placeholder={field.placeholder}
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
