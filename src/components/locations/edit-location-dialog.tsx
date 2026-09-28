"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";

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
import { Button } from "@/components/ui/button";
import type { Location } from "@/types/location";

interface EditLocationDialogProps {
  location: Location;
  onSave: (id: string, updates: { name: string; address: string }) => void;
}

export function EditLocationDialog({ location, onSave }: EditLocationDialogProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(location.name);
  const [address, setAddress] = useState(location.address);

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (next) {
      setName(location.name);
      setAddress(location.address);
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!name.trim() || !address.trim()) return;
    setOpen(false);
    toast.success("Changes saved.");
    onSave(location.id, { name, address });
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger
        render={
          <button className="cursor-pointer text-sm font-medium text-brand-pink hover:underline" />
        }
      >
        Edit
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit location — {location.name}</DialogTitle>
        </DialogHeader>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor={`edit-location-name-${location.id}`}>
              Location name
            </Label>
            <Input
              id={`edit-location-name-${location.id}`}
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="e.g. Northgate"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor={`edit-location-address-${location.id}`}>
              Street address
            </Label>
            <Input
              id={`edit-location-address-${location.id}`}
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              placeholder="123 Example Ave, Seattle, WA 98100"
            />
          </div>

          <DialogFooter>
            <DialogClose render={<Button type="button" variant="outline" />}>
              Cancel
            </DialogClose>
            <Button
              type="submit"
              className="bg-brand-pink text-white hover:bg-brand-pink/90"
            >
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
