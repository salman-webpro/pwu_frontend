import Link from "next/link";

import { ConfirmOrderDialog } from "@/components/shared/confirm-order-dialog";
import {
  Card,
  CardAction,
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
import type { Product } from "@/types/product";

interface ApprovedProductsTableProps {
  products: Product[];
  totalCount: number;
}

export function ApprovedProductsTable({
  products,
  totalCount,
}: ApprovedProductsTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Approved products</CardTitle>
        <CardDescription>
          Firm price and delivery date — reorder without reconfiguring.
        </CardDescription>
        <CardAction>
          <Link
            href="/products"
            className="text-sm font-medium text-brand-pink hover:underline"
          >
            View all {totalCount} →
          </Link>
        </CardAction>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Qty</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {product.spec}
                  </p>
                </TableCell>
                <TableCell>{product.quantity.toLocaleString()}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>
                  <StatusBadge tone="approved" label="Approved" />
                </TableCell>
                <TableCell className="text-right">
                  <ConfirmOrderDialog
                    productName={product.name}
                    spec={product.spec}
                    quantity={product.quantity}
                    turnaround={product.turnaround}
                    price={product.price}
                    triggerLabel="Reorder"
                    triggerSize="sm"
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
