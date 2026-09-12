# Accessibility + performance audit — /ai, /tools, and calculators

Phase 22/23 of the AI-discoverability initiative. A lightweight, checklist-based
pass against the master prompt's own list — not a formal WCAG audit — covering
`/ai`, `/tools`, and all 10 calculator pages/components as of 2026-09-12.

## Accessibility checklist

| Item | Result |
|---|---|
| Heading hierarchy | ✅ `/ai` and `/tools` both go h1 → h2 with no skipped levels; each calculator page follows the same pattern via `CalculatorPageShell`. |
| Labels | ✅ Every calculator input has a `<label htmlFor>`/`<input id>` pair (pre-existing pattern, confirmed still followed by all 8 new calculators added in #10). |
| Form inputs | ✅ All numeric inputs use `type="number"` with `min`/`max` hints; `ReadinessAssessment` uses native `<input type="radio">` with `<label>` wrapping, grouped by `<fieldset>`/`<legend>` per question. |
| Keyboard nav | ✅ All inputs are native `<input>`/`<label>` elements — no custom widgets, no focus traps. Tab order follows visual order. |
| Focus states | ✅ Every input carries `focus:ring-2 focus:ring-[#22D3EE]` (existing site-wide input style). |
| Contrast | ✅ Result values render in `text-white`/`text-[#22D3EE]` against a dark card background — high contrast. Supporting copy uses `text-slate-400`/`text-slate-500`, consistent with the rest of the site's existing (pre-existing, out of scope to redesign here) text hierarchy. |
| Semantic HTML | ✅ `ComparisonTable` (added in #11) uses a real `<table>` with `<th scope="col">`/`<th scope="row">`, not divs. |
| ARIA only where necessary | ✅ No ARIA roles added beyond `aria-live` (below) — native semantics were sufficient everywhere else. |
| Screen-reader usability of calculator results | **Fixed in this pass, with a known trade-off.** None of the 10 calculator components previously marked their result region as `aria-live`, so a screen-reader user changing an input had no way to know the result updated without re-navigating to it. Added `aria-live="polite"` to each calculator's result panel (`ReadinessAssessment` already had it). **Trade-off, not fully resolved:** every input is a plain controlled `<input>` with no debounce, so typing a multi-digit number re-renders (and re-announces) the result on every keystroke, not once the user pauses. `polite` (vs. `assertive`) is the right choice — it queues rather than interrupts — and most screen readers coalesce rapid successive updates to the latest value rather than reading each one, but this wasn't verified with real assistive-tech testing. If this proves noisy in practice, the fix would be debouncing the announced value (e.g. only updating the `aria-live` region on blur or after a short pause), not removing `aria-live` entirely. |
| Reduced motion | ✅ N/A — no `framer-motion` or CSS animation is used anywhere in `/ai`, `/tools`, or the calculator components; nothing to guard with `prefers-reduced-motion`. |

## Performance checklist

| Item | Result |
|---|---|
| Static prerendering | ✅ Confirmed via `next build` output — `/ai`, `/tools`, and every `/tools/[slug]` calculator page render as `○ (Static)`, not server-rendered per request. |
| Client bundle size | ✅ Every calculator is a simple `useState`/`useRef` component with no heavy dependencies (no charting library, no date-picker, no external form library) — confirmed by reading each component's imports. |

## Changes made

- Added `aria-live="polite"` to the result panel of all 9 calculator components that lacked it: `NoShowCostCalculator`, `AdminTimeCostCalculator`, `CancellationCostCalculator`, `RevenueLeakageCalculator`, `BreakEvenCalculator`, `RoiCalculator`, `CacLtvCalculator`, `InstructorUtilizationCalculator`, `CapacityUtilizationCalculator`.

## Not changed / out of scope

- Site-wide color contrast, typography scale, and animation conventions predate this initiative and weren't touched — this audit is scoped to `/ai`, `/tools`, and the calculators, not a full-site pass.
- This is a lightweight checklist pass, not a full WCAG 2.1 AA audit with assistive-technology testing. Revisit with real screen-reader testing if a genuine accessibility complaint arises.
