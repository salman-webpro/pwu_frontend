import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { DecisionItem } from "@/lib/mock-data/dashboard";

interface NeedsYourDecisionProps {
  items: DecisionItem[];
}

const ICON_TONE_STYLES: Record<DecisionItem["iconTone"], string> = {
  pink: "bg-brand-pink/10 text-brand-pink",
  amber: "bg-amber-50 text-amber-600",
};

export function NeedsYourDecision({ items }: NeedsYourDecisionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Needs your decision</CardTitle>
        <CardAction>
          <Badge variant="secondary">{items.length}</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="divide-y divide-border">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="flex flex-col gap-3 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-3">
                <div
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-lg",
                    ICON_TONE_STYLES[item.iconTone],
                  )}
                >
                  <Icon className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.subtitle}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 gap-2 sm:ml-4">
                {item.actions.map((action) => (
                  <Button key={action.label} variant={action.variant} size="sm">
                    {action.label}
                  </Button>
                ))}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
