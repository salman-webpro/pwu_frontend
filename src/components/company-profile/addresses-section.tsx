import Link from "next/link";

import type { CompanyAddressSummary } from "@/lib/mock-data/company-profile";

interface AddressesSectionProps {
  addresses: CompanyAddressSummary[];
}

export function AddressesSection({ addresses }: AddressesSectionProps) {
  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">Addresses on file</h2>
          <p className="text-sm text-muted-foreground">
            Full location list and delivery routing live under Locations.
          </p>
        </div>
        <Link
          href="/locations"
          className="shrink-0 text-sm font-medium text-brand-pink hover:underline"
        >
          Manage locations →
        </Link>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="rounded-xl border border-border bg-card p-4"
          >
            <p className="font-semibold">{address.label}</p>
            {address.lines.map((line) => (
              <p key={line} className="text-sm text-muted-foreground">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
