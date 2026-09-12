# CTA-to-buying-stage funnel audit

Phase 18 of the AI-discoverability initiative — inventory of every CTA instance
on the site, mapped to the buying stage the page's visitor is most likely at
(Awareness / Problem-aware / Solution-aware / High-intent), so awareness-stage
pages don't default to the same "Book a Demo" close as a high-intent page.

## Inventory

| Page | Stage | Primary CTA (before) | Primary CTA (after) |
|---|---|---|---|
| `/` (home) | Mixed / first-touch | Book a Demo | Unchanged — home draws all stages, demo is a reasonable default first ask |
| `/blog` (index) | Awareness | Book a Demo | **Explore the Platform** (demo now secondary) |
| `/blog/[slug]` | Awareness | Book a Demo | **Explore the Platform** (demo now secondary) |
| `/tools/no-show-cost-calculator` | Awareness / Problem-aware | Book a Demo + relevant platform link | Unchanged — already tailored (commit `da9de13`) |
| `/tools/admin-time-cost-calculator` | Awareness / Problem-aware | Book a Demo + relevant platform link | Unchanged — already tailored (commit `da9de13`) |
| `/use-cases/[slug]` | Problem-aware / Solution-aware | Book a Demo (secondary: Explore the Platform) | Unchanged — added in #6, appropriate for this stage |
| `/platform` (hub) | Solution-aware | Book a Demo | Unchanged — appropriate |
| `/platform/[slug]` | Solution-aware | Book a Demo | Unchanged — appropriate |
| `/products` (hub) | Solution-aware | Book a Demo | Unchanged — appropriate |
| `/solutions` (hub) | Solution-aware | Book a Demo (custom headline) | Unchanged — appropriate |
| `/solutions/[slug]` | Solution-aware / High-intent | Book a Demo (custom form) | Unchanged — appropriate |
| `/ai-copilot` | Solution-aware | Request Early Access → `/design-partners` | Unchanged — already stage-appropriate |
| `/integrations` | Solution-aware | Contact Us → `/contact` | Unchanged — already stage-appropriate |
| `/about` | High-intent | Join the Design Partner Program | Unchanged — already stage-appropriate |
| `/resources` | Awareness (coming-soon, `noindex`) | Book a Demo | Unchanged — low priority, page is `noindex` and pre-content |

## Changes made

- `/blog` and `/blog/[slug]`: swapped primary/secondary so an awareness-stage
  reader gets "Explore the Platform" as the lower-commitment next step, with
  "Book a Demo" offered as secondary rather than the only option.

## Not changed / out of scope

- No new lead-capture component was introduced — every change reuses
  `<CTASection />`'s existing props.
- Solution-aware and high-intent pages (vertical/product/platform hubs and
  detail pages, `/about`) already default to a demo ask, which is appropriate
  for that stage — left as-is.
- `/` (home) intentionally left as a single demo CTA: it's the first-touch
  page for every stage, not a single-stage page.
