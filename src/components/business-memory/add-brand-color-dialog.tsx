"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const HEX_PATTERN = /^#([0-9a-fA-F]{6})$/;

interface AddBrandColorDialogProps {
  onAdd: (hex: string) => void;
}

export function AddBrandColorDialog({ onAdd }: AddBrandColorDialogProps) {
  const [open, setOpen] = useState(false);
  const [hex, setHex] = useState("#EC0868");

  const isValid = HEX_PATTERN.test(hex);

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (next) setHex("#EC0868");
  }

  function handleAdd() {
    if (!isValid) return;
    setOpen(false);
    toast.success("Color added to your palette.");
    onAdd(hex);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger
        render={
          <button
            type="button"
            className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-dashed border-border text-muted-foreground hover:bg-muted"
          />
        }
      >
        <Plus className="size-4" />
        <span className="sr-only">Add brand color</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Add brand color</DialogTitle>
        </DialogHeader>

        <div className="flex items-center gap-3">
          <input
            type="color"
            value={isValid ? hex : "#EC0868"}
            onChange={(event) => setHex(event.target.value.toUpperCase())}
            className="size-12 shrink-0 cursor-pointer rounded-lg border border-border bg-transparent p-1"
          />
          <div className="flex flex-1 flex-col gap-1.5">
            <Label htmlFor="brand-color-hex">Hex</Label>
            <Input
              id="brand-color-hex"
              value={hex}
              onChange={(event) => setHex(event.target.value.toUpperCase())}
              placeholder="#EC0868"
              aria-invalid={!isValid}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Cancel
          </DialogClose>
          <Button
            onClick={handleAdd}
            disabled={!isValid}
            className="bg-brand-pink text-white hover:bg-brand-pink/90"
          >
            Add color
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
