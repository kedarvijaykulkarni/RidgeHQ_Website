---
title: "Role-Based Permissions: Control Staff Actions in Your Dive Center SaaS"
description: "How RidgeHQ's seven staff roles control who can see and change bookings, reports, settings, waivers, and AI actions, enforced on the server for every request."
slug: "role-based-permissions-dive-center-saas"
canonical_url: "https://www.ridgehq.app/blog/role-based-permissions-dive-center-saas"
tags: ["dive operations", "dive center management", "staff permissions", "saas for dive shops", "role-based access"]
date: "2026-09-10"
updatedAt: "2026-10-09"
pillar: "Technology"
draft: false
---

_Effective staff permissions are crucial for operational integrity and data security. RidgeHQ's built-in roles make sure every team member works with the platform only to the extent their job requires, and the rules are enforced on the server, not just hidden in the menu._

## Why Role-Based Access Control Matters for Dive Operations

As a dive center grows, so does its team: instructors, divemasters, boat pilots, assistants, front-desk and admin staff, and managers. Each of these jobs needs different data and different powers in the system.

Without formal role-based access control, the default is often to give everyone the same login or the same access. That creates real risk. Someone who only needs to see today's roster shouldn't be able to change company settings, edit staff records, or browse revenue reports. Over-permissioning invites accidental changes and leaves the owner manually policing who touched what.

The same problem is worse with spreadsheets. You can track who has the file, but the spreadsheet can't stop a shared copy from being edited, forwarded, or opened on a personal phone.

## RidgeHQ's Seven Operational Roles

RidgeHQ ships with seven roles that match how activity businesses actually staff: **Owner, Manager, HeadInstructor, Instructor, Assistant, DiveMaster, and Pilot.** Each staff member is assigned one role, and the role decides what they can see and do.

The roles are fixed and consistently defined rather than built from scratch by each business. That keeps permissions predictable: an Instructor at one center has the same powers as an Instructor at another, and no one has to design a permission matrix before going live.

## Beyond Hiding Menus: Server-Enforced Actions

Role-based permissions in RidgeHQ regulate actions, not just visibility. Every request is checked against the user's role on the server, so hiding a link is only the first layer.

Some examples of how the roles divide the work:

- **Staff management and settings** are Manager-level. Instructors can't edit staff records or change business configuration.
- **Reports**, including revenue reporting, are limited to Managers and HeadInstructors, and revenue visibility is controlled by role.
- **Bookings, client records, and the activity log** are available to Managers, HeadInstructors, and Instructors.
- **Waiver templates** can only be created, edited, or deactivated by a Manager. Front-line staff work with the waivers participants sign, but they can't change the legal text.
- **Owner** always has full access, so the business owner is never locked out of their own system.

If someone types or bookmarks the address of a page their role can't access, the admin app sends them back to the dashboard with a clear "you don't have permission" message instead of loading the page.

## Permissions in Daily Workflows

These boundaries run through the whole operational stack—the Event Planner, bookings, the POS, the gear rental catalog, and staff management—so the rules hold no matter which screen someone is on.

They also work together with order immutability. A paid order is never edited in place: a change is recorded as a credit note, and changes are logged with who made them. Permissions decide who can make a change; the audit trail records that they did.

## AI Is Governed by the Same Roles

The AI Copilot doesn't get extra powers. Every AI tool declares a minimum role, and that role is checked before the tool runs. If the user's role is too low, the action doesn't happen. For medium- and high-risk actions—such as assigning or unassigning a participant or rescheduling a session—the copilot also requires an explicit confirmation before anything changes.

The same applies to outside AI assistants connected over MCP. Access tokens are tied to a staff member, hashed, revocable, and capped at Manager-level permissions.

## Isolation Underneath the Roles

Roles control access within your business. Underneath them, PostgreSQL row-level security keeps each business's data separate from every other business on the platform. The two layers do different jobs: row-level security makes sure you only ever see your own center's data, and roles make sure each member of your team only sees and changes what their job needs.

## Key takeaways

- RidgeHQ has seven built-in operational roles: Owner, Manager, HeadInstructor, Instructor, Assistant, DiveMaster, and Pilot.
- Permissions are enforced on the server for every request, not just by hiding menu items.
- Staff, settings, reports, and waiver templates are restricted to the roles that need them, and revenue visibility is role-controlled.
- AI Copilot and MCP actions are bound by the same roles, with confirmation required for medium- and high-risk changes.

---

_Book a demo to see how the seven roles map onto your own team, or review the controls on our [security page](https://www.ridgehq.app/security)._
