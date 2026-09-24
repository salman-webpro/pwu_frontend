# Progress

## Done
- Next.js app scaffolded (App Router, TypeScript, Tailwind, **`src/`
  layout** — code lives under `src/`, not the repo root)
- shadcn/ui initialized (`components.json` present; `button`, `avatar`,
  `separator`, `sheet` primitives generated)
- `src/lib/utils.ts` — `cn()` helper (from shadcn init)
- `src/types/` domain entity files (`product`, `order`, `location`,
  `company`, `user`, `approval`, `business-memory`, `invoice`)
- The shared dashboard shell: `src/components/dashboard/sidebar.tsx`
  (desktop fixed rail + mobile hamburger/drawer via `Sheet`,
  active-route highlighting) and `src/app/(dashboard)/layout.tsx`,
  fed by mock `DEMO_COMPANY` / `DEMO_USER` in `src/lib/mock-data/`.
  Root `/` redirects to `/dashboard`.
- GitHub repo created (`pwu_frontend`, private), pushed successfully

## Not started
- Real content for any screen — build in the order listed in
  screens-reference.md, or whatever order is asked for
- The shared page header (title/subtitle + right-side account-bar
  cluster: location selector, role badge, avatar, "+ New request").
  Build **one shared header component** reused by every screen — the
  Locations and Billing & Payment mockups currently show a different
  top-right treatment, but that's a UI/UX inconsistency in the
  mockups, not an intentional per-screen spec. The designer will
  update those two screens to match the shared header; don't build a
  per-page header slot to accommodate them.
- Auth (login screen, JWT handling, protected routes via middleware)
- The rest of `src/lib/mock-data/` fixtures (currently only company
  and user exist) to stand in for the backend
- The `pwu_backend` backend repo — nothing built yet
- Any Stripe integration

## Known placeholder that needs revisiting later
`src/lib/mock-data/company.ts` / `user.ts` hardcode `DEMO_COMPANY` /
`DEMO_USER` (Harborview Dental Group / Andrew Smith). This is
intentional for now — there's no auth or API yet. Once the backend
exists, this should come from the authenticated session instead
(server-side fetch in the layout, or a context provider fed by the
session).
