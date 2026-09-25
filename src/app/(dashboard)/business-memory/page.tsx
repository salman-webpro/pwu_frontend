import { PageHeader } from "@/components/dashboard/page-header";
import { DEMO_USER } from "@/lib/mock-data/user";
import { DEFAULT_LOCATION_LABEL } from "@/lib/mock-data/locations";

export default function BusinessMemoryPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Business Memory"
        description="Your brand identity, guidelines, logo files, and print templates — uploaded once, stored here permanently. Every order pulls from what's approved."
        location={DEFAULT_LOCATION_LABEL}
        role={DEMO_USER.role}
      />
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          Content for this screen is coming next.
        </p>
      </div>
    </div>
  );
}
