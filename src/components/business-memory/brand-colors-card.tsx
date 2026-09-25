import { Plus } from "lucide-react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StatusBadge } from "@/components/shared/status-badge";
import type { BrandColor } from "@/types/company";
import type { FileCardStatus } from "@/types/business-memory";

interface BrandColorsCardProps {
  colors: BrandColor[];
  status: FileCardStatus;
}

export function BrandColorsCard({ colors, status }: BrandColorsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Brand colors</CardTitle>
        <CardDescription>Palette for print & digital use</CardDescription>
        <CardAction>
          <StatusBadge
            tone={status}
            label={status === "approved" ? "Approved" : "In progress"}
          />
        </CardAction>
      </CardHeader>
      <CardContent className="flex items-center gap-3">
        {colors.map((color) => (
          <span
            key={color.hex}
            className="size-9 shrink-0 rounded-full ring-1 ring-foreground/10"
            style={{ backgroundColor: color.hex }}
          />
        ))}
        <button
          type="button"
          className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-dashed border-border text-muted-foreground hover:bg-muted"
        >
          <Plus className="size-4" />
          <span className="sr-only">Add brand color</span>
        </button>
      </CardContent>
    </Card>
  );
}
