# 11 — Zoho Forms → Zoho CRM Full-Potential Blueprint

## Objective

Use the founder's existing Zoho ecosystem as RidgeHQ's lightweight lead-operations stack instead of rebuilding lead capture and CRM logic inside the website.

Target flow:

```text
RidgeHQ page/CTA
  → one embedded Zoho Forms form
  → conditional qualification questions
  → Zoho spam protection
  → Zoho Forms entry + attribution
  → native Zoho CRM integration
  → Leads module upsert/create
  → assignment / tags / workflows / scoring
  → founder follow-up task
  → discovery / demo / pilot lifecycle
```

## Verified Zoho capabilities used by this design

As checked against official Zoho documentation on 2026-08-11:

- Zoho Forms supports iframe and JavaScript embeds.
- Embedded forms can use field aliases/URL parameters for prefilling.
- Advanced iframe/referrer tracking can capture the full source URL.
- Field Rules can show/hide or require questions based on prior responses.
- Zoho Forms can push submissions into Zoho CRM modules.
- The Forms → CRM integration can support actions such as Upsert, Assignment Rules, and Tags.
- CRM Workflow Rules can create tasks, send notifications, update fields, call webhooks/functions, and perform scheduled actions subject to edition/limits.
- Zoho CRM supports lead scoring rules in paid editions.
- Zoho Forms supports UTM tracking and GCLID capture paths.
- Zoho Forms supports spam controls including its CAPTCHA, Google reCAPTCHA, and Cloudflare Turnstile.
- Zoho Forms can redirect after success; conditional/site redirection features can be plan-dependent.

## Recommended Zoho Form

Name:

**RidgeHQ Website Enquiry**

Purpose:

One form for all public lead intents. Do not duplicate it simply to obtain different page headings.

### Required first field

`How can we help?`

Choices:

1. Contact / question
2. Book a demo
3. Design partner / early access
4. Pricing / pilot interest
5. Partnership / integration

Assign a Zoho Field Alias such as `intent` and use it from the website embed URL.

### Shared qualification fields

| Field | CRM use |
|---|---|
| Full name | Lead name |
| Work email | dedupe/upsert key candidate |
| Business name | Company |
| Website | company research |
| Country | geography/assignment/scoring |
| Business type / vertical | ICP/segmentation |
| Role | buyer-role fit |
| Current system/process | switching context |
| Team/operation size | ICP fit |
| Activity/booking volume band | ICP fit / qualification |
| Biggest operational challenge | discovery context |
| Contact consent | lawful response basis / record |
| Product updates opt-in | separate marketing permission |

Do not make every qualification field mandatory. Optimize completion rate.

## Field Rules

### Contact / question

Show:

- Enquiry topic
- Message

Hide deep qualification unless useful.

### Book a demo

Show:

- Current system/process
- Team size
- Activity/booking volume band
- Main operational challenge
- Preferred contact/time-zone note

### Design partner / early access

Show:

- Current system/process
- Team size
- Activity/booking volume band
- Main pain point
- Can test using real operational workflows? Yes/No
- Willing to provide structured recurring feedback? Yes/No
- Adoption timeframe
- Interested in discussing the Founding Operator Pilot? Yes/No

Do not put a lifetime-free promise in the form.

### Pricing / pilot interest

Show:

- Current system
- Operation size
- Pricing question / desired next step

### Partnership / integration

Show:

- Organization
- Partnership type
- Integration/partner summary

## Website context fields

Map non-PII context into dedicated form/CRM fields where practical:

- Website Source = `RidgeHQ Website`
- Source Page
- Source CTA
- Vertical Context
- Pricing/Pilot Context
- UTM Source
- UTM Medium
- UTM Campaign
- UTM Content
- UTM Term
- GCLID (future paid search)

## Zoho CRM module

Default destination: **Leads**.

Do not create Accounts/Contacts/Deals from anonymous website traffic immediately. Qualify the lead first unless the founder's CRM process already does otherwise.

