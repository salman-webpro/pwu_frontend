// Drives Company Profile's completeness bar. Computed on the frontend
// since every checklist item is already loaded on that page — no need to
// round-trip to a backend for a value derived entirely from on-screen
// data. Revisit if the checklist ever needs data this page doesn't
// already fetch (e.g. counts from other screens).
export interface ProfileCompletenessInput {
  legalName: string;
  industry: string;
  accountOwner: string;
  taxId?: string;
  hasAddressOnFile: boolean;
}

const CHECKLIST_SIZE = 5;

export function computeProfileCompleteness({
  legalName,
  industry,
  accountOwner,
  taxId,
  hasAddressOnFile,
}: ProfileCompletenessInput): number {
  const checks = [
    Boolean(legalName.trim()),
    Boolean(industry.trim()),
    Boolean(accountOwner.trim()),
    Boolean(taxId?.trim()),
    hasAddressOnFile,
  ];
  const completedCount = checks.filter(Boolean).length;
  return Math.round((completedCount / CHECKLIST_SIZE) * 100);
}
