# GitHub Issues Tracker — Website Revamp (#70)

Repo: `kedarvijaykulkarni/RidgeHQ_Website`. This section tracks the open issues for the
[MASTER EPIC #70](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/70) website
revamp. Generated 2026-10-04 from `gh issue list` + each issue's `## Related` section.

> **Note on the instructions below:** the brief pasted in when this file was created referenced
> a different repo's setup (`@apps`, a running backend/frontend, demo login, `agy`/antigravity CLI
> for review). That doesn't match this repo — RidgeHQ_Website is a static Next.js marketing site
> with no backend/FE servers or demo login, and this repo's own `CLAUDE.md` already defines a
> `codex-reviewer` subagent for review, not `agy`. The instructions below are adapted to what
> actually exists here; ask Kedar before reusing them verbatim in a different repo.

## Branching model (as of 2026-10-04)

- **`develop` is the integration branch for the whole website revamp (#70) — it is not a
  production release.** All issue branches are cut from `develop`, and all issue PRs target
  `develop`, not `main`.
- **`main` only moves once, at the very end**, as a single one-shot merge from `develop` once
  every issue under the revamp is done. Do not open an issue PR against `main` and do not merge
  `develop` into `main` yourself — that final cutover is Kedar's call.
- Before cutting a new branch, make sure local `develop` is up to date:
  `git checkout develop && git pull origin develop`, then branch from there
  (`git checkout -b feat/<slug> develop`).
- **Vercel auto-deploys are disabled for every branch except `main`** (`vercel.json` →
  `git.deploymentEnabled`). Note the glob pattern must be `"**"`, not `"*"` — minimatch's
  `*` doesn't cross `/`, so it silently misses any `feat/...`/`fix/...` branch name (fixed
  2026-10-04, commit `9657c39`, after PRs #79/#80 were confirmed still triggering Vercel
  checks despite the first attempt in `0cdd4dc`). If a future PR shows a Vercel check
  again, check this glob first before assuming the dashboard settings changed.

## Working instructions

1. Leverage the **Karpathy** (`karpathy-guidelines`) skill for every change: simplest fix that
   satisfies the issue, surgical diffs, no speculative abstractions.
2. One branch per issue (`fix/<slug>` or `feat/<slug>`), cut from `develop` (see branching model
   above), commit, open a PR **against `develop`**, then **stop and wait** for Kedar to
   review/merge — do not self-merge.
