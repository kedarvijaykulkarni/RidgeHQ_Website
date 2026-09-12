# Security Review — AI Discoverability Initiative

Phase 21 of the AI-discoverability initiative. Written confirmation of what
was checked and why it's safe, covering everything shipped in this batch
(issues #3–#17, #19) plus a fresh review of the public API endpoints (#13)
specifically, as this document's own tracking issue requires once they ship.

## 1. JSON-LD structured data

`src/components/seo/StructuredData.tsx` escapes `<` to `<` before
serializing (prevents a `</script>` breakout), and every call site across the
codebase (`layout.tsx`, `/ai`, every `/solutions|/products|/platform/[slug]`,
`/blog/[slug]`, `/use-cases/[slug]`, `/compare/[slug]`, `/case-studies/[slug]`,
`/tools/*`) passes only statically-known config data (`verticals.ts`,
`products.ts`, `platform.ts`, `faq.ts`, `use-cases.ts`, `comparisons.ts`,
`case-studies.ts`) — **no user input is ever interpolated into a JSON-LD
payload anywhere in this initiative.** Confirmed by grep: no `StructuredData`
call site references `request`, form input, query params, or any calculator
input state.

## 2. `llms.txt` / `/ai` / `product-knowledge.ts` / public API

- No secrets, credentials, or internal roadmap content. Pricing is described
  honestly as a private pilot (`marketingConfig.pricingMode === 'pilot'`) —
  the pricing gap flagged in `docs/vault-sync-log.md` is intentionally **not**
  leaked here; no unpublished number appears anywhere in this initiative.
- `product-knowledge.ts`'s hand-maintained fields (positioning, ICP, poor-fit
  profile, `security.summary`) are marketing summaries, not internal data —
  confirmed no field references tenant data, credentials, or anything beyond
  what `/pricing`, `/security`, and the vertical/product pages already
  publish.
- **Public API endpoints (#13), reviewed fresh per this issue's explicit
  requirement:** `src/app/api/public/{product,industries,features,pricing}/route.ts`
  each serialize a scoped slice of `productKnowledge` — the exact same data
  `/ai` already renders publicly. Confirmed: no route accepts a request body,
  no route reflects any request input back into its response (no injection
  surface), every route exports only `GET` (no `POST`/`PUT`/`DELETE`
  handlers), and `robots.ts` keeps `/api/` disallowed from crawling/indexing.
  A best-effort in-memory rate limit sits under a 1-hour `Cache-Control` —
  explicitly documented as not distributed-safe across serverless instances,
  since a real distributed limiter isn't in this stack's scope; acceptable
  for read-only public marketing data with no per-request cost beyond a JSON
  serialization. **Two specific limitations, reviewed and accepted rather
  than solved:** (1) the identifier keying the limiter (`X-Forwarded-For`)
  is client-influenceable — nothing here validates it against a trusted
  proxy chain, so a caller that varies the header can get a fresh bucket per
  request and evade the per-identifier limit; closing this properly would
  require knowing this deployment's actual edge/proxy configuration, which
  this repo doesn't control, so it's documented as a known gap rather than
  silently assumed solved. (2) That same pattern (many single-use
  identifiers) previously grew the tracker's map without bound — fixed with
  a periodic sweep that evicts stale identifiers, bounding memory even
  though the underlying spoofing bypass remains. Accepted severity: low,
  since the data served is public marketing content with no per-tenant cost
  and no write path — worth revisiting only if real abuse is observed.

## 3. Calculators

All 10 calculators (`src/components/marketing/tools/*.tsx`) are client-only:
every input is local `useState`, nothing is submitted to any backend, no new
form or lead-capture surface was introduced. Percent-typed inputs are clamped
(`clampPercent()`) after a code-review finding that an out-of-range value
could otherwise produce a nonsensical (negative) result — a correctness fix,
not a security one, since nothing server-side ever saw the value.

## 4. Repo-internal working documents

`RidgeHQ_Website_AI_Prompt/*.md` and `RidgeHQ_Website_Master_Prompt_v2.md` are
tracked in git but confirmed (via grep across `src/` and `public/`) **not
referenced or linked from any application route or public asset** — Next.js
only serves what's under `src/app/**` (routes) or `public/**` (static
assets); a root-level `.md` file is not served by the running application at
all. Same applies to everything under `docs/` (including this file) — tracked
for repo contributors, not web-accessible. No change recommended; these are
correctly unpublished by construction, not by convention alone.

## 5. `docs/vault-sync-log.md`

Reviewed for scope creep as it's grown across this batch: every entry
summarizes a finding or a decision (e.g. "pricing gap not yet applied,"
"comparison pages built as unnamed categories") rather than reproducing raw
vault content verbatim. The one entry that does carry a specific figure (the
2026-09-05 entry noting the vault's Starter/Grow/Scale price points) predates
this batch and was already flagged there as consequential/unapplied — it
remains accurate to note the gap exists, without this repo's public pages
ever publishing those figures. This file itself is not web-accessible (see
§4) — the sensitivity question is about repo-visibility, not public exposure,
and nothing added in this batch changes that calculus.

## 6. Findings and follow-ups

No secret exposure, injection risk, unsafe public API, or private-data leak
found. One process note, not a security defect: this document should be
re-run (or extended) the next time a new public-facing endpoint or MCP tool
ships, per this issue's own instruction — the MCP proposal (#14) is
explicitly design-only and introduces no new attack surface yet.

## Related

- `docs/ai-discoverability-audit.md` (Phase 1)
- Public API: #13, `src/app/api/public/*`
- MCP proposal (design-only, no new surface yet): #14
