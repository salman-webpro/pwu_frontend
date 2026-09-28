"use client";

import { useState } from "react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StatusBadge } from "@/components/shared/status-badge";
import { AddBrandColorDialog } from "@/components/business-memory/add-brand-color-dialog";
import type { BrandColor } from "@/types/company";
import type { FileCardStatus } from "@/types/business-memory";

interface BrandColorsCardProps {
  colors: BrandColor[];
  status: FileCardStatus;
}

export function BrandColorsCard({ colors, status }: BrandColorsCardProps) {
  const [palette, setPalette] = useState<BrandColor[]>(colors);

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
        {palette.map((color) => (
          <span
            key={color.hex}
            className="size-9 shrink-0 rounded-full ring-1 ring-foreground/10"
            style={{ backgroundColor: color.hex }}
          />
        ))}
        <AddBrandColorDialog
          onAdd={(hex) => setPalette((prev) => [...prev, { hex }])}
        />
      </CardContent>
    </Card>
  );
}
