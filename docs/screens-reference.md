# Screens Reference

All screens below are from the client dashboard, using "Harborview Dental
Group" as the example tenant. Actual mockup images are in `./screens/` —
view them directly for exact layout, spacing, and copy; this file is a
functional summary of what each screen needs to do.

Shared across every screen: left sidebar (dark, `#0b0e1a`-ish, pink accent
`bg-pink-600`) with Main / Account / Support nav sections, company
logo+name+region at top, user avatar+name+role at bottom. Already built —
see `../progress.md`.

## 01-dashboard.png — Dashboard
Landing screen. Order-cutoff banner ("1h 14m — orders placed before 4:00
PM ET count as day zero"). Stat row: on-time rate, orders this week, next
delivery, pending approvals. "Needs your decision" list (approve
proof / sign off on billing, each with an action button). Approved
products table with one-click Reorder buttons. Business Memory summary
counts (approved products, artwork templates, delivery locations,
approval rules). "Live from the system" activity feed.

## 02-products.png — Products
Two tabs: "Ready to order" and "Personalized." Grid of product cards
(image, name, price, spec line, "reordered Nx", one-click Order button).
Note: card top-right badge shows turnaround time (3 day / 5 day).

## 03-orders.png — Orders
Order-cutoff banner (same as Dashboard). Filterable order history table
(All / Needs attention / In production / Shipped / Ready) — order #,
product, qty, placed date, delivery date, status. Below it, a "Reorder —
1 click" section with the same product-card pattern as Products.

## 04-business-memory.png — Business Memory
Tabs per product type: General, Postcards 6"×9", Business Cards, Flyers
8.5×11, Brochures Tri-Fold, Banners, Letterhead. "General" tab holds brand
foundation: brand color swatches, and three file cards (Brand identity
PDF, Brand guidelines PDF, Logo files SVG/PNG) each with an Approved
badge and "+ Add file." Every other tab stores that product type's own
front/back print templates. This is the data Cloudinary stores and the
Super Admin dashboard reads from to generate products.

## 04(b)-Business Memorytwo.png — Business Memory, product-type tab
Shows what a non-General tab actually looks like (captured on "Postcards
6"×9"") — the "Print templates" section referenced above. Same intro
line as the General tab ("General covers your brand foundation...")
appears here too, directly under the tab bar, regardless of which tab is
active. Below it: "Print templates" heading + "Stored by product..."
subtitle, a count pill ("3 designs") top-right, then a grid of named
designs (Classic/Modern/Bold) each shown as a front/back color-split
thumbnail — one marked DEFAULT with a pink ring + badge, the others with
a "Set default" text action — plus two dashed cards at the end, "+ Add
design Front" and "+ Add design Back" (front and back are uploaded and
replaced independently). Same closing tip banner as the General tab.

## 05-approvals.png — Approvals
Tab filter: Awaiting Approval / Approved / Changes Requested / All, each
with a count badge. Default "Awaiting Approval" tab: subtitle "Nothing
moves to production until you approve or request changes here.", then a
list of pending proofs, each with Request changes / Approve / View proof
actions. Avg response time and oldest-item age shown top-right of the
tab row (applies to all tabs).

## 05(b).Approvalstwo.png — Approvals, "All" tab
Shows the "All" tab active — a different layout than Awaiting Approval's
actionable list. Subtitle changes per tab ("Everything decided or
waiting, most recent first." here, vs. Awaiting Approval's subtitle
above) — it's not one shared line. Below it: a responsive card grid, one
card per approval regardless of status, each showing a status badge
(Awaiting/Changes requested — both amber; Approved — green) + bold title
+ a status-appropriate date line ("Submitted 2 days ago" / "Approved Aug
10" / "Requested Aug 8"). No action buttons on these cards — read-only
history/overview, unlike the Awaiting Approval list. Same card style is
assumed for the Approved and Changes Requested tabs (filtered to their
own status), though neither has its own mockup screenshot.

## 06-reports.png — Reports
Recent orders table (same shape as Orders). Spend & performance section:
time-range tabs (This Month/Quarter/Year/All Time), a spend-by-month bar
chart, and an "At a glance" panel (total orders, total spend, avg
turnaround, reorder rate).

## 07-company-profile.png — Company Profile
Profile completeness bar. Company details card (legal name, industry,
account owner, account since) with an EDIT INFO action, plus a "Tax ID /
EIN — not on file" warning state. Addresses summary (links out to
Locations). Notifications section: toggle switches — "Require approval on
new artwork" (this is the switch that decides the order-approval path,
see decisions.md), "Email me when an order enters production," "Weekly
spend summary."

## 08-users-roles.png — Users & Roles
**Read decisions.md's "V1 is single-owner" note before building this
screen** — most of it is intentionally non-functional in V1. Team members
table (currently one Owner). Three role cards: Owner (Active, full
permissions list), Approver (Planned, greyed out), Orderer (Planned,
greyed out). Invite-teammate row disabled with explanatory copy.

## 09-locations.png — Locations
Table of all delivery locations (name, address, tax rate, default/status,
Edit link) plus an "Add location" action. Below, a card per location with
full contact + tax detail. Note: this mockup's top-right header area
shows location-specific actions ("All sites verified" / "+ Add
location") instead of the usual shared header — that's a UI/UX
inconsistency the designer will correct; build this screen with the
same shared header every other screen uses.

## 10-billing-payment.png — Billing & Payment
Billed-amount summary (last 90 days) top-right. Auto-pay status pill.
Invoice history table (date, order, location, amount, status). Billing
profile card (legal name, billing address, contact, invoice email,
terms) with Edit action. Payment method card explicitly stating Stripe
hosting and "no card stored on file." Note: like Locations, this
mockup's top-right header shows a billing stat instead of the shared
header — same inconsistency, pending a designer fix; use the shared
header here too.

## 11-help-center.png / 12-contact-support.png — Help Center / Contact Support
Same "Coming Soon" placeholder content in both mockups (countdown timer,
"We are Coming Soon," email subscribe field). These are stub screens —
build the route and nav entry, but there's no real design spec yet for
final content.
