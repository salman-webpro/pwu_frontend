import type { Company } from "@/types/company";

export const DEMO_COMPANY: Company = {
  id: "harborview-dental",
  legalName: "Harborview Dental Group LLC",
  displayName: "Harborview Dental Group",
  region: "USA",
  industry: "Healthcare — Dental Practice",
  accountOwner: "Dr. Maria Alvarez",
  accountSince: "January 2026",
  brandColors: [
    { hex: "#0b0e1a" },
    { hex: "#EC0868" },
    { hex: "#c08a2e" },
    { hex: "#f2e8dc" },
  ],
  requireApprovalOnNewArtwork: true,
  emailOnProduction: true,
  weeklySpendSummary: false,
};
