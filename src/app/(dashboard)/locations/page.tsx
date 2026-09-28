import { PageHeader } from "@/components/dashboard/page-header";
import { LocationsSection } from "@/components/locations/locations-section";
import { TipBanner } from "@/components/shared/tip-banner";
import { DEMO_USER } from "@/lib/mock-data/user";
import { DEFAULT_LOCATION_LABEL, DEMO_LOCATIONS } from "@/lib/mock-data/locations";

export default function LocationsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Locations"
        description="Every site that orders under this account, its delivery address, and the tax jurisdiction it prices against."
        location={DEFAULT_LOCATION_LABEL}
        role={DEMO_USER.role}
      />
      <div className="flex flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">
        <LocationsSection initialLocations={DEMO_LOCATIONS} />

        <TipBanner
          lead="Every site, one account."
          text="Orders confirm delivery location, not delivery cost — tax is priced per site automatically."
        />
      </div>
    </div>
  );
}
