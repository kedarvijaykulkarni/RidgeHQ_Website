# Anonymous Industry Benchmark Strategy

Phase 17 of the AI-discoverability initiative. **Design document only — no
telemetry implementation, no benchmark numbers published anywhere on the site
as part of this issue.** Publishing real industry benchmarks (booking lead
time, cancellation rate, utilization, repeat-booking rate) would be a strong
authority/AEO asset, but there is no aggregate customer data to publish yet,
and fabricating one would violate the master prompt's explicit rule against
inventing statistics.

## 1. What data already exists (and where it doesn't)

Per `D:\work\RidgeHQAPP\Brain\RidgeHQAPP\wiki\development-reference\Modules\AI-Copilot.md`
(`get_operational_insights` tool, `accounting.service.get_operational_stats`),
RidgeHQAPP already computes **per-tenant** operational metrics: fill rate by
vessel/resource, session volume by day-of-week and hour band, activity mix
shift, and returning-customer rate — each tenant sees only their own numbers,
scoped by row-level security.

**What does not exist:** any cross-tenant aggregation. There is no pipeline,
table, or job that combines these per-tenant figures into an industry-wide
benchmark. Building one is new infrastructure, not a config change — and
explicitly out of scope for this issue.

## 2. Data requirements, if this is ever built

| Metric | Source (per-tenant, already computed) | Aggregation needed |
|---|---|---|
| Fill rate / utilization | `get_operational_stats` fill_rate by resource | Cross-tenant median/percentile, by vertical |
| Cancellation / no-show rate | Not currently computed as a named metric — would need a new query | New per-tenant metric first, then aggregation |
| Repeat-booking rate | `returning_customer_rate` | Cross-tenant median/percentile, by vertical |
| Booking lead time | Not currently computed | New per-tenant metric first, then aggregation |

Two of the four metrics an eventual benchmark report would want don't exist
even at the per-tenant level yet — this reinforces that this is multi-phase
work (per-tenant metric → consented aggregation → publication), not a single
telemetry PR.

## 3. Minimum sample size

No aggregate statistic should publish from fewer than **20 contributing
tenants per vertical**, with each tenant weighted equally (not by booking
volume, to avoid one large operator dominating a "typical" figure). Below
that threshold, report "not enough data for this vertical yet" rather than a
number with a misleadingly narrow base — the same honesty standard
`get_operational_insights` already applies per-tenant (`not_enough_data`
below 5 trips).

## 4. Anonymization approach

- **Aggregation level**: vertical (e.g. "dive centers"), never a named
  operator or a group small enough to re-identify one.
- **k-anonymity threshold**: the 20-tenant minimum above functions as a
  k-anonymity floor; additionally, no published figure may be derivable back
  to a single tenant even in combination with other published figures (e.g.
  don't publish both a vertical's average AND that vertical's total tenant
  count if the vertical is small enough that division re-identifies someone).
  Public disclosure review recommended before any real vertical count is
  published, not just any per-metric value.
- **No per-tenant re-identification**: only aggregate statistics (median,
  percentile bands) are ever published — never a distribution granular
  enough to back out one operator's number.

## 5. Privacy and consent considerations

- **Opt-in, not opt-out.** A tenant's operational data contributing to an
  aggregate benchmark must be an explicit, separate consent — not bundled
  into general terms of service, and not assumed from continued use.
- **What customers are told**: exactly which metrics contribute, at what
  aggregation level, and that individual data is never shown to RidgeHQ staff
  in a way that identifies them within the benchmark (only ever as part of
  the tenant's own dashboard, which already exists).
- **GDPR alignment**: consistent with this site's existing privacy-policy
  language (`/privacy`) — this would need an explicit addition there before
  any pilot, not an implicit extension of existing data-processing consent.

## 6. Publication methodology

- **Cadence**: no more than quarterly — operational patterns for a seasonal
  activity business don't meaningfully shift month to month, and quarterly
  gives more time to accumulate the 20-tenant minimum per vertical.
- **What's shown publicly vs. internal-only**: only the aggregate
  median/percentile bands per vertical are public (a `/benchmarks` page,
  future work); the underlying per-tenant contributing figures stay internal,
  visible only to RidgeHQ operations for quality-checking the aggregate
  before publication — never to another tenant.

## 7. Explicit non-scope of this issue

- No telemetry code, no new database table, no new API endpoint is added by
  this issue.
- No benchmark number is published anywhere on the site as part of this
  issue — every current claim on the site remains what it was before this
  document existed.
- This document exists so that if/when there's a real customer base large
  enough to aggregate, the "should we build this" conversation starts from a
  reviewed plan instead of zero.

## Related

- `docs/ai-discoverability-audit.md` (Phase 1)
- Vault: `wiki/development-reference/Modules/AI-Copilot.md` (existing
  per-tenant `get_operational_insights`/`get_operational_stats`)
- `/privacy` (would need updating before any pilot)
