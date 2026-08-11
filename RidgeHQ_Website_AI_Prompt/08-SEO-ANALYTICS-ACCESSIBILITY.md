# 08 — SEO, Analytics, Attribution, Accessibility and Performance

## SEO layers

### Brand

- RidgeHQ
- RidgeHQ activity business software
- RidgeHQ activity operations

### Category/problem

- activity business management software
- activity operations software
- booking and operations software
- activity scheduling and resource management

### Vertical long-tail

Build unique pages for the 12 solution categories. Do not keyword-stuff or duplicate the same page with noun swaps.

## Metadata

Every page needs:

- unique title;
- unique description;
- canonical URL;
- Open Graph;
- social card metadata;
- no stale AquaRosters title/description.

Homepage title direction:

`RidgeHQ — The Operating System for Activity Businesses`

Do not add trademark symbols or registration claims without verified legal status.

## Technical SEO

Implement:

- sitemap;
- robots;
- canonical URLs;
- semantic headings;
- crawlable navigation;
- clean slugs;
- breadcrumbs + BreadcrumbList on deep pages where appropriate;
- accurate Organization/WebSite/SoftwareApplication schema where appropriate;
- FAQ schema only when the visible content qualifies;
- no fake AggregateRating/Review markup.

If replacing an existing AquaRosters public marketing site, inventory old public paths and document 301 redirects. Do not redirect authenticated/admin/API product routes as part of this task.

## Current launch-state SEO boundary

The site can be production quality during the controlled pilot, but SEO copy must not imply:

- final public pricing;
- broad customer adoption;
- legal brand clearance;
- equal validation across all 12 verticals.

## Site analytics

Reuse existing GA architecture if present.

Requirements:

- measurement ID from environment/config;
- disabled on localhost/dev as repository conventions allow;
- central event helper;
- no PII;
- page views on client navigation where needed.

Recommended click events:

- `book_demo_click`
- `design_partner_click`
- `pricing_interest_click`
- `platform_cta_click`
- `vertical_cta_click`
- `contact_click`

Recommended success events on `/thank-you`:

- `lead_submit_success` with `intent`
- or specific derived events such as `book_demo_submit_success`, `design_partner_submit_success`, `contact_submit_success`

Safe event metadata:

- page path;
- vertical slug;
- CTA location;
- intent;
- non-PII campaign identifiers.

Never send:

- name;
- email;
- phone;
- business free-text;
- message/pain-point text.

## Zoho attribution

Use Zoho Forms tracking plus explicit non-PII context.

Capture/retain where configured:

- source page;
- CTA location;
- vertical context;
- `utm_source`;
- `utm_medium`;
- `utm_campaign`;
- `utm_content`;
- `utm_term`;
- `gclid` if Google Ads is later used and consent/legal settings permit.

Do not place personal information into UTM/custom tracking parameters.

## Conversion-success design

Because the Zoho form is cross-origin, do not infer success by inspecting iframe contents.

Preferred: configure Zoho Forms to redirect the **parent window** after successful submission to RidgeHQ `/thank-you` with only a safe intent key. Fire the site conversion event there.

If redirect is unavailable on the current Zoho plan, rely on Zoho Forms' acknowledgment/tracking capabilities and document that site-side success analytics is limited until the plan/config supports redirect.

## Accessibility — WCAG 2.2 AA

Non-negotiable:

- semantic landmarks;
- skip link;
- one logical H1;
- heading hierarchy;
- visible focus;
- keyboard navigation;
- 44×44 touch targets;
- contrast;
- reduced motion;
- meaningful alt text;
- accessible mobile menu;
- accessible FAQ;
- descriptive title/heading around embedded form;
- direct-form fallback link if iframe fails.

The website cannot repair inaccessible markup inside a third-party iframe. Use Zoho's accessible theme/field labels and manually test the live form with keyboard and screen reader semantics where possible.

## Performance

- optimize LCP;
- stable layout;
- minimal JS;
- no giant hero video;
- optimized screenshots;
- load Zoho only on pages with forms;
- defer other third-party scripts;
- prevent font/image layout shift.
