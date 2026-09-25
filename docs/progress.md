# Progress

## Done
- Next.js app scaffolded (App Router, TypeScript, Tailwind, **`src/`
  layout** — code lives under `src/`, not the repo root)
- shadcn/ui initialized (`components.json` present; `button`, `avatar`,
  `separator`, `sheet`, `card`, `badge`, `table`, `tabs` primitives
  generated)
- `src/lib/utils.ts` — `cn()` helper (from shadcn init)
- Font swapped to Inter (`src/app/layout.tsx`); brand pink locked to
  `#EC0868` via a `--brand-pink` token in `globals.css`
  (`bg-brand-pink` / `text-brand-pink` utilities)
- `src/types/` domain entity files (`product`, `order`, `location`,
  `company`, `user`, `approval`, `business-memory`, `invoice`)
- The shared dashboard shell: `src/components/dashboard/sidebar.tsx`
  (desktop fixed rail + mobile hamburger/drawer via `Sheet`,
  active-route highlighting) and `src/app/(dashboard)/layout.tsx`,
  fed by mock `DEMO_COMPANY` / `DEMO_USER` in `src/lib/mock-data/`.
  Root `/` redirects to `/dashboard`.
- The shared `PageHeader` (`src/components/dashboard/page-header.tsx`)
  — **interim simplified version**: title, description, location
  pill, role pill only. No avatar or "+ New request" button yet — the
  designer is revising the full header design (see decisions below).
  Wired into all 12 screens under `(dashboard)/`.
- Dashboard screen fully built (`src/app/(dashboard)/dashboard/page.tsx`)
  with real mock content: order-cutoff banner, stat row, "Needs your
  decision" list, approved-products table, Business Memory summary,
  activity feed, closing tip banner. Supporting pieces:
  - `src/components/shared/` — `OrderCutoffBanner`, `StatCard`,
    `StatusBadge`, `TipBanner` (reusable across future screens)
  - `src/components/overview/` — Dashboard-screen-only widgets
    (`NeedsYourDecision`, `ApprovedProductsTable`,
    `BusinessMemorySummaryCard`, `ActivityFeed`)
  - `src/lib/mock-data/dashboard.ts`, `locations.ts` — fixtures backing
    the above
- Products screen fully built (`src/app/(dashboard)/products/page.tsx`)
  — "Ready to order" / "Personalized" tabs (shadcn `Tabs`), responsive
  product-card grid, closing tip banner. Supporting pieces:
  - `src/components/products/` — `ProductCard`, `ProductGrid`
  - `src/components/shared/order-button.tsx` — the pink "Order ·
    Reorder" CTA, extracted here once both Dashboard's reorder button
    and Products' order button needed the same styling
  - `src/lib/mock-data/products.ts` — the 6 "Ready to order" fixtures.
    No mockup/design exists yet for Personalized-tab content — only
    the count badge ("4") is shown in the mockup, so that tab is a
    placeholder for now
