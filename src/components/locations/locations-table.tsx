import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatusBadge } from "@/components/shared/status-badge";
import { EditLocationDialog } from "@/components/locations/edit-location-dialog";
import type { Location } from "@/types/location";

interface LocationsTableProps {
  locations: Location[];
  onSetDefault: (id: string) => void;
  onEditSave: (id: string, updates: { name: string; address: string }) => void;
}

export function LocationsTable({
  locations,
  onSetDefault,
  onEditSave,
}: LocationsTableProps) {
  const defaultLocation = locations.find((location) => location.isDefault);

  return (
    <Card>
      <CardHeader>
        <CardTitle>All locations</CardTitle>
        <CardDescription>
          {locations.length} sites in King County, WA
          {defaultLocation ? ` · ${defaultLocation.name} is the default` : ""}
        </CardDescription>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Location</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Tax rate</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {locations.map((location) => (
              <TableRow key={location.id}>
                <TableCell>
                  <p className="font-medium">{location.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {location.code}
                  </p>
                </TableCell>
                <TableCell>
                  {location.address}, {location.city}, {location.state}{" "}
                  {location.zip}
                </TableCell>
                <TableCell>{location.taxRate}%</TableCell>
                <TableCell>
                  {location.isDefault ? (
                    <StatusBadge tone="approved" label="Default" />
                  ) : (
                    <button
                      type="button"
                      onClick={() => onSetDefault(location.id)}
                      className="cursor-pointer rounded-lg border border-border px-3 py-1.5 text-xs font-medium hover:bg-muted"
                    >
                      Set default
                    </button>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <EditLocationDialog location={location} onSave={onEditSave} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
