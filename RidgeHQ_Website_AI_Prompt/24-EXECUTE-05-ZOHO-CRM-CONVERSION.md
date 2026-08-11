# Execution Prompt 05 — Zoho Forms + Zoho CRM Conversion Layer

Read:

- `07-FUNCTIONAL-REQUIREMENTS.md`
- `09-FORMS-SECURITY.md`
- `11-ZOHO-FORMS-CRM.md`
- `13-ZOHO-ADMIN-SETUP.md`

Implement the website side of the **single-form architecture**.

Tasks:

1. Create a typed `LeadIntent` enum/union.
2. Create the mapping from internal intent to exact Zoho Forms choice label.
3. Implement `buildZohoFormUrl()` using `URL`/`URLSearchParams`.
4. Accept only non-PII context: intent, source page, CTA, vertical, plan/pilot context, approved attribution fields.
5. Create one `ZohoLeadForm` component.
6. Use it on Contact, Design Partners, Book Demo, and pricing/solution conversion surfaces.
7. Add responsive embed container and direct-form fallback link.
8. Add external configuration for the real public Zoho form permalink.
9. If CSP exists, add minimal form/frame origins based on the actual public URL.
10. Add `/thank-you` intent validation and PII-safe conversion event.
11. Remove/stop using redundant Supabase lead submission code for these RidgeHQ website forms, but do not delete shared infrastructure still used elsewhere without evidence.
12. Add unit tests for intent mapping and URL builder.

Do not:

- call Zoho CRM from the browser;
- add CRM tokens;
- invent the form URL;
- read iframe DOM;
- pass PII in query parameters;
- add another CAPTCHA outside the Zoho form by default.

If the real Zoho permalink is not yet supplied, the implementation can be code-complete but the final report must mark the external configuration gate as incomplete.

Continue to Execution Prompt 06.
