import type { Location } from "@/types/location";

export const DEMO_LOCATIONS: Location[] = [
  {
    id: "loc-downtown",
    code: "LOC-001",
    name: "Downtown",
    address: "412 Main St",
    city: "Seattle",
    state: "WA",
    zip: "98104",
    taxRate: 10.1,
    taxJurisdiction: "WA · King Co.",
    isDefault: true,
    contactName: "Priya Nair",
    contactTitle: "Office Manager",
    contactPhone: "(206) 555-0148",
  },
  {
    id: "loc-ballard",
    code: "LOC-002",
    name: "Ballard",
    address: "2210 NW Market St",
    city: "Seattle",
    state: "WA",
    zip: "98107",
    taxRate: 10.1,
    taxJurisdiction: "WA · King Co.",
    isDefault: false,
    contactName: "Devon Ruiz",
    contactTitle: "Front Desk Lead",
    contactPhone: "(206) 555-0172",
  },
  {
    id: "loc-eastside-bellevue",
    code: "LOC-003",
    name: "Eastside — Bellevue",
    address: "980 116th Ave NE",
    city: "Bellevue",
    state: "WA",
    zip: "98004",
    taxRate: 10.2,
    taxJurisdiction: "WA · King Co.",
    isDefault: false,
    contactName: "Lena Osei",
    contactTitle: "Office Manager",
    contactPhone: "(425) 555-0193",
  },
];

export const DEFAULT_LOCATION =
  DEMO_LOCATIONS.find((location) => location.isDefault) ?? DEMO_LOCATIONS[0];

// Matches the mockups' short "<site> — <street>" header display,
// e.g. "Downtown — Main St" (no house number).
export const DEFAULT_LOCATION_LABEL = "Downtown — Main St";
