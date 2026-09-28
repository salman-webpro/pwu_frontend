import type { Order } from "@/types/order";

export const RECENT_ORDERS: Order[] = [
  {
    id: "10482",
    orderNumber: "#10482",
    productName: "Fall Postcard Mailer",
    quantity: 2900,
    placedDate: "Aug 11, 2026",
    deliveryDate: "",
    status: "in-production",
    total: 310,
  },
  {
    id: "10481",
    orderNumber: "#10481",
    productName: "Business Card Refresh",
    quantity: 500,
    placedDate: "Aug 9, 2026",
    deliveryDate: "",
    status: "approved",
    total: 145,
  },
  {
    id: "10479",
    orderNumber: "#10479",
    productName: "Back to School Promo",
    quantity: 2,
    placedDate: "Aug 4, 2026",
    deliveryDate: "",
    status: "shipped",
    total: 390,
  },
  {
    id: "10475",
    orderNumber: "#10475",
    productName: "Foam Board Signs",
    quantity: 10,
    placedDate: "Jul 28, 2026",
    deliveryDate: "",
    status: "needs-attention",
    total: 220,
  },
  {
    id: "10470",
    orderNumber: "#10470",
    productName: "Grand Opening Banner",
    quantity: 250,
    placedDate: "Jul 20, 2026",
    deliveryDate: "",
    status: "shipped",
    total: 465,
  },
];

export const RECENT_ORDERS_SUMMARY =
  "12 orders since Jan 2026 · reorder any of these in one step from your Business Memory.";

export type SpendTimeRangeId =
  | "this-month"
  | "this-quarter"
  | "this-year"
  | "all-time";

export interface SpendTimeRange {
  id: SpendTimeRangeId;
  label: string;
}

export const SPEND_TIME_RANGES: SpendTimeRange[] = [
  { id: "this-month", label: "This Month" },
  { id: "this-quarter", label: "This Quarter" },
  { id: "this-year", label: "This Year" },
  { id: "all-time", label: "All Time" },
];

export interface SpendDataPoint {
  label: string;
  amount: number;
}

export interface SpendChartData {
  title: string;
  description: string;
  points: SpendDataPoint[];
  highlightLabel: string;
}

// Granularity changes with range — weeks within the current month,
// months within the quarter/year, years for all-time. Each range's
// points sum to that range's "Total spend" stat below, so the chart
// and the stat card always agree.
export const SPEND_BY_RANGE: Record<SpendTimeRangeId, SpendChartData> = {
  "this-month": {
    title: "Spend by week",
    description: "Weekly spend so far this month.",
    points: [
      { label: "Week 1", amount: 190 },
      { label: "Week 2", amount: 240 },
      { label: "Week 3", amount: 210 },
      { label: "Week 4", amount: 220 },
    ],
    highlightLabel: "Week 4",
  },
  "this-quarter": {
    title: "Spend by month",
    description: "Monthly spend this quarter.",
    points: [
      { label: "Jun", amount: 610 },
      { label: "Jul", amount: 470 },
      { label: "Aug", amount: 860 },
    ],
    highlightLabel: "Aug",
  },
  "this-year": {
    title: "Spend by month",
    description: "What went through Print Wave, month over month.",
    points: [
      { label: "Jan", amount: 380 },
      { label: "Feb", amount: 290 },
      { label: "Mar", amount: 460 },
      { label: "Apr", amount: 520 },
      { label: "May", amount: 410 },
      { label: "Jun", amount: 610 },
      { label: "Jul", amount: 470 },
      { label: "Aug", amount: 860 },
    ],
    highlightLabel: "Aug",
  },
  "all-time": {
    title: "Spend by year",
    description: "Total spend since your account began.",
    points: [
      { label: "2024", amount: 1200 },
      { label: "2025", amount: 1800 },
      { label: "2026", amount: 1860 },
    ],
    highlightLabel: "2026",
  },
};

export interface AtAGlanceStat {
  label: string;
  value: string;
  note: string;
  noteTone?: "positive";
}

export const AT_A_GLANCE_BY_RANGE: Record<SpendTimeRangeId, AtAGlanceStat[]> = {
  "this-month": [
    { label: "Total orders", value: "3", note: "This month" },
    {
      label: "Total spend",
      value: "$860",
      note: "↑ 9% vs last month",
      noteTone: "positive",
    },
    { label: "Avg. turnaround", value: "2.8 days", note: "Order to shipment" },
    { label: "Reorder rate", value: "72%", note: "Without a call" },
  ],
  "this-quarter": [
    { label: "Total orders", value: "5", note: "This quarter" },
    {
      label: "Total spend",
      value: "$1,940",
      note: "↑ 14% vs last quarter",
      noteTone: "positive",
    },
    { label: "Avg. turnaround", value: "3.0 days", note: "Order to shipment" },
    { label: "Reorder rate", value: "70%", note: "Without a call" },
  ],
  "this-year": [
    { label: "Total orders", value: "10", note: "Jan–Aug 2026" },
    {
      label: "Total spend",
      value: "$4,000",
      note: "↑ 21% vs last year",
      noteTone: "positive",
    },
    { label: "Avg. turnaround", value: "3.1 days", note: "Order to shipment" },
    { label: "Reorder rate", value: "69%", note: "Without a call" },
  ],
  "all-time": [
    { label: "Total orders", value: "12", note: "Since Jan 2026" },
    {
      label: "Total spend",
      value: "$4,860",
      note: "↑ 18% vs last year",
      noteTone: "positive",
    },
    { label: "Avg. turnaround", value: "3.2 days", note: "Order to shipment" },
    { label: "Reorder rate", value: "68%", note: "Without a call" },
  ],
};
