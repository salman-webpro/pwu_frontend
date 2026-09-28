import type {
  FileCard,
  FileCardStatus,
  PrintDesign,
} from "@/types/business-memory";

export const BRAND_COLORS_STATUS: FileCardStatus = "in-progress";

export const GENERAL_FILE_CARDS: FileCard[] = [
  {
    id: "brand-identity",
    title: "Brand identity",
    description: "Colors, typography, voice",
    status: "approved",
    files: [{ id: "brand-identity-pdf", name: "Brand-Palette-Typography", type: "pdf" }],
  },
  {
    id: "brand-guidelines",
    title: "Brand guidelines",
    description: "Style & usage document",
    status: "approved",
    files: [{ id: "brand-guidelines-pdf", name: "Harborview-Guidelines-v3", type: "pdf" }],
  },
  {
    id: "logo-files",
    title: "Logo files",
    description: "Primary, secondary, icon",
    status: "approved",
    files: [
      { id: "logo-primary", name: "Logo-Primary-Color", type: "svg" },
      { id: "logo-icon", name: "Logo-Icon-White", type: "png" },
    ],
  },
];

export interface ProductTypeTab {
  id: string;
  label: string;
}

export const PRODUCT_TYPE_TABS: ProductTypeTab[] = [
  { id: "postcards", label: 'Postcards 6"×9"' },
  { id: "business-cards", label: "Business Cards" },
  { id: "flyers", label: "Flyers 8.5×11" },
  { id: "brochures", label: "Brochures Tri-Fold" },
  { id: "banners", label: "Banners" },
  { id: "letterhead", label: "Letterhead" },
];

// Only the Postcards tab has a mockup (04(b)) showing real designs.
// The other 5 product-type tabs have no design spec yet, so they start
// with zero uploaded designs — just the two "Add design" actions.
export const PRINT_DESIGNS_BY_TAB: Record<string, PrintDesign[]> = {
  postcards: [
    {
      id: "classic",
      name: "Classic",
      isDefault: true,
      frontColor: "#0b0e1a",
      backColor: "#0b0e1a",
    },
    {
      id: "modern",
      name: "Modern",
      isDefault: false,
      frontColor: "#0b0e1a",
      backColor: "#f2e8dc",
    },
    {
      id: "bold",
      name: "Bold",
      isDefault: false,
      frontColor: "#0b0e1a",
      backColor: "#EC0868",
    },
  ],
  "business-cards": [],
  flyers: [],
  brochures: [],
  banners: [],
  letterhead: [],
};
