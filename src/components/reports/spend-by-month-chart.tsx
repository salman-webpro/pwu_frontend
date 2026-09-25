import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { SpendDataPoint } from "@/lib/mock-data/reports";

const MAX_BAR_HEIGHT_PX = 160;
const MIN_BAR_HEIGHT_PX = 6;

interface SpendByMonthChartProps {
  title: string;
  description: string;
  points: SpendDataPoint[];
  highlightLabel: string;
}

export function SpendByMonthChart({
  title,
  description,
  points,
  highlightLabel,
}: SpendByMonthChartProps) {
  const max = Math.max(...points.map((point) => point.amount));

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-3 sm:gap-4">
          {points.map((point) => {
            const isHighlighted = point.label === highlightLabel;
            const heightPx = Math.max(
              Math.round((point.amount / max) * MAX_BAR_HEIGHT_PX),
              MIN_BAR_HEIGHT_PX,
            );
            return (
              <div
                key={point.label}
                className="flex flex-1 flex-col items-center gap-2"
              >
                <div
                  title={`$${point.amount.toLocaleString()}`}
                  className={cn(
                    "w-full rounded-t-md",
                    isHighlighted ? "bg-brand-pink" : "bg-brand-pink/15",
                  )}
                  style={{ height: `${heightPx}px` }}
                />
                <span
                  className={cn(
                    "text-xs",
                    isHighlighted
                      ? "font-semibold text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {point.label}
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
