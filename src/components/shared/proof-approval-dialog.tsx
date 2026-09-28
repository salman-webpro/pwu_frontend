"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ProofApprovalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  subtitle: string;
  defaultView?: "proof" | "feedback";
  onApprove: () => void;
  onRequestChanges: (feedback: string) => void;
}

export function ProofApprovalDialog({
  open,
  onOpenChange,
  title,
  subtitle,
  defaultView = "proof",
  onApprove,
  onRequestChanges,
}: ProofApprovalDialogProps) {
  const [view, setView] = useState<"proof" | "feedback">(defaultView);
  const [feedback, setFeedback] = useState("");

  function handleOpenChange(next: boolean) {
    if (next) {
      setView(defaultView);
      setFeedback("");
    }
    onOpenChange(next);
  }

  function handleApprove() {
    onOpenChange(false);
    onApprove();
  }

  function handleSendFeedback() {
    onOpenChange(false);
    onRequestChanges(feedback);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        {view === "proof" ? (
          <>
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{subtitle}</DialogDescription>
            </DialogHeader>

            <div className="flex items-center justify-center rounded-xl bg-muted p-6">
              <div className="relative flex aspect-[3/2] w-full max-w-72 flex-col justify-between overflow-hidden rounded-md bg-[#0b0e1a] p-4 text-white outline-2 outline-dashed outline-offset-4 outline-amber-400">
                <div>
                  <p className="text-lg font-bold">Fall check-up</p>
                  <p className="text-lg font-bold">season is here</p>
                  <p className="mt-1 text-xs text-white/70">
                    Book a cleaning before the year ends.
                  </p>
                </div>
                <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold text-foreground">
                  Book online
                </span>
                <span className="text-xs font-medium text-amber-400">
                  Harborview Dental Group
                </span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground">
              Review carefully — approving releases this job to production
              immediately.
            </p>

            <DialogFooter>
              <Button variant="outline" onClick={() => setView("feedback")}>
                Request changes
              </Button>
              <Button onClick={handleApprove}>Approve proof</Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Request changes</DialogTitle>
              <DialogDescription>{title}</DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="proof-feedback">What needs to change?</Label>
              <Textarea
                id="proof-feedback"
                value={feedback}
                onChange={(event) => setFeedback(event.target.value)}
                placeholder="e.g. Move the phone number up, swap the back panel color to navy…"
                rows={3}
              />
            </div>

            <p className="text-xs text-muted-foreground">
              A revised proof will land back in Awaiting Approval once
              it&apos;s ready.
            </p>

            <DialogFooter>
              <DialogClose render={<Button variant="outline" />}>
                Cancel
              </DialogClose>
              <Button
                onClick={handleSendFeedback}
                className="bg-brand-pink text-white hover:bg-brand-pink/90"
              >
                Send feedback
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
