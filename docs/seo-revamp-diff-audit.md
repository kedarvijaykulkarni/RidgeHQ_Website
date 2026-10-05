# SEO diff audit — sitemap, metadata, JSON-LD (#67)

This is the pre-ship non-regression check for the website revamp (#70), done under epic #66.
It compares a production build of `main` at `312b376`, from before the revamp, with `develop`
at `7c55daa`, with every revamp PR merged. Both were served with `next start` and fetched
over HTTP, so the comparison covers rendered output, not only source. Run on 2026-10-05.

## Scope

The audit covered 76 routes: every `<loc>` in either build's `sitemap.xml` (75), plus
`/thank-you`, which is deliberately left out of the sitemap. For each route it compared:

- the HTTP status
- `<title>`
- every `<meta name|property>`: description, robots, `og:*`, `twitter:*` and others
- `<link rel="canonical">` and `<link rel="alternate">`
- the H1 text
- every `application/ld+json` block, parsed and compared as objects

## Results

### Metadata and JSON-LD: no differences

All 76 routes returned 200 on both builds. All 76 had identical titles, meta tags,
canonicals, alternates, H1s and JSON-LD. The revamp changed presentation only and dropped
or altered no SEO signal.

### Sitemap: no URLs added or removed; one gap fixed

- Both builds list the same 75 URLs.
- 68 entries changed, and only in `<lastmod>`, which moved forward to `2026-10-05`. That's
  the intended bump from #71 and the epic-#57 remediation (#97). No `changefreq` or
  `priority` changed, and no date moved backwards.
- **Gap found and fixed in this PR:** 7 static routes changed during the revamp but kept
  their old `lastmod`. That breaks `CLAUDE.md`'s sitemap rule that edited pages get their
  date bumped. Each now carries the date of the last commit that touched its page file,
  following the convention stated in `sitemap.ts`:

| Route | Was | Now | Last change |
|---|---|---|---|
| `/` | 2026-09-25 | 2026-10-05 | #50 re-sequence, #51 Copilot transcript, #52 trust section |
| `/platform` | 2026-09-12 | 2026-10-04 | #80 theme-token migration |
| `/products` | 2026-09-12 | 2026-10-04 | #80 |
| `/docs` | 2026-10-01 | 2026-10-04 | #80 |
| `/pricing` | 2026-09-12 | 2026-10-04 | #80 |
| `/solutions` | 2026-09-05 | 2026-10-04 | #80 |
| `/press` | 2026-10-03 | 2026-10-04 | #80 |

I confirmed all 7 in the `sitemap.xml` served by a fresh `next build`.

### JSON-LD validation

`develop` emits these types: Organization, WebSite, Person, ImageObject,
SoftwareApplication/WebApplication, Offer, BusinessAudience, FAQPage (23 pages),
BreadcrumbList (62), Article (18 blog posts), VideoObject, AboutPage and ItemList.

I picked one page for each distinct JSON-LD template and submitted its blocks to the
Schema.org validator (`validator.schema.org`). **All 14 returned 0 errors and 0 warnings:**
`/`, `/solutions/dive-centers`, `/products/activity-platform`, `/platform/scheduling`,
`/blog/integrated-waiver-system-dive-operations`, `/use-cases/instructor-scheduling`,
`/compare/commission-based-booking-platforms`, `/tools`, `/tools/roi-calculator`, `/about`,
`/press`, `/pricing`, `/docs` and `/ai`. The other 62 routes reuse these templates and emit
JSON-LD identical to `main`.

**Google Rich Results Test: not run here.** It's an interactive Google UI with no
scriptable endpoint, and `develop` isn't deployed. Run it on the production URLs after the
`develop` → `main` cutover, as part of #69.

## Checks

`npx tsc --noEmit`, `npx eslint`, `npx jest` (110 tests) and `npx next build` all pass.
