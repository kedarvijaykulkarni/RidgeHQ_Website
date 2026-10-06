# Vault ↔ Website Sync Log

This is the website repo's half of a two-way channel with the Brain vault at
`D:\work\RidgeHQAPP\Brain\RidgeHQAPP\wiki` (see the `ai-discoverability-sync` skill for the
full procedure). Append-only, newest entry first.

- **Pull** (vault → website): read `wiki/index.md`'s dated update sections and `wiki/log.md`
  newer than this file's last entry date; diff against the 7 AI-discoverability surfaces;
  apply what's safe and non-consequential (copy accuracy fixes); flag anything consequential
  (pricing, positioning pivots, claims that need a business decision) instead of publishing
  it unasked.
- **Push** (website → vault): when work on the website surfaces something the app/business
  side should know — a pending idea, a confirmed-accurate or confirmed-inaccurate claim, a
  content gap that depends on a product decision — append an entry to `wiki/log.md` in the
  vault (type `query`, matching its existing format) so the next session working in that vault
  sees it.

---

## [2026-09-12] pull check — MCP-Server.md / AI-Copilot.md read for #14 proposal

**Read:** `wiki/development-reference/Modules/MCP-Server.md`,
`wiki/development-reference/Modules/AI-Copilot.md` (in full).

**Finding:** RidgeHQAPP already has a shipped, production MCP server (PAT +
OAuth 2.1, role/risk-gated tool allowlist via the same registry the AI
Copilot uses, tenant isolation, audit-origin labelling, no high-risk tool
ever MCP-reachable). This changed the shape of the website repo's #14
proposal significantly — the "authenticated customer tools, future work"
half the tracking issue asked that document to scope turned out to already
exist in the product, not need designing from scratch. `docs/mcp-chatgpt-integration.md`
was written accordingly: it references the existing implementation as
precedent rather than re-proposing it, and scopes new proposal content to a
public/pre-sales-only tool surface for `ridgehq.app` specifically.

Nothing here needs a vault-side change — this is a pull, not a correction to
anything recorded there.

**Pushed to vault:** see `wiki/log.md` `[2026-09-12] query` entry (paired
write-back, same finding).

**Next sync should start from:** whatever is dated after `MCP-Server.md`'s
`last_reviewed: 2026-09-12 (updated: #166 publish/list repo prep)` note.

---

## [2026-09-12] pull check — competitors.md sourced for comparison pages (#11)

**Read:** `wiki/competitors.md` (2026-09-04 revision) §2–5, in full.

**Findings:**

1. **Comparison pages built as unnamed categories, not named competitors.** Issue #11
   originally asked for named pages (e.g. "RidgeHQ vs. FareHarbor"). This vault's own
   convention (leaving even the market leader unnamed, §1 note) plus this repo's standing
   `marketing-copy-guardrails` rule ("never name it or any competitor on the site" — founder
   is ex-incumbent, strict IP/non-compete line) meant named pages weren't safe to build
   without an explicit decision. The user was asked and chose unnamed category comparisons
   instead — `/compare/commission-based-booking-platforms` and
   `/compare/spreadsheets-and-manual-tools` — sourced from §3 (Set B) and §4 (Set C) without
   attributing any figure to a specific company.
2. **Standing rule applied: don't lead with 0% commission.** §5 explicitly states 0% commission
   is "table stakes, not differentiation" and already claimed by roughly half the named
   market — leading with it was flagged in code review and corrected; the commission
   comparison page now leads with the AI-copilot-in-the-core differentiator (§5's one
   genuinely unclaimed positioning) and treats commission/pricing as a supporting row, not
   the headline.
3. **Set B pricing accurately reflects a mixed market, not a single pattern.** §3's table
   shows some platforms at $0/month + commission, others at $49–$295/month flat fee, and two
   (Rezdy, Checkfront) at 0% commission on direct bookings already — the comparison page's
   copy was corrected (also via code review) to reflect that range rather than implying every
   platform in the category is $0/month + commission.

**Pushed to vault:** see `wiki/log.md` `[2026-09-12] query` entry (this same batch's
case-study and comparison-scope notes, written back for visibility).

**Next sync should start from:** the `[2026-09-04]` competitive-brief revision noted above —
nothing newer in `competitors.md` as of this pass.

---

## [2026-09-05] pull check — pricing page is behind the vault's published ladder

**Read:** `wiki/pricing.md` §3, `wiki/index.md` "Pricing update — 2026-08-28" and "Competitive +
positioning update — 2026-09-04", `wiki/log.md`'s `[2026-08-28]` and `[2026-09-04]` entries.

