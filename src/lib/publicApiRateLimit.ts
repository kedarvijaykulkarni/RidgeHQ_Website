/**
 * Best-effort, in-memory rate limit for /api/public/* — this is a single
 * marketing site with no request datastore (no Redis/KV), so this is not
 * distributed-safe across serverless instances or deploys. It exists as a
 * cheap defense against a single hot path hammering one instance, layered
 * on top of the routes' Cache-Control headers (which absorb most repeated
 * traffic before it ever reaches this check) — not a substitute for a real
 * rate limiter if these endpoints see meaningful abuse.
 */
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 60;

const requestLog = new Map<string, number[]>();

export function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(identifier) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    requestLog.set(identifier, timestamps);
    return true;
  }

  timestamps.push(now);
  requestLog.set(identifier, timestamps);
  return false;
}
