# Execution Prompt 01 — Reconnaissance and Architecture

Execute this phase from the repository root.

Read:

- `00-AGENT-OPERATING-MODE.md`
- `01-SOURCE-OF-TRUTH.md`
- `06-TECHNICAL-IMPLEMENTATION.md`
- Tier-A Brain files named in `01-SOURCE-OF-TRUTH.md`

Then:

1. Map repository apps/packages and identify marketing vs authenticated product surfaces.
2. Identify current framework, Tailwind setup, analytics, assets, SEO, forms, deployment, and test commands.
3. Decide whether to reuse an existing marketing app or create a dedicated isolated app.
4. Inventory current AquaRosters public routes that may need migration/redirect mapping.
5. Identify reusable real product screenshots.
6. Locate any existing Supabase/Turnstile public lead implementation; mark it for removal or non-use in RidgeHQ marketing lead flow unless another product surface still needs it.
7. Create/record the architecture decision and minimal project skeleton/config needed for later phases.

Do not build all pages in this phase.

Acceptance:

- architecture choice is evidence-based;
- authenticated SaaS code is not repurposed as marketing runtime;
- no destructive rename;
- no dependency-upgrade spree;
- exact build/test commands are known;
- external Zoho form permalink is identified as configuration, not invented.

Output a concise phase report and continue to Execution Prompt 02 when working under the master prompt.
