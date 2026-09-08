# Architecture

## Domain-first pricing
`lib/engine.ts` is a pure pricing function. UI previews and API simulations call the same function so checkout behavior does not silently diverge from the admin interface.

## Safety model
- priority determines campaign evaluation order;
- non-stackable campaigns stop lower-priority discount application;
- minimum-spend failures are explicit warnings;
- discount never exceeds subtotal;
- free shipping affects shipping independently of merchandise discount;
- conflict detection runs before publication.

## Production migration
Persist campaigns and revisions in a database, add authentication/RBAC, approval workflow, idempotency, currency-safe decimal arithmetic, segment resolution, catalog eligibility rules and event-driven attribution. A production checkout should snapshot the campaign decision so later edits do not rewrite historical orders.
