import { cn } from "@/lib/utils";

export interface StatCardProps {
  label: string;
  value: string;
  note?: string;
  noteTone?: "positive";
  labelDotTone?: "warning";
}

export function StatCard({
  label,
  value,
  note,
  noteTone,
  labelDotTone,
}: StatCardProps) {
  return (
    <div className="flex flex-1 flex-col gap-1 p-4">
      <p className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {labelDotTone === "warning" && (
          <span className="size-1.5 rounded-full bg-amber-500" />
        )}
        {label}
      </p>
      <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
        <span className="text-2xl font-bold">{value}</span>
        {note && (
          <span
            className={cn(
              "text-xs",
              noteTone === "positive" ? "text-green-600" : "text-muted-foreground",
            )}
          >
            {note}
          </span>
        )}
      </div>
    </div>
  );
}
