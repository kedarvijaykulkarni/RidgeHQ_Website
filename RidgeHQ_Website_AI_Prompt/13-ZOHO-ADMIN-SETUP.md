# 13 — Founder Zoho Admin Setup Checklist

This file contains the account-side work that the coding agent cannot safely invent.

## A. Create or choose the single form

In Zoho Forms (India data center):

- [ ] Create/rename one form: **RidgeHQ Website Enquiry**.
- [ ] Add the common fields from `11-ZOHO-FORMS-CRM.md`.
- [ ] Add `How can we help?` choice field.
- [ ] Add the exact intent choices used by the website mapping.
- [ ] Configure intent-specific questions.
- [ ] Add Field Rules.
- [ ] Configure a field alias for the intent field, e.g. `intent`.
- [ ] Add aliases/context fields only where needed.
- [ ] Keep marketing consent separate from enquiry-contact consent.

## B. Spam/privacy

- [ ] Configure Zoho Forms Spam Control.
- [ ] Prefer Cloudflare Turnstile if desired/available; otherwise choose another supported Zoho CAPTCHA option.
- [ ] Add privacy/terms text/link.
- [ ] Confirm any marketing opt-in is optional and not preselected.
- [ ] Do not collect sensitive customer/participant data.

## C. Tracking

- [ ] Enable Zoho UTM tracking.
- [ ] Confirm default UTM fields.
- [ ] Add required custom tracking parameters only if needed.
- [ ] Configure GCLID capture only when Google Ads is actually used.
- [ ] Test from an incognito browser with sample UTM parameters.

## D. CRM integration

In Zoho Forms → Integrations → Zoho CRM:

- [ ] Integrate to CRM **Leads** module.
- [ ] Select the existing Lead layout to use.
- [ ] Map mandatory CRM fields.
- [ ] Map website intent/vertical/current system/size/pain/source fields.
- [ ] Map UTM/source fields.
- [ ] Configure Upsert by Email if your CRM duplicate-field setup exposes Email for Upsert.
- [ ] Configure upsert preference so blank form fields do not wipe valuable existing CRM values.
- [ ] Add/append RidgeHQ website/intent tags.
- [ ] Trigger Assignment Rule if one exists/needed.
- [ ] Trigger Workflow Rules if available/desired.
- [ ] Configure integration-failure alerts.

## E. CRM lifecycle

- [ ] Decide Lead Status values.
- [ ] Create high-intent follow-up workflow/task.
- [ ] Create reminder/escalation for untouched website leads.
- [ ] Decide when a qualified Lead becomes Contact/Account/Deal.
- [ ] Do not auto-create a Deal for every form submission.
- [ ] If using scoring, start with a simple hypothesis and review it after real data.

## F. Emails

- [ ] Decide whether immediate acknowledgment comes from Forms or CRM — not both unless intentionally different.
- [ ] Verify sender domain/DKIM settings as applicable.
- [ ] Keep promotional sequences separate from enquiry response and dependent on marketing consent.

## G. Success redirect

If supported by the current Zoho Forms plan:

- [ ] Configure successful submission redirect to the parent window.
- [ ] Destination: `https://ridgehq.app/thank-you`.
- [ ] Pass only the non-PII intent key/label needed for confirmation analytics.
- [ ] Never pass name/email/phone/message/business data in the redirect URL.

If not supported:

- [ ] Configure a clear Zoho Thank You page.
- [ ] Keep website-side conversion tracking expectations documented as limited.

## H. Give the coding agent the real form URL

Copy the exact Zoho Forms **public permalink** from Share/Embed and set it in the website deployment configuration as:

`NEXT_PUBLIC_ZOHO_FORM_URL=<real public permalink>`

Do not provide CRM secrets to the browser or commit them to the repository.

## I. End-to-end test

Submit at least five test paths:

1. Contact
2. Book Demo
3. Design Partner
4. Pricing/Pilot interest
5. Partner/Integration

For each verify:

- correct conditional fields;
- CAPTCHA/spam behavior;
- Zoho entry created;
- CRM Lead created/upserted;
- source/intent/UTM mapped;
- expected tags/workflow/task fired;
- no duplicate unwanted email;
- success redirect/thank-you works;
- no PII appears in analytics URL/event payload.
