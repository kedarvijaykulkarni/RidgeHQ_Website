# MCP / ChatGPT App Readiness Proposal

Phase 20 of the AI-discoverability initiative. **Proposal only — no server code
in this repo.** Per the master prompt's explicit instruction not to build an
MCP server blindly, this starts from investigating what already exists before
proposing anything.

## 1. Investigation

**Finding: an authenticated, production MCP server already exists — in the
product (RidgeHQAPP), not this marketing site.** This significantly changes
the shape of this proposal from what the tracking issue assumed.

Read from `D:\work\RidgeHQAPP\Brain\RidgeHQAPP\wiki\development-reference\Modules\MCP-Server.md`
and `AI-Copilot.md`:

- **AI Copilot tool registry** (`apps/api/app/modules/*/ai_tools.py`, ~18
  files): every domain mutation is a `ToolDefinition` — role-gated
  (`min_role`), risk-gated (`read`/`low`/`medium`/`high`), audited (`AiAction`
  rows), and reversible where an `undo_handler` exists. The in-app AI Copilot
  chat and the MCP server below both call the *same* tool registry — neither
  reimplements logic.
- **MCP server** (`apps/api/app/modules/mcp/*`, Phase 1+2 shipped): a
  `/mcp` JSON-RPC (Streamable HTTP) endpoint, authenticated by a Personal
  Access Token (Manager-issued, capped below Owner/SuperAdmin) or an OAuth 2.1
  flow (Better Auth `mcp`/`oidc-provider` plugins, PKCE-mandatory, RFC
  9728 discovery). PATs are SHA-256-hashed at rest, never stored or
  retrievable in plaintext after issuance. Tool visibility is
  `V1_ALLOWLIST ∩ pat.scopes ∩ risk ∈ {read,low,medium} ∩ role`. **No
  `high`-risk tool (create/cancel booking, refund) is ever reachable over
  MCP, as a hard product boundary, not a per-tenant setting.** Tenant
  isolation, rate limiting, and audit-origin labelling (`mcp:<pat.id>` vs
  `ai:<tenant_id>`) are all implemented. (Known limitations documented in the
  vault itself, not this proposal's concern: registry/directory listing and
  production deployment are incomplete, its rate limiter is process-local
  like this repo's own `/api/public/*` one, and an upstream OAuth plugin has
  a documented HS256/RS256 `id_token` mismatch — none of these affect the
  auth/isolation/allowlist claims this proposal relies on.)

