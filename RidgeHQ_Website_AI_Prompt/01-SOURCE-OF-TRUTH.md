# 01 — Source of Truth and Conflict Resolution

> **Status (2026-10-18):** historical prompt pack, written against a 2026-08-11 Brain snapshot. It does not override accepted Brain decisions. Current authority follows the RidgeHQ operating contract (`RidgeHQAPP/Brain/RidgeHQAPP/wiki/ai-operations/operating-contract.md` §2): business policy, brand and pricing come from accepted owner decisions and current Brain notes; implemented behavior comes from source and tests. Where this pack conflicts with the Brain, the Brain wins; record the conflict in the vault's `wiki/log.md`. Reconciling the facts in this pack is package BRAIN-02 of the RidgeHQ AI operating plan (`RidgeHQAPP/Brain/RidgeHQAPP/wiki/ai-operations-plan.md`).

## Purpose

The RidgeHQ marketing website is being built from a fast-moving AquaRosters product vault. This file prevents an AI agent from treating every historical note as equally current.

## Website task facts (2026-08-11 snapshot)

These were the website-task decisions as of 2026-08-11. They take precedence over older branding/site notes in this pack only. Check each one against current accepted Brain decisions before relying on it:

- Public website brand: **RidgeHQ**
- Public domain: **ridgehq.app**
- Deliverable: **public marketing/company website**, not the authenticated SaaS UI
- Master category: **Activity Business OS / Activity Operations Platform**
- Website architecture: multi-vertical, covering the 12 intended verticals
- Commercial phase: **controlled paid pilot / design-partner validation**, not broad self-service launch
- Direct booking commercial principle: **0% RidgeHQ platform commission on direct bookings** while this decision remains current
- Public pricing: **not yet validated enough to publish as settled self-service pricing**
- Lead capture: **one Zoho Forms form reused across Contact, Design Partner, Book Demo, and other qualified website conversion contexts; responses flow into Zoho CRM**
- Do not create a parallel Supabase lead database unless explicitly requested later
- Do not perform a destructive internal product rename
- The Brain remains the product/business source even where it still says AquaRosters/AquaRoster

## Latest Brain snapshot

The current prompt pack was revised against the founder-supplied **`Brain(1).zip` on 2026-08-11**.

In the local project, the expected Brain root is:

`D:\work\RidgeHQAPP\Brain\RidgeHQAPP`

(Moved 2026-09-04 from the earlier `D:\work\Bloowatch\aquarosters\Brain\AquaRosters` location — same vault, same reading order below, new path only.)

The live vault has been updated since this snapshot. Use its current accepted decisions and dated implementation evidence. Where a website task fact above conflicts with them, the Brain wins; record the conflict in the vault's `wiki/log.md`.

## Reading order

### Tier A — current business and launch truth

Read first:

- `wiki/CLAUDE.md`
- `wiki/index.md`
- `wiki/business-context.md` — updated 2026-08-11
- `wiki/competitors.md` — updated 2026-08-11
- `wiki/pricing.md` — updated 2026-08-11
- `wiki/goals.md`
- `wiki/launch-plan.md` — updated 2026-08-11
- `wiki/unit-economics.md` — updated 2026-08-11
- `wiki/operations.md`

Important current conclusions:

- Sell now through a controlled pilot.
- Do not open broad self-service onboarding yet.
- Do not publish the €49/€89/€149 ladder as final pricing before real operator validation.
- The private Founding Operator Pilot is modelled at **€49/month for 90 days**, 0% direct-booking commission, founder onboarding, and structured feedback.
- The post-pilot commercial center of gravity is intended to move toward **€89/month**, but remains a hypothesis until validated.
- Master product architecture can be broad; early acquisition remains narrow and evidence-driven.

### Tier B — implementation truth

For present-tense capability claims use:

