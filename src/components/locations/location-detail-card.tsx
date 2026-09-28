import { Building2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { EditLocationDialog } from "@/components/locations/edit-location-dialog";
import { cn } from "@/lib/utils";
import type { Location } from "@/types/location";

interface LocationDetailCardProps {
  location: Location;
  onSetDefault: (id: string) => void;
  onEditSave: (id: string, updates: { name: string; address: string }) => void;
}

export function LocationDetailCard({
  location,
  onSetDefault,
  onEditSave,
}: LocationDetailCardProps) {
  return (
    <Card
      className={cn(
        "gap-4",
        location.isDefault && "border-t-2 border-t-brand-pink",
      )}
    >
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div
              className={cn(
                "flex size-9 shrink-0 items-center justify-center rounded-lg",
                location.isDefault
                  ? "bg-brand-pink/10 text-brand-pink"
                  : "bg-muted text-muted-foreground",
              )}
            >
              <Building2 className="size-4" />
            </div>
            <div>
              <p className="font-semibold">{location.name}</p>
              <p className="text-xs text-muted-foreground">{location.code}</p>
            </div>
          </div>
          {location.isDefault ? (
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium whitespace-nowrap text-green-700">
              <span className="size-1.5 rounded-full bg-green-500" />
              Default
            </span>
          ) : (
            <button
              type="button"
              onClick={() => onSetDefault(location.id)}
              className="shrink-0 cursor-pointer rounded-lg border border-border px-3 py-1.5 text-xs font-medium whitespace-nowrap hover:bg-muted"
            >
              Set default
            </button>
          )}
        </div>

        <div>
          <p className="font-medium">{location.address}</p>
          <p className="text-sm text-muted-foreground">
            {location.city}, {location.state} {location.zip}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Contact
            </p>
            <p className="font-medium">
              {location.contactName}
              <span className="text-muted-foreground">
                {" "}
                · {location.contactTitle}
              </span>
            </p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Phone
            </p>
            <p className="font-medium">{location.contactPhone}</p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-3">
          <span className="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground">
            {location.taxJurisdiction} — {location.taxRate}%
          </span>
          <EditLocationDialog location={location} onSave={onEditSave} />
        </div>
      </CardContent>
    </Card>
  );
}
