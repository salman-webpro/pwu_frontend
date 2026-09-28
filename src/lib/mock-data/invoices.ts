import type { Invoice } from "@/types/invoice";

export const DEMO_INVOICES: Invoice[] = [
  {
    id: "inv-1042",
    orderName: 'Postcards 6"×9" — reorder',
    orderRef: "ORD-1042",
    date: "Aug 18, 2026",
    location: "Downtown — Main St",
    amount: 310.0,
    status: "paid",
  },
  {
    id: "inv-1038",
    orderName: "Appointment Cards, 500ct",
    orderRef: "ORD-1038",
    date: "Aug 04, 2026",
    location: "Ballard",
    amount: 186.5,
    status: "paid",
  },
  {
    id: "inv-1029",
    orderName: "New Patient Folders",
    orderRef: "ORD-1029",
    date: "Jul 22, 2026",
    location: "Eastside — Bellevue",
    amount: 742.1,
    status: "paid",
  },
  {
    id: "inv-1021",
    orderName: 'Postcards 6"×9" — reorder',
    orderRef: "ORD-1021",
    date: "Jul 09, 2026",
    location: "Downtown — Main St",
    amount: 310.0,
    status: "paid",
  },
];

// "billed, last 90 days" summary — spans more invoices than the 4 shown
// above (see "View all"), so it's kept as its own fixture rather than a
// sum of DEMO_INVOICES.
export const BILLED_LAST_90_DAYS = 4860;
export const BILLED_DELTA_VS_PRIOR_PERIOD = 1240;
