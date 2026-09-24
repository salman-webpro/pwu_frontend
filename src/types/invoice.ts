export type InvoiceStatus = "paid" | "due" | "overdue";

export interface Invoice {
  id: string;
  orderName: string;
  orderRef: string;
  date: string;
  location: string;
  amount: number;
  status: InvoiceStatus;
}
