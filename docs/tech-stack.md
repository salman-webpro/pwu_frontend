# Tech Stack

## Frontend (this repo)
- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui for component primitives (tables, badges, tabs, switches, cards)
- lucide-react for icons
- Hosting: Vercel

## Backend (separate `pwu_backend` repo — proposed name, not yet
confirmed — nothing built yet)
- NestJS (Node.js) + TypeScript
- Decoupled API service — owns business logic, auth, and data access, so
  any future client (mobile app, integrations, this frontend) can connect
  to the same backend the same way
- Auth: JWT, issued as an httpOnly cookie by the API (not localStorage)
- Authorization: RBAC via NestJS Guards
- Multi-tenancy: every request scoped to the requesting user's company
  (companyId), enforced centrally in a guard — not left to individual
  route handlers
- Hosting: Render for production; Railway is fine for early iteration
  before real client traffic depends on uptime

## Database
- PostgreSQL, via Prisma ORM
- Hosting: Neon (serverless, scale-to-zero — fits a multi-tenant system
  where most client companies aren't active at once; free instant
  branching is also useful for per-feature test databases)

## Object storage
- Cloudinary — chosen specifically because the core product (turning a
  client's logo/brand identity into finished products) is an image
  transformation problem, not just file storage. On-the-fly resizing,
  format conversion, and transformations are native to Cloudinary; plain
  S3 or Supabase Storage would require building that processing pipeline
  by hand.

## Payments
- Stripe — confirmed by the Billing & Payment mockup ("Hosted by Stripe ·
  no card stored on file"). Two distinct billing triggers to build for:
  - Instant-checkout orders: billed the moment the order is submitted
  - Quote-based orders: billed once the quote is accepted

## Contract between frontend and backend
- No shared TypeScript types package. Because the backend repo is
  access-restricted (see decisions.md), the two repos are connected by an
  OpenAPI (Swagger) spec that NestJS auto-generates from its own code.
  The frontend generates a typed API client from that spec (e.g. via
  `openapi-typescript`) rather than importing shared `.ts` interfaces
  directly.

## Not yet decided
- Exact CI/CD setup (likely GitHub Actions once the API repo exists)
