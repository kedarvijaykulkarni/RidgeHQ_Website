# AI Discoverability Audit

Formal Phase 1 audit for the AI-Discoverability + AI-Native Sales initiative, written
against the state of `main` as of 2026-09-12 (post PR #27). Earlier phases of this
initiative shipped on `feat/ai-discoverability` (merged via PR #20) before this audit
existed as a standalone document; this backfills the Phase 1 deliverable honestly
against what's actually in the repo today, not against what a prior plan assumed
would exist.

This document is the canonical reference for "what exists" and "what's missing."
Individual GitHub issues in this batch implement the missing items; update the
relevant row here (Status) as each closes.

## A. Current state

**Crawlability**
- `src/app/robots.ts` — `allow: '/'`, `disallow: ['/api/']`. No AI crawler
  (GPTBot, ClaudeBot, Claude-User, PerplexityBot, Google-Extended) is blocked.
- `src/app/sitemap.ts` — covers all static marketing routes, every `/solutions/[slug]`
  (12 verticals), every `/products/[slug]`, every `/platform/[slug]` capability, and
  every non-draft `/blog/[slug]` post. Does **not** yet cover `/tools/*` beyond the two
  calculators already listed by hand, `/compare/*`, `/case-studies/*`, or `/use-cases/*`
  (none of the last three exist yet — see §B).

**Structured data** (`src/components/seo/StructuredData.tsx`)
- `Organization` + `WebSite` graph — site-wide, in `layout.tsx`.
- `SoftwareApplication`/`Offer` — home, `/pricing`, each `/products/[slug]`.
- `FAQPage` — home, `/solutions/[slug]`, `/products/[slug]`, `/platform/[slug]`,
  everywhere an `<FAQAccordion />` renders. Built from `faqPageJsonLd()`, sourced from
  the same data the visible accordion renders (no drift risk).
- `Article` + `BreadcrumbList` — each `/blog/[slug]`.
- No `AggregateRating`/`Review` schema anywhere (no real reviews exist yet — correctly
  not fabricated).

**Answer-first / AI-native surfaces**
- `public/llms.txt` — a standalone, hand-written static file (does not import
  `product-knowledge.ts`) with a product summary, platform/product/industry links,
  and pricing described honestly as a private pilot (no invented price). Must be
  checked for drift against `product-knowledge.ts` manually — it does not update
  automatically when that file changes.
- `/ai` (`src/app/ai/page.tsx`) — human- and LLM-readable product summary that
  directly renders `productKnowledge`, including its `faqs` (as a `<dl>`, not the
  `<FAQAccordion />` other pages use) and its `security.summary` field.
- `src/lib/config/product-knowledge.ts` — canonical machine-readable aggregation of
  `verticals.ts`/`products.ts`/`platform.ts`/`integrations.ts`/`marketing.ts`/`faq.ts`.
  No new facts are declared there; it re-derives from the source configs plus a few
  hand-maintained fields not sourced from any config (positioning, ICP, poor-fit
  profile, and `security.summary`) — these are the fields most likely to drift out
  of sync with actual product/security decisions since nothing re-derives them.

**Content**
- 12 industry vertical pages (`/solutions/[slug]`), each with `painPoint`,
  `keyCapability`, `featureSections`, `faqs`.
- Blog (`content/blog/*.md`, rendered via `/blog/[slug]`): 7 published posts, all
  dive-center/technical-architecture focused (multi-tenancy, role-based permissions,
  AI Copilot scheduling, waivers, order immutability, flat pricing, AI Copilot as
  operational core). No posts currently cover the customer-journey/education topics
  (ROI, break-even, spreadsheet migration) an earlier plan assumed existed — those
  posts do not exist in the current `content/blog/` directory. No `pillar`/IA grouping
  exists on `BlogPost` yet.
- 2 of the ~10 calculators an earlier plan proposed exist:
  `NoShowCostCalculator`, `AdminTimeCostCalculator` (`src/components/marketing/tools/`,
  rendered at `/tools/no-show-cost-calculator` and `/tools/admin-time-cost-calculator`).
  Both are client components, every input editable, no data submitted anywhere.

**What does not exist yet**
- No public JSON API (`/api/public/*`).
- No MCP server or ChatGPT-app integration.
- No `/compare/*` or `/alternatives/*` comparison pages.
- No `/case-studies/*` architecture.
- No `/use-cases/*` (problem-based) pages.
- No structured industry × problem intent map.
- No AI-referral analytics segmentation (GA is wired in, but every session is
  reported the same way regardless of referrer).
- No automated tests beyond one existing Jest test
  (`src/lib/zoho/buildZohoFormUrl.test.ts`) — nothing for calculators, JSON-LD
  helpers, or sitemap output.
- No CTA-to-buying-stage mapping — most vertical/product/platform pages end in the
  same `<CTASection />` "Book a Demo" close; only `/tools/*` currently varies its CTA.

## B. Missing items (P0–P3)

| # | Item | Priority | Tracking issue |
|---|---|---|---|
| 1 | Complete metadata/canonicalization pass on remaining pages | P0 | #4 |
| 2 | Security review write-up | P0 | #18 |
| 3 | Industry × problem intent model | P1 | #5 |
| 4 | Problem-based solution/use-case pages | P1 | #6 |
| 5 | CTA-to-buying-stage funnel audit | P1 | #7 |
| 6 | AI referral analytics | P1 | #8 |
| 7 | Automated test coverage | P1 | #16 |
| 8 | Academy content IA + additional guides | P2 | #9 |
| 9 | Remaining 8 calculators | P2 | #10 |
| 10 | Comparison-page architecture | P2 | #11 |
| 11 | Case-study/evidence architecture | P2 | #12 |
| 12 | Accessibility + performance audit of `/ai`, `/tools`, calculators | P2 | #17 |
| 13 | Public JSON API endpoints | P3 | #13 |
| 14 | MCP / ChatGPT app readiness proposal | P3 | #14 |
| 15 | Anonymous benchmark strategy doc | P3 | #15 |
| 16 | Final report assembly | — | #19 |

## C. Evidence

| Recommendation | Evidence | Status | Safe to publish |
|---|---|---|---|
| FAQPage JSON-LD | Built from the same `faqs` array the page visibly renders (via `<FAQAccordion />` on most pages, a `<dl>` on `/ai`) | Shipped | Yes |
| `llms.txt` / `/ai` | Sourced from `product-knowledge.ts`, itself derived from published marketing config | Shipped | Yes |
| Pricing described as private pilot | `marketingConfig.pricingMode === 'pilot'`, no public price list exists | Shipped | Yes |
| 2 calculators | Client-only, no data submitted, formulas shown in plain text | Shipped | Yes |
| Industry × problem intent model | Not yet built — no file exists mapping vertical pain points to commercial intent | Missing (#5) | N/A |
| Comparison pages | Requires sourcing every competitor claim from the Brain vault's `wiki/competitors.md`; not yet built | Missing (#11) | Only once vault-sourced |
| Case studies | No verified or publishable design-partner outcome evidence exists in this repository or the linked vault as of this writing; must not be fabricated | Missing (#12), ship with 0 entries | Yes, empty-state only |
| AI referral analytics | GA (`GoogleAnalytics.tsx`, `CTAEventTracker.tsx`) wired in; no AI-referrer segmentation event exists | Missing (#8) | N/A |
| Automated tests | One Jest test exists repo-wide; nothing covers this initiative's code | Missing (#16) | N/A |

## Process

This is a living reference. When an issue in the table above closes, update its
Status here and in `docs/ai-discoverability-final-report.md` (#19) rather than
letting this document go stale.
