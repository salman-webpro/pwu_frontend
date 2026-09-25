import type { Order } from "@/types/order";

export const DEMO_ORDERS: Order[] = [
  {
    id: "10482",
    orderNumber: "#10482",
    productName: 'Postcards 6"×9"',
    quantity: 2900,
    placedDate: "Jul 20",
    deliveryDate: "Jul 22",
    status: "in-production",
  },
  {
    id: "10481",
    orderNumber: "#10481",
    productName: "Business Cards",
    quantity: 500,
    placedDate: "Jul 20",
    deliveryDate: "Jul 20",
    status: "approved",
  },
  {
    id: "10479",
    orderNumber: "#10479",
    productName: "Vinyl Banner",
    quantity: 2,
    placedDate: "Jul 19",
    deliveryDate: "Jul 24",
    status: "shipped",
  },
  {
    id: "10475",
    orderNumber: "#10475",
    productName: "Foam Board Signs",
    quantity: 10,
    placedDate: "Jul 18",
    deliveryDate: "Jul 23",
    status: "needs-attention",
  },
  {
    id: "10470",
    orderNumber: "#10470",
    productName: "Presentation Folders",
    quantity: 250,
    placedDate: "Jul 17",
    deliveryDate: "Jul 22",
    status: "shipped",
  },
  {
    id: "10466",
    orderNumber: "#10466",
    productName: "Letterhead",
    quantity: 500,
    placedDate: "Jul 15",
    deliveryDate: "Jul 18",
    status: "approved",
  },
];

export const ORDERS_SUMMARY =
  "100% on-time · 6 placed this week · 2 pending approval";
