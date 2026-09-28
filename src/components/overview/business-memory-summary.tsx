import { StatusBadge } from "@/components/shared/status-badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { BusinessMemorySummary } from "@/lib/mock-data/dashboard";

interface BusinessMemorySummaryCardProps {
  summary: BusinessMemorySummary;
}

export function BusinessMemorySummaryCard({
  summary,
}: BusinessMemorySummaryCardProps) {
  const cells = [
    { label: "Approved products", value: summary.approvedProducts },
    { label: "Artwork templates", value: summary.artworkTemplates },
    { label: "Delivery locations", value: summary.deliveryLocations },
    { label: "Approval rules", value: summary.approvalRules },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Business Memory</CardTitle>
        <CardDescription>
          Approved once, ordered forever — your portfolio of preserved
          decisions.
        </CardDescription>
        <CardAction>
          <StatusBadge
            tone={summary.status === "healthy" ? "approved" : "needs-attention"}
            label={summary.status === "healthy" ? "Healthy" : "Needs attention"}
          />
        </CardAction>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {cells.map((cell) => (
          <div key={cell.label}>
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {cell.label}
            </p>
            <p className="mt-1 text-xl font-bold">{cell.value}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
