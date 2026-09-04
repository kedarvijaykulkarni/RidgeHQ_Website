# RidgeHQ.app Public Marketing Website — Master AI Implementation Prompt v2

## Mission

Build the **complete public marketing website for RidgeHQ.app** from the existing product/business knowledge in the AquaRosters Brain vault.

This is **not** a request to rename or rebuild the authenticated SaaS product. The existing product is the implementation evidence behind the website.

The website must:

- establish RidgeHQ as the master brand for an activity-operations platform;
- explain the product clearly across the intended 12 verticals;
- use real product proof;
- attract qualified operator conversations;
- capture Contact, Demo, Design Partner, Pricing/Pilot, and Partnership leads through **one Zoho Forms form**;
- push those leads into the founder's existing **Zoho CRM** through Zoho's native integration;
- support the current **controlled paid-pilot** commercial phase;
- be SEO-ready, accessible, fast, and production quality;
- never let marketing claims outrun the code.

## Current brand and commercial state

- Brand used on the website: **RidgeHQ**
- Domain: `https://ridgehq.app`
- Category: **Activity Business OS / Activity Operations Platform**
- Primary positioning: **The operating system for activity businesses**
- Primary CTA: **Book a Demo**
- Secondary CTA: **Join the Design Partner Program / Request Early Access**
- Commercial phase: **controlled paid pilot, not broad self-service launch**
- Lead system of record: **Zoho CRM**
- Website lead collection: **one Zoho Forms form reused everywhere**
- Public self-service signup: **disabled by current launch plan**
- Public final pricing: **not yet validated**
- Direct booking principle: **0% RidgeHQ platform commission on direct bookings** while current

The latest Brain snapshot supplied for this prompt revision is `D:\work\RidgeHQAPP\Brain\RidgeHQAPP` (moved 2026-09-04 from the earlier `D:\work\Bloowatch\aquarosters\Brain\AquaRosters` location), dated 2026-08-11 in this workstream.

## 12 master-brand verticals

1. Dive Centers
2. Surf Schools
3. Kitesurf Schools
4. Sailing Schools
5. Windsurf Schools
6. Outdoor & Whitewater Operators
7. Ski Schools
8. Dive Resorts
9. Surf Camps
10. Kayak Rental & Tours
11. Bike Rental & Tours
12. Boat Rental & Courses

The master website is broad, but early commercial acquisition remains evidence-driven and narrower. Do not claim existing adoption across all 12 verticals.

---

# Mandatory reading

Start with the prompt-pack files in this order:

1. `00-AGENT-OPERATING-MODE.md`
2. `01-SOURCE-OF-TRUTH.md`
3. `02-BRAND-POSITIONING.md`
4. `12-GTM-LAUNCH-GUARDRAILS.md`
5. `03-INFORMATION-ARCHITECTURE.md`
6. `04-COPY-MESSAGING.md`
7. `05-DESIGN-SYSTEM.md`
8. `06-TECHNICAL-IMPLEMENTATION.md`
9. `07-FUNCTIONAL-REQUIREMENTS.md`
10. `08-SEO-ANALYTICS-ACCESSIBILITY.md`
11. `09-FORMS-SECURITY.md`
12. `11-ZOHO-FORMS-CRM.md`
13. `13-ZOHO-ADMIN-SETUP.md`
14. `10-IMPLEMENTATION-ACCEPTANCE.md`

Then inspect the Brain at:

`D:\work\RidgeHQAPP\Brain\RidgeHQAPP`

Follow the Tier-A/Tier-B reading rules in `01-SOURCE-OF-TRUTH.md`. Do not load the entire vault blindly.

---

# Source-of-truth rules

1. Explicit current website decisions in this pack override older AquaRosters branding/site notes.
2. Newer dated business/launch files beat older raw plans.
3. Specific implementation/module evidence beats broad marketing/business summaries for present-tense capability claims.
4. Historical marketing documents are inspiration, not implementation proof.
5. Never fabricate evidence.

Important current conflicts:

- Public website says **RidgeHQ**; product internals may still say AquaRosters/AquaRoster.
- Build the RidgeHQ site, but do not perform a repository-wide product rename.
- The Brain records RidgeHQ name-collision/legal-clearance risk. Do not claim trademark clearance or “official global launch.”
- Product architecture is multi-vertical; current early GTM is narrower.
- Private pilot pricing exists, but final public pricing is not validated.
- AI confirmation/audit is real where verified; undo is **partial**, not universal.

---

# Critical Zoho decision

## One form, multiple website intents

Do not create separate website backends or separate Zoho forms for Contact, Book Demo, and Design Partner.

Use one Zoho form, recommended name:

**RidgeHQ Website Enquiry**

The same form is embedded with a prefilled first field:

**How can we help?**

Supported intent choices:

- Contact / question
- Book a demo
- Design partner / early access
- Pricing / pilot interest
- Partnership / integration

Use Zoho Field Rules so each visitor sees only the questions relevant to the selected intent.

Website pages remain distinct:

- `/contact`
- `/book-demo`
- `/design-partners`

but all use the same `ZohoLeadForm` component and same Zoho form permalink.

## CRM

Zoho Forms should push submissions into Zoho CRM **Leads** using the native integration.

