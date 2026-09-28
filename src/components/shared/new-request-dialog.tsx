"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { toast } from "sonner";

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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type RequestType = "reorder" | "quote";

const REQUEST_OPTIONS: {
  value: RequestType;
  title: string;
  description: string;
}[] = [
  {
    value: "reorder",
    title: "Reorder an approved product",
    description:
      "Fixed spec, all-in price, firm delivery — instant checkout, no new files needed.",
  },
  {
    value: "quote",
    title: "Request a quote for something new",
    description:
      "New product, spec, or quantity outside what's approved. We'll follow up within one business day.",
  },
];

export function NewRequestDialog() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [requestType, setRequestType] = useState<RequestType>("reorder");
  const [whatDoYouNeed, setWhatDoYouNeed] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit() {
    setOpen(false);

    if (requestType === "reorder") {
      toast.info("Browse your approved products below to reorder.");
      router.push("/products");
      return;
    }

    toast.success(
      "Quote request sent — expect a reply within one business day.",
    );
    setWhatDoYouNeed("");
    setNotes("");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button className="gap-1.5 bg-brand-pink text-white hover:bg-brand-pink/90" />
        }
      >
        <Plus className="size-4" />
        New request
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New print request</DialogTitle>
          <DialogDescription>
            Reorder something approved, or start a quote for something new.
          </DialogDescription>
        </DialogHeader>

        <RadioGroup
          value={requestType}
          onValueChange={(value) => setRequestType(value as RequestType)}
        >
          {REQUEST_OPTIONS.map((option) => (
            <Label
              key={option.value}
              className={cn(
                "cursor-pointer items-start gap-3 rounded-lg border p-3 font-normal",
                requestType === option.value
                  ? "border-brand-pink bg-brand-pink/5"
                  : "border-border",
              )}
            >
              <RadioGroupItem value={option.value} className="mt-0.5" />
              <span className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-foreground">
                  {option.title}
                </span>
                <span className="text-sm text-muted-foreground">
                  {option.description}
                </span>
              </span>
            </Label>
          ))}
        </RadioGroup>

        {requestType === "quote" && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="new-request-need">What do you need?</Label>
              <Input
                id="new-request-need"
                value={whatDoYouNeed}
                onChange={(event) => setWhatDoYouNeed(event.target.value)}
                placeholder="e.g. Die-cut hang tags, 2,000 count"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="new-request-notes">Notes</Label>
              <Textarea
                id="new-request-notes"
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                placeholder="Sizes, quantities, timing — anything that helps us quote accurately"
              />
            </div>
          </div>
        )}

        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Cancel
          </DialogClose>
          <Button
            onClick={handleSubmit}
            className="bg-brand-pink text-white hover:bg-brand-pink/90"
          >
            {requestType === "reorder" ? "Continue" : "Send request"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
