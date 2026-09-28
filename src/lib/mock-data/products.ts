import type { Product } from "@/types/product";

export const READY_TO_ORDER_PRODUCTS: Product[] = [
  {
    id: "postcards-6x9",
    name: 'Postcards 6"×9"',
    spec: "16pt · UV front / uncoated back",
    price: 469,
    quantity: 1000,
    turnaround: "3 day",
    imageUrl: "",
    reorderCount: 3,
    category: "ready-to-order",
  },
  {
    id: "bifold-brochure",
    name: "Bifold Brochure",
    spec: 'Endurance synthetic · 8.5"×11"',
    price: 619,
    quantity: 500,
    turnaround: "3 day",
    imageUrl: "",
    reorderCount: 2,
    category: "ready-to-order",
  },
  {
    id: "business-cards",
    name: "Business Cards",
    spec: '16pt · 3.5"×2" · matte UV',
    price: 259,
    quantity: 500,
    turnaround: "3 day",
    imageUrl: "",
    reorderCount: 6,
    category: "ready-to-order",
  },
  {
    id: "presentation-folders",
    name: "Presentation Folders",
    spec: "16pt C2S · two pockets",
    price: 649,
    quantity: 250,
    turnaround: "3 day",
    imageUrl: "",
    reorderCount: 3,
    category: "ready-to-order",
  },
  {
    id: "foam-board-sign",
    name: "Foam Board Sign",
    spec: '3/16" · gloss UV · 1-sided',
    price: 189,
    quantity: 5,
    turnaround: "5 day",
    imageUrl: "",
    reorderCount: 1,
    category: "ready-to-order",
  },
  {
    id: "vinyl-banner-3x6",
    name: "Vinyl Banner 3'×6'",
    spec: "13oz scrim · hemmed + grommets",
    price: 219,
    quantity: 2,
    turnaround: "5 day",
    imageUrl: "",
    reorderCount: 1,
    category: "ready-to-order",
  },
];

// No mockup/design spec exists yet for Personalized-tab products — only
// the count badge ("4") is shown in the Products mockup. Placeholder
// until that design is delivered.
export const PERSONALIZED_PRODUCTS_COUNT = 4;

// Total approved-product count shown in "View all N" links on both the
// Dashboard and Orders screens.
export const APPROVED_PRODUCTS_TOTAL = 14;

const QUICK_REORDER_IDS = ["business-cards", "postcards-6x9", "vinyl-banner-3x6"];

// The 3 products shown in the Orders screen's "Reorder — 1 click"
// section — a subset of the same approved catalog shown on Products,
// in the mockup's display order.
export const ORDERS_QUICK_REORDER_PRODUCTS: Product[] = QUICK_REORDER_IDS.map(
  (id) => READY_TO_ORDER_PRODUCTS.find((product) => product.id === id)!,
);
