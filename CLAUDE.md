# Print Wave USA (PWU) — Project Context

A B2B platform for a printing company to manage its client accounts. Each
client gets their own dashboard; the printing company's internal team works
from a separate Super Admin dashboard. The core idea: a client's brand
identity (logo, colors, templates) is captured once in "Business Memory,"
the printing company builds approved products from it, and after that the
client can reorder in one click — no cart, no re-quoting, no re-uploading
files each time.

This file is the entry point Claude Code loads automatically. Details are
split into focused docs below — import syntax pulls them into context too.

See @docs/tech-stack.md for the finalized stack and hosting choices.
See @docs/architecture.md for the request lifecycle and data layer.
See @docs/decisions.md for key product/scope decisions and why.
See @docs/screens-reference.md for what each mockup screen contains.
See @docs/progress.md for what's already built vs. not started.

## Repo layout (this repo is the frontend only)

This repo — `pwu_frontend` — holds the client-facing frontend only. The
backend (`pwu_backend` — proposed name, not yet confirmed) is a
**separate, private repo**, because a
backend-only external hire needs access to it without seeing this codebase.
There is no shared-code package between them by design — the two talk via
an OpenAPI contract auto-generated from the NestJS backend, not shared
TypeScript types. See @docs/decisions.md for the full reasoning.

## Current state

Bare scaffold — starting fresh. Next.js app created (App Router,
TypeScript, Tailwind, **`src/` layout**), shadcn/ui initialized
(`components.json` at repo root), one shadcn primitive (`button`)
generated. No sidebar, no `(dashboard)` route group, no pages beyond the
default Next.js template exist yet — see @docs/progress.md.

## Working conventions

- App Router, not Pages Router. Routes live under `src/app/`.
- This repo uses the `src/` layout (`src/app`, `src/components`,
  `src/lib`, `src/types` — not repo-root `app/`, `components/`, etc.).
- The `(dashboard)` route group wraps every authenticated screen in the
  shared sidebar layout — new client-facing pages go inside it.
- Component primitives come from shadcn/ui (already initialized —
  `components.json` exists at the repo root). Prefer adding shadcn
  components over hand-rolling tables/badges/tabs/switches.
- Icons: `lucide-react`.
- Styling: Tailwind utility classes, no CSS modules.
- Every screen and layout must be responsive (mobile through desktop) —
  use Tailwind's responsive breakpoints, not fixed-width layouts. This
  applies to the sidebar/dashboard shell too, not just page content.

### Component / type organization

- `src/components/ui/` — shadcn primitives only, untouched by hand.
- `src/components/dashboard/` — the shared shell: Sidebar, nav config,
  and the shared `PageHeader` (title/description + location and role
  pills) used by every screen. **All screens share one header** — the
  Locations and Billing & Payment mockups showed a different top-right
  treatment, but that was a mockup inconsistency the designer has since
  corrected (confirmed in the updated mockups — both now use the
  standard header, with their special content moved into the page body
  instead). Currently a simplified interim version: title, description,
  location, role — no avatar. The designer's updated mockups confirm
  there's no avatar in the header design either, and that "+ New
  request" was never a header element — it sits next to the
  order-cutoff banner on Dashboard and Orders specifically (see
  `NewRequestDialog`), not in the shared header.
- `src/components/overview/` — components specific to the Dashboard
  *screen* itself (stat row, "Needs your decision", approved-products
  table, Business Memory summary, activity feed). Named `overview`
  rather than `dashboard` because that name is already taken by the
  shared shell above — don't put screen content there.
- `src/components/<feature>/` — one folder per remaining screen
  (`products/`, `orders/`, `business-memory/`, `approvals/`,
  `reports/`, `company-profile/`, `users-roles/`, `locations/`,
  `billing-payment/`). Feature-specific components live next to the
  screen they belong to.
- `src/components/shared/` — cross-feature, non-primitive pieces
  (`StatCard`, `StatusBadge`, `OrderCutoffBanner`). Promote a component
  here only once a second feature actually needs it — don't
  preemptively abstract.
- `src/types/` — one file per domain entity (`product.ts`, `order.ts`,
  `location.ts`, `company.ts`, `user.ts`, `approval.ts`,
  `business-memory.ts`, `invoice.ts`), named to match likely future
  OpenAPI schema names so swapping in generated types later is a
  rename, not a redesign.
- `src/lib/mock-data/` — per-domain fixtures (`products.ts`,
  `orders.ts`, ...) standing in for the backend until `pwu_backend` and
  the OpenAPI client exist. Keep all fake data here so it's obvious
  what to delete later.
- `src/lib/api/` — placeholder for the future OpenAPI-generated client.
- No `src/hooks/` yet — add it only when a real cross-component hook is
  needed (e.g. `useCompanyTheme` for per-tenant accent colors), not as
  an empty scaffold.

- The developer working on this is returning to active coding after a long
  gap — prefer clear, slightly more explicit code and explanations over
  terse idiomatic shortcuts, and call out *why* a step matters, not just
  what to run.
