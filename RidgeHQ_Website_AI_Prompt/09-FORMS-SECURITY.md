# 09 — Single Zoho Forms Lead Flow, Security and Privacy

## Decision

The public RidgeHQ marketing website uses **one Zoho Forms form** as the lead-capture surface and **Zoho CRM as the lead system of record**.

This replaces the older plan to maintain separate Supabase/Turnstile lead tables and endpoints for Contact, Demo, and Design Partner forms.

Do not keep both architectures unless explicitly requested later.

## Why one form

One form gives RidgeHQ:

- one validation/spam-control surface;
- one CRM field map;
- one attribution model;
- one dedup/upsert path;
- one place to evolve qualification questions;
- one consent/privacy model;
- less website code and fewer secrets;
- better cross-page lead reporting.

The website still presents distinct conversion pages; only the underlying lead form is shared.

## Form identity

Recommended Zoho form name:

**RidgeHQ Website Enquiry**

Recommended required first field:

**How can we help?**

Choices:

- Contact / question
- Book a demo
- Design partner / early access
- Pricing / pilot interest
- Partnership / integration

The page pre-selects the appropriate choice through a Zoho field alias. The visitor may change it.

Treat these choice labels as an integration contract. If changed in Zoho, update the website mapping and tests.

## Common fields

Recommended:

- Full name
- Work email
- Business name
- Website (optional)
- Country
- Business type / vertical
- Role (optional)
- How can we help?
- Consent to contact about this enquiry
- Optional separate product-update/marketing opt-in

Use conditional Field Rules for the intent-specific questions in `07-FUNCTIONAL-REQUIREMENTS.md`.

## Website context passed to Zoho

Pass only non-PII values:

- enquiry intent;
- source page/path;
- source CTA;
- vertical context;
- plan/pilot context;
- UTM parameters;
- optional GCLID when appropriate.

Never pass name/email/phone/message through query parameters.

## Spam protection

Configure spam protection **inside Zoho Forms**.

Preferred low-friction option: **Cloudflare Turnstile** if available/configured in the founder's Zoho Forms account. Zoho Forms also supports its own CAPTCHA and Google reCAPTCHA options.

Do not add a second website-side CAPTCHA around the embedded Zoho form unless a real abuse case requires it.

## Embed mode

Default: Zoho public permalink in an iframe/advanced iframe configuration.

Reasoning:

- hosted validation stays in Zoho;
- CAPTCHA remains part of the actual form;
- cross-origin isolation is predictable;
- simple React/Next lifecycle;
- referrer tracking can be retained;
- no CRM secret is exposed.

Do not download Zoho's HTML/CSS and turn it into a separate website form by default.

## Security boundary

The website must contain **no**:

- Zoho CRM OAuth access/refresh token;
- Zoho CRM client secret;
- Supabase service-role key for lead capture;
- custom webhook secret unless a later integration specifically needs one;
- CRM API call directly from browser code.

The browser posts to Zoho Forms. Zoho Forms pushes the entry to Zoho CRM through Zoho's native integration.

## Data privacy

- Link RidgeHQ Privacy Policy from the form context and/or Zoho terms field.
- Keep mandatory contact consent scoped to responding to the enquiry.
- Keep marketing/newsletter consent separate and optional.
- Never pre-check marketing consent.
- Do not silently enroll every contact in promotional campaigns.
- Mark/encrypt sensitive fields inside Zoho if you ever add them; this lead form should avoid sensitive data entirely.
- Ensure UTM/custom tracking does not contain PII.

## CRM duplicate handling

Configure Zoho Forms → Zoho CRM to push into the **Leads** module.

Use **Upsert** by email only if the CRM Email field is configured in a way Zoho exposes to Upsert (for example, duplicate prevention/unique configuration as required by Zoho).

Upsert behavior should update recent intent/source/qualification fields without wiping valuable existing CRM values with blanks. Configure Zoho's upsert preferences accordingly.

## CRM actions

Where available in the current Zoho edition, use the native Forms → CRM integration to:

- trigger Assignment Rules;
- trigger Workflow Rules;
- add/append tags;
- capture GCLID;
- map UTM/source fields;
- create/update a lead rather than maintaining a parallel website database.

See `11-ZOHO-FORMS-CRM.md` for the operational blueprint.

## Success and redirect

Preferred successful submission behavior:

1. Zoho validates and stores the entry.
2. Zoho pushes to CRM.
3. Zoho redirects the parent window to `https://ridgehq.app/thank-you`.
4. Only a non-PII `intent` value is appended.
5. RidgeHQ fires its success analytics event.

Do not append email, name, phone, message, or business details to the redirect URL.

## Failure behavior

Do not claim a CRM lead was created based only on iframe load state.

Use Zoho's own visible validation/error state. Provide a direct “Open the form in a new tab” fallback link if embedding fails.

## Plan-dependent features

Zoho Forms/CRM features can vary by edition. The code must not assume that conditional redirects, scoring, advanced automations, or specific CRM actions are available until confirmed in the founder's plan.

When unavailable:

- preserve the single-form architecture;
- fall back to the simplest supported acknowledgment/CRM push;
- document the missing automation as a Zoho admin setup item, not as a website defect.
