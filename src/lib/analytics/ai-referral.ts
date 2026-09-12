// Known AI-assistant/AI-search referrer hostnames. Matched against
// `document.referrer` only — no new cookies, no PII, nothing beyond what
// this hostname string already reveals (which GA already records as
// `document.referrer`/`page_referrer`).
//
// `hostnames` are matched by exact equality or as a true subdomain
// (`hostname.endsWith("." + match)`) — never a plain substring — so a
// referrer like `claude.ai.attacker.example` cannot spoof a `claude.ai`
// match.
const AI_REFERRERS: { hostnames: string[]; pathPrefix?: string; source: string }[] = [
  { hostnames: ["chat.openai.com", "chatgpt.com"], source: "chatgpt" },
  { hostnames: ["perplexity.ai"], source: "perplexity" },
  { hostnames: ["gemini.google.com"], source: "gemini" },
  { hostnames: ["copilot.microsoft.com"], source: "copilot" },
  { hostnames: ["bing.com"], pathPrefix: "/chat", source: "copilot" },
  { hostnames: ["claude.ai"], source: "claude" },
];

function isHostnameMatch(hostname: string, match: string): boolean {
  return hostname === match || hostname.endsWith(`.${match}`);
}

/**
 * Returns the AI-assistant source name if `referrerUrl` came from a known
 * AI-assistant/AI-search surface, otherwise null. Pure function — no
 * browser globals — so it's testable without a DOM.
 */
export function detectAiReferralSource(referrerUrl: string): string | null {
  if (!referrerUrl) return null;

  let hostname: string;
  let pathname: string;
  try {
    const url = new URL(referrerUrl);
    hostname = url.hostname;
    pathname = url.pathname;
  } catch {
    return null;
  }

  const found = AI_REFERRERS.find(
    (entry) =>
      entry.hostnames.some((h) => isHostnameMatch(hostname, h)) &&
      (!entry.pathPrefix || pathname.startsWith(entry.pathPrefix)),
  );
  return found?.source ?? null;
}
