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
- The other 9 screens have the shared `PageHeader` with real
  title/description copy, but placeholder body content only
- GitHub repo created (`pwu_frontend`, private), pushed successfully

## Not started
- Real body content for every screen except Dashboard, Products, and
  Orders — build in the order listed in screens-reference.md, or
  whatever order is asked for
- Personalized-tab content on the Products screen (no design spec yet)
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
