export interface BillingProfile {
  legalName: string;
  billingAddress: string;
  billingContact: string;
  invoiceEmail: string;
  terms: string;
}

// Shared between the Billing & Payment screen and Dashboard's
// "Confirm billing profile" sign-off dialog — both mockups show the same
// billing record.
export const DEMO_BILLING_PROFILE: BillingProfile = {
  legalName: "Harborview Dental Group, PLLC",
  billingAddress: "412 Main St, Seattle, WA 98104",
  billingContact: "Priya Nair",
  invoiceEmail: "billing@harborviewdental.com",
  terms: "Due on receipt",
};
