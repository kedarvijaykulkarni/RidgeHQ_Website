// Known AI-assistant/AI-search referrer hostnames. Matched against
// `document.referrer` only — no new cookies, no PII, nothing beyond what
// this hostname string already reveals (which GA already records as
// `document.referrer`/`page_referrer`).
const AI_REFERRER_HOSTNAMES: { match: string; source: string }[] = [
  { match: "chat.openai.com", source: "chatgpt" },
  { match: "chatgpt.com", source: "chatgpt" },
  { match: "perplexity.ai", source: "perplexity" },
  { match: "gemini.google.com", source: "gemini" },
  { match: "copilot.microsoft.com", source: "copilot" },
  { match: "bing.com/chat", source: "copilot" },
  { match: "claude.ai", source: "claude" },
];

/**
 * Returns the AI-assistant source name if `referrerUrl` came from a known
 * AI-assistant/AI-search surface, otherwise null. Pure function — no
 * browser globals — so it's testable without a DOM.
 */
export function detectAiReferralSource(referrerUrl: string): string | null {
  if (!referrerUrl) return null;

  let hostAndPath: string;
  try {
    const url = new URL(referrerUrl);
    hostAndPath = `${url.hostname}${url.pathname}`;
  } catch {
    return null;
  }

  const found = AI_REFERRER_HOSTNAMES.find((entry) => hostAndPath.includes(entry.match));
  return found?.source ?? null;
}
