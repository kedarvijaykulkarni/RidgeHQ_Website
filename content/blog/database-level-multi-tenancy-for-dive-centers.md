---
title: "Database-Level Multi-Tenancy: How RidgeHQ Isolates Your Dive Center's Data"
description: "How RidgeHQ uses PostgreSQL row-level security to keep each dive center's bookings, waivers, and staff data isolated, and why that matters when leaving spreadsheets."
slug: "database-level-multi-tenancy-for-dive-centers"
canonical_url: "https://www.ridgehq.app/blog/database-level-multi-tenancy-for-dive-centers"
tags: ["operations management", "data integrity", "b2b saas", "dive center software", "data security"]
date: "2026-09-09"
updatedAt: "2026-10-09"
pillar: "Technology"
draft: false
---

# Database-Level Multi-Tenancy: How RidgeHQ Isolates Your Dive Center's Data

_RidgeHQ is one platform shared by many activity businesses. Each business's data is kept separate by the database itself, not only by application code. Here is what that means and why it matters when you move your operation off spreadsheets._

## The Challenge of Operational Data Separation

Moving critical business functions—scheduling, bookings, the POS, staff management—off disconnected spreadsheets or a legacy booking tool is a big step. The functionality matters, but so does the question underneath it: who else can see this data?

Spreadsheets have no enforced boundaries at all. A shared link, a copied tab, or a forwarded file can put customer records in the wrong hands. Many SaaS platforms do better, but they enforce separation only at the application layer: every query in the code has to remember to filter by the right business. That works until one query forgets. A single missed filter in a report or an export is enough for one business's data to appear in another's view.

As more of your operation lives in one system—accommodation, gear rental, partner commissions, waivers—the cost of a separation failure grows with it.

## Implementing Multi-Tenancy at the Database Layer

RidgeHQ enforces multi-tenancy with PostgreSQL row-level security (RLS). Every business-owned row carries its business identifier, and the database applies a policy to every query so that a request on behalf of one business only ever reads or writes that business's rows. The filter is applied by the database engine, not left to each query in the application code.

In production, row-level security has been enforced since 30 September 2026. The API, background worker, and web app connect to the database as dedicated application roles rather than as the database owner, so the policies cannot be silently bypassed. The API also logs a warning at startup if it is ever pointed at a role that could bypass row-level security, which makes a misconfiguration visible instead of silent.

For a dive center operator, the practical difference is where the protection lives. With application-only separation, safety depends on every line of code being right. With database-level isolation, the application code and the database both have to agree before any data is returned.

## Isolation Across Every Core Function

This separation is not limited to one module. The same row-level policies cover the records behind core scheduling (the Event Planner), bookings and the POS, the gear rental catalog, accommodation, partner commissions, and staff fee statements. Whether your team is handling a single fun dive or a multi-day package with waivers, a room block, and several revenue lines, every record stays inside your business's boundary.

Waivers are a good example of why this matters. Each participant's signed waiver—including any answers to medical or conditional questions—is stored against that participant and protected by the same database-level isolation as the booking it belongs to.

Isolation between businesses works alongside isolation within your business. Role-based staff permissions, enforced on the server, decide what each member of your team can see and change: an instructor doesn't need the same access as the owner, and revenue visibility is controlled by role.

## Keeping AI Inside the Same Boundary

The AI Copilot does not get a side door. Its tools call the same service functions as the rest of the platform, so its reads and writes are subject to the same row-level policies. Each AI tool also checks the user's minimum role before it runs, and medium- and high-risk actions need an explicit confirmation. Whatever the copilot reads or changes stays inside the business and the role of the person using it.

## Reducing Risk When You Leave Legacy Tools

Many growing dive operations run on a patchwork: inventory in one tool, the schedule in another, waivers in a folder or spreadsheet. Moving to one connected platform reduces those silos, and database-level isolation makes sure that consolidating your data doesn't mean exposing it.

It also pairs with RidgeHQ's order immutability. Paid orders are never edited in place—changes are recorded as credit notes—so the financial history inside your boundary stays verifiable as well as private.

We are also plain about what isn't in place: RidgeHQ holds no third-party security certifications today. The security page lists exactly what is and isn't implemented.

## Key takeaways

- RidgeHQ enforces multi-tenancy with PostgreSQL row-level security, applied by the database engine on every query.
- Row-level security is enforced in production, with the application connecting through dedicated, non-owner database roles.
- Bookings, POS, scheduling, gear, accommodation, commissions, staff fees, and waivers all sit behind the same isolation.
- The AI Copilot works through the same service functions, so it stays within your business's data and the user's role.

---

_See the full list of security controls on our [security page](https://www.ridgehq.app/security), or book a demo to walk through how your data is separated._
