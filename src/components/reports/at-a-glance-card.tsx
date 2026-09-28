import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { AtAGlanceStat } from "@/lib/mock-data/reports";

interface AtAGlanceCardProps {
  stats: AtAGlanceStat[];
}

export function AtAGlanceCard({ stats }: AtAGlanceCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>At a glance</CardTitle>
      </CardHeader>
      <CardContent className="divide-y divide-border">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0"
          >
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <div className="text-right">
              <p className="text-lg font-bold">{stat.value}</p>
              <p
                className={cn(
                  "text-xs",
                  stat.noteTone === "positive"
                    ? "text-green-600"
                    : "text-muted-foreground",
                )}
              >
                {stat.note}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
