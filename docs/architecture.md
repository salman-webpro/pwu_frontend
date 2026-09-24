# Architecture

## Request lifecycle (every authenticated action)

1. **User action** — Next.js sends a request with the user's JWT (httpOnly
   cookie)
2. **Auth guard** (NestJS) — validates the JWT, identifies the user
3. **RBAC guard** — checks whether this user's role allows the requested
   action
4. **Tenancy scope** — restricts the request to the user's own company's
   data; a user can never touch another company's records
5. **Service logic** — business rules run (order creation, approval
   routing, etc.)

If any guard rejects the request, it never reaches the service logic.

## Data layer

Once service logic runs, structured data and files are handled
separately:
- **Prisma ORM → PostgreSQL** for structured, relational data: companies,
  users, roles, orders, approvals, locations
- **Object storage (Cloudinary)** for files: logos, brand templates,
  product artwork. The database stores only a reference URL, not the file
  itself.

## Concrete example: client clicks "one-click order"

1. Next.js sends `POST /orders` with the user's JWT
2. Auth guard confirms the token is valid and identifies the user
3. RBAC guard checks whether this role can place orders directly, or
   whether it needs approval first (see "Two order paths" in
   decisions.md)
4. Tenancy scope attaches the user's `companyId` — they can only touch
   their own company's data
5. Service logic creates the order, applies the approval rule, looks up
   the product tied to that company's brand profile
6. Prisma writes the new `Order` row to PostgreSQL, linked to company,
   product, and user
7. If a logo/template is needed, it's fetched via its stored Cloudinary
   URL — no extra database load
8. Response flows back up through the same chain to Next.js, which
   updates the UI

This same shape repeats for Approvals, Reports, and Business Profile
edits — just with different service logic at step 5.

## Repo boundary

`pwu_frontend` (this repo) and `pwu_backend` (separate repo) are
connected only by an HTTP API described by an OpenAPI spec — no shared
code, no shared repo access. See decisions.md for why.
