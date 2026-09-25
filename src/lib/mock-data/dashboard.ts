import { CreditCard, Mail, type LucideIcon } from "lucide-react";

import type { Product } from "@/types/product";

export interface DashboardStat {
  label: string;
  value: string;
  note: string;
  noteTone?: "positive";
  labelDotTone?: "warning";
}

export const DASHBOARD_STATS: DashboardStat[] = [
  { label: "On-Time Rate", value: "100%", note: "128 of 128 kept" },
  {
    label: "Orders This Week",
    value: "6",
    note: "+2 vs last week",
    noteTone: "positive",
  },
  { label: "Next Delivery", value: "Jul 20", note: "Business Cards · 500" },
  {
    label: "Pending Approvals",
    value: "2",
    note: "1 artwork · 1 billing",
    labelDotTone: "warning",
  },
];

export interface DecisionAction {
  label: string;
  variant: "outline" | "default";
}

export interface DecisionItem {
  id: string;
  icon: LucideIcon;
  iconTone: "pink" | "amber";
  title: string;
  subtitle: string;
  actions: DecisionAction[];
}

export const NEEDS_DECISION_ITEMS: DecisionItem[] = [
  {
    id: "postcard-proof",
    icon: Mail,
    iconTone: "pink",
    title: "Postcard proof is ready",
    subtitle:
      'Postcards 6"×9" · production holds until you approve or request changes',
    actions: [
      { label: "Request changes", variant: "outline" },
      { label: "Approve proof", variant: "default" },
    ],
  },
  {
    id: "billing-signoff",
    icon: CreditCard,
    iconTone: "amber",
    title: "New billing profile sign-off",
    subtitle: "Required before your next reorder",
    actions: [{ label: "Review & sign off", variant: "default" }],
  },
];

export const APPROVED_PRODUCTS_PREVIEW: Product[] = [
  {
    id: "business-cards",
    name: "Business Cards",
    spec: "16pt · matte UV",
    price: 259,
    quantity: 500,
    turnaround: "3 day",
    imageUrl: "",
    reorderCount: 6,
    category: "ready-to-order",
  },
  {
    id: "postcards-6x9",
    name: 'Postcards 6"×9"',
    spec: "UV front / uncoated back",
    price: 449,
    quantity: 1000,
    turnaround: "3 day",
    imageUrl: "",
    reorderCount: 3,
    category: "ready-to-order",
  },
  {
    id: "bifold-brochure",
    name: "Bifold Brochure",
    spec: "Endurance synthetic",
    price: 619,
    quantity: 500,
    turnaround: "3 day",
    imageUrl: "",
    reorderCount: 2,
    category: "ready-to-order",
  },
  {
    id: "foam-board-signs",
    name: "Foam Board Signs",
    spec: '24"×36" · 3/16" flatbed',
    price: 189,
    quantity: 5,
    turnaround: "5 day",
    imageUrl: "",
    reorderCount: 1,
    category: "ready-to-order",
  },
];

export interface BusinessMemorySummary {
  status: "healthy" | "needs-attention";
  approvedProducts: number;
  artworkTemplates: number;
  deliveryLocations: number;
  approvalRules: number;
}

export const BUSINESS_MEMORY_SUMMARY: BusinessMemorySummary = {
  status: "healthy",
  approvedProducts: 14,
  artworkTemplates: 9,
  deliveryLocations: 4,
  approvalRules: 2,
};

export interface ActivityItem {
  id: string;
  text: string;
  time: string;
  tone: "positive" | "warning" | "neutral";
}

export const ACTIVITY_FEED_ITEMS: ActivityItem[] = [
  {
    id: "1",
    text: "Business Cards · 500 shipped",
    time: "2m",
    tone: "positive",
  },
  {
    id: "2",
    text: "Vinyl Banner · in production",
    time: "8m",
    tone: "warning",
  },
  {
    id: "3",
    text: "Postcards · 2,500 shipped",
    time: "11m",
    tone: "positive",
  },
  {
    id: "4",
    text: "Trifold · awaiting approval",
    time: "31m",
    tone: "neutral",
  },
];