## Recommended CRM custom fields

Names can be adapted to the existing CRM schema:

- `Website Intent`
- `Business Type / Vertical`
- `Current Platform`
- `Team Size Band`
- `Monthly Booking / Activity Volume Band`
- `Primary Operational Pain`
- `Design Partner Feedback Commitment`
- `Pilot Interest`
- `Source Page`
- `Source CTA`
- `Vertical Context`
- `UTM Source`
- `UTM Medium`
- `UTM Campaign`
- `UTM Content`
- `UTM Term`
- `GCLID`
- `Original Website Source`
- `Latest Website Intent`

Keep the first-touch/original source separate from latest-touch fields if the CRM setup can support it. Do not overwrite valuable acquisition history on every upsert.

## Lead source

Set CRM `Lead Source` to something stable such as:

**RidgeHQ Website**

Do not overload Lead Source with UTM campaign names. Keep campaign dimensions in their own fields.

## Upsert / duplicate strategy

Preferred:

1. Check whether Email can be configured as the CRM duplicate/unique field required by Zoho's Upsert action.
2. Upsert by Email.
3. On an existing lead, update latest intent/qualification/context but do not overwrite non-empty CRM notes with blank form values.
4. Append tags instead of replacing them where appropriate.

If Upsert is not available in the current plan/config, accept create behavior initially and use CRM duplicate-management tools rather than building website-side CRM API logic.

## Tags

Recommended static/dynamic tags:

- `RidgeHQ-Website`
- `Intent-Demo`
- `Intent-DesignPartner`
- `Intent-Contact`
- `Intent-Pricing`
- `Intent-Partner`
- `Pilot-2026` when applicable

Add vertical tags only if the tag taxonomy remains manageable. Prefer a structured `Business Type` field over dozens of tags.

## Assignment

The founder is currently the primary operator of sales, so assignment can stay simple.

If multiple GTM owners exist later, use Zoho Assignment Rules based on:

- geography;
- intent;
- vertical;
- partner attribution.

Do not encode assignment logic in website code.

## Workflow blueprint

Where the current CRM edition supports it:

### Workflow A — New high-intent lead

Trigger:

- new/updated Lead from RidgeHQ Website;
- intent = Book Demo OR Design Partner OR Pricing/Pilot.

Actions:

- set status `New - Website`;
- create same-day follow-up task for record owner;
- notify owner;
- apply intent tag;
- optionally send an acknowledgement email once, avoiding duplicate Forms + CRM emails.

### Workflow B — Contact enquiry

Trigger:

- intent = Contact / question.

Actions:

- task with sensible SLA;
- categorize by enquiry topic;
- no aggressive sales automation by default.

### Workflow C — No follow-up

Scheduled action:

- if still `New - Website` after a defined interval, create reminder/escalation task.

### Workflow D — Qualified pilot prospect

When status becomes Qualified / Pilot Candidate:

- create next-step task;
- optionally create a Deal only after qualification, depending on the founder's CRM process;
- preserve original source/UTM fields.

Do not auto-convert every form submission into a Deal.

## Lead-status suggestion

Adapt to existing CRM values rather than duplicating fields:

1. New - Website
2. Contacted
3. Discovery Scheduled
4. Qualified
5. Pilot Candidate
6. Pilot Active
7. Converted / Paying
8. Nurture
9. Disqualified

## Scoring model — optional, plan-dependent

Use CRM scoring only after enough real lead data exists.

An initial **hypothesis** can prioritize:

- high-intent action (demo/design partner/pilot);
- current Phase-1 ICP match;
- appropriate operation size;
- meaningful booking/activity volume;
- target launch geography;
- willingness to test with real workflows.

Do not treat the first scoring weights as truth. Review them after the first 20–50 leads and compare score with actual discovery/pilot conversion.

Do not use sensitive personal attributes in scoring.

## Phase-1 ICP scoring boundary

