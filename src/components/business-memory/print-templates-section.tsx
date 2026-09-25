import { Badge } from "@/components/ui/badge";
import { PrintDesignCard } from "@/components/business-memory/print-design-card";
import { AddDesignCard } from "@/components/business-memory/add-design-card";
import type { PrintDesign } from "@/types/business-memory";

interface PrintTemplatesSectionProps {
  designs: PrintDesign[];
}

export function PrintTemplatesSection({ designs }: PrintTemplatesSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">Print templates</h2>
          <p className="text-sm text-muted-foreground">
            Stored by product. Every design is uploaded front and back —
            pick the reorder default.
          </p>
        </div>
        <Badge variant="secondary" className="shrink-0">
          {designs.length} {designs.length === 1 ? "design" : "designs"}
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {designs.map((design) => (
          <PrintDesignCard key={design.id} design={design} />
        ))}
        <AddDesignCard side="Front" />
        <AddDesignCard side="Back" />
      </div>
    </div>
  );
}
