# Prompt Pack Changelog

## v2.1 — 2026-10-18

- Marked the pack as a historical 2026-08-11 snapshot that defers to accepted Brain decisions (RidgeHQ operating contract §2).
- Removed the pack's claim to "highest priority" over the Brain; renamed it to website task facts (2026-08-11 snapshot).
- Marked the removed `wiki/development-reference/Docs/` paths (marketing brief, screenshots) as gone, with no live copy.
- No brand, pricing or positioning fact was changed; reconciliation is BRAIN-02.

## v2 — 2026-08-11

Revised against founder-supplied `Brain(1).zip` and the current RidgeHQ commercial decision.

Major changes:

1. Added explicit **controlled paid-pilot** website state.
2. Added RidgeHQ name-clearance guardrail without blocking website implementation.
3. Corrected AI marketing guidance to reflect specific implementation evidence, including partial undo coverage rather than “all reversible.”
4. Removed Supabase/Turnstile as the RidgeHQ website lead system of record.
5. Replaced it with **one Zoho Forms form reused across Contact, Design Partner, Book Demo, Pricing/Pilot, and Partner contexts**.
6. Added Zoho Forms field-alias/prefill, Field Rules, UTM/referrer tracking, spam protection, thank-you redirect, and website integration requirements.
7. Added Zoho Forms → Zoho CRM blueprint covering Leads mapping, Upsert, tags, assignment, workflows, scoring hypotheses, and source attribution.
8. Added founder-side Zoho admin checklist.
9. Added modular execution prompts for reconnaissance, content/IA, design system, page build, Zoho conversion, and final QA.
10. Added centralized marketing/pricing phase guidance so public pricing can be activated later without redesign.
11. Added PII-safe success analytics through a RidgeHQ `/thank-you` route rather than iframe inspection.
12. Added context-minimization guidance for coding agents to reduce unnecessary token use.
