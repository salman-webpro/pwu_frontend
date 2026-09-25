import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatusBadge } from "@/components/shared/status-badge";
import type { Order, OrderStatus } from "@/types/order";

interface RecentOrdersTableProps {
  orders: Order[];
  summary: string;
}

const STATUS_LABELS: Record<OrderStatus, string> = {
  "needs-attention": "Needs attention",
  "in-production": "In production",
  shipped: "Shipped",
  ready: "Ready",
  approved: "Approved & ready",
};

export function RecentOrdersTable({ orders, summary }: RecentOrdersTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent orders</CardTitle>
        <CardDescription>{summary}</CardDescription>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Qty</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">
                  {order.orderNumber}
                </TableCell>
                <TableCell className="font-medium">
                  {order.productName}
                </TableCell>
                <TableCell>{order.quantity.toLocaleString()}</TableCell>
                <TableCell>{order.placedDate}</TableCell>
                <TableCell>${order.total?.toLocaleString()}</TableCell>
                <TableCell>
                  <StatusBadge
                    tone={order.status}
                    label={STATUS_LABELS[order.status]}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
