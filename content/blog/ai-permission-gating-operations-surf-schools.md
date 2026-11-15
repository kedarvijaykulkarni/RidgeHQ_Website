---
title: "AI Copilot for Surf Schools: Role Checks, Confirmations and Real Undo"
description: "How RidgeHQ's AI Copilot helps surf schools move lesson groups and instructors when conditions change, with role checks, confirmations and undo where it is real."
slug: "ai-permission-gating-operations-surf-schools"
canonical_url: "https://www.ridgehq.app/blog/ai-permission-gating-operations-surf-schools"
tags: ["surf school software", "surf lesson scheduling", "ai copilot", "staff permissions", "ridgehq"]
keywords: ["surf school software", "surf school booking software", "surf lesson scheduling", "AI copilot booking software", "RidgeHQ"]
date: "2026-11-15"
pillar: "Technology"
draft: false
video:
  youtubeId: "3uiV0jufv3Y"
  title: "AI permission gating + risk-tiered confirmation"
  description: "How RidgeHQ's AI Copilot checks the user's role before every action and asks for explicit confirmation on medium- and high-risk changes, such as rescheduling a session."
  uploadDate: "2026-11-04T19:55:11-08:00"
  durationSeconds: 70
---

_A surf school's day is set by the tide and the swell, and it gets rewritten more than once. An assistant that helps with those changes is only worth having if it cannot do more than the person asking. Here is how RidgeHQ's AI Copilot is bounded for a surf school, and where its limits are._

## A Schedule That Moves With the Water

A morning beginner group is booked for low tide. The forecast shifts, the tide window moves, and the session needs to go an hour later. Two students have been placed in the wrong ability group, and an instructor has to swap from the intermediate lesson to cover the beginners. None of this is unusual; it is a normal surf school morning.

RidgeHQ's Event Planner holds the lesson groups, instructor assignments and student lists in one schedule, and can show tide, wind and weather suitability for the spot so the call is made against the conditions rather than a guess. The AI Copilot sits on top of that schedule. It is built for reading and scheduling: it answers questions such as "who is in the 10am beginner group and have they all signed waivers?" and can reschedule a session or move a student between groups once a person confirms.

## The Copilot Can Only Do What Your Role Allows

Every Copilot tool declares a minimum role, and that role is checked before the tool runs. RidgeHQ has seven fixed staff roles enforced on the server, so the Copilot works inside the same boundaries as the rest of the app.

In practice that means the front desk and the head instructor get different reach. Someone on the front desk can ask the Copilot about today's roster, waivers and bookings, but cannot use it to make a change their role does not permit in the app. A head instructor who owns the lesson plan can use it to move groups and reassign instructors, within what their role allows.

## Confirmation Before the Schedule Changes

Actions that change the schedule, such as rescheduling a session or assigning and unassigning a student, are treated as medium or high risk and need an explicit confirmation before anything changes. The Copilot proposes the change; a person approves it.

When a session moves, students are told by email. RidgeHQ does not send SMS notices.

## Undo Where It Is Real, and Only There

For a small set of actions that are reversible by nature, RidgeHQ takes a snapshot before the change and has a real revert path: rescheduling a session, assigning or unassigning a participant, and moving a rental or accommodation block. If the tide call was wrong, the session can go back to its original slot; if a student was put in the wrong group, the assignment can be reverted.

Money is different. Refunds and creating or cancelling bookings have no undo by design, because a captured payment or a confirmed order should not be silently reversed. Those actions are audited and need confirmation. Paid orders are never edited in place; a change is recorded as a credit note.

For the same model applied to a windsurf, wingfoil and SUP centre, see [controlled AI for windsurf schools](/blog/ai-permission-gating-safe-operations).

## Key takeaways

- The AI Copilot is for reading and scheduling, and works within the signed-in user's role.
- Every Copilot tool checks a minimum role before it runs, so the front desk and head instructor get different reach.
- Rescheduling a session or reassigning a student needs explicit confirmation first.
- Undo is real for rescheduling, participant assignment and moving rental or accommodation blocks; refunds and booking changes have no undo and are audited.

## Learn more

- [RidgeHQ for surf schools](/solutions/surf-schools)
- [AI Copilot](/ai-copilot)
- [Surf school waivers and check-in](/blog/surf-school-waivers-and-check-in)

---

_Book a demo to see the Copilot working inside your own roles and lesson schedule._