- Orders screen fully built (`src/app/(dashboard)/orders/page.tsx`) —
  order-cutoff banner, filterable order-history table (All / Needs
  attention / In production / Shipped / Ready), "Reorder — 1 click"
  section reusing the Products screen's card grid in its compact
  "locked qty" variant. Supporting pieces:
  - `src/components/orders/orders-table.tsx` — client component
    (filter state), reuses `StatusBadge`
  - `src/components/products/product-card.tsx` now takes an optional
    `variant: "catalog" | "locked"` instead of a separate component
  - `src/lib/mock-data/orders.ts` — the 6 order-history fixtures
  - `APPROVED_PRODUCTS_TOTAL` moved from `mock-data/dashboard.ts` to
    `mock-data/products.ts` (it's a products fact, and both Dashboard's
    and Orders' "View all N" links needed the same number)
- Business Memory screen fully built
  (`src/app/(dashboard)/business-memory/page.tsx`) — tabs for General
  plus all 6 product types (shadcn `Tabs`, horizontally scrollable on
  narrow screens). General tab has the brand-colors swatch card and 3
  file cards (brand identity, brand guidelines, logo files). Each
  product-type tab shows a "Print templates" grid per the 04(b) mockup
  — named designs with front/back color-split thumbnails, one marked
  DEFAULT, plus separate "+ Add design Front" / "+ Add design Back"
  actions. Supporting pieces:
  - `src/components/business-memory/` — `FileCard`, `BrandColorsCard`
    (General tab), `PrintDesignCard`, `AddDesignCard`,
    `PrintTemplatesSection` (product-type tabs)
  - `src/types/business-memory.ts` — generic `FileCard`
    (title/description/status/files) for the General tab's cards, plus
    `PrintDesign` (name/isDefault/frontColor/backColor) for the
    per-product-type designs
  - `StatusBadge` gained an `"in-progress"` tone (amber) alongside the
    existing `"approved"` one
  - `src/lib/mock-data/business-memory.ts` — General tab's 3 file
    cards + the 6 product-type tab labels + `PRINT_DESIGNS_BY_TAB`.
    Only the Postcards tab has a mockup (04(b): Classic/Modern/Bold
    designs) — the other 5 product tabs start with zero designs (just
    the two "Add design" actions) until real mockups exist for them
- Approvals screen fully built (`src/app/(dashboard)/approvals/page.tsx`)
  — 4 tabs (Awaiting Approval / Approved / Changes Requested / All)
  with the same circular count-badge style as Products (counts derived
  live from the mock array, not hardcoded — avoids the mockup's own
  2+2+2≠5 arithmetic), avg-response summary text, closing tip banner.
  Two different tab layouts per the 05 and 05(b) mockups: "Awaiting
  Approval" is an actionable list (icon + title/subtitle + Request
  changes / Approve / View proof); Approved / Changes Requested / All
  are a read-only card grid (status badge + title + status date, no
  actions) filtered by status. Each tab has its own subtitle line — it
  is NOT one shared line above the tabs. Supporting pieces:
  - `src/components/approvals/` — `ApprovalItem` + `ApprovalsList`
    (Awaiting Approval), `ApprovalSummaryCard` + `ApprovalSummaryGrid`
    (the other 3 tabs)
  - `src/lib/mock-data/approvals.ts` — single `ALL_APPROVALS` array (5
    items, matching 05(b)'s "All" tab), filtered per tab in the page
  - `StatusBadge`'s `"awaiting"` and `"changes-requested"` tones
    recolored to amber (were unused placeholders before; 05(b) showed
    both render amber, not the gray/red they'd been guessed as)
- Shared `ui/` primitives tuned to match the mockups more closely
  (applies to every screen using them, not just one):
  - `Tabs`/`TabsTrigger`: more generous padding, `rounded-md` (8px,
    via the theme's `--radius-md` token) instead of the default
    cramped/rounded-lg look
  - `Button`, `TabsTrigger`, and a few hand-rolled `<button>`s: explicit
    `cursor-pointer` (Tailwind v4 dropped the old default of pointer
    cursors on buttons)
  - `src/components/shared/tab-count-badge.tsx` — circular count badge
    (gray by default, brand-pink + white when its tab is active),
    replacing the oval shadcn `Badge` for tab counts
- Reports screen fully built (`src/app/(dashboard)/reports/page.tsx`)
  — recent-orders table (reuses the `Order` type + `StatusBadge`, with
  its own status label map since this screen phrases "approved" as
  "Approved & ready"), a **functional** time-range tab bar (This
  Month/Quarter/Year/All Time — no design spec for per-range data, so
  values are invented but internally consistent: each range's chart
  granularity differs — weeks/months/months/years — and its points sum
  to that range's "Total spend" stat), a hand-rolled CSS bar chart (no
  charting library — one simple chart didn't justify the dependency),
  and an "At a glance" stats card. Supporting pieces:
  - `src/components/reports/` — `RecentOrdersTable`,
    `SpendByMonthChart` (presentational, takes points/title/description
    as props), `AtAGlanceCard`, `SpendPerformanceSection` (`"use client"`
    — owns the selected-range state, is the only client component on
    this otherwise server-rendered page)
  - `src/lib/mock-data/reports.ts` — `SPEND_BY_RANGE` and
    `AT_A_GLANCE_BY_RANGE`, keyed by `SpendTimeRangeId`
  - Chart bars use fixed pixel heights (`MAX_BAR_HEIGHT_PX` scaled),
    not percentages — a percentage height on the bar had no definite
    parent height to resolve against one level up, so bars rendered
    invisible until this fix
- The other 6 screens have the shared `PageHeader` with real
  title/description copy, but placeholder body content only
- GitHub repo created (`pwu_frontend`, private), pushed successfully

## Not started
- Real body content for every screen except Dashboard, Products,
  Orders, Business Memory, Approvals, and Reports — build in the order
  listed in screens-reference.md, or whatever order is asked for
- Personalized-tab content on the Products screen (no design spec yet)
- Real per-product-type design content for the 5 non-Postcards product
  tabs on Business Memory (no mockup exists for them yet)
- The finished shared header (avatar + "+ New request" button) once
  the designer delivers corrected Locations/Billing & Payment mockups
  showing the real intended design
- Auth (login screen, JWT handling, protected routes via middleware)
- The rest of `src/lib/mock-data/` fixtures (products, orders,
  approvals, business-memory, invoices) to stand in for the backend
- The `pwu_backend` backend repo — nothing built yet
- Any Stripe integration

## Known placeholder that needs revisiting later
`src/lib/mock-data/company.ts` / `user.ts` hardcode `DEMO_COMPANY` /
`DEMO_USER` (Harborview Dental Group / Andrew Smith). This is
intentional for now — there's no auth or API yet. Once the backend
exists, this should come from the authenticated session instead
(server-side fetch in the layout, or a context provider fed by the
session).
