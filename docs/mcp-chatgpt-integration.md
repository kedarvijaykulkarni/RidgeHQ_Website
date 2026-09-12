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
  9728 discovery). Tool visibility is `V1_ALLOWLIST ∩ pat.scopes ∩ risk ∈
  {read,low,medium} ∩ role`. **No `high`-risk tool (create/cancel booking,
  refund) is ever reachable over MCP, as a hard product boundary, not a
  per-tenant setting.** Tenant isolation, rate limiting, and audit-origin
  labelling (`mcp:<pat.id>` vs `ai:<tenant_id>`) are all implemented.

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

| Tool | Backed by |
|---|---|
| `get_product_information` | `GET /api/public/product` (#13) |
| `get_supported_industries` | `GET /api/public/industries` (#13) |
| `get_feature_information` | `GET /api/public/features` (#13) |
| `get_pricing_information` | `GET /api/public/pricing` (#13) |
| `calculate_no_show_cost` / `calculate_admin_time_cost` / `calculate_roi` / etc. | `src/lib/calculators/*.ts` (#10) — same formulas the `/tools/*` calculator pages already expose |
| `request_demo` | Same lead-capture path as `/book-demo`'s `<CustomLeadForm />` |

None of these require new backend logic — they'd be thin wrappers over code
that already exists in this repo (the public API routes and the calculator
formulas), exposed through whatever protocol (MCP server, ChatGPT App SDK,
or both) is chosen when this is actually prioritized.

## 3. Authenticated customer tools — not proposed here, already exists

List/get/create/reschedule booking, check staff availability, etc. — this is
**not new work to design**. It's the RidgeHQAPP MCP server described in §1,
already shipped with tenant isolation, role/risk gating, and audit trails
that meet or exceed what this document would otherwise have had to propose
from scratch. If this marketing site ever needs to *surface* (not
re-implement) anything from that server — e.g. linking a signed-in operator
to their own tenant's MCP access-token settings — that's a cross-repo
integration question for whoever owns both codebases, not something to
build here.

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
