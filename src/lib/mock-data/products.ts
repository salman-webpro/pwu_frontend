import type { PersonalizedProduct, Product } from "@/types/product";

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

// The 3 Personalized-tab cards shown in
// docs/screens/pages/02-products--personalized-tab.png — same product
// repeated 3× in the mockup (front already on file, back still needed).
const POSTCARD_QUANTITY_OPTIONS = [100, 250, 500, 1000];
const POSTCARD_TEMPLATE_OPTIONS = ["Default template", "Classic", "Modern", "Bold"];

export const PERSONALIZED_PRODUCTS: PersonalizedProduct[] = [1, 2, 3].map(
  (n) => ({
    id: `postcards-6x9-personalized-${n}`,
    name: 'Postcards 6"×9"',
    spec: "16pt · UV front / uncoated back",
    price: 469,
    turnaround: "3 day",
    imageUrl: "",
    quantityOptions: POSTCARD_QUANTITY_OPTIONS,
    defaultQuantity: 250,
    templateOptions: POSTCARD_TEMPLATE_OPTIONS,
    defaultTemplate: "Default template",
    frontFileName: "front.pdf",
    backFileName: null,
  }),
);

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
