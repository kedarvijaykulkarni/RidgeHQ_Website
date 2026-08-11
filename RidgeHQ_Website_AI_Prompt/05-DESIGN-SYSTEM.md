# 05 — RidgeHQ Website Design System

## Design objective

Create a recognizable premium B2B SaaS identity that can credibly represent:

water + snow + land + outdoor + rental + resort operations.

Do not visually trap RidgeHQ in scuba/ocean imagery or mountain imagery.

## Visual concept

**Operational terrain**

Combine:
- activity movement;
- topographic lines;
- route/path geometry;
- calendar/grid logic;
- subtle condition/weather cues;
- polished product UI.

The visual language should feel like:
**mission control for an activity operator**, not an extreme-sports consumer brand.

## Palette

Recommended tokens:

- Background deepest: `#020617` / slate-950
- Background elevated: slate-900
- Surface: slate-900/60
- Surface light: white
- Primary: `#6366F1` (indigo)
- Primary hover: indigo-500/700 as appropriate
- Secondary: `#22D3EE` (cyan)
- Optional restrained violet: `#8B5CF6`
- Text dark mode primary: slate-50
- Text dark mode secondary: slate-300/400
- Border dark: white/10–15%
- Success/status only where semantically required

Use CSS variables/design tokens rather than scattering raw hex values.

## Typography

Use a highly legible modern sans.

Preferred if compatible:
- Geist / Geist Sans
- Inter
- Manrope for select display use

Do not load multiple unnecessary font families.

Heading traits:
- tight tracking;
- strong weight;
- generous line-height;
- no oversized 100px hero text that breaks laptops.

## Layout

- mobile first;
- max content width around 1200–1280px;
- strong whitespace;
- section rhythm 80–128px desktop, smaller mobile;
- grid-based;
- avoid overly repetitive three-card sections.

## Surfaces

Use glass treatment selectively:

`backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl`

Do not make every card glass.

Use solid light surfaces on some sections for contrast.

## Interaction

- 200–300ms motion;
- reduced-motion support;
- subtle hover translate/scale only;
- no excessive parallax;
- no scroll-jacking;
- no animation that delays content access.

Suggested:
`transition-all duration-300 hover:-translate-y-0.5`

## Product visuals

Highest priority:
real product screenshots from the Brain.

Wrap in:
- browser/app frame;
- subtle shadow;
- gradient halo;
- optional annotation chips.

Do not overblur screenshots until the product is unreadable.

## Hero visual

Recommended composition:
- Event Planner as primary pane
- smaller overlay cards for:
  - booking/payment;
  - gear/resource;
  - AI Copilot;
- no fake KPIs.

## Iconography

Use one consistent icon set already available in repo if possible.

Concepts:
- Calendar — scheduling
- Users — staff/customers
- Boxes/Package — gear/inventory
- Compass/MapPin — spots
- Ship/Vehicle — fleet/trips
- Bed — accommodation
- CreditCard — payments
- Cloud/Wind/Waves — conditions
- Chart — reports
- Shield/History — audit
- Sparkles/Bot — Copilot

## Imagery

Prefer:
1. product UI;
2. subtle editorial activity photography used sparingly;
3. abstract operational diagrams.

If stock photography is needed, ensure vertical diversity:
water, snow, trail/land, camps/resorts.

Do not build the homepage around only scuba divers.

## Dark mode

Support:
- dark as default visual identity if appropriate;
- accessible light mode if the site includes theme switching;
- if no theme switch is needed, still use `dark:` compatible tokens/components where repository architecture supports it.

## Accessibility

- 4.5:1 normal text contrast;
- visible focus ring;
- 44×44 minimum tap target;
- semantic heading order;
- do not communicate state by color alone;
- decorative topographic SVGs must be hidden from assistive technology;
- motion respects `prefers-reduced-motion`.

## Visual anti-patterns

Avoid:
- generic SaaS blobs everywhere;
- gradient text on every heading;
- 20 glowing borders on one viewport;
- fake terminal/code visuals;
- generic AI robot illustrations;
- stock-photo collage in every section;
- mountain peak logo cliché unless branding has separately approved it;
- old AquaRosters aqua-only palette as the entire identity.
