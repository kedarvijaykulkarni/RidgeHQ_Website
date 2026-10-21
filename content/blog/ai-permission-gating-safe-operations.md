---
title: "Controlled AI for Windsurf Schools: Role Checks, Confirmations, and Undo"
description: "How an AI copilot can help a busy windsurf, wingfoil and SUP centre without taking over: role checks before every tool, confirmation for risky changes, and undo where it is real."
slug: "ai-permission-gating-safe-operations"
canonical_url: "https://www.ridgehq.app/blog/ai-permission-gating-safe-operations"
tags: ["windsurf school booking software", "ai copilot", "staff permissions", "ridgehq"]
keywords: ["windsurf school booking software", "windsurf schools online booking system", "AI copilot booking software", "RidgeHQ"]
date: "2026-10-21"
pillar: "Technology"
draft: false
---

_A windsurf, wingfoil or SUP centre changes its plan with the wind. An AI assistant that can help with that is only useful if it cannot do more than the person asking. Here is how RidgeHQ's AI Copilot is bounded, and where its limits are._

## Why a Fast-Moving Centre Needs a Bounded Assistant

On a windy day the schedule moves: a lesson shifts an hour, an instructor swaps groups, a rig is pulled for repair. Asking an assistant "who is teaching at 2pm and which boards do they need?" saves a trip to the planner. Letting that assistant change things without limits would trade a small saving for a large risk.

RidgeHQ's AI Copilot is built for reading and scheduling: it answers questions about today's sessions, waivers, gear needs and bookings, and can create or reschedule sessions once staff confirm. It works within the signed-in user's role.

## Every Tool Checks the Role First

Each AI tool declares a minimum role, and that role is checked before the tool runs. If the person asking is not allowed to do something in the app, the Copilot cannot do it for them. A front-desk assistant cannot use the Copilot to reach what only a manager can. For how the seven roles divide the work, see [role-based permissions](/blog/role-based-permissions-dive-center-saas).

## Confirmation for Medium- and High-Risk Actions

Actions that change the schedule, such as assigning or unassigning a participant or rescheduling a session, need an explicit confirmation before anything changes. The Copilot proposes; a person approves.

## Undo Where It Is Real

For five kinds of action that are reversible by nature (rescheduling a session, assigning or unassigning a participant, and moving a rental or accommodation block) RidgeHQ takes a snapshot of the data before the change and has a real revert path.

Money is different. Refunds and creating or cancelling bookings have no auto-undo, because a captured card payment or a confirmed order cannot be silently reversed from a snapshot. Those actions are audited and always need confirmation, and they are not available to outside assistants over MCP. Paid orders themselves are never edited in place: a change is recorded as a credit note.

## What This Means on the Water

- A lesson moved because the wind dropped can be moved back if the call was wrong.
- An instructor assignment made in error can be reverted, and overlapping instructor assignments are refused in the first place.
- Board, rig and wetsuit availability stays tied to specific units, so a rescheduled lesson still draws from the same inventory as walk-in hire.

## Key takeaways

- The AI Copilot works within the user's role; every tool checks a minimum role before it runs.
- Medium- and high-risk changes need an explicit confirmation.
- Undo is real for five reversible scheduling and assignment actions, and not available for money-moving actions.
- Outside assistants connected over MCP cannot make booking, cancellation, or refund changes.

## Learn more

- [RidgeHQ for windsurf, wingfoil and SUP schools](/solutions/windsurf-schools)
- [AI Copilot](/ai-copilot)
- [Staff Coordination](/platform/staff)

---

_Book a demo to see the Copilot working inside your own roles and schedule._
