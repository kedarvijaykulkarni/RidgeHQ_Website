# LLM / AI Search Visibility — TODOs

Goal: get RidgeHQ surfaced when users ask ChatGPT / Claude / Gemini / Antigravity-style
assistants for tools in our category, ideally in the top handful of suggestions.

Current state (checked 2026-08-26):
- `src/app/robots.ts` — wildcard `allow: '/'`, disallows `/api/` and `/thank-you`. No bot is explicitly
  blocked, so GPTBot/ClaudeBot/PerplexityBot/Google-Extended are currently allowed by default.
- `src/app/sitemap.ts` exists.
- JSON-LD is live via `src/components/seo/StructuredData.tsx`, used in `layout.tsx` (Organization +
  WebSite graph) and `src/app/blog/[slug]/page.tsx`.
- No `Product`, `FAQPage`, or `AggregateRating` schema anywhere yet.
- No `llms.txt`.

## 1. Structured data (highest leverage)
- [x] `SoftwareApplication`/`Offer` JSON-LD on home, pricing, and each `/products/[slug]` page
      (`src/lib/softwareApplicationJsonLd.ts`).
- [x] `FAQPage` JSON-LD added 2026-09-04 (`src/lib/faqPageJsonLd.ts`) on every page that already
      renders an `<FAQAccordion />`: home, `/solutions/[slug]`, `/products/[slug]`, `/platform/[slug]`.
      Schema is built from the same data the accordion renders, so it can't drift from visible copy.
- [ ] Add `AggregateRating`/`Review` schema once real reviews/testimonials exist — don't fabricate.
- [ ] Verify all JSON-LD validates: https://validator.schema.org/ and Google's Rich Results Test.

## 2. Crawlability
- [ ] Confirm in production that `robots.txt` renders as expected (`/robots.txt`) and isn't overridden
      by hosting-level config (Vercel/Cloudflare rules, etc.).
- [ ] Explicitly test-fetch the site as `GPTBot`, `ClaudeBot`, `Claude-User`, `PerplexityBot`,
      `Google-Extended` user agents to confirm nothing upstream (CDN/WAF) is blocking them —
      robots.txt alone doesn't guarantee network-level access.
- [ ] Confirm `sitemap.xml` is complete (all marketing + blog routes) and submitted in Google Search
      Console / Bing Webmaster Tools (Bing's index feeds ChatGPT search).

## 3. Answer-first content
- [ ] Add a single declarative one-liner near the top of the homepage: "RidgeHQ is a [category] that
      [does X] for [audience]." — this is the sentence most likely to get lifted into an AI answer.
- [ ] Rewrite key H2/H3 headers on product pages as literal questions users would ask an LLM
      ("What is RidgeHQ used for?", "How much does RidgeHQ cost?"), each followed by a direct
      1–2 sentence answer before supporting detail.
- [ ] Add/expand an FAQ section per point above — feeds both `FAQPage` schema and answer-first copy.

## 4. Off-site signal (LLMs weight third-party corroboration heavily)
- [ ] Get RidgeHQ listed on relevant directories (G2, Capterra, Product Hunt, category-specific
      "best tools" roundups).
- [ ] Seed a few genuine mentions/threads (Reddit, dev.to, HN) — don't astroturf, but do participate
      where relevant.
- [ ] Target 5–10 independent external mentions before expecting AI-answer inclusion to move.

## 5. `llms.txt` (optional, low cost)
- [x] Added `public/llms.txt` 2026-09-04 — product summary, platform/product/industry links pulled
      from existing config data, pricing described accurately as a private pilot (no invented price),
      and an explicit "don't cite unpublished claims" note for AI crawlers.

## 6. Verification (no dashboard exists yet — must check manually)
- [ ] Weekly: ask ChatGPT, Claude, Gemini "best tools for [category]" / "what is RidgeHQ" from a
      fresh/no-context session and log whether/how RidgeHQ is mentioned.
- [ ] Track over time in this file or a separate log — there's no Search-Console equivalent for LLMs.

## 7. WhoCanFindMe audit findings (from old AquaRoster domain — needs re-run on ridgehq.app)

Free-tier report pulled 2026-08-26 from
https://whocanfindme.com/audit/cmta2vkx40022qv01hyytrgts — audited **www.aquarosters.com**, the old
pre-rename domain. Score: **62/100** overall (ChatGPT 66, Perplexity 66, Claude 59, Gemini 55).
Paid tier (£16 one-off / £12mo) has 10 more action items not captured below — consider buying it
once re-run against ridgehq.app, since the current free view is partial.

Signal breakdown from the old-domain audit:

| Category | Score | Note |
|---|---|---|
| AI Crawler Access | 100 | robots.txt already permissive — matches what we found in `robots.ts` above |
| Structured Data | 0 | flagged before our Organization/WebSite JSON-LD (commit `dea7160`) was added — should score higher now, but still missing FAQPage/Product, see §1 |
| Extractability | 69 | how easily AI engines can lift clean answers from page text — ties into §3 (answer-first content) |
| Authority & Factual Density | 40 | **new gap, not yet in this file** — see action item below |
| Freshness | 85 | content recency signal — keep blog / changelog active |
| Technical Health | 85 | general site health (perf, HTML validity, etc.) |

New action items surfaced by the audit, not already covered above:

- [ ] **Authority & Factual Density (scored 40/100 — weakest category besides Structured Data).**
      Add concrete statistics, numbers, and citations to authoritative sources on key pages
      (e.g. "manages X bookings/day", "used by Y venues", industry stats with sources cited).
      This is what Perplexity and ChatGPT weight most heavily when deciding what to quote.
- [ ] **Extractability (69/100).** Audit AI engines' ability to lift clean, quotable answers from
      raw page text — not just from JSON-LD. Short, self-contained paragraphs near headings (see §3)
      directly address this.
- [ ] Re-run the WhoCanFindMe audit against **ridgehq.app** (not the old aquarosters.com domain) to
      get a current baseline — old-domain results are pre-rebrand and partially stale (structured
      data score in particular predates our current JSON-LD).
- [ ] Consider the £16 one-off paid report on the new domain to unlock the remaining 10 action items.
