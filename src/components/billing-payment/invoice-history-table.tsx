import {
  Card,
  CardAction,
  CardContent,
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
import type { Invoice } from "@/types/invoice";

interface InvoiceHistoryTableProps {
  invoices: Invoice[];
}

export function InvoiceHistoryTable({ invoices }: InvoiceHistoryTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoice history</CardTitle>
        <CardAction>
          <button className="text-sm font-medium text-brand-pink hover:underline">
            View all →
          </button>
        </CardAction>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Order</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="text-muted-foreground">
                  {invoice.date}
                </TableCell>
                <TableCell>
                  <p className="font-medium">{invoice.orderName}</p>
                  <p className="text-xs text-muted-foreground">
                    {invoice.orderRef}
                  </p>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {invoice.location}
                </TableCell>
                <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <StatusBadge tone="approved" label="Paid" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
