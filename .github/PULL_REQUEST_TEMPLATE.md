<!-- Pull Request template for RidgeHQAPP

Guiding principle: keep PRs focused and small. Follow the repository CLAUDE.md working mode *(no RUNBOOK.md exists in this repo)*: summarize scope, list minimal changes, and show a clear test plan. -->

# Summary

<!-- One-paragraph summary of what this PR does and why. Reference related issue(s) with `Closes #NNN`. -->


# Changes

<!-- Short bullet list of the behavioral and/or surface changes. Mention migrations, config, infra, docs. -->

- 


# Why this matters

<!-- Short justification / context for the change. Who or what will this affect? -->


# Test plan

<!-- Step-by-step instructions to validate this change locally and in CI. Include exact commands and expected results. Keep focused tests first (unit/fast), then broader checks. -->

1. Run focused tests:
   - `pytest -q path/to/changed/module -k "your_test"`
2. Run broader checks if focused tests pass:
   - `pytest -q --no-cov`
   - `npm --prefix apps/web run test` (if frontend impacted)
3. Lint/format/type checks:
   - `ruff check .`
   - `npm --prefix apps/web run lint`


# Checklist

- [ ] My change is small and scoped to a single task ID
- [ ] I inspected related code before adding new hooks/services/models/endpoints
- [ ] I added/updated focused tests covering the change
- [ ] I ran focused tests locally and they pass
- [ ] I ran broader backend/web checks (pytest, ruff, web lints) where relevant
- [ ] I updated docs / CLAUDE.md / Obsidian only if API, DB model, navigation, permissions, or behavior changed
- [ ] No secrets or real credentials are included in the diff
- [ ] If a migration was added: migration includes safe guards (runtime checks) and notes in the PR description


# Deployment notes

<!-- If special deploy steps are required (env vars, migrations order, secret provisioning), describe them here. -->


# Related

<!-- Links to issues, PRs, design notes, or decision records. -->

- Related issue: 