The public site is multi-vertical, but the current Brain says early GTM is narrower.

It is acceptable for CRM to give additional fit weight to:

- dive center;
- dive resort;
- freediving/snorkel-adjacent operator;
- 1–10 staff;
- roughly 50–500 bookings/month;
- year-round operating geographies prioritized by current GTM.

That is a sales-prioritization decision, not a claim that other 12-vertical leads are unwanted.

## Email automation

Avoid duplicate acknowledgment emails.

Choose one primary immediate confirmation source:

- Zoho Forms notification; or
- Zoho CRM workflow email.

Use CRM for follow-up tasks/status-driven sequences once the lead has entered the CRM.

Do not place contacts into marketing drip campaigns without explicit marketing consent.

## Attribution

Use both:

- Zoho Forms UTM/referrer tracking;
- explicit RidgeHQ context fields from the component.

Never send PII in UTM values.

## Spam and verification

Preferred:

- Cloudflare Turnstile inside Zoho Forms if configured/available;
- otherwise Zoho Forms CAPTCHA or another supported Zoho option.

Consider double opt-in only when the conversion/risk trade-off makes sense; it can add friction to demo/contact leads.

## Thank-you route

Configure successful embedded submissions to redirect the **parent window** to a RidgeHQ thank-you page if the current Zoho plan supports this.

Pass only:

- `intent`

Optionally pass a non-PII source key if genuinely needed.

Never pass submitted name/email/business/message fields.

## Manual Zoho configuration vs code

Website code can implement:

- embed component;
- alias URL construction;
- context/UTM propagation;
- thank-you page;
- analytics;
- tests;
- CSP.

Website code cannot safely invent or configure:

- the real form permalink;
- CRM layout/module IDs;
- exact existing CRM field API names;
- assignment rule names;
- workflow IDs;
- scoring rules;
- owner users.

Those belong in the Zoho admin checklist in `13-ZOHO-ADMIN-SETUP.md`.

## Official Zoho references checked 2026-08-11

- Embed overview: https://help.zoho.com/portal/en/kb/forms/embedding-forms/embedding-forms-in-webpages/articles/embedding-forms-overview
- JavaScript embed / URL parameters: https://help.zoho.com/portal/en/kb/forms/embedding-forms/embedding-forms-in-webpages/articles/embed-using-javascript
- iframe / advanced referrer tracking: https://help.zoho.com/portal/en/kb/forms/embedding-forms/embedding-forms-in-webpages/articles/embed-using-iframe
- Field Alias prefill: https://help.zoho.com/portal/en/kb/forms/form-settings/prefill/articles/field-alias
- Field Rules: https://help.zoho.com/portal/en/kb/forms/conditional-rules/field-rules/articles/field-rules
- UTM tracking: https://help.zoho.com/portal/en/kb/forms/tracking-in-zoho-forms/utm-tracking/articles/utm-overview
- Forms → CRM add record / upsert / assignment / tags: https://help.zoho.com/portal/en/kb/forms/integrations/zoho-crm/articles/adding-a-new-record-to-a-zoho-crm-module
- CRM integration overview: https://help.zoho.com/portal/en/kb/crm/integrations/zoho/zoho-forms/articles/zoho-forms-crm-integration
- Thank-you / redirection: https://help.zoho.com/portal/en/kb/forms/form-settings/general-settings/articles/thank-you-page-redirection
- Spam control / Turnstile support: https://help.zoho.com/portal/en/kb/forms/form-settings/privacy-features/captcha/articles/spam-control
- CRM workflows: https://help.zoho.com/portal/en/kb/crm/automate-business-processes/workflows/articles/configuring-workflow-rules
- CRM assignment rules: https://help.zoho.com/portal/en/kb/crm/automate-business-processes/assignment-rules/articles/set-assignment-rules
- CRM scoring rules: https://help.zoho.com/portal/en/kb/crm/automate-business-processes/scoring-rules/articles/multiple-scoring-rule
