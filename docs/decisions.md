# Key Decisions (and why)

## V1 is single-owner — do not build multi-user RBAC yet
The Users & Roles mockup shows exactly one active user (the Owner). The
"Approver" and "Orderer" roles are explicitly greyed out and labeled
"Planned," and the invite-teammate row is disabled with "available when
multi-user access launches." The screen states outright: "Single-owner by
design, for now."
→ Design the `Role`/`Permission` schema so Approver/Orderer slot in later
  without restructuring, but don't build invite flows or multi-user guard
  logic yet — that's explicitly deferred, not an oversight.

## Two distinct order paths
- **"Order — 1 click"**: locked spec, locked quantity, reorder of
  already-approved artwork. No approval step.
- **"+ New request"**: new artwork, routes through Approvals.
This maps directly to the "Require approval on new artwork" toggle on the
Company Profile screen — reorders skip approval, new artwork doesn't.

## Per-location tax rates
Each Location (Locations screen) carries its own jurisdiction and rate
(e.g. WA · King Co. — 10.1%, 10.2%). For V1 this is just a stored
`tax_rate` field per Location, set manually — no tax API (e.g. Avalara)
needed yet. Revisit only if the client base expands into many more
states/jurisdictions.

## Activity/event log, not websockets
The Dashboard's "Live from the system" feed ("Business Cards · 500
shipped," "Trifold · awaiting approval") needs a lightweight event table —
every order/approval state change writes a row, dashboard queries the
most recent N. Polling refresh is enough for V1; no websockets needed.

## Per-tenant dynamic theming
Harborview's dashboard is themed in their brand pink, pulled from the
brand colors stored in Business Memory — not hardcoded. Implement with
CSS custom properties set at layout render time from the company's stored
brand palette.

## Frontend and backend are separate repos, not a monorepo
Originally planned as a monorepo (`apps/web` + `apps/api` +
`packages/shared-types`) so both sides could share TypeScript types
directly. Reversed because: a backend-only contractor hire needs access
to the API code without seeing the frontend, and Git/GitHub access
control is repo-level, not folder-level — there's no way to grant access
to just one folder inside a shared repo. So:
- `pwu_frontend` (this repo) — frontend only, full team access
- `pwu_backend` (separate, private) — backend only, restricted to the
  backend hire + project owner
- The two are connected by an auto-generated OpenAPI contract instead of
  shared code — which is also a better fit for the stated goal of the
  backend being "robust enough that any future feature or project can
  connect to it," since an OpenAPI contract works for any consumer, not
  just TypeScript ones.

## Object storage: Cloudinary over S3/Supabase Storage
The core feature (client logo/brand identity → generated products) is an
image-manipulation problem. S3 and Supabase Storage only store files —
transformations would need to be built by hand (e.g. Lambda). Cloudinary
does resizing/format-conversion/transformations natively.
