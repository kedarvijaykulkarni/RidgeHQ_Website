/**
 * Blog posts merged into a single canonical post per topic (2026-10-09).
 * Each entry is [removed slug, canonical slug]; next.config.ts serves them as
 * permanent (308) redirects so existing links and search signals carry over.
 * Never re-use a removed slug for a new post.
 */
export const BLOG_REDIRECTS: ReadonlyArray<readonly [string, string]> = [
  ["ai-copilot-for-dive-center-operations", "ai-copilot-for-dive-center-scheduling-operations"],
  ["ai-copilot-operational-core-dive-management", "ai-copilot-for-dive-center-scheduling-operations"],
  ["ai-copilot-scheduling-operations-aqua-roster", "ai-copilot-for-dive-center-scheduling-operations"],
  ["native-ai-operational-intelligence-ridgehq", "ai-copilot-for-dive-center-scheduling-operations"],
  ["enhancing-waivers-for-center-operations", "waiver-system-dive-center-operations"],
  ["integrated-waiver-system-dive-operations", "waiver-system-dive-center-operations"],
  ["future-waiver-system-digital-compliance", "waiver-system-dive-center-operations"],
  ["database-level-multi-tenancy-data-security", "database-level-multi-tenancy-for-dive-centers"],
  ["role-based-permissions-dive-center-operations", "role-based-permissions-dive-center-saas"],
  ["order-immutability-credit-notes-divescenes", "order-immutability-credit-note-on-change"],
];
