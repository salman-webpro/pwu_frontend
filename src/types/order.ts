export type OrderStatus =
  | "needs-attention"
  | "in-production"
  | "shipped"
  | "ready"
  | "approved";

export interface Order {
  id: string;
  orderNumber: string;
  productName: string;
  quantity: number;
  placedDate: string;
  deliveryDate: string;
  status: OrderStatus;
  total?: number;
}
