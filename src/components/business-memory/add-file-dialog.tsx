"use client";

import { useRef, useState, type ChangeEvent } from "react";
import { Check, Upload } from "lucide-react";
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
import { cn } from "@/lib/utils";

interface AddFileDialogProps {
  onUpload: (fileName: string) => void;
}

export function AddFileDialog({ onUpload }: AddFileDialogProps) {
  const [open, setOpen] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (next) setFileName(null);
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : null);
  }

  function handleUpload() {
    if (!fileName) return;
    setOpen(false);
    toast.success("File uploaded to Business Memory.");
    onUpload(fileName);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger render={<Button variant="outline" className="w-full" />}>
        + Add file
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add file to Business Memory</DialogTitle>
        </DialogHeader>

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className={cn(
            "flex flex-col items-center gap-1.5 rounded-xl border-2 border-dashed px-6 py-10 text-center transition-colors",
            fileName
              ? "border-green-400 bg-green-50"
              : "border-border hover:bg-muted",
          )}
        >
          {fileName ? (
            <Check className="size-5 text-green-600" />
          ) : (
            <Upload className="size-5 text-muted-foreground" />
          )}
          <p className="text-sm font-semibold">
            {fileName ?? "Click to choose a file"}
          </p>
          <p className="text-xs text-muted-foreground">
            PDF, AI, PNG or SVG — up to 100MB
          </p>
        </button>
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.ai,.png,.svg"
          className="hidden"
          onChange={handleFileChange}
        />

        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Cancel
          </DialogClose>
          <Button
            onClick={handleUpload}
            disabled={!fileName}
            className="bg-brand-pink text-white hover:bg-brand-pink/90"
          >
            Upload
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
