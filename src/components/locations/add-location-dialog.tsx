"use client";

import { useState, type FormEvent } from "react";
import { Plus } from "lucide-react";
import { toast } from "sonner";

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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { OrderButton } from "@/components/shared/order-button";

export interface NewLocationInput {
  name: string;
  address: string;
  contactName: string;
  contactPhone: string;
}

interface AddLocationDialogProps {
  onAdd: (input: NewLocationInput) => void;
}

export function AddLocationDialog({ onAdd }: AddLocationDialogProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (next) {
      setName("");
      setAddress("");
      setContactName("");
      setContactPhone("");
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!name.trim() || !address.trim()) {
      toast.warning("Add a name and address to continue.");
      return;
    }
    setOpen(false);
    toast.success(`${name} added — tax rate applies automatically once verified.`);
    onAdd({ name, address, contactName, contactPhone });
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger render={<OrderButton />}>
        <Plus data-icon="inline-start" />
        Add location
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add a location</DialogTitle>
          <DialogDescription>
            New sites appear in your account and price automatically by tax
            jurisdiction.
          </DialogDescription>
        </DialogHeader>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="add-location-name">Location name</Label>
            <Input
              id="add-location-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="e.g. Northgate"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="add-location-address">Street address</Label>
            <Input
              id="add-location-address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              placeholder="123 Example Ave, Seattle, WA 98100"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="add-location-contact">Contact name</Label>
              <Input
                id="add-location-contact"
                value={contactName}
                onChange={(event) => setContactName(event.target.value)}
                placeholder="Full name"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="add-location-phone">Phone</Label>
              <Input
                id="add-location-phone"
                value={contactPhone}
                onChange={(event) => setContactPhone(event.target.value)}
                placeholder="(206) 555-0100"
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose render={<Button type="button" variant="outline" />}>
              Cancel
            </DialogClose>
            <Button
              type="submit"
              className="bg-brand-pink text-white hover:bg-brand-pink/90"
            >
              Add location
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