Use native CRM capabilities where available/appropriate:

- Upsert/dedup by email;
- Assignment Rules;
- Tags;
- Workflow Rules;
- follow-up tasks;
- source/UTM/GCLID mapping;
- lead scoring later, after enough real data.

Do not expose CRM credentials to the website.

## Spam protection

Configure spam protection in Zoho Forms. Prefer Cloudflare Turnstile if the founder chooses it and the Zoho Forms account supports/configures it. Do not wrap the iframe in a second custom CAPTCHA by default.

## Success tracking

Do not inspect a cross-origin iframe for success.

Preferred flow:

`Zoho submission → Zoho parent-window redirect → https://ridgehq.app/thank-you?intent=<safe-value>`

Only non-PII intent/context may be passed.

The RidgeHQ thank-you page fires the PII-safe conversion event.

---

# Website positioning

RidgeHQ is **not just booking software**.

The platform story connects:

`Bookings + Schedule + Staff + Customers + Skills + Gear + Rentals + Fleet + Trips + Accommodation + Payments + Conditions + Partners + Reports + AI`

The operator outcome is:

> **Know what is booked, assigned, available and paid — from one HQ.**

Preferred hero direction:

**Eyebrow:** `The Activity Business OS`

**Headline:** `Run your entire activity business from one HQ.`

**Supporting direction:**

`RidgeHQ connects bookings, schedules, staff, customers, gear, rentals, trips, payments and daily operations in one live system — with an AI copilot built around the work.`

Improve wording if you can make it shorter, more credible, and more operator-focused without changing the meaning.

---

# Current pricing/launch behavior

Do not copy stale `€29/€59/€99` pricing.

Do not publish `€49/€89/€149` as final self-service pricing by default.

Current business model in the Brain:

- private Founding Operator Pilot model: €49/month for 90 days;
- target post-pilot center of gravity: ~€89/month, not yet validated;
- 0% RidgeHQ platform commission on direct bookings;
- no free plan;
- no broad self-service onboarding yet.

Public `/pricing` should therefore default to:

- predictable subscription positioning;
- 0% direct-booking commission message if current;
- early-access/pilot explanation;
- demo/pilot CTA;
- configurable hidden tier architecture for future publication.

Do not add Buy Now / Start Free unless a later explicit decision changes the launch phase.

---

# AI marketing boundary

Before writing present-tense AI claims, read the current `wiki/development-reference/Modules/AI-Copilot.md`.

Safe direction, subject to current-code verification:

- operational context;
- product tool use;
- role checks;
- confirmation for medium/high-risk operations;
- AI mutation audit trail;
- selected actions with undo support;
- Anthropic/OpenAI/Ollama provider choice.

Do not claim:

- every action is reversible;
- fully autonomous operations;
- automatic provider failover;
- automatic money-moving action without controls;
- universal cost/token tracking.

---

# Design direction

Build a premium B2B SaaS identity around **operational terrain / mission control for activity businesses**.

Use:

- slate/dark base;
- indigo primary around `#6366F1`;
- restrained cyan/violet accents;
- topographic/path/grid motifs;
- real product screenshots;
- selective glass surfaces;
- strong typography and whitespace.

The brand must work for water, snow, land, tours, rentals, camps, and resorts.

Avoid:

- scuba-only identity;
- mountain-only identity;
- fake AI robot illustrations;
- excessive glowing cards;
- stock-photo dependency;
- giant hero video;
- fake customer dashboards.

---

# Execution workflow

When executing the complete job, run these modular prompts sequentially without requiring the user to re-prompt after each one unless a genuine external blocker exists:

1. `20-EXECUTE-01-RECON-ARCHITECTURE.md`
2. `21-EXECUTE-02-BRAND-CONTENT-IA.md`
3. `22-EXECUTE-03-DESIGN-COMPONENTS.md`
4. `23-EXECUTE-04-PAGES.md`
5. `24-EXECUTE-05-ZOHO-CRM-CONVERSION.md`
6. `25-EXECUTE-06-SEO-ANALYTICS-QA.md`

If the user wants only one phase, execute only that phase using the shared specification files.

## Phase behavior

- Use judgement for ordinary implementation choices.
- Prefer completing the work over asking cosmetic questions.
- Do not invent external account values.
- If Zoho admin setup is not yet complete, implement the code boundary and give the exact checklist rather than blocking every other website task.
- Keep a concise implementation log with decisions and test results.

---

# Definition of done

Use `10-IMPLEMENTATION-ACCEPTANCE.md` as the final gate.

At minimum the final implementation must have:

- complete public route architecture;
- unique 12-vertical content;
- real product screenshots;
- reusable design/components;
- correct pilot/pricing state;
- verified AI wording;
- one reusable Zoho lead-form integration;
- Zoho CRM setup blueprint/checklist;
- PII-safe attribution and success tracking;
- SEO metadata/sitemap/structured data;
- accessibility;
- production build passing;
- no fake evidence;
- no accidental authenticated-product rewrite.

Final report must separate:

1. completed website code;
2. external Zoho admin steps;
3. deployment values still required;
4. claims intentionally softened due evidence gaps;
5. test/build results.
