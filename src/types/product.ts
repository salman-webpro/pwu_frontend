export type Turnaround = "3 day" | "5 day";

export type ProductCategory = "ready-to-order" | "personalized";

export interface Product {
  id: string;
  name: string;
  spec: string;
  price: number;
  quantity: number;
  turnaround: Turnaround;
  imageUrl: string;
  reorderCount: number;
  category: ProductCategory;
}

// A Personalized-tab product needs per-order setup (quantity, template,
// front/back artwork) before it can be placed — unlike a catalog Product,
// which is a fixed, already-approved spec.
export interface PersonalizedProduct {
  id: string;
  name: string;
  spec: string;
  price: number;
  turnaround: Turnaround;
  imageUrl: string;
  quantityOptions: number[];
  defaultQuantity: number;
  templateOptions: string[];
  defaultTemplate: string;
  // Filename already on file for that side, or null if it still needs
  // uploading — matches the mockup, where Front is pre-uploaded and Back
  // is not.
  frontFileName: string | null;
  backFileName: string | null;
}
