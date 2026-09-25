import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type StatusTone =
  | "approved"
  | "in-production"
  | "shipped"
  | "ready"
  | "needs-attention"
  | "awaiting"
  | "changes-requested";

const TONE_STYLES: Record<StatusTone, string> = {
  approved: "bg-green-50 text-green-700",
  "in-production": "bg-blue-50 text-blue-700",
  shipped: "bg-purple-50 text-purple-700",
  ready: "bg-green-50 text-green-700",
  "needs-attention": "bg-amber-50 text-amber-700",
  awaiting: "bg-slate-100 text-slate-700",
  "changes-requested": "bg-red-50 text-red-700",
};

const DOT_STYLES: Record<StatusTone, string> = {
  approved: "bg-green-500",
  "in-production": "bg-blue-500",
  shipped: "bg-purple-500",
  ready: "bg-green-500",
  "needs-attention": "bg-amber-500",
  awaiting: "bg-slate-400",
  "changes-requested": "bg-red-500",
};

interface StatusBadgeProps {
  tone: StatusTone;
  label: string;
}

export function StatusBadge({ tone, label }: StatusBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "gap-1.5 border-transparent font-medium",
        TONE_STYLES[tone],
      )}
    >
      <span className={cn("size-1.5 rounded-full", DOT_STYLES[tone])} />
      {label}
    </Badge>
  );
}
