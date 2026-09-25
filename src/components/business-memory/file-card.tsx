import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StatusBadge } from "@/components/shared/status-badge";
import type { FileCard as FileCardData } from "@/types/business-memory";

interface FileCardProps {
  card: FileCardData;
}

export function FileCard({ card }: FileCardProps) {
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
        {card.files.map((file) => (
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
        <Button variant="outline" className="w-full">
          + Add file
        </Button>
      </CardContent>
    </Card>
  );
}
