/**
 * Best-effort, in-memory rate limit for /api/public/* — this is a single
 * marketing site with no request datastore (no Redis/KV), so this is not
 * distributed-safe across serverless instances or deploys. It exists as a
 * cheap defense against a single hot path hammering one instance, layered
 * on top of the routes' Cache-Control headers (which absorb most repeated
 * traffic before it ever reaches this check) — not a substitute for a real
 * rate limiter if these endpoints see meaningful abuse.
 *
 * Known limitation, accepted rather than solved here: the identifier is
 * whatever the caller passes in (see publicApiResponse.ts, which uses
 * X-Forwarded-For) — a client that varies this header can get a fresh
 * bucket per request and evade the per-identifier limit entirely. Without
 * this deployment's actual edge/proxy configuration guaranteeing the header
 * can't be client-set, this limiter cannot distinguish a spoofed identifier
 * from a real one; it is a defense against a naive hot-loop, not a hardened
 * abuse control. A periodic sweep (below) bounds memory growth from that
 * same spoofing pattern, but does not close the bypass itself.
 */
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 60;

// Every this-many calls, sweep the whole map and drop identifiers with no
// timestamps left in the current window — otherwise an identifier that's
// used once (e.g. a spoofed/rotating header value) never gets cleaned up,
// and the map grows without bound for the life of the instance.
const SWEEP_EVERY_N_CALLS = 500;

const requestLog = new Map<string, number[]>();
let callsSinceSweep = 0;

function sweepStaleEntries(now: number) {
  for (const [identifier, timestamps] of requestLog) {
    const fresh = timestamps.filter((t) => now - t < WINDOW_MS);
    if (fresh.length === 0) {
      requestLog.delete(identifier);
    } else if (fresh.length !== timestamps.length) {
      requestLog.set(identifier, fresh);
    }
  }
}

/** Test-only: current tracked-identifier count, to assert the sweep bounds growth. */
export function _getTrackedIdentifierCountForTesting(): number {
  return requestLog.size;
}

export function isRateLimited(identifier: string): boolean {
  const now = Date.now();

  callsSinceSweep += 1;
  if (callsSinceSweep >= SWEEP_EVERY_N_CALLS) {
    callsSinceSweep = 0;
    sweepStaleEntries(now);
  }

  const timestamps = (requestLog.get(identifier) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    requestLog.set(identifier, timestamps);
    return true;
  }

  timestamps.push(now);
  requestLog.set(identifier, timestamps);
  return false;
}
