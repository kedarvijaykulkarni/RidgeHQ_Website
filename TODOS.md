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
- [x] [#43](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/43) — Build Testimonial and Logo-band components (real content only) — merged via PR #83 2026-10-04, closed manually (same auto-close gap)
- [x] [#64](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/64) — Theme-toggle keyboard and screen-reader accessibility audit — merged via PR #84 2026-10-04, closed manually (same auto-close gap); added missing `aria-pressed` state, keyboard Tab/Enter/Space confirmed via live browser check, no focus/scroll side effects
- [x] [#44](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/44) — Build mega-menu NavMenu component (verticals x features) — merged via PR #78 2026-10-04, closed manually 2026-10-04 (same `develop`-isn't-default-branch auto-close gap)
- [x] [#47](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/47) — Reorganize footer IA to match two-axis navigation — merged via PR #81 2026-10-04, closed manually (same auto-close gap; confirmed Vercel CI stays off on develop PRs — no checks reported, `develop` has no branch protection requiring any status check)
- [x] [#48](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/48) — Systematic cross-linking across solutions/platform/use-cases/pricing pages — added `relatedPlatformSlugs` to each vertical, wired cross-links on all three `[slug]` route types (`/solutions`→platform+use-cases+pricing, `/platform`→verticals+use-cases+pricing, `/use-cases`→platform+verticals+pricing), new `verticals.test.ts` guards against dead links. No case-study links added — `case-studies.ts` is intentionally empty (no real design-partner outcomes published yet). PR pending against `develop`.
- [x] [#51](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/51) — Add AI Copilot Q&A transcript example to homepage — new `CopilotTranscript` component replaces the static screenshot in the homepage AI section; content restricted to the verified claim boundary (reschedule session, move rental block, each behind confirm) per `business-context.md` §2 — no money-moving action shown. PR pending against `develop`.
- [x] [#46](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/46) — Redesign header mega-menu *(combined Platform+Built For into one "Solutions" two-axis menu, verticals primary/platform secondary per Kedar's confirmation 2026-10-04)* — merged via PR #79 2026-10-04, closed manually (same auto-close gap; PR body said "Closes #46" but GitHub only auto-links that against the default branch)
- [x] [#50](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/50) — Re-sequence/re-theme homepage sections — re-theming was already complete (full CSS-var token migration from #39 covers every homepage section); moved Pricing Philosophy section up to position 3 (right after hero + screenshot proof), ahead of Problem/Solution, per eola-pattern of surfacing pricing early. All 10 sections preserved, structured data untouched. PR pending against `develop`.
- [x] [#40](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/40) — WCAG AA contrast audit — all text pairings pass AA in both themes with margin (documented in `docs/wcag-contrast-audit.md`); one real fail found on non-text UI (`--border`/`--bg` only 1.3-1.5:1, needs 3:1 per 1.4.11) where it's the sole boundary of form inputs and the outline Button variant — added `--border-strong` token and switched only those two call sites, decorative dividers/card outlines keep the original softer `--border`. PR pending against `develop`.
- [x] [#89](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/89) — Tabs ARIA linkage, onClick overwrite bug, and mega-menu responsive/focus-trap gaps found by the consolidated codex-reviewer pass on epic #41's cumulative diff — fixed all 4: `Tabs` now generates paired `id`/`aria-controls`/`aria-labelledby` per instance via `useId()` (also wired into `VerticalsExplorer`'s results panel, which uses `Tabs`/`TabsList`/`TabsTrigger` without `TabsContent`); `TabsTrigger` composes a consumer `onClick` instead of letting prop-spread silently overwrite the internal handler; two-axis mega-menu and mobile drawer breakpoint moved from `md`(768px) to `lg`(1024px) so the overflow-prone two-axis layout never renders below its fitting width, falling back to the (now focus-trapped) mobile nav instead; `MobileNav` drawer gained a real Tab-key focus trap and restores focus to the toggle button on close/Escape. All verified live in-browser (ARIA ids, tab switching, tablet-width no-overflow, focus wrap, focus-return). PR pending against `develop`.
- [x] [#52](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/52) — Add honest trust/credibility section to homepage *(unblocked now that #43 merged)* — new section placed right before FAQ/Final CTA; 3-card grid (Design Partner Program, Security & data ownership, Founder-led onboarding), every claim paraphrased verbatim from the real `/design-partners` and `/security` pages, no invented numbers; `Testimonial`/`LogoBand` wired in below (both ship empty, render nothing per #43's empty-safe design, future-ready). Verified in both themes live in-browser. PR pending against `develop`.
- [x] [#58](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/58) — Re-theme solutions/[slug] and platform/[slug] pages *(unblocked now that #41's components landed)* — both files had ~20-26 hardcoded `text-white`/`bg-white/N`/`border-white/N` usages; swapped to the theme-aware Tailwind utilities already registered in `globals.css`'s `@theme` block (`text-ink`, `border-border`, `bg-bg-elevated`), consistent with the plain-utility convention these two files already used for `text-ink-secondary`/`text-accent`. Simplified the two glass-card blocks to match the established `glass-card` pattern elsewhere (CopilotTranscript, NavMenu) instead of re-declaring the background/border/blur it already provides. Left `text-emerald-400` checkmark icons alone — an established cross-file brand pattern (also used in compare/products/use-cases pages), not a token violation, out of this issue's scope. No content/URL/metadata changes — pure className swaps. Verified live in both themes on `/solutions/dive-centers` and `/platform/scheduling`, including the #48 cross-link pills and the lead-gen form. PR pending against `develop`.
- [x] [#59](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/59) — Re-theme products/[slug], use-cases/[slug], and compare/[slug] pages (plus their index pages and the shared `ComparisonTable` component) *(unblocked now that #41's components landed)* — same hardcoded-color sweep as #58 across all 6 files; `ComparisonTable`'s zebra-striped rows switched from `bg-white/[0.02]` to the theme-aware `bg-bg-alt`. Two index-page card links (`use-cases/page.tsx`, `compare/page.tsx`) got a real `hover:border-[var(--accent-border)]` effect instead of the dead `hover:border-border` no-op #58 left on its equivalent cards — worth retrofitting there later if revisited. No content/URL/metadata changes; comparison table data untouched. Verified live in both themes on `/products/activity-platform`, `/compare/commission-based-booking-platforms` (table), and `/use-cases/instructor-scheduling` (including the amber "may not be the right fit" card). PR pending against `develop`.
- [x] [#60](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/60) — Re-theme about, case-studies (+ `[slug]`), resources, security, ai, and ai-copilot pages *(unblocked now that #41's components landed)* — `resources/page.tsx` was already clean (0 hardcoded colors), the rest got the standard sweep. Found and fixed a real theme bug on `/security`: the prose block used `prose-invert` (Tailwind Typography's dark-styled variant) completely unconditionally, which would render near-invisible light-on-white text in light theme — neutralized it with the same `prose-headings:`/`prose-a:`/`prose-p:` CSS-var override pattern `blog/[slug]` already established, confirmed by live-rendering both themes (previously untested — #39's original token migration pass apparently missed this page). `/ai` page's 31 color-class swaps are pure className changes; `productKnowledge` content/copy verified byte-identical, satisfying the issue's AI-discoverability constraint. Verified live in both themes on `/security`, `/ai`, and `/about`. PR pending against `develop`.
- [x] [#61](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/61) — Re-theme /tools hub and all 10 calculator pages *(unblocked now that #41's components landed)* — covered all 12 shared `src/components/marketing/tools/*.tsx` components plus the hub page and the 2 pages that don't use `CalculatorPageShell` (admin-time-cost, no-show-cost). Every numeric-input calculator's `inputClass` upgraded from `border-white/10` to `border-[var(--border-strong)]` — same WCAG 1.4.11 3:1-contrast token #40 introduced for form-input boundaries, applied consistently since these are literally form inputs. `ReadinessAssessment`'s radio-option cards got the same treatment. All 10 `aria-live="polite"` result-panel regions (the prior accessibility pass's behavior) preserved and re-verified live — confirmed the ROI calculator recalculates on input change and the readiness assessment's selected-state highlight survives a theme toggle. No literal hex colors (`#22D3EE`) or `text-slate-*`/`bg-slate-*` classes were actually present despite the issue description — likely already caught by an earlier pass; this PR's grep confirms zero remain anywhere in scope. PR pending against `develop`.
- [x] [#71](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/71) — Re-theme contact, book-demo, design-partners, integrations, blog (+ `[slug]`), privacy, terms, and thank-you pages *(unblocked now that #41's components landed)* — found and fixed a real hardcoded-color bug in the shared `CustomLeadForm` (used by contact/book-demo/design-partners, all conversion-critical): every input had `bg-black/20`, invisible to the page-level grep since it lives in the shared component, not the page files — swapped to `bg-[var(--bg-elevated)]`. No copy/content changes on any of the three conversion pages, confirmed by diff. `/integrations` already had a real `Integration.state` data model (`implemented`/`partial`/`planned`) and a per-card `Badge` showing it, so the issue's proposed itourpro.com-style status pattern was already structurally in place — just relabeled the raw enum values to the requested wording ("Connected & live" / "Partially available" / "Coming soon") via a `STATE_LABEL`/`STATE_VARIANT` map, no new or fabricated status claims, only clearer text for real existing data. Remaining files (`blog`, `blog/[slug]`, `privacy`, `terms`, `design-partners`) had the standard small hardcoded-color sweep (6 occurrences total); `contact`, `book-demo`, `thank-you` were already clean page-level. Verified live in both themes on `/contact` (form), `/integrations` (both badge variants), and `/blog` + a post (via a temporary `next start` on a spare port, since the dev server's module cache was stuck on the pre-existing untracked-draft-blog-post error — confirmed unrelated via a fresh `next build`, which compiled `/blog` and all 3 existing posts cleanly). **Also closed an epic-wide gap**: #57's own acceptance criteria required `sitemap.ts` lastmod bumps for re-themed pages per `CLAUDE.md`'s sitemap checklist, which none of #58/#59/#60/#61 actually did — fixed here in one pass across the whole epic: bumped all 26 per-entry `lastUpdated` fields across `verticals.ts`/`products.ts`/`platform.ts`/`use-cases.ts`/`comparisons.ts` to `2026-10-05`, plus every touched static route in `sitemap.ts` (`/ai`, `/ai-copilot`, `/tools` + all 10 calculators, `/use-cases`, `/compare`, `/integrations`, `/blog`, `/contact`, `/book-demo`, `/design-partners`, `/about`, `/security`, `/privacy`, `/terms` — 50 `<lastmod>` entries total). Deliberately left individual `blog/[slug]` entries alone — they use `publishedAt` with no separate `lastUpdated` field, and overwriting a post's publish date to mark a pure CSS re-theme would misrepresent real content history. Confirmed via a fresh `next build` + served `sitemap.xml` fetch that all 50 dates render correctly. PR pending against `develop`. **This change affects the sitemap — once merged and deployed, resubmit the sitemap in Google Search Console** (per `CLAUDE.md`'s standing checklist) for the ~50 URLs listed above, not just this PR's own pages — this closes out epic #57's full page-level pass.
- [x] **Epic #57 consolidated codex-reviewer pass** (required by working instructions §4, run after #71/#96 merged and all 5 sub-issues landed) — found 2 real regressions, both verified independently (not just taken on Codex's word) and fixed in a same-day follow-up PR:
  - **P1 WCAG 1.4.11 failure**: `CustomLeadForm`'s inputs (used by `/contact`/`/book-demo`/`/design-partners`) had their background set to the same `--bg-elevated` token as their own parent card in #71 — measured contrast of the `--border-strong` boundary against that background was 2.55:1 in light theme (below the 3:1 minimum). Fixed by giving inputs `--bg` instead, distinct from the card's `--bg-elevated` — re-measured at 3.05:1.
  - **P2 systemic bug, broader than epic #57**: `.glass-card`'s CSS lived in `@layer utilities` with its own hardcoded near-invisible `border: 1px solid oklch(100% 0 0 / 0.04)`, which silently won the cascade over every `border-[var(--border)]`/`border-border` override added alongside it — confirmed via `getComputedStyle` that the override was a complete no-op. Affected ~20 files, including pre-existing code from #41/#44/#89 (`NavMenu`'s live mega-menu, `CopilotTranscript`), not just this epic. Root-caused and fixed with a single move: relocated `.glass-card` to `@layer components` (matching `.glass-panel`'s already-correct placement, where Tailwind's cascade-layer ordering guarantees utility-layer overrides always win) — fixes all ~20 sites with zero per-file changes, confirmed via computed-style re-check that both the overridden and un-overridden (plain `glass-card`, e.g. `FeatureCard`) cases now render correctly with no regression to the latter.
  - **P2 blog sitemap gap** (also surfaced, lower severity): `/blog/[slug]`'s template changed in #71 but its sitemap `lastmod` uses `publishedAt` with no separate "template last touched" field, so the change couldn't surface without misrepresenting the post's actual publish date. Added an optional `updatedAt` frontmatter field (falls back to `publishedAt`) to all 18 real published posts, set to `2026-10-05`; `sitemap.ts` now reads `p.updatedAt ?? p.publishedAt`. Confirmed via served `sitemap.xml` fetch.
  - Codex's claimed criterion-4 status ("tsc/eslint/build not run by a static review") was correctly flagged as unverified by Codex itself — ran all three here, all pass.
  - PR pending against `develop` (branch `fix/57-epic-review-remediation`, based on `develop` post-#96 — **not** a new issue number, this is epic #57's own review-gate remediation).
- [x] [#63](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/63) — Mobile/tablet/desktop breakpoint audit *(unblocked by the epic-#57 review pass above)* — automated Playwright sweep of every sitemap route plus `/thank-you` and `/pricing` (76 routes) at 375/768/1280px in both themes (456 checks), testing document horizontal scroll, unclipped elements past the viewport edge, and text wider than its own box. One failure found: `/blog/integrated-waiver-system-dive-operations` at 375px — the in-body markdown H1 begins with "Operationalizing", a single word wider than the 343px column at `prose-lg`'s 48px H1 size, causing 35px of page scroll in both themes. Fixed in the blog post template (`max-sm:prose-h1:text-3xl` → 30px on phones only, desktop unchanged at 48px; plus `prose-headings:break-words` as a safety net for future long-word titles). Re-ran all 19 blog routes × 6 combos: 0 failures. Noted, not changed (out of scope): that post renders its title twice (page header + markdown `# ` H1). No sitemap change needed — all posts' `updatedAt` is already `2026-10-05` from the #57 remediation. Merged via PR #98 2026-10-05.
- [x] [#65](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/65) — Performance regression check *(unblocked by the epic-#57 review pass)* — compared a `next build` of `main` (`312b376`, before the revamp) with `develop` (`e5dd8b5`) from a clean `pnpm install`. Route tables match exactly: 41 `○` static, 21 `●` SSG, and 4 `ƒ` dynamic (only the `/api/public/*` handlers), so nothing lost prerendering. `package.json` is unchanged. The new client code (`ThemeToggle`, `ui/Tabs`) uses only `react` and `lucide-react`, which was already a dependency. Gzipped JS grew about 1.3 KB per route (+1.9 KB on `/`), and CSS grew 0.5 KB from the token set (3.9% of a 12.9 KB file; JS growth is under 1%), so no fix is needed. Findings are appended as a dated section in `docs/accessibility-performance-audit-ai-tools.md`. Lighthouse/CrUX field data was not measured because `develop` isn't deployed; it is deferred to after cutover (#69). Docs-only, no sitemap impact. Merged via PR #99 2026-10-05.
- [x] **Epic #62 consolidated codex-reviewer pass** (working instructions §4, run after #63/#64/#65 merged) — 4 findings, each verified independently:
  - **P1 missing per-route breakpoint table / check results**: false positive. PR #98's description has the full 76-route × 6-combo table plus tsc/eslint/build/jest results; Codex only read files in the repo.
  - **P2 `ThemeToggle` `aria-pressed` wrong before hydration**: real but transient. For a stored dark theme, the server HTML said `aria-pressed="false"` until React hydrated. The server snapshot is now `null`, so no pressed state renders until the real theme is read. Also fixed an issue the review agent noticed: the `aria-label` changed with state ("Switch to light theme" + pressed is a confusing announcement), so it's now a fixed "Dark theme" label with `aria-pressed`, the standard toggle-button pattern.
  - **P2 #65 doc said all changes were under 1%**: wrong for CSS (0.5 / 12.9 KB = 3.9%). Corrected in the doc and above.
  - **P3 #65 still marked pending**: fixed above.
  - Merged via PR #100 2026-10-05; epic #62 closed.
- [x] [#67](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/67) — Pre-ship sitemap/metadata/JSON-LD diff audit — compared the `next start` HTTP output of `main` (`312b376`, before the revamp) with `develop` (`7c55daa`) on 76 routes (all 75 sitemap URLs plus `/thank-you`). Titles, meta, canonicals, H1s and JSON-LD were identical on every route, all routes returned 200, and no sitemap URL was added or removed. The 68 changed sitemap entries were all intended forward `lastmod` bumps. **Gap fixed:** 7 static routes changed in the revamp but kept stale `lastmod` dates (`/` still said 2026-09-25 despite #50/#51/#52), so each was bumped to its page file's last-commit date and confirmed in the served `sitemap.xml`. One page per JSON-LD template (14) passed `validator.schema.org` with 0 errors and 0 warnings. The Google Rich Results Test is deferred to production after cutover (#69), because it's interactive-only and `develop` isn't deployed. Full write-up in `docs/seo-revamp-diff-audit.md`. Merged via PR #101 2026-10-05.
- [x] [#68](https://github.com/kedarvijaykulkarni/RidgeHQ_Website/issues/68) — Route and redirect integrity check — compared `main` (`312b376`) with `develop` (`9940071`). Route files under `src/app`, all 80 prerendered paths (every `[slug]`) and the `next build` route table are identical, and `next.config.ts` is unchanged. Nothing was renamed, so no new redirects are needed. The 3 existing redirects (`/demo`, `/llm.txt`, `/mcp`) each return 308 to a target that returns 200. A crawl of every same-site link (mega-menu, footer, cross-links) reached 80 pages, all 200, with no broken or redirecting internal links. Noted, not changed: #47's footer now links to `/case-studies` (empty) and `/resources` (placeholder). Both are deliberately noindex and kept out of the sitemap, so there's no SEO effect, but surfacing empty pages is a product call. Docs-only. PR pending against `develop`.

## Blocked by another open issue

Kept here so the next pass knows what frees up as items above land. Re-check this list after each
merge — an item may become unblocked.

| Issue | Blocked by | Becomes unblocked once |
|---|---|---|
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
