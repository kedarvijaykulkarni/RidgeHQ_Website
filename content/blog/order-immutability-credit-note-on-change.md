---
title: "Order Immutability and Credit Notes: Keeping Dive Center Records Accurate"
description: "Why RidgeHQ never rewrites a paid order: changes are recorded as credit notes, so dive center bookings, payments, and revenue reports always reconcile."
slug: "order-immutability-credit-note-on-change"
canonical_url: "https://www.ridgehq.app/blog/order-immutability-credit-note-on-change"
tags: ["dive center operations", "data integrity", "booking management", "financial record keeping", "credit notes", "SaaS"]
date: "2026-09-18"
updatedAt: "2026-10-09"
pillar: "Technology"
draft: false
---

# Order Immutability and Credit Notes: Keeping Dive Center Records Accurate

_Bookings change all the time. Your financial records shouldn't silently change with them. RidgeHQ treats a paid order as immutable and records every change as a credit note, so the history of each booking stays verifiable._

## The Problem with Overwriting Records

Dive center revenue comes from many directions: fun dives, courses, gear rental, accommodation, retail at the front desk, and bookings that arrive through partners. Every one of those can change after it is paid—a reschedule, a cancellation, an added participant, a downgrade from a package.

In a spreadsheet or a basic booking tool, the easy way to handle a change is to edit the original record. That's also the problem. Once the original amount is overwritten, there is no reliable way to show what was sold, what changed, and when. End-of-day cash doesn't match the bookings list, partner commissions are calculated against numbers that have moved, and month-end reconciliation turns into detective work.

## How Credit-Note-on-Change Works

RidgeHQ takes the approach accountants already expect: a settled order is never rewritten. When a paid order changes, the platform records a credit note against it instead of silently editing the amounts. The original order stays exactly as it was issued, and the credit note shows the adjustment.

The result is an append-only history for each booking. Anyone reviewing the order later can see what was originally sold and every adjustment made since, rather than only the latest state.

Credit notes appear in their own view in the bookings workspace alongside bookings, payments, and invoices, so they can be reviewed and reconciled like any other financial document.

## Who Can Change What

Immutability works best combined with clear rules about who can make changes. In RidgeHQ, those rules are enforced on the server:

- Cancelling a booking and issuing a refund are Manager-level actions.
- The payments and credit-note views are limited to Managers and HeadInstructors.
- Creating bookings and printing invoices are available to Managers and HeadInstructors.

So a front-line staff member can see the bookings they need for the day without being able to change what a customer was charged.

## Why It Matters Beyond the Order Itself

Because the order history is never rewritten, the reports built on it stay trustworthy. Deposits, balances, and credit notes flow into the daily close and revenue-by-origin reporting, and partner commissions are tracked against the same records. When the numbers in a report are questioned, the answer is in the order's own history.

The same principle shapes how RidgeHQ handles AI. The AI Copilot can read bookings and make scheduling changes, but money-moving actions such as cancellations are audited and always require explicit confirmation, and they are deliberately not auto-reversible—the same posture as the order records themselves. Undo exists for actions that are reversible by nature, like rescheduling a session, not for financial events that have already happened.

## Moving Past Legacy Tools

Switching from spreadsheets or a legacy booking tool is usually prompted by operational pain: double bookings, lost waivers, a schedule that only lives in one person's head. Financial integrity is easy to overlook in that move, and expensive to fix later.

Starting on a platform where paid orders are immutable from day one means you don't have to bolt on audit discipline afterwards. Each business's records are also kept separate at the database level, with PostgreSQL row-level security, so the history you build stays yours.

## Key takeaways

- RidgeHQ never rewrites a paid order; changes are recorded as credit notes against the original.
- Each booking keeps an append-only history of what was sold and every adjustment since.
- Cancellations, refunds, and access to payments and credit notes are restricted by role and enforced on the server.
- AI money-moving actions are audited and confirmed but not auto-reversible, matching the immutable order model.

---

_Book a demo to see how a reschedule, a cancellation, and the resulting credit note look in your own booking flow._
