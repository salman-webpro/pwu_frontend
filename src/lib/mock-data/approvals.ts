import type { Approval } from "@/types/approval";

// Order matches the "All" tab mockup (05(b)) — most recent first.
export const ALL_APPROVALS: Approval[] = [
  {
    id: "fall-postcard-mailer-v2",
    title: "Fall Postcard Mailer — Proof v2",
    subtitle: 'Postcards 6"×9" · Reorder batch of 500',
    status: "awaiting",
    requestedAt: "2 days ago",
    statusNote: "Submitted 2 days ago",
  },
  {
    id: "business-card-refresh",
    title: "Business Card Refresh — Dr. Alvarez",
    subtitle: "Business Cards · Qty 1,000",
    status: "awaiting",
    requestedAt: "2 days ago",
    statusNote: "Submitted 2 days ago",
  },
  {
    id: "flyer-back-to-school-promo",
    title: "Flyer — Back to School Promo",
    subtitle: "Flyers 8.5×11 · Qty 1,000",
    status: "approved",
    requestedAt: "Aug 10",
    statusNote: "Approved Aug 10",
  },
  {
    id: "brochure-trifold-services",
    title: "Brochure Tri-Fold — Services",
    subtitle: "Brochures Tri-Fold · Qty 500",
    status: "changes-requested",
    requestedAt: "Aug 8",
    statusNote: "Requested Aug 8",
  },
  {
    id: "banner-grand-opening",
    title: "Banner — Grand Opening",
    subtitle: "Banners · Qty 2",
    status: "approved",
    requestedAt: "Aug 5",
    statusNote: "Approved Aug 5",
  },
];

export const APPROVALS_SUMMARY =
  "Avg. response time 9 hrs · oldest item waiting 2 days";
