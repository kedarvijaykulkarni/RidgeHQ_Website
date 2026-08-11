# 07 — Functional Website Requirements

## Header

Desktop:

- RidgeHQ wordmark/logo
- Platform
- Solutions
- AI Copilot
- Integrations
- Pricing
- Resources
- Company
- Book a Demo CTA

Mobile:

- accessible menu button;
- focus management;
- equivalent destinations;
- no hover-only navigation.

## Hero

Primary CTA: `/book-demo`

Secondary CTA: `/platform` or `/design-partners` depending on section strategy.

Do not use self-service signup while the launch plan disables public self-service onboarding.

## Solutions explorer

Represent all 12 verticals with:

- grouped categories;
- crawlable links;
- keyboard-accessible controls if interactive;
- unique supporting copy.

## Product screenshots

Use real assets from the Brain marketing screenshots folder.

Map screenshot to capability and avoid stale AquaRosters brand prominence where it creates public confusion.

## AI Copilot

Show only verified behavior:

- operational context;
- product tool usage;
- confirmation/risk model;
- audit trail;
- selected undo capability;
- provider choice if current.

Do not display fake AI customer outcomes.

## Pricing

Current public mode is `pilot`.

Required behavior:

- explain predictable subscription philosophy;
- show 0% RidgeHQ platform commission on direct bookings if current;
- explain early access / Founding Operator conversation;
- link to the same Zoho lead form with `pricing_interest` intent;
- no public hard-coded €49/€89/€149 ladder until explicitly approved.

Keep the tier data model reusable for a later validated public mode.

## FAQ

- semantic buttons;
- `aria-expanded`;
- server-rendered content where possible;
- contextual vertical FAQs;
- 8–12 homepage FAQs.

## One universal Zoho lead form

### Common visible fields

Keep the common layer concise:

- How can we help? — required choice, prefilled by page context but editable
- Full name
- Work email
- Business name
- Website — optional
- Country
- Business type / vertical
- Role — optional
- Consent to be contacted about the enquiry
- Separate optional product-update/marketing opt-in if desired; never pre-check it

### Contact branch

Show through Zoho Field Rules when intent = Contact / question:

- enquiry topic
- message

### Book Demo branch

Show:

- current software/process
- team/operation size
- approximate bookings/activity volume band if useful
- biggest operational challenge
- optional preferred contact/time-zone note

### Design Partner / Early Access branch

Show:

- current software/process
- team/operation size
- primary pain point
- ability to test with real operational workflows
- willingness to give structured recurring feedback
- desired adoption timeframe
- optional paid-pilot interest question

Do not promise free access. Current business plan allows at most 1–2 free strategic design partners; everyone else can be handled through a paid pilot conversation.

### Pricing / Pilot interest branch

Show:

- operation size
- current system
- business type
- preferred pricing/contact question

### Data-minimization rule

Never collect marketing-form data such as:

- payment-card details;
- participant health/insurance data;
- certification documents;
- government IDs;
- sensitive employee records.

## Form UX

Website responsibilities:

- clear heading/context around embed;
- responsive container;
- accessible fallback link to open form directly;
- loading state/skeleton that does not cause large layout shift;
- no fake local submit button layered over the iframe;
- no PII in URL parameters;
- no attempt to scrape the iframe DOM.

Zoho responsibilities:

- validation;
- conditional fields;
- CAPTCHA/spam protection;
- submission;
- acknowledgment/redirection;
- CRM integration.

## Thank-you page

Create `/thank-you` that:

- accepts only a known non-PII intent key;
- shows a matching confirmation message;
- fires a conversion event once per page view;
- links back to Platform/Solutions;
- never displays form response data from the URL.

## Footer

Render only confirmed social URLs/handles.

Include:

- Platform
- Solutions
- Resources
- Company
- Legal
- Security/Trust

## 404

Branded, useful, keyboard accessible, with links to Home, Platform, and Solutions.

## No fake social proof

Product proof beats fabricated proof.
