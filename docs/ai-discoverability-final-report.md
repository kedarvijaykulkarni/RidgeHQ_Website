# AI-Discoverability + AI-Native Sales — Final Report

Living document assembling the master prompt's required final report across
the full issue batch (#3–#19) on `feat/ai-discoverability-issues-batch`.
Update this as further phases land — see `docs/ai-discoverability-audit.md`
for the underlying audit this report summarizes.

## 1. Investigation

Repo already had meaningful AI-discoverability maturity before this batch:
FAQPage JSON-LD, `llms.txt`, `/ai`, `product-knowledge.ts`, 12 industry
verticals, 2 calculators, and a blog (shipped on `feat/ai-discoverability`,
merged via PR #20 and follow-ups). This batch's first action (#3) was a
formal Phase 1 audit against the actual repo state rather than assumptions —
see `docs/ai-discoverability-audit.md` §A for the full current-state
inventory as of 2026-09-12.

## 2. Missing infrastructure (at batch start)

No public API, no MCP/ChatGPT integration, no comparison pages, no
case-study architecture, no problem-based (use-case) pages, no intent map, no
AI-referral analytics, no automated tests beyond one orphaned Jest test, no
CTA-to-buying-stage mapping. Full list in `docs/ai-discoverability-audit.md`
§B, cross-referenced to issues #4–#19.

## 3. Created

- `docs/ai-discoverability-audit.md`, `docs/cta-funnel-audit.md`,
  `docs/accessibility-performance-audit-ai-tools.md`,
  `docs/ai-discoverability-security-review.md`,
  `docs/mcp-chatgpt-integration.md`,
  `docs/activity-business-benchmark-strategy.md`, this report.
- `src/lib/config/intent-map.ts`, `use-cases.ts`, `comparisons.ts`,
  `case-studies.ts` (empty).
- `/use-cases` + `/use-cases/[slug]` (2 pages), `/compare` +
  `/compare/[slug]` (2 pages), `/case-studies` + `/case-studies/[slug]`
  (0 entries, template only).
- 8 new calculators (`src/lib/calculators/*.ts` + components + pages):
  Cancellation Cost, Revenue Leakage, Break-Even, ROI, CAC:LTV, Instructor
  Utilization, Capacity Utilization, Spreadsheet Readiness Assessment —
  completing the 10-calculator set.
- `src/app/api/public/{product,industries,features,pricing}/route.ts`,
  `publicApiResponse.ts`, `publicApiRateLimit.ts`.
- `src/components/analytics/AIReferralTracker.tsx`,
  `src/lib/analytics/ai-referral.ts`.
- Jest infrastructure (`jest.config.js`, `"test"` script) — none existed
  before; 19 test suites / 61+ tests now covering calculators, JSON-LD
  helpers, sitemap output, blog pillar validation, and the AI-referral
  matcher.
- 2 new blog posts, `pillar` field on `BlogPost`.
- `CalculatorPageShell.tsx`, `ComparisonTable.tsx` (shared components).

## 4. Modified

- Metadata rewrites on `/book-demo`, `/design-partners`, `/blog`.
- CTA copy on `/blog` and `/blog/[slug]` (awareness-stage: "Explore the
  Platform" primary instead of "Book a Demo").
- `sitemap.ts`, `robots.ts` (comments only — `/api/` disallow unchanged),
  `navigation.ts`, `llms.txt` (all new routes/endpoints referenced).
- Cross-links added on `/platform/[slug]` and `/solutions/[slug]` to
  relevant `/use-cases/[slug]` pages.
- A real, pre-existing bug fixed as a side effect of #16 (making the
  orphaned Zoho test actually runnable): `buildZohoFormUrl.ts` was
  double-encoding every query param.

## 5. Product claims

One correction carried forward from before this batch (AI Copilot scoping,
per prior session) — no new product-capability claim was introduced by this
batch that wasn't already verified against `verticals.ts`/`platform.ts`/the
Brain vault. Two calculators (Instructor Utilization, Capacity Utilization)
are explicitly labeled standalone educational tools, not a RidgeHQ reporting
feature, after checking the vault confirmed no such feature is shipped.
Comparison pages (#11) were scoped down from the issue's original "named
competitor" request to unnamed categories, per the standing
`marketing-copy-guardrails` rule — a deliberate, user-approved scope
reduction, not an omission.

## 6. AI discoverability improvements

Public JSON API (4 endpoints), `/use-cases` and `/compare` as new
crawlable/indexable content surfaces, `pillar`-organized blog, `/ai` now
documents the public API, `llms.txt` updated with every new surface.

## 7. Sales funnel improvements

CTA-to-buying-stage audit and fix (#7), AI-referral session tracking and
calculator-completion events (#8), 8 new calculators each with a
stage-appropriate CTA, use-case pages cross-linked from both the vertical and
capability pages a visitor might arrive from.

## 8. Testing

Jest was previously unconfigured (`npx jest` failed outright — no
`jest.config`, no `"test"` script; the one existing test file was never
actually running). Now: 19 suites, 61+ tests, covering every new calculator
formula, JSON-LD helpers (`faqPageJsonLd`, `breadcrumbJsonLd`,
`softwareApplicationJsonLd`, `productSoftwareJsonLd`), sitemap route
coverage, blog pillar frontmatter validation, and the AI-referral matcher
(including adversarial hostname-spoofing cases caught in review). `npx tsc
--noEmit`, `npx eslint`, and `npx next build` were run and passed after every
commit in this batch.

## 9. Remaining work

- **`/pricing` still renders pilot-only copy** despite a vault-recorded
  2026-08-28 decision to publish a real Starter/Grow/Scale ladder — flagged,
  not applied, in `docs/vault-sync-log.md`; needs an explicit owner
  go-ahead, not an unprompted edit.
- **Case studies remain empty** — genuinely blocked on a real, consented
  design-partner outcome existing, not on engineering (indexing is now
  conditional and will activate automatically once an entry is added).
- **MCP proposal is design-only** — no server code exists for the public
  pre-sales tool set proposed in #14; would need explicit prioritization.
- **Benchmark strategy is design-only** — two of the four metrics a report
  would need (cancellation rate, booking lead time) aren't computed even
  per-tenant yet in the product.
- Comparison pages currently cover 2 of the vault's 3 competitive sets (Set B
  generalized, Set C); Set A (dive-specific vertical SaaS) has no comparison
  page — every Set A competitor is individually named in the vault and none
  can be referenced per the no-competitor-naming rule, so a Set A comparison
  would need to be framed very differently (if at all).

## 10. Risks / unknowns

- **Pricing gap** (above) — real risk of the site looking stale relative to
  an internal decision, but publishing unprompted was judged more risky.
- **`ridgehq.com` domain collision** — noted in prior vault sync work, not
  re-investigated in this batch.
- **Rate limiting on `/api/public/*` is best-effort only** — in-memory,
  per-instance, not distributed-safe; acceptable for now given this is
  read-only public marketing data, revisit if real abuse is observed.
- **Comparison-page category framing vs. a future named-competitor decision**
  — if the founder later decides named comparisons are acceptable after all,
  `/compare/*`'s current unnamed framing would need a deliberate rework, not
  just new pages added alongside it.

## Process

Update this report's relevant section when a subsequent issue in this batch
(or a follow-up) lands, rather than treating it as a one-time snapshot.
