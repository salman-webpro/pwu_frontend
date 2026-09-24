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
