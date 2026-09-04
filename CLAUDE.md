@AGENTS.md

## AI discoverability — keep all 7 surfaces in sync

RidgeHQ's product/marketing facts (a vertical's copy, a feature's status, pricing mode,
an integration's state, an AI Copilot capability, etc.) are intentionally duplicated
across seven places for AI/search discoverability. **Any change to product truth —
a new vertical, a feature going from planned to available, a pricing change, an
integration status change, a capability claim correction — must be checked against
all seven, not just the page you were editing:**

1. `src/lib/config/product-knowledge.ts` — the canonical knowledge model
2. `public/llms.txt` — the AI-crawler summary
3. `src/app/ai/page.tsx` (and the `productKnowledge` it renders)
4. FAQ sources feeding `FAQPage` JSON-LD — `src/lib/config/faq.ts`,
   `verticals.ts`/`products.ts`/`platform.ts` `faqs[]` arrays
5. `src/app/sitemap.ts` — route inclusion for anything new/removed
6. Page `metadata`/`pageSeo()` descriptions on any page the fact appears on
7. Marketing/nav copy — `src/lib/config/navigation.ts` and the relevant
   `verticals.ts`/`products.ts`/`platform.ts` entries — checked for product-truth
   accuracy against the authoritative Brain vault
   (`D:\work\RidgeHQAPP\Brain\RidgeHQAPP\wiki`) when the change touches
   a capability claim, not just copy polish

Use the `ai-discoverability-sync` skill (`.claude/skills/ai-discoverability-sync/`)
to run this check rather than doing it ad hoc — it enumerates all seven and reports
what's out of sync before anything is edited.

## Vault ↔ website sync — keep both sides current

The Brain vault is the app/business source of truth; this website repo is downstream of
it. The relationship runs both ways and both sides are logged, not silent:

- **Pull** — when the app/business grows or a decision is confirmed in the vault (a
  feature ships, pricing is published, positioning changes), that needs to reach the
  website. Read `wiki/index.md`'s dated update sections and `wiki/log.md` newer than
  `docs/vault-sync-log.md`'s last entry, diff against the 7 surfaces above, apply what's
  safe (copy accuracy fixes), and **flag rather than silently publish** anything
  consequential (pricing, positioning pivots) — record the pass either way in
  `docs/vault-sync-log.md`.
- **Push** — when working on the website surfaces something the app/business side should
  know (a pending idea, a gap that blocks a marketing page, a claim confirmed accurate or
  inaccurate), append it to `wiki/log.md` in the vault (`## [date] query | <title>`,
  matching its existing format) so the next session in that vault sees it. Don't edit the
  vault's own pages (`business-context.md`, `pricing.md`, etc.) directly — those are
  owned and maintained by whatever session works in that repo; `log.md` is the shared
  channel.

See `docs/vault-sync-log.md` for the running history and the `ai-discoverability-sync`
skill for the full procedure.
