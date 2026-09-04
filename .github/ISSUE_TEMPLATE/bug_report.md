# Bug report template for RidgeHQAPP

<!-- Use this template for bugs and production incidents. Keep reproductions minimal and OPSEC-safe. -->

## Summary

<!-- One-sentence summary of the bug. Reference related issue/PR if this is a follow-up: "Follow-up to #NNN" or "Related: #NNN". -->


## Why this matters

<!-- Short justification: impact, scope, production-readiness or security concerns, and urgency. e.g., "affects all tenants", "possible data-exposure", "blocks deploy". -->


## Steps to reproduce

1. Environment (e.g., APP_ENV=production, docker compose, k8s, DB version):
2. Exact commands or steps:
   - e.g., `docker compose -f docker-compose.prod.yml up --build`
3. What you did (minimal reproducible steps):

Include any small repro repository or snippet and the exact commit/branch used.


## Expected behavior

<!-- What you expected to happen. -->


## Actual behavior

<!-- What actually happened. Include full error messages, stack traces, HTTP responses, and sanitized logs. Redact secrets. -->


## Logs / traceback / screenshots

<!-- Paste logs (sanitized), concise stack traces, or attach screenshots. Use code blocks. -->


## Suggested fix (optional)

<!-- If you have a suggested patch or remediation path, describe it concisely. If unknown, leave blank. -->


## Acceptance criteria / Test plan

- [ ] Reproduction steps reliably produce the observed failure
- [ ] Fix implements targeted change without regressions
- [ ] Focused unit tests added
- [ ] Backend test suite passes: `pytest -q --no-cov`
- [ ] Lint and formatting checks pass: `ruff check .`

Include exact commands to validate the fix locally and in CI.


## Security / sensitive data

- Do NOT paste real credentials, secrets, or keys. If the bug concerns a secret or credential, mark with the `security` label and provide an OPSEC-safe repro (redact secrets).


## Environment (optional)

- app version / commit:
- python/psycopg/postgres version:
- docker-compose / k8s config snippet (if relevant):


## Related

- Related PRs/issues:
- Notes / runbook references:


## Suggested labels / assignees (optional)

- Suggested labels: bug / security / backend / infrastructure
- Suggested assignees: @your-team-member
