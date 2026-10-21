---
title: "Staff Permissions for Dive Resorts: Who Can Change What"
description: "A dive resort has front desk, boat crew, instructors and managers working in one system. How seven server-enforced roles keep each person to the job they have."
slug: "role-based-staff-permissions-dive-resort-software"
canonical_url: "https://www.ridgehq.app/blog/role-based-staff-permissions-dive-resort-software"
tags: ["dive resort software", "dive resort booking software", "staff permissions", "ridgehq"]
keywords: ["dive resort software", "dive resort booking software", "role-based permissions", "RidgeHQ"]
date: "2026-10-21"
pillar: "Operations"
draft: false
---

_A dive resort runs a room calendar, a dive planner, a boat, a gear room and a front desk at once. The more people who touch the system, the more it matters that each can only do their own job._

## More Roles, More Ways to Get It Wrong

At a resort the same booking can involve reception, a dive guide, a boat pilot and a manager. If everyone shares one level of access, a front-desk change can quietly alter a room block, a dive plan or what staff are paid. With spreadsheets there is no enforcement at all.

## Seven Roles, Enforced on the Server

RidgeHQ has seven built-in roles: Owner, Manager, HeadInstructor, Instructor, Assistant, DiveMaster and Pilot. Every request is checked against the user's role on the server, so hiding a menu item is only the first layer. The roles are fixed rather than built per business, so there is no permission matrix to design before go-live. The full breakdown is in [role-based permissions](/blog/role-based-permissions-dive-center-saas).

Examples of how that divides the work:

- Staff management and business settings are Manager-level.
- Revenue reporting is limited to Managers and HeadInstructors, and revenue visibility is controlled by role.
- Waiver templates can only be created, edited or deactivated by a Manager, so front-line staff work with signed waivers but cannot change the legal text.
- Owner always has full access.

## Across the Resort's Workflow

The same rules apply whichever screen someone is on: the dive planner and room calendar, bookings and POS, gear, and staff. Stay & Dive packages that bundle accommodation and rental components are handled by the same permissions as everything else.

Paid orders are never edited in place. A change is recorded as a credit note and logged with who made it, so permissions decide who can act and the audit trail records that they did.

## AI Follows the Same Roles

The AI Copilot does not get extra powers. Each AI tool declares a minimum role that is checked before it runs, and medium- and high-risk actions need an explicit confirmation. Outside assistants connected over MCP use tokens tied to a staff member and capped at Manager-level permissions.

## What Is Not There Yet

RidgeHQ has no dedicated staff availability or time-off calendar yet, so rota planning around leave still happens outside the system.

## Key takeaways

- Seven fixed roles, checked on the server for every request.
- Settings, staff records, revenue reports and waiver templates are limited to the roles that need them.
- The AI Copilot and MCP access are bound by the same roles.
- Order changes are recorded as credit notes with an audit trail, not edits.

## Learn more

- [RidgeHQ for dive resorts](/solutions/dive-resorts)
- [Staff Coordination](/platform/staff)
- [Scheduling & Dispatch](/platform/scheduling)

---

_Book a demo to see how the seven roles map onto your resort's team._
