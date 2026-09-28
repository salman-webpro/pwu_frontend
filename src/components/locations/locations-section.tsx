"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { toast } from "sonner";

import { AddLocationDialog, type NewLocationInput } from "@/components/locations/add-location-dialog";
import { LocationDetailCard } from "@/components/locations/location-detail-card";
import { LocationsTable } from "@/components/locations/locations-table";
import type { Location } from "@/types/location";

interface LocationsSectionProps {
  initialLocations: Location[];
}

export function LocationsSection({ initialLocations }: LocationsSectionProps) {
  const [locations, setLocations] = useState(initialLocations);

  function handleSetDefault(id: string) {
    const location = locations.find((loc) => loc.id === id);
    if (!location) return;
    setLocations((prev) =>
      prev.map((loc) => ({ ...loc, isDefault: loc.id === id })),
    );
    toast.success(`${location.name} set as default location.`);
  }

  function handleEditSave(
    id: string,
    updates: { name: string; address: string },
  ) {
    setLocations((prev) =>
      prev.map((loc) => (loc.id === id ? { ...loc, ...updates } : loc)),
    );
  }

  function handleAdd(input: NewLocationInput) {
    const reference = locations[0];
    const newLocation: Location = {
      id: `loc-${Date.now()}`,
      code: `LOC-${String(locations.length + 1).padStart(3, "0")}`,
      name: input.name,
      address: input.address,
      city: reference?.city ?? "",
      state: reference?.state ?? "",
      zip: reference?.zip ?? "",
      taxRate: reference?.taxRate ?? 0,
      taxJurisdiction: reference?.taxJurisdiction ?? "",
      isDefault: false,
      contactName: input.contactName,
      contactTitle: "",
      contactPhone: input.contactPhone,
    };
    setLocations((prev) => [...prev, newLocation]);
  }

  return (
    <>
      <div className="flex justify-end gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-green-50 px-3 py-1.5 text-sm font-medium text-green-700">
          <Check className="size-4" />
          All sites verified
        </span>
        <AddLocationDialog onAdd={handleAdd} />
      </div>

      <LocationsTable
        locations={locations}
        onSetDefault={handleSetDefault}
        onEditSave={handleEditSave}
      />

      <div>
        <h2 className="text-lg font-semibold">Location details</h2>
        <p className="text-sm text-muted-foreground">
          Full address, contact, and tax rate for each site.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {locations.map((location) => (
            <LocationDetailCard
              key={location.id}
              location={location}
              onSetDefault={handleSetDefault}
              onEditSave={handleEditSave}
            />
          ))}
        </div>
      </div>
    </>
  );
}
