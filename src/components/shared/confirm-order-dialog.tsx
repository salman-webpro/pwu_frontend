"use client";

import { useState, type ComponentProps } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OrderButton } from "@/components/shared/order-button";
import { cn } from "@/lib/utils";
import { DEFAULT_LOCATION, DEMO_LOCATIONS } from "@/lib/mock-data/locations";

interface ConfirmOrderDialogProps {
  productName: string;
  spec: string;
  quantity: number;
  turnaround: string;
  price: number;
  triggerLabel?: string;
  triggerClassName?: string;
  triggerSize?: ComponentProps<typeof OrderButton>["size"];
}

export function ConfirmOrderDialog({
  productName,
  spec,
  quantity,
  turnaround,
  price,
  triggerLabel = "Order — 1 click →",
  triggerClassName,
  triggerSize,
}: ConfirmOrderDialogProps) {
  const [open, setOpen] = useState(false);
  const [locationId, setLocationId] = useState(DEFAULT_LOCATION.id);

  function handlePlaceOrder() {
    setOpen(false);
    toast.success(
      `${productName} ordered — confirmation and tracking will land under Orders.`,
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={<OrderButton className={triggerClassName} size={triggerSize} />}
      >
        {triggerLabel}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm your order</DialogTitle>
          <DialogDescription>
            Approved spec · all-in price · firm delivery
          </DialogDescription>
        </DialogHeader>

        <div className="divide-y divide-border rounded-lg bg-muted/50 text-sm">
          <SummaryRow label="Product" value={productName} />
          <SummaryRow label="Spec" value={spec} />
          <SummaryRow label="Quantity" value={quantity.toLocaleString()} />
          <SummaryRow label="Delivery" value={turnaround} />
          <SummaryRow
            label="Total"
            value={`$${price}`}
            valueClassName="font-semibold text-brand-pink"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-medium">Ship to</span>
          <Select
            value={locationId}
            onValueChange={(value) => {
              if (value) setLocationId(value);
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {DEMO_LOCATIONS.map((location) => (
                <SelectItem key={location.id} value={location.id}>
                  {location.name} — {location.address}
                  {location.isDefault ? " (default)" : ""}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <p className="text-xs text-muted-foreground">
          Charged the moment you submit — production, freight, and margin
          are already folded into the price above.
        </p>

        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Cancel
          </DialogClose>
          <Button
            onClick={handlePlaceOrder}
            className="bg-brand-pink text-white hover:bg-brand-pink/90"
          >
            Place order
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function SummaryRow({
  label,
  value,
  valueClassName,
}: {
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="flex items-center justify-between px-3 py-2">
      <span className="text-muted-foreground">{label}</span>
      <span className={cn("font-medium", valueClassName)}>{value}</span>
    </div>
  );
}
