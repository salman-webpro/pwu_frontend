"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StatusBadge } from "@/components/shared/status-badge";
import { AddFileDialog } from "@/components/business-memory/add-file-dialog";
import type {
  BrandFile,
  BrandFileType,
  FileCard as FileCardData,
} from "@/types/business-memory";

interface FileCardProps {
  card: FileCardData;
}

function guessFileType(fileName: string): BrandFileType {
  const extension = fileName.split(".").pop()?.toLowerCase();
  if (extension === "svg") return "svg";
  if (extension === "png") return "png";
  return "pdf";
}

export function FileCard({ card }: FileCardProps) {
  const [files, setFiles] = useState<BrandFile[]>(card.files);

  function handleUpload(fileName: string) {
    setFiles((prev) => [
      ...prev,
      { id: `${card.id}-${prev.length}`, name: fileName, type: guessFileType(fileName) },
    ]);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{card.title}</CardTitle>
        <CardDescription>{card.description}</CardDescription>
        <CardAction>
          <StatusBadge
            tone={card.status}
            label={card.status === "approved" ? "Approved" : "In progress"}
          />
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {files.map((file) => (
          <div
            key={file.id}
            className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm"
          >
            <span className="rounded border border-border px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
              {file.type}
            </span>
            <span className="flex-1 truncate">{file.name}</span>
            <Check className="size-4 shrink-0 text-green-600" />
          </div>
        ))}
        <AddFileDialog onUpload={handleUpload} />
      </CardContent>
    </Card>
  );
}
