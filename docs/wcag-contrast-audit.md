# WCAG AA contrast audit — light + dark themes

Closes #40. Ratios computed directly from the OKLCH token values in
`src/app/globals.css` (OKLCH → linear sRGB → relative luminance → WCAG
contrast ratio), not estimated.

## Text pairings (need 4.5:1)

| Pairing | Light | Dark |
|---|---|---|
| `--ink` / `--bg` | 18.57:1 | 19.06:1 |
| `--ink` / `--bg-alt` | 17.00:1 | 18.76:1 |
| `--ink` / `--bg-elevated` | 15.53:1 | 18.25:1 |
| `--ink-secondary` / `--bg` | 10.65:1 | 8.40:1 |
| `--ink-secondary` / `--bg-alt` | 9.76:1 | 8.26:1 |
| `--ink-secondary` / `--bg-elevated` | 8.91:1 | 8.04:1 |
| `--ink-tertiary` / `--bg` | 6.16:1 | 5.95:1 |
| `--ink-tertiary` / `--bg-alt` | 5.64:1 | 5.86:1 |
| `--ink-tertiary` / `--bg-elevated` | 5.15:1 | 5.70:1 |
| `--accent` / `--bg` (links) | 5.17:1 | 9.57:1 |
| `--cta-text` / `--cta` (buttons) | 4.83:1 | 8.09:1 |

All pass AA with margin in both themes — no fixes needed here.

## Non-text UI component boundaries (need 3:1, WCAG 1.4.11)

| Pairing | Light | Dark |
|---|---|---|
| `--border` / `--bg` | 1.49:1 | 1.34:1 |

**Failed.** `--border` is deliberately soft for decorative dividers and
card outlines, but it's also used as the sole visible boundary of real
interactive controls — form inputs (`CustomLeadForm.tsx`) and the
`outline` Button variant — where 1.4.11 applies.

Fix: added a second token, `--border-strong` (oklch 65%/0.012/250 light,
47%/0.02/250 dark — same hue/chroma as `--border`, lightness tuned to
clear 3:1 against `--bg`), and switched only those two call sites to it:
- `src/components/forms/CustomLeadForm.tsx` — all `<input>`/`<select>` borders
- `src/components/ui/Button.tsx` — `outline` variant

`--border` itself is untouched, so every decorative divider/card outline
site-wide keeps its current (correct — decorative elements aren't
in scope for 1.4.11) appearance.

Re-verified: `--border-strong` / `--bg` = 3.00:1 (light), 3.01:1 (dark).

## Focus states

The visible focus ring (`focus-visible:ring-2 focus-visible:ring-[var(--accent)]`
/ `focus:ring-2 focus:ring-[var(--accent)]`) reuses the `--accent` token,
already verified above at 5.17:1 (light) / 9.57:1 (dark) against `--bg` —
comfortably clears the 3:1 focus-indicator requirement.

## Addendum 2026-10-06 — epic #37 Codex review remediation

The consolidated review of epic #37 found pairings this audit had missed,
because it only covered token-on-token pairings, not hardcoded Tailwind
colours still left on some pages. Fixed:

| Pairing | Before (light) | After light | After dark |
|---|---|---|---|
| `/docs`, `/press` headings + strong (`text-white` on `--bg`) | ~1.06:1 | `--ink`, as every other page | — |
| Warning panels on `/docs`, `/privacy`, `/terms` (`text-amber-200`) | ~1.2:1 | new `--warning` token: 6.41:1 on `--bg`, 6.08:1 on the `bg-amber-500/10` panel | 14.44:1 / 7.73:1 |
| Caution icons/labels (`text-amber-400` on compare/products/use-cases/ai) | ~1.5:1 | `--warning` (as above) | as above |
| Mega-menu icon hover (`text-white` on `--accent`) | — | `--bg` on `--accent`: 5.17:1 | 9.57:1 (was ~2.2:1) |

Also: `prose-invert` (dark-only) removed from `/blog/[slug]` and
`/security`; `@tailwindcss/typography`'s `--tw-prose-*` palette is now mapped
to theme tokens in `globals.css`, so code, blockquotes, tables and rules
follow the theme too (verified via computed styles in both themes).
`.glass-card` grid/border literals moved to per-theme `--glass-grid` /
`--glass-border` tokens (dark values unchanged). `color-scheme` is now set
per theme, so native controls and scrollbars match.

Ratios are computed from the OKLCH tokens (sRGB-clipped), with the amber
panel approximated as a 10% linear blend over `--bg`.

Intentionally unchanged: `opengraph-image.tsx` (fixed dark social card
rendered outside CSS), `YouTubeEmbed`'s `bg-black` letterbox, the hero
`.starfield` (white stars are a dark-theme-only decoration), and
`footer.svg` (its dark artwork sits under a theme-coloured overlay that
renders as a light misty treatment in the light theme — checked visually).
