---
title: "Sailing School Software and Data Isolation: Row-Level Security Explained"
description: "What database-level row-level security means for a sailing school's students, crew and charter records, and what it does not replace."
slug: "rls-multi-tenancy-data-security-sailing-schools"
canonical_url: "https://www.ridgehq.app/blog/rls-multi-tenancy-data-security-sailing-schools"
tags: ["sailing school software", "sailing school booking software", "data security", "ridgehq"]
keywords: ["sailing school software", "sailing school booking software", "row-level security", "RidgeHQ"]
date: "2026-10-21"
pillar: "Technology"
draft: false
---

_A sailing school holds student details, crew assignments, waivers and vessel records. When all of that moves into one shared platform, the question is who else can see it. Here is how RidgeHQ separates each school's data, and where that protection stops._

## What a Sailing School Keeps in One System

Multi-day courses, private coaching, charters and boat hire generate a lot of personal and commercial data: student profiles with certifications, skipper and crew assignments, signed waivers, payments, and a vessel register with inspection, licence and insurance dates. Moving off spreadsheets puts all of it in one place, which is the point, and also raises the cost of a separation failure.

## Isolation Enforced by the Database

RidgeHQ is one platform shared by many activity businesses. It uses PostgreSQL row-level security (RLS): every business-owned row carries its business identifier, and the database applies a policy to each query so a request for one business reads and writes only that business's rows. The database engine applies the filter; it is not left to each query in the application.

In production, RLS has been enforced since 30 September 2026. The API, background worker and web app connect as dedicated application roles rather than the database owner, so the policies are not silently bypassed. The deeper explanation is in [database-level multi-tenancy](/blog/database-level-multi-tenancy-for-dive-centers).

## What Sits Behind It

The same isolation covers scheduling, bookings and POS, gear and fleet records, accommodation, partner commissions, staff fee statements and waivers. For a sailing school, that includes the vessel register and each student's signed waiver, stored against that participant.

The AI Copilot works through the same service functions as the rest of the platform, so its reads and writes stay inside your business and the signed-in user's role.

## Two Layers, Two Jobs

RLS keeps one school's data apart from every other school's. Inside your school, [role-based permissions](/blog/role-based-permissions-dive-center-saas) decide what each person can see and change: an instructor does not need the owner's access, and revenue visibility is controlled by role. Neither layer replaces the other.

## What We Do Not Claim

RidgeHQ holds no third-party security certifications today. The [security page](/security) lists what is and is not implemented.

## Key takeaways

- RidgeHQ separates each business's data with PostgreSQL row-level security, applied by the database on every query.
- RLS is enforced in production, with the application connecting as non-owner database roles.
- Bookings, POS, scheduling, vessels, accommodation, commissions, staff fees and waivers sit behind the same isolation.
- Roles control access within your school; RLS controls access between businesses.

## Learn more

- [RidgeHQ for sailing schools](/solutions/sailing-schools)
- [Online Bookings & POS](/platform/bookings-pos)
- [Security](/security)

---

_Book a demo to walk through how your school's data is separated and who on your team can see what._
