---
title: "Built-in Waiver Management for Dive Center Operations"
description: "How RidgeHQ builds digital waivers into dive center bookings: per-participant e-signatures, conditional and medical questions, roster checks, and check-in."
slug: "waiver-system-dive-center-operations"
canonical_url: "https://www.ridgehq.app/blog/waiver-system-dive-center-operations"
tags: ["dive center operations", "waiver management", "e-signature", "compliance", "operations software"]
date: "2026-09-11"
updatedAt: "2026-10-09"
pillar: "Operations"
draft: false
---

_Dive centers need waivers that are part of the booking, not a stack of forms filed next to it. RidgeHQ builds waiver capture, medical questionnaires, roster checks, and check-in into the same system that runs the day, and is plain about the one piece still on the roadmap._

## Why Waivers Belong Inside the Booking

The waiver of liability is a core operational function for any dive center. When it lives on paper, in a separate form tool, or in a spreadsheet, staff end up cross-referencing sign-up sheets against bookings and the boat roster on the morning of the dive. That is slow, and it is where mistakes happen: a diver who never signed, a form attached to the wrong booking, a medical declaration nobody can find.

Many operations platforms treat waivers as a separately priced, metered add-on, which means another integration, another monthly line item, and another place where data can drift out of sync. RidgeHQ takes the opposite approach. Waivers are a built-in part of the platform, enforced inside the booking flow and protected by the same per-business data isolation as every other record.

## Per-Participant Waivers, Enforced at Checkout

Waiver requirements attach to products. When a product requires a waiver, every participant on the booking must complete it with a typed e-signature before checkout can be submitted. Each signature is stored against that participant, not just the person who paid, so a family or group booking produces one signed record per diver.

Each signature keeps evidence that holds up if a waiver is ever questioned. The exact text the participant agreed to, the questions and answers, and the consent wording are stored with the signature, together with a SHA-256 hash of that content and the signing device's IP address and browser. Because the signed text is stored with the capture, later edits to a template never change what an earlier participant agreed to.

## Conditional Questions That Fit the Activity

A novice on a try-dive, a certified diver heading to a deep site, and a rental guest should not all answer the same form. RidgeHQ waiver templates support conditional, branching questions, built in an admin question builder.

A question can be shown or hidden based on the participant's answer to an earlier one. If a participant says they plan to dive beyond 30 meters, the form can branch to follow-up questions about deep-diving experience and training that other participants never see. Required questions are enforced on the server, not just in the browser, and only answers to questions the participant actually saw are stored. Each diver reviews and signs the terms that apply to their own activity.

## Medical Questionnaires Treated as Health Data

The same template mechanism can carry a medical questionnaire as well as a liability waiver. Because medical answers are health data, RidgeHQ handles them more strictly:

- A medical form requires a separate, unticked health-data consent before it can be signed.
- Medical answers are visible only to Head Instructors, Managers, and Owners; other staff see that the form was signed, not what it says.
- Every read of medical answers is written to the audit log.
- Each business sets a retention period, and answers older than that are cleared automatically. A Manager can also erase one guest's medical answers on request while the signed record stays.
- The AI Copilot has no tool that reads waiver answers.

## Validity Windows and Trip Roster Checks

Some forms only need to be signed once a season; others should be renewed. A waiver template can carry a validity window, so a signature stays current for a set number of months and then shows as expiring or expired.

A template can also be marked as required for trips. When staff add a diver to a trip roster, RidgeHQ checks that diver's required waivers first. If one is unsigned or expired, the add is blocked and staff see which form is missing. A Manager can override with a reason, and that override is recorded in the audit log. The trip roster shows a per-diver waiver and medical badge, so gaps are visible before the boat leaves.

When a diver needs to sign or renew outside the booking flow, staff can capture the waiver directly for that participant or email them a single-use renewal link that expires after seven days. Staff can also ask the AI Copilot to check a whole trip roster's waiver and medical compliance and report who still needs to sign.

## Check-In on the Day

Waiver status sits alongside the day's operations rather than in a separate silo. Staff check participants in from the session roster in the Event Planner, and guests can check in everyone on their confirmed booking by scanning a per-booking QR code. RidgeHQ records the arrival time and whether the check-in was done by staff or by the guest, so the roster shows who has actually arrived.

## On the Roadmap: QR-Linked Signing

One piece is planned but not yet built: QR-linked waiver signing. The aim is to tie the signing step itself to a QR code for a specific booking and session, so a participant could sign on their own phone at the dock or front desk and the signature would land directly against the right session.

Until that ships, participants sign during booking checkout, by renewal link, or with staff capture. We will describe QR-linked signing as available only once it is built and tested.

## One System of Record

Waivers connect to the rest of RidgeHQ: core scheduling in the Event Planner, bookings and the POS, trip rosters, and staff permissions. Role-based permissions control who can create and edit templates, override a roster block, or see medical answers, and per-business data isolation keeps every center's records separate at the database level. The result is one source of truth for bookings, scheduling, and participant compliance, instead of a form tool you have to reconcile by hand.

## Key takeaways

- Waivers are built into RidgeHQ, not sold as a metered add-on, and are enforced per participant with a typed e-signature at checkout.
- Every signature keeps the exact text signed, a content hash, and the signing device as evidence.
- Conditional questions and medical questionnaires are live, with medical answers restricted, audited, and cleared on a retention schedule.
- Validity windows and trip-required waivers block a roster add until the diver is covered, with an audited Manager override.
- Staff and guest QR self-check-in are live; QR-linked waiver signing is on the roadmap and not yet available.

---

_Book a demo to see the waiver, medical questionnaire, roster check, and check-in workflow on your own products._
