# RidgeHQ Website AI Prompt Pack v2

This pack is the implementation specification and execution workflow for the **RidgeHQ.app public marketing website**.

It was revised against the founder-supplied `Brain(1).zip` on **2026-08-11** and incorporates the current controlled-pilot business decision plus a **single Zoho Forms → Zoho CRM lead architecture**.

## Recommended use

### Full implementation

Give your coding agent `PROMPT.md` from the repository root and tell it to execute all phases.

`PROMPT.md` will route the agent through the modular execution files.

### Phase-by-phase implementation

Use:

1. `20-EXECUTE-01-RECON-ARCHITECTURE.md`
2. `21-EXECUTE-02-BRAND-CONTENT-IA.md`
3. `22-EXECUTE-03-DESIGN-COMPONENTS.md`
4. `23-EXECUTE-04-PAGES.md`
5. `24-EXECUTE-05-ZOHO-CRM-CONVERSION.md`
6. `25-EXECUTE-06-SEO-ANALYTICS-QA.md`

Each phase reuses the shared source/specification files and is intentionally scoped so multiple AI agents can work without loading the entire Brain every time.

## Shared specification files

- `00-AGENT-OPERATING-MODE.md` — agent behavior, context and verification discipline
- `01-SOURCE-OF-TRUTH.md` — conflict/staleness resolution against the latest Brain
- `02-BRAND-POSITIONING.md` — RidgeHQ category, voice, 12 verticals, GTM boundary
- `03-INFORMATION-ARCHITECTURE.md` — routes and conversion architecture
- `04-COPY-MESSAGING.md` — copy system and evidence-safe claims
- `05-DESIGN-SYSTEM.md` — visual/UI direction
- `06-TECHNICAL-IMPLEMENTATION.md` — architecture, runtime, Zoho embed contract
- `07-FUNCTIONAL-REQUIREMENTS.md` — site interactions and one-form branching requirements
- `08-SEO-ANALYTICS-ACCESSIBILITY.md` — SEO, UTM, analytics, accessibility, performance
- `09-FORMS-SECURITY.md` — single Zoho Forms security/privacy model
- `10-IMPLEMENTATION-ACCEPTANCE.md` — definition of done
- `11-ZOHO-FORMS-CRM.md` — detailed Zoho Forms → CRM blueprint
- `12-GTM-LAUNCH-GUARDRAILS.md` — controlled-pilot/pricing guardrails
- `13-ZOHO-ADMIN-SETUP.md` — founder-side Zoho account configuration checklist
- `CHANGELOG.md` — what changed from the prior pack

## Brain root expected by the prompts

`D:\work\Bloowatch\aquarosters\Brain\AquaRosters`

Historical Brain material still uses AquaRosters/AquaRoster. Public website copy uses **RidgeHQ**. The prompt pack deliberately prevents a destructive repository-wide rename.

## Key v2 decision

There is **one website lead form**, not separate Contact/Demo/Design Partner backends.

The same Zoho form is embedded with different intent context and pushes into Zoho CRM Leads. This lets RidgeHQ use Zoho's CRM mapping, attribution, upsert, assignment, workflows, tags, and later scoring instead of maintaining a parallel lead database.
