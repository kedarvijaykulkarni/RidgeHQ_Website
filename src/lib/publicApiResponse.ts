import { NextRequest, NextResponse } from "next/server";
import { isRateLimited } from "./publicApiRateLimit";

/**
 * Shared response helper for /api/public/* — these serve the same
 * already-public marketing facts as /ai and llms.txt, just as JSON for a
 * caller that wants structured data instead of parsing HTML. No auth, no
 * per-tenant data, nothing not already published on a public page.
 *
 * Cache-Control is set generously (this data changes at most a few times a
 * week, driven by a code deploy, not a database write) and stale-while-
 * revalidate keeps a cached response usable while a fresh one loads. A
 * best-effort per-IP rate limit sits on top (see publicApiRateLimit.ts for
 * its real limitations).
 */
export function publicApiJson(request: NextRequest, data: unknown) {
  const identifier = request.headers.get("x-forwarded-for") ?? "unknown";

  if (isRateLimited(identifier)) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": "60" } },
    );
  }

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
