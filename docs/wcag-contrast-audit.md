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