**Findings:**

1. **Pricing gap (consequential — not applied, needs a decision).** The vault records a
   founder decision, confirmed 2026-08-28, to publish a real public pricing page: flat
   monthly **Starter €49 / Grow €89 ⭐ recommended / Scale €149**, 0% commission on direct
   bookings, **"Book a Demo" as the only CTA** (no self-service signup — still compatible
   with `marketingConfig.allowSelfServiceSignup: false`). This repo's `/pricing` page still
   renders `marketingConfig.pricingMode === 'pilot'` — the Founding Operator Pilot copy only,
   no tier ladder. **Not changed by this pass** — publishing real €/month figures is
   consequential and outward-facing, so it needs an explicit go-ahead rather than an
   unprompted edit. See the tier table and footnotes in `wiki/pricing.md` §3 before
   implementing: AI copilot is Grow+ only (not Starter, and scoped to "read + scheduling
   actions" — matches the AI Copilot claim fix already made on this site), Partners/resellers
   is Scale-only, custom branding/priority support/advanced reporting are Scale
   differentiators, Reports is Grow+.
2. **Positioning — already accurate, no action needed.** "The Activity Business OS" + the
   "human API" framing (vault: `business-context.md` §1) already matches this site's
   homepage tagline and "you spend your day acting as the API between them" copy.
3. **Waivers — already accurate, no action needed.** Vault confirms waivers + conditional/
   branching logic shipped (2026-08-06 / 2026-08-27) and explicitly rejects a stale
   "roadmap / Q4 2026" claim from another source. This site's "digital waivers... included,
   not a metered add-on" claims are correct as published; QR-linked signing and check-in are
   correctly *not* claimed anywhere on this site (confirmed not built).
4. **Design Partner Program naming — already accurate.** Vault: "the pilot is now the public
   Design Partner Program (`ridgehq.app/design-partners`)" — matches this site's existing
   `/design-partners` page and its use as the pilot's public face.

**Pushed to vault:** see `wiki/log.md` `[2026-09-05] query` entry in the vault for the
corresponding write-back (this same pricing-gap flag, phrased for that side).

**Next sync should start from:** the `[2026-09-04]` competitive/positioning ingest and
anything dated after it in `wiki/index.md` / `wiki/log.md`.

## 2026-09-25 — SEO content + internal-linking pass (push only)

No pull this pass (no vault changes read beyond claim checks). Claims checked against the
vault before publishing: gear types are tenant-defined (`Modules/Gear.md`), so "kayak and
canoe" copy is accurate; waivers implemented (`Modules/Bookings.md`: templates,
requirements, captures). All 7 surfaces walked: product-knowledge, llms.txt and /ai already
in sync; vertical FAQs, page metadata and sitemap lastmod updated on this branch.

**Pushed to vault:** `wiki/log.md` `[2026-09-25] query` entry. It covers the Search Console
buyer phrases now targeted, the open question of what "ski school tracking software"
searchers expect, and the /ai-copilot and /design-partners bounce diagnosis.

## 2026-10-03 — Six new blog drafts published (pull-verification only)

Six AI-generated blog drafts landed in `content/blog/` missing required `pillar`
frontmatter (build-breaking — `loadBlogPosts()` throws without it) and still flagged
`draft: true`. Before flipping `draft: false`, checked each post's claims against the
vault per its own `REVIEW BEFORE PUBLISHING` note and `business-context.md` §2:

- `ai-risk-confirmation-dive-center-operations` — AI permission gating + risk-tiered
  confirmation is shipped (`Modules/AI-Copilot.md`), but the draft's framing ("every
  executed action" is reversible) overgeneralized a scoped capability — undo only
  applies to reversible-by-nature actions (reschedule, assign/unassign, move a rental/
  accommodation block), not every action. Reworded the frontmatter description and
  opening paragraph to state the scope; left the rest of the post (which already
  qualified this correctly) unchanged.
- `database-level-multi-tenancy-data-security`, `integrated-waiver-system-dive-operations`,
  `operational-core-dive-center-management`, `order-immutability-credit-note-on-change`,
  `role-based-permissions-dive-center-operations` — claims matched
  `business-context.md` §2 and the relevant `Modules/*.md` docs as written; no wording
  changes needed beyond adding `pillar` and un-drafting.

