import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { PrintDesign } from "@/types/business-memory";

interface PrintDesignCardProps {
  design: PrintDesign;
}

export function PrintDesignCard({ design }: PrintDesignCardProps) {
  return (
    <Card
      className={cn(
        "gap-0 overflow-hidden p-0",
        design.isDefault && "ring-2 ring-brand-pink",
      )}
    >
      <div className="relative flex aspect-[4/3]">
        {design.isDefault && (
          <span className="absolute top-2 left-2 z-10 rounded bg-brand-pink px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase">
            Default
          </span>
        )}
        <div
          className="flex flex-1 items-end p-2 text-[10px] font-semibold tracking-wide text-white/70 uppercase"
          style={{ backgroundColor: design.backColor }}
        >
          Back
        </div>
        <div
          className="flex flex-1 items-end p-2 text-[10px] font-semibold tracking-wide text-white/70 uppercase"
          style={{ backgroundColor: design.frontColor }}
        >
          Front
        </div>
      </div>
      <CardContent className="flex items-center justify-between p-3 text-sm">
        <span className="font-medium">{design.name}</span>
        {design.isDefault ? (
          <span className="font-medium text-brand-pink">Default</span>
        ) : (
          <button
            type="button"
            className="cursor-pointer text-muted-foreground hover:text-foreground"
          >
            Set default
          </button>
        )}
      </CardContent>
    </Card>
  );
}
