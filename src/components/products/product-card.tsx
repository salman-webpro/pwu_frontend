import { ImageIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { ConfirmOrderDialog } from "@/components/shared/confirm-order-dialog";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  // "locked" is used on Orders' quick-reorder cards: qty only, no spec/reorder count.
  variant?: "catalog" | "locked";
}

export function ProductCard({ product, variant = "catalog" }: ProductCardProps) {
  return (
    <Card className="gap-0 overflow-hidden p-0">
      <div className="relative flex aspect-video items-center justify-center bg-muted">
        {product.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- no asset pipeline yet, see imageUrl placeholder note in types/product.ts
          <img
            src={product.imageUrl}
            alt={product.name}
            className="size-full object-cover"
          />
        ) : (
          <ImageIcon className="size-8 text-muted-foreground/40" />
        )}
        <span className="absolute top-2 right-2 rounded-full bg-black/70 px-2 py-0.5 text-xs font-medium text-white">
          {product.turnaround}
        </span>
      </div>
      <CardContent className="flex flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <p className="font-semibold">{product.name}</p>
          <p className="font-semibold">${product.price}</p>
        </div>
        {variant === "catalog" ? (
          <>
            <p className="text-sm text-muted-foreground">{product.spec}</p>
            <p className="text-sm text-muted-foreground">
              Qty {product.quantity.toLocaleString()} · reordered{" "}
              {product.reorderCount}×
            </p>
          </>
        ) : (
          <p className="text-sm text-muted-foreground">
            Locked qty {product.quantity.toLocaleString()}
          </p>
        )}
        <ConfirmOrderDialog
          productName={product.name}
          spec={product.spec}
          quantity={product.quantity}
          turnaround={product.turnaround}
          price={product.price}
          triggerClassName="mt-2 w-full"
        />
      </CardContent>
    </Card>
  );
}
