"use client";

import { useState } from "react";

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
import { cn } from "@/lib/utils";
import type { Order, OrderStatus } from "@/types/order";

const STEPS = [
  { key: "placed", title: "Order placed", subtitle: "Confirmed and queued" },
  { key: "production", title: "In production", subtitle: "Printing now" },
  { key: "shipped", title: "Shipped", subtitle: "On its way to you" },
  {
    key: "delivered",
    title: "Delivered",
    subtitle: "Signed for at delivery location",
  },
] as const;

// Maps this order's status to how far along the 4-step timeline it is.
const STEP_INDEX_BY_STATUS: Record<OrderStatus, number> = {
  approved: 0,
  "needs-attention": 0,
  "in-production": 1,
  shipped: 2,
  ready: 3,
};

interface OrderTrackingDialogProps {
  order: Order;
}

export function OrderTrackingDialog({ order }: OrderTrackingDialogProps) {
  const [open, setOpen] = useState(false);
  const currentStep = STEP_INDEX_BY_STATUS[order.status];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <button className="cursor-pointer text-sm font-medium text-brand-pink hover:underline" />
        }
      >
        Track
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            #{order.orderNumber} · {order.productName}
          </DialogTitle>
          <DialogDescription>Live status</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col">
          {STEPS.map((step, index) => {
            const isDone = index < currentStep;
            const isCurrent = index === currentStep;
            return (
              <div key={step.key} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <span
                    className={cn(
                      "size-3 shrink-0 rounded-full",
                      isDone && "bg-green-500",
                      isCurrent && "bg-brand-pink",
                      !isDone && !isCurrent && "bg-muted-foreground/30",
                    )}
                  />
                  {index < STEPS.length - 1 && (
                    <span
                      className={cn(
                        "w-px flex-1",
                        isDone ? "bg-green-500" : "bg-border",
                      )}
                    />
                  )}
                </div>
                <div className="pb-6">
                  <p
                    className={cn(
                      "text-sm font-semibold",
                      isCurrent && "text-brand-pink",
                      !isDone && !isCurrent && "text-muted-foreground",
                    )}
                  >
                    {step.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {step.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Close
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
