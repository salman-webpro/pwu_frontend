"use client";

import { useState } from "react";

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
import { cn } from "@/lib/utils";
import type { Order, OrderStatus } from "@/types/order";

interface OrdersTableProps {
  orders: Order[];
  summary: string;
}

const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  "needs-attention": "Needs attention",
  "in-production": "In production",
  shipped: "Shipped",
  ready: "Ready",
  approved: "Approved",
};

const FILTERS: { label: string; value: "all" | OrderStatus }[] = [
  { label: "All", value: "all" },
  { label: "Needs attention", value: "needs-attention" },
  { label: "In production", value: "in-production" },
  { label: "Shipped", value: "shipped" },
  { label: "Ready", value: "ready" },
];

export function OrdersTable({ orders, summary }: OrdersTableProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | OrderStatus>("all");

  const filteredOrders =
    activeFilter === "all"
      ? orders
      : orders.filter((order) => order.status === activeFilter);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order history</CardTitle>
        <CardDescription>{summary}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "cursor-pointer rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                activeFilter === filter.value
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-muted",
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Qty</TableHead>
                <TableHead>Placed</TableHead>
                <TableHead>Delivery</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Track</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">
                    {order.orderNumber}
                  </TableCell>
                  <TableCell className="font-medium">
                    {order.productName}
                  </TableCell>
                  <TableCell>{order.quantity.toLocaleString()}</TableCell>
                  <TableCell>{order.placedDate}</TableCell>
                  <TableCell>{order.deliveryDate}</TableCell>
                  <TableCell>
                    <StatusBadge
                      tone={order.status}
                      label={ORDER_STATUS_LABELS[order.status]}
                    />
                  </TableCell>
                  <TableCell className="text-right">
                    <button
                      type="button"
                      className="cursor-pointer text-sm font-medium text-brand-pink hover:underline"
                    >
                      Track
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
