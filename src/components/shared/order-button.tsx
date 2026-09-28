import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type OrderButtonProps = ComponentProps<typeof Button>;

export function OrderButton({ className, ...props }: OrderButtonProps) {
  return (
    <Button
      className={cn(
        "bg-brand-pink text-white hover:bg-brand-pink/90",
        className,
      )}
      {...props}
    />
  );
}