- `wiki/development-reference/Development-Index.md`
- `wiki/development-reference/Architecture/*`
- `wiki/development-reference/Modules/*`
- `wiki/development-reference/APIs/*`
- newest QA, gap and decision notes under `wiki/development-reference/Modules/`, `testing/` and `Operations/` (the former `Docs/` folder was removed on 2026-08-21)

Specific implementation documents beat broad business summaries if they are newer or more precise.

Example: `Modules/AI-Copilot.md` documents provider-agnostic Anthropic/OpenAI/Ollama support, risk-gated confirmation, AI action audit records, and **partial** undo coverage. Its latest documented state says undo support exists for **5 of ~41 registered tools**, while financial/booking-state actions remain deliberately outside mechanical undo. Never market “every AI action is reversible.”

### Tier C — marketing inspiration, not proof

`wiki/development-reference/Docs/marketing/AquaRoster-Marketing-Brief.md`. **Removed from the Brain on 2026-08-21, with no live copy.** Do not cite it. When it was available it was used for pain points, buyer language, feature-to-benefit framing, persona ideas, and content structure.

Do not trust it blindly for current prices, capability status, GTM phase, competitor status, or brand.

### Tier D — historical raw inputs

`raw/*`

Treat as historical sources. Never prefer them over newer synthesized or implementation evidence.

## Known conflicts to resolve deliberately

### AquaRosters vs RidgeHQ

Historical docs say AquaRosters/AquaRoster. Public website copy says **RidgeHQ**.

Transform marketing language to RidgeHQ without renaming packages, routes, database objects, migrations, internal product identifiers, or repository history.

### RidgeHQ naming risk

The 2026-08-11 Brain records an exact-name collision concern around `ridgehq.com` and says not to spend heavily on a major public brand campaign until legal/name clearance is complete.

This does **not** block building the RidgeHQ.app website. It does mean:

- do not claim trademark ownership/registration unless verified;
- do not say “official global launch” merely because the site is deployed;
- do not fabricate legal-clearance language;
- keep brand investment/paid-campaign decisions outside the coding task.

### Multi-vertical architecture vs narrow GTM

Interpret the current strategy as:

- website/master brand: multi-vertical;
- product/domain model: multi-vertical;
- early outbound and lead qualification: focused beachhead;
- public copy: do not claim equal customer validation across all 12 verticals.

The current Phase-1 business-context ICP prioritizes dive centers, dive resorts, and closely related freediving/snorkel operators. CRM scoring may reflect that focus without making the entire website dive-only.

### Pricing

Do not copy the old `€29/€59/€99` ladder.

Do not automatically publish `€49/€89/€149` as settled public pricing either.

Default public website state:

- predictable subscription positioning;
- 0% RidgeHQ platform commission on direct bookings, if still current;
- early-access / Founding Operator Pilot CTA;
- no numerical self-service checkout pricing unless a newer founder decision explicitly approves it.

### AI Copilot

Safe direction, after verifying current implementation:

- AI Copilot works with operational context.
- It can use product tools through the same domain-service layer.
- medium/high-risk tool use can require confirmation.
- AI mutations are auditable.
- selected actions have defined undo support.
- Anthropic, OpenAI, and Ollama provider selection exists if still current.

Avoid:

- fully autonomous business management;
- every action reversible;
- automatic provider failover;
- token/cost tracking unless later implemented;
- autonomous refunds/cancellations/money movement.

### Waivers

Historical notes conflict. Do not use “waivers are our unique gap/differentiator” language. Verify the current product module/code before any present-tense waiver claim.

## Evidence discipline

Never invent:

- customer names or logos;
- testimonials;
- adoption counts;
- booking volume;
- ARR/MRR;
- countries served;
- revenue uplift/time saved;
- security certifications;
- legal/regulatory compliance;
- integration availability;
- roadmap dates;
- trademark status.

When evidence is incomplete, prefer:

- designed for;
- built around;
- available in early access;
- planned;
- coming soon;
- subject to pilot validation.