**What this means for this proposal:** the "authenticated customer tools"
half the tracking issue asked this document to scope as *future work*
already exists, shipped, in the product itself. There is nothing to propose
there — only to reference as the precedent and security bar. What's actually
missing, and in scope for this repo, is a **public, pre-sales-only** surface
for `ridgehq.app` itself (unauthenticated prospects asking an AI assistant
about RidgeHQ before they're a customer) — a different, much lower-stakes
problem than the one RidgeHQAPP's MCP server already solves.

## 2. Public / pre-sales tools (proposed, not built)

These would back a ChatGPT-app-style or MCP integration for `ridgehq.app`
itself — read-only or lead-capture only, no auth, no customer data. Every
tool traces to an existing data source already shipped in this repo:

| Tool | Backed by (exact source) |
|---|---|
| `get_product_information` | `GET /api/public/product` (#13) |
| `get_supported_industries` | `GET /api/public/industries` (#13) |
| `get_feature_information` | `GET /api/public/features` (#13) |
| `get_pricing_information` | `GET /api/public/pricing` (#13) |
| `calculate_no_show_cost` | `src/lib/calculators/noShowCost.ts::calculateNoShowCost` |
| `calculate_admin_time_cost` | `src/lib/calculators/adminTimeCost.ts::calculateAdminTimeCost` |
| `calculate_cancellation_cost` | `src/lib/calculators/cancellationCost.ts::calculateCancellationCost` |
| `calculate_revenue_leakage` | `src/lib/calculators/revenueLeakage.ts::calculateRevenueLeakage` |
| `calculate_break_even` | `src/lib/calculators/breakEven.ts::calculateBreakEven` |
| `calculate_roi` | `src/lib/calculators/roi.ts::calculateRoi` |
| `calculate_cac_ltv` | `src/lib/calculators/cacLtv.ts::calculateCacLtv` |
| `request_demo` | See below — **not** a thin wrapper, needs new server-side work |

**Explicitly excluded from this list, by design:** `instructorUtilization.ts`
and `capacityUtilization.ts` are standalone educational calculators (see
`docs/ai-discoverability-audit.md`) with no RidgeHQ-feature claim attached —
exposing them as MCP tools would need the same "does not imply a shipped
RidgeHQ report" framing the `/tools/*` pages already carry, so they're left
out of this initial list rather than risk that nuance getting lost in a tool
description. `readinessAssessment.ts` is a scored quiz, not a single-call
calculation — a different tool shape (multi-turn or multi-input) not sketched
here.

The four `/api/public/*`-backed tools and the seven calculator tools above
genuinely are thin wrappers — no new backend logic, since the calculation
and the data are already pure functions/JSON endpoints in this repo.
`request_demo` is different and should not be graded on the same basis:

**`request_demo` — corrected framing.** `src/components/forms/CustomLeadForm.tsx`
submits directly from the browser to Zoho (`action="https://crm.zoho.in/crm/WebToLeadForm"`
via a hidden iframe target) — there is no server-side route or reusable
function in this repo backing lead capture today. An MCP/tool version of
`request_demo` would need genuinely new server-side work: input validation,
abuse/rate controls, an explicit Zoho-failure/retry model, and PII handling
(consent, retention, no sensitive data in tool-call logs) — not a wrapper
over existing code. Scope this as its own small design pass when it's
actually prioritized, not as "the same as the other six."

## 3. Authenticated customer tools — not proposed here, already exists

This is **not new work to design**. Per the tracking issue's own request to
list these "marked future," here is that list — with each row's actual
status, since every one of them is already implemented in RidgeHQAPP, not
merely planned:

| Authenticated tool category | Status |
|---|---|
| List/get bookings | Already implemented — RidgeHQAPP MCP server, read-risk tools |
| Reschedule/reassign session, move rental/accommodation block | Already implemented — medium-risk, in `V1_ALLOWLIST`, confirm/execute flow |
| Create/cancel booking, refund payment | Deliberately **never** MCP-reachable in RidgeHQAPP either — high-risk tools are excluded as a hard product boundary, not a gap to close |
| Check staff/resource availability | Already implemented — read-risk tools |

All of the above are the RidgeHQAPP MCP server described in §1, already
shipped with tenant isolation, role/risk gating, and audit trails that meet
or exceed what this document would otherwise have had to propose from
scratch. If this marketing site ever needs to *surface* (not re-implement)
anything from that server — e.g. linking a signed-in operator to their own
tenant's MCP access-token settings — that's a cross-repo integration
question for whoever owns both codebases, not something to build here.

## 4. Hard constraints (non-negotiable if any of this is ever built)

- Never expose a customer/tenant-scoped operation through an unauthenticated
  tool. The public tools in §2 must stay read-only or lead-capture only,
  forever — no exceptions for convenience.
- If a public MCP surface for `ridgehq.app` is ever built, it is a
  **separate** server/endpoint from RidgeHQAPP's `/mcp` — conflating a
  public, unauthenticated marketing surface with the authenticated
  tenant-scoped one in §3 would be a serious isolation mistake.
- Mirror RidgeHQAPP's precedent: least privilege, explicit allowlisting
  (never "everything not denied"), and an audit trail for anything beyond a
  pure read.
- **Rate limiting / anti-abuse** on every public tool — an unauthenticated
  surface is scraper/bot bait by default; see the caveats already documented
  for `/api/public/*`'s own best-effort limiter (`publicApiRateLimit.ts`) as
  the floor, not the ceiling, for whatever protects a future tool surface.
- **Reject any tenant ID, customer identifier, bearer credential, or
  arbitrary upstream URL as tool input.** A public tool should never accept
  a parameter shaped like it could reach into authenticated, tenant-scoped
  territory — that's a design smell independent of whether the handler
  itself would honor it.
- **PII handling for `request_demo` specifically**: explicit consent
  language, defined retention, and tool-call logs that never capture
  submitted contact details in plaintext.
- **Input/output size limits** on every tool, consistent with the repo's
  own `/api/public/*` routes taking no request body today.
- **Discovery/metadata must never imply this is the same surface as
  RidgeHQAPP's authenticated `/mcp`** — separate resource identifiers,
  separate documentation, no shared branding that could confuse a caller
  into thinking a public tool has authenticated-tier capability.

## 5. What this issue does NOT do

No server code, no new dependency, no new route beyond what #13 already
shipped. This is a proposal document only, reviewed against the actual state
of the product's own MCP implementation rather than assumed from scratch.

## Related

- `docs/ai-discoverability-audit.md` (Phase 1)
- Public API endpoints: #13, `src/app/api/public/*`
- Calculators: #10, `src/lib/calculators/*`
- Vault: `wiki/development-reference/Modules/MCP-Server.md`,
  `wiki/development-reference/Modules/AI-Copilot.md`