3. Work **one issue at a time**: finish and PR one before starting the next.
4. Per-issue PRs do **not** need a `codex-reviewer` pass — run the standard local verification
   instead (`npx tsc --noEmit`, `npx eslint` on changed files, `npx next build`, plus a manual
   browser check for anything visual). **Only invoke `codex-reviewer`** (see root `CLAUDE.md` →
   "Independent Codex Code Review") once all sub-issues under an epic (#37, #41, #45, #49, #57,
   #62, #66) have merged into `develop` — run it then as a single consolidated review of that
   epic's full cumulative diff on `develop` before moving on to the next epic. Pick the Codex
   model by risk as documented in `CLAUDE.md`; fall back to the `code-review` skill if Codex is
   genuinely out of quota.
5. Open the PR against `develop` with correct labels (carry over the issue's labels), assign it
   to Kedar (`kedarvijaykulkarni`), and link the issue it closes (`Closes #<n>`).
6. If the change touches product/marketing facts, copy, routes, or metadata, update the Obsidian
   vault at `D:\work\RidgeHQAPP\Brain\RidgeHQAPP\wiki\development-reference` in the **same PR**,
   per this repo's `CLAUDE.md` vault-sync section — and run the Sitemap & Search Console checklist
   there too if routes/metadata changed.
7. After Kedar merges to `develop`, close the issue — **GitHub's "Closes #N" auto-close never
   fires here since `develop` isn't the repo's default branch**, so always close manually
   with `gh issue close <n> -c "<note>"` — and `git pull origin develop` locally before
   starting the next issue.
8. Update the checkbox below for the issue you're starting/finishing **before committing, and as a
   commit on the same issue branch/PR** — never as a separate follow-up commit pushed after the
   fact. This keeps the TODOS status change in the same review unit as the code it describes, so
   the next session (human or AI) can see what's already done and pick up the next unblocked issue.

**Stop conditions:** if session usage hits ~95%, stop and wait for reset rather than starting a new
issue. If a task turns out to need a product/business decision (pricing, positioning, scope) that
isn't Kedar's to make reflexively, flag it — don't guess.

## Unblocked — ready to pick up now

These have no open `depends on #N` and aren't gated by a pending owner decision. Pick any one.

- [x] [#38](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/38) — Define light+dark design tokens and ThemeToggle component — merged via PR #76 2026-10-04, issue closed
- [x] [#39](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/39) — Migrate hardcoded color usages site-wide to theme-aware tokens — merged via PR #80 2026-10-04 (closed manually: auto-close doesn't fire on PRs merged into `develop` since it isn't the repo's default branch)
- [x] [#42](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/42) — Build Card, Stat/metric tile, and Tabs primitives — merged via PR #82 2026-10-04, closed manually (same auto-close gap — confirmed via `gh pr view --json closingIssuesReferences` that GitHub never links/auto-closes issues for PRs targeting a non-default branch, even with "Closes #N" in the body; keep writing "Closes #N" for documentation, but always close manually with `gh issue close <n>` right after merge)
- [ ] [#43](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/43) — Build Testimonial and Logo-band components (real content only) — PR [#83](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/pull/83) open against `develop`, awaiting Kedar's review
- [ ] [#64](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/64) — Theme-toggle keyboard and screen-reader accessibility audit *(unblocked now that #38 merged)*
- [x] [#44](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/44) — Build mega-menu NavMenu component (verticals x features) — merged via PR #78 2026-10-04, closed manually 2026-10-04 (same `develop`-isn't-default-branch auto-close gap)
- [x] [#47](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/47) — Reorganize footer IA to match two-axis navigation — merged via PR #81 2026-10-04, closed manually (same auto-close gap; confirmed Vercel CI stays off on develop PRs — no checks reported, `develop` has no branch protection requiring any status check)
- [ ] [#48](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/48) — Systematic cross-linking across solutions/platform/use-cases/pricing pages *(part of #45; data-schema work, no component dependency)*
- [ ] [#51](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/51) — Add AI Copilot Q&A transcript example to homepage *(part of #49; content-only, no token/component dependency — mind the no-money-moving-AI claim boundary)*
- [x] [#46](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/46) — Redesign header mega-menu *(combined Platform+Built For into one "Solutions" two-axis menu, verticals primary/platform secondary per Kedar's confirmation 2026-10-04)* — merged via PR #79 2026-10-04, closed manually (same auto-close gap; PR body said "Closes #46" but GitHub only auto-links that against the default branch)
- [ ] [#50](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/50) — Re-sequence/re-theme homepage sections *(unblocked now that #44 merged — part of #41)*
- [ ] [#40](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/40) — WCAG AA contrast audit *(unblocked now that #39 merged — moved up from "Blocked" list below)*

## Blocked by another open issue

Kept here so the next pass knows what frees up as items above land. Re-check this list after each
merge — an item may become unblocked.

| Issue | Blocked by | Becomes unblocked once |
|---|---|---|
| [#52](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/52) Homepage trust/credibility section | #43 | #43 merges |
| [#58](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/58) Re-theme solutions/platform pages | #41 | components land |
| [#59](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/59) Re-theme products/use-cases/compare pages | #41 | components land |
| [#60](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/60) Re-theme about/case-studies/resources/security/ai pages | #41 | components land |
| [#61](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/61) Re-theme /tools hub + calculators | #41 | components land |
| [#71](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/71) Re-theme contact/book-demo/design-partners/integrations/blog/legal | #41 | components land |
| [#63](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/63) Breakpoint audit | #49, #57 | homepage + page-level pass done |
| [#65](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/65) Performance regression check | #57 | page-level pass done |
| [#67](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/67) Pre-ship sitemap/metadata/JSON-LD diff audit | #57 | page-level pass done |
| [#68](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/68) Route and redirect integrity check | #57 | page-level pass done |
| [#69](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/69) Post-deploy Search Console resubmission | everything | whole revamp ships |

## Blocked by an owner decision (do not start without Kedar's sign-off)

- [#53](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/53) [EPIC] Pricing page truth + transparency rebuild — the Brain vault (`wiki/log.md`, 2026-09-05) flags the real Starter/Grow/Scale ladder as **pending the website owner's confirmation**; it hasn't been approved to publish yet.
- [#54](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/54) Build Starter/Grow/Scale pricing table — same pending-confirmation gate as #53.
- [#55](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/55) Wire `pricingMode` 'public' branch to the real ladder — depends on #54, same gate.
- [#56](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/56) Sync pricing update across the 7 AI-discoverability surfaces — depends on #54/#55, same gate.

**Ask Kedar explicitly before touching #53-#56**: confirm the Starter €49 / Grow €89 / Scale €149
ladder in `pricing.md` is approved to go live publicly before any of these are started.

## Epics (tracking only — not directly workable)

#37, #41, #45, #49, #57, #62, #66, #70 are tracking issues closed by their sub-tasks completing;
don't open a branch against an epic number directly. When the last sub-issue under one of these
merges into `develop`, run the consolidated `codex-reviewer` pass described in the working
instructions above before picking up the next epic's issues.

---

# Appendix: LLM / AI Search Visibility — TODOs (pre-existing, kept as-is)

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
