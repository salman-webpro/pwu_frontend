"use client";

import { useRef, useState, type ChangeEvent } from "react";
import { Check, ImageIcon, Upload } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { PersonalizedProduct } from "@/types/product";

interface PersonalizedProductCardProps {
  product: PersonalizedProduct;
}

type FileSide = "front" | "back";

export function PersonalizedProductCard({ product }: PersonalizedProductCardProps) {
  const [quantity, setQuantity] = useState(product.defaultQuantity);
  const [template, setTemplate] = useState(product.defaultTemplate);
  const [frontFileName, setFrontFileName] = useState(product.frontFileName);
  const [backFileName, setBackFileName] = useState(product.backFileName);
  const frontInputRef = useRef<HTMLInputElement>(null);
  const backInputRef = useRef<HTMLInputElement>(null);

  const canPlaceOrder = Boolean(frontFileName) && Boolean(backFileName);

  function handleFileChange(side: FileSide, event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (side === "front") setFrontFileName(file.name);
    else setBackFileName(file.name);
  }

  function handleSaveForLater() {
    toast.info("Saved for later — pick it back up anytime from Products.");
  }

  function handlePlaceOrder() {
    if (!canPlaceOrder) return;
    toast.success(
      `${product.name} ordered — confirmation and tracking will land under Orders.`,
    );
  }

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

      <CardContent className="flex flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <p className="font-semibold">{product.name}</p>
          <p className="font-semibold">${product.price}</p>
        </div>
        <p className="text-sm text-muted-foreground">{product.spec}</p>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Quantity
            </span>
            <Select
              value={String(quantity)}
              onValueChange={(value) => {
                if (value) setQuantity(Number(value));
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {product.quantityOptions.map((option) => (
                  <SelectItem key={option} value={String(option)}>
                    {option.toLocaleString()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Template
            </span>
            <Select
              value={template}
              onValueChange={(value) => {
                if (value) setTemplate(value);
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {product.templateOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <FileSlot
            label="Front"
            fileName={frontFileName}
            onClick={() => frontInputRef.current?.click()}
          />
          <FileSlot
            label="Back"
            fileName={backFileName}
            onClick={() => backInputRef.current?.click()}
          />
        </div>
        <input
          ref={frontInputRef}
          type="file"
          className="hidden"
          onChange={(event) => handleFileChange("front", event)}
        />
        <input
          ref={backInputRef}
          type="file"
          className="hidden"
          onChange={(event) => handleFileChange("back", event)}
        />

        <div className="mt-1 flex gap-2">
          <Button
            variant="outline"
            className="flex-1"
            onClick={handleSaveForLater}
          >
            Save for later
          </Button>
          <Button
            className="flex-1 gap-1.5 bg-foreground text-background hover:bg-foreground/90"
            disabled={!canPlaceOrder}
            onClick={handlePlaceOrder}
          >
            Place order →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function FileSlot({
  label,
  fileName,
  onClick,
}: {
  label: string;
  fileName: string | null;
  onClick: () => void;
}) {
  const isUploaded = Boolean(fileName);

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 rounded-lg border px-3 py-2 text-left transition-colors",
        isUploaded
          ? "border-brand-pink/20 bg-brand-pink/5"
          : "border-dashed border-brand-pink/60 hover:bg-brand-pink/5",
      )}
    >
      <span
        className={cn(
          "flex size-6 shrink-0 items-center justify-center rounded-full",
          isUploaded
            ? "bg-brand-pink text-white"
            : "bg-brand-pink/10 text-brand-pink",
        )}
      >
        {isUploaded ? (
          <Check className="size-3.5" />
        ) : (
          <Upload className="size-3.5" />
        )}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold">{label}</span>
        <span className="block truncate text-xs text-muted-foreground">
          {fileName ?? "Tap to upload"}
        </span>
      </span>
    </button>
  );
}
