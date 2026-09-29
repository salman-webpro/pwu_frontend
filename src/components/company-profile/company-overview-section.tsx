"use client";

import { useState } from "react";

import { CompanyDetailsCard } from "@/components/company-profile/company-details-card";
import { ProfileCompleteness } from "@/components/company-profile/profile-completeness";
import { computeProfileCompleteness } from "@/lib/profile-completeness";
import type { Company } from "@/types/company";

interface CompanyOverviewSectionProps {
  company: Company;
  hasAddressOnFile: boolean;
}

export function CompanyOverviewSection({
  company: initialCompany,
  hasAddressOnFile,
}: CompanyOverviewSectionProps) {
  const [company, setCompany] = useState(initialCompany);

  const percent = computeProfileCompleteness({
    legalName: company.legalName,
    industry: company.industry,
    accountOwner: company.accountOwner,
    taxId: company.taxId,
    hasAddressOnFile,
  });

  return (
    <>
      <ProfileCompleteness percent={percent} />
      <CompanyDetailsCard
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
    </>
  );
}