All 7 AI-discoverability surfaces walked: sitemap/llms.txt/`/ai`/JSON-LD are all derived
from `visibleBlogPosts` or link to `/blog` generically, so no hand-edit was needed beyond
bumping `/blog`'s sitemap `lastModified`. Verified with `next build` that all 6 posts
render, appear in `sitemap.xml`, and carry correct `Article` JSON-LD.

**No push to vault this pass** — nothing new surfaced; all claims already supported.

## 2026-10-03 — Press kit page + founder attribution (push)

Added `/press` (boilerplate, fact sheet, founder bio, brand assets, media contact) and
founder (Kedar Vijay Kulkarni, LinkedIn) attribution to the Organization JSON-LD
(`layout.tsx`), `/ai` page, `product-knowledge.ts`'s new `company` field, the public
`/api/public/product` endpoint, `llms.txt`, and `/about`. All facts sourced from
`business-context.md` §"Founder model" (solo founder, Thane/Mumbai, AI-assisted
development) — no new facts invented. `diveops.ai/press` (a competitor's press page)
was used only as structural inspiration for section layout, per the standing
no-competitor-copy rule — no text or stats were copied, and no competitor is named on
the site. Updated `sitemap.ts` (`/press` static route) and `navigation.ts` footer.

**Pushed to vault:** `wiki/log.md` entry noting the site now has a public press kit at
`ridgehq.app/press` with founder attribution, in case that changes how founder-identity
questions should be answered elsewhere (e.g. if the founder later wants to stay
pseudonymous for a specific channel, this page would need to be reconsidered).

## 2026-10-06 — Content-depth pass, batch 2: trust, index, and conversion pages (pull only)

**Pulled:** Brain vault `Modules/AI-Copilot.md`, `MCP-Server.md`, `Logs.md`, `Courses.md`, `Settings.md`; `Architecture/Integration-Architecture.md`; `Operations/Production-Deployment.md`, `Tenant-Onboarding.md`; `operations.md`; `business-context.md`; `launch-plan.md`; `public-page-source-brief.md`.

**Applied:**
- `/security` was rewritten from 118 words of generic claims ("top priority", "secure, compliant infrastructure", "encrypted at rest") to about 980 words. It now states only what is verified in production: server-enforced RBAC, role-controlled revenue visibility, the audit log, AI Copilot role and risk gates with a one-hour undo on reversible scheduling actions, hashed and revocable MCP tokens capped at Manager, HTTPS with HSTS preload, admin framing protection, and the embed allow-list. A "What isn't in place yet" section and FAQ say plainly that there are no third-party certifications.
- `/ai-copilot`, `/integrations`, `/platform`, `/products`, `/use-cases`, `/compare`, `/contact`, `/book-demo`, and `/design-partners` were expanded with FAQ sections (FAQPage JSON-LD) through a new shared `PageFaq` component.
- `integrations.ts` was corrected against Integration-Architecture.md:
  - Removed "Xero" (no specific accounting target is decided), "Smartwaiver" (no basis, and waivers are built in), and Stripe "in-person payments" (no Terminal support).
  - Added the implemented surfaces: the booking-widget embed, AI providers, MCP, Stormglass, email, and the iCal feed.
  - PayPal/Redsys are marked partial. PADI/SSI and an accounting export are marked planned.
- `/platform`: removed "never … assign an unqualified instructor" and the staff screenshot alt text claiming qualification/availability matching.
- `Accordion` now force-mounts closed FAQ answers (hidden until opened), so every FAQ answer site-wide is in the HTML for crawlers rather than only in JSON-LD.
- `product-knowledge.ts` security summary, the home trust card, and `llms.txt` (Copilot, Security, Integrations, Design Partner lines) now match the verified wording.
- Sitemap `lastmod` set to 2026-10-06 for `/`, `/ai`, `/use-cases`, and `/compare`; the other touched routes were already 2026-10-06.

**Flagged for the owner (not applied):**
- **Production RLS is not enforced** (Production-Deployment.md, "Still owed": the RUNBOOK §2.3 steps 4–5 roles exist but aren't used). Any wording like "isolated at the database level" is premature until that's done. Batch 1 (PR #119) added that phrase plus "encrypted off-server backups". Backups are deferred by owner decision and no restore has been tested (operations.md), so that wording also overclaims. This branch's wording should win on conflict.
- `products.ts` (owned by the solutions/products claim audit) still has unsupported claims: staff mobile use, accounting-ready exports, security-deposit pre-authorisation and damage charges, automatic seasonal pricing, per-unit utilisation reporting, waiver answers carried forward, guardian signing for minors, and "isolated to your account at the database level".
