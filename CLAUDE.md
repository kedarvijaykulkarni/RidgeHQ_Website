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
   (`D:\work\Bloowatch\aquarosters\Brain\AquaRosters\wiki`) when the change touches
   a capability claim, not just copy polish

Use the `ai-discoverability-sync` skill (`.claude/skills/ai-discoverability-sync/`)
to run this check rather than doing it ad hoc — it enumerates all seven and reports
what's out of sync before anything is edited.
