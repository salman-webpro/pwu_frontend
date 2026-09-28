"use client";

import { useState } from "react";

import { EditCompanyInfoDialog } from "@/components/company-profile/edit-company-info-dialog";
import type { Company } from "@/types/company";

interface CompanyDetailsCardProps {
  company: Company;
}

function DetailCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </p>
      <p className="mt-1 font-semibold">{value}</p>
    </div>
  );
}

export function CompanyDetailsCard({ company: initialCompany }: CompanyDetailsCardProps) {
  const [company, setCompany] = useState(initialCompany);

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">Company details</h2>
          <p className="text-sm text-muted-foreground">
            What we print, bill, and ship under.
          </p>
        </div>
        <EditCompanyInfoDialog
          company={company}
          onSave={(updates) =>
            setCompany((prev) => ({
              ...prev,
              legalName: updates.legalName,
              industry: updates.industry,
              accountOwner: updates.accountOwner,
              taxId: updates.taxId.trim() ? updates.taxId : undefined,
            }))
          }
        />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <DetailCell label="Legal business name" value={company.legalName} />
        <DetailCell label="Industry" value={company.industry} />
        <DetailCell label="Account owner" value={company.accountOwner} />
        <DetailCell label="Account since" value={company.accountSince} />
      </div>

      <div className="mt-4 rounded-xl border border-border bg-card p-4">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Tax ID / EIN
        </p>
        {company.taxId ? (
          <p className="mt-1 font-semibold">{company.taxId}</p>
        ) : (
          <p className="mt-1 font-semibold text-amber-600">
            Not on file — add before your first invoice
          </p>
        )}
      </div>
    </div>
  );
}
