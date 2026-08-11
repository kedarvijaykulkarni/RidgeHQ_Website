# 00 — AI Coding Agent Operating Mode

## Mission

Build the **RidgeHQ.app public marketing website** without drifting into a rewrite of the authenticated SaaS product.

This pack is designed to work with Claude Code, Codex CLI, GitHub Copilot, or another coding agent. The agent should make decisions, implement, test, and continue through the defined phases instead of repeatedly asking for approval on ordinary engineering choices.

## Current commercial phase

RidgeHQ is in a **controlled paid-pilot / design-partner validation phase**, not broad self-service launch.

The website may be public and production quality, but it must not imply:

- settled public pricing;
- mass-market launch;
- validated adoption across all 12 verticals;
- thousands of customers/bookings;
- a fully autonomous or fully reversible AI layer;
- legal/trademark clearance of the RidgeHQ name.

## Context-loading discipline

Do not dump the entire Brain vault into context on every phase.

Use this order:

1. Read this file, `PROMPT.md`, and `01-SOURCE-OF-TRUTH.md`.
2. Read only the Tier-A Brain files named in `01-SOURCE-OF-TRUTH.md`.
3. For a feature claim, read the specific module/API/architecture file that owns that claim.
4. For a vertical page, read only the relevant product/domain material plus `My-Wording.md` if needed.
5. Reuse conclusions already established in the current implementation log instead of re-reading the same files.

Use `rg`, file search, symbol search, and targeted reads before opening large files in full.

## Engineering rules

- Inspect before editing.
- Reuse the repository's current framework and dependency versions unless there is a real blocker.
- Server components/default static rendering first; client JavaScript only where interaction needs it.
- Do not introduce a new backend merely for marketing forms.
- Do not expose secrets to the browser.
- Do not invent external integration credentials, form permalinks, analytics IDs, social handles, testimonials, customer logos, or compliance claims.
- Keep repeated marketing data in typed configuration/content, not duplicated across pages.
- Make pages useful without JavaScript wherever practical.
- Keep the marketing runtime isolated from authenticated product modules.
- Do not perform a repository-wide AquaRosters/AquaRoster → RidgeHQ rename.

## External configuration rule

When a value must come from the founder's account — for example the real Zoho Forms public permalink — **do not invent it**.

Implement the integration boundary, environment variable, validation, component, tests, and deployment checklist. Mark the real value as a deployment requirement.

Do not leave fake production URLs such as `YOUR_FORM_ID` in rendered pages.

## Verification gates

At the end of each implementation phase:

1. run the narrowest relevant tests/typecheck;
2. inspect the diff for accidental product-app changes;
3. record decisions and unresolved external setup;
4. continue to the next phase if no hard blocker exists.

Before final completion run the repository-appropriate equivalents of:

- lint;
- typecheck;
- tests;
- production build;
- broken-link/navigation check;
- responsive/manual accessibility checks.

## Git behavior

Follow repository-local instructions if they define branch/PR conventions. Otherwise, make local working-tree changes only. Do not push, merge, or create release tags unless the user explicitly asked for that workflow.
