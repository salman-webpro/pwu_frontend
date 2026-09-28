import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ActivityItem } from "@/lib/mock-data/dashboard";

interface ActivityFeedProps {
  items: ActivityItem[];
}

const DOT_TONE_STYLES: Record<ActivityItem["tone"], string> = {
  positive: "bg-green-500",
  warning: "bg-amber-500",
  neutral: "bg-slate-400",
};

export function ActivityFeed({ items }: ActivityFeedProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Live from the system</CardTitle>
      </CardHeader>
      <CardContent className="divide-y divide-border">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0"
          >
            <div className="flex items-center gap-2">
              <span
                className={cn("size-1.5 rounded-full", DOT_TONE_STYLES[item.tone])}
              />
              <p className="text-sm">{item.text}</p>
            </div>
            <span className="text-xs text-muted-foreground">{item.time}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
