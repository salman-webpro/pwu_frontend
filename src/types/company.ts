export interface BrandColor {
  hex: string;
}

export interface Company {
  id: string;
  legalName: string;
  displayName: string;
  region: string;
  industry: string;
  accountOwner: string;
  accountSince: string;
  taxId?: string;
  brandColors: BrandColor[];
  requireApprovalOnNewArtwork: boolean;
  emailOnProduction: boolean;
  weeklySpendSummary: boolean;
}
