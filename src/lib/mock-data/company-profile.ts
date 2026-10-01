// The two address summaries shown on the Company Profile screen. These
// are display-only fixtures for this screen — the full, editable
// location list lives in mock-data/locations.ts instead. Profile
// completeness is computed (see lib/profile-completeness.ts), not a
// fixture.

export interface CompanyAddressSummary {
  id: string;
  label: string;
  lines: string[];
}

export const COMPANY_ADDRESSES: CompanyAddressSummary[] = [
  {
    id: "mailing",
    label: "Business card mailing — Dr. Alvarez",
    lines: ["220 Harborview Rd, Suite 4", "Annapolis, MD 21401"],
  },
  {
    id: "delivery",
    label: "Primary delivery location",
    lines: [
      "220 Harborview Rd, Suite 4",
      "Annapolis, MD 21401 · 3-day delivery",
    ],
  },
];
