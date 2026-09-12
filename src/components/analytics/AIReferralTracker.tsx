"use client";

import { useEffect } from "react";
import { event, isGoogleAnalyticsEnabled } from "@/lib/analytics/google-analytics";
import { detectAiReferralSource } from "@/lib/analytics/ai-referral";

const SESSION_KEY = "ridgehq_ai_referral_fired";
const GTAG_POLL_INTERVAL_MS = 200;
const GTAG_POLL_TIMEOUT_MS = 5000;

// Fires a single `ai_referral_session` GA event when a session's first page
// load came from a known AI-assistant/AI-search referrer, so the
// AI-discoverability initiative can be measured against real traffic
// instead of assumed. Reads `document.referrer` only (already collected by
// GA as `page_referrer`) — no new cookies, no PII, no consent-surface change.
//
// GoogleAnalytics loads gtag.js with `strategy="afterInteractive"`, which
// isn't guaranteed to have run by the time this effect fires on mount (unlike
// CTAEventTracker's click-driven event, which has time to load first) — so
// this polls briefly for gtag readiness and only marks the session as fired
// once the event actually dispatches, instead of burning the dedup flag on a
// no-op.
export function AIReferralTracker() {
  useEffect(() => {
    if (!isGoogleAnalyticsEnabled()) return;

    const source = detectAiReferralSource(document.referrer);
    if (!source) return;

    // Fire once per browser session, not on every client-side navigation.
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let elapsed = 0;
    const interval = setInterval(() => {
      elapsed += GTAG_POLL_INTERVAL_MS;
      const ready = typeof window.gtag === "function";

      if (ready || elapsed >= GTAG_POLL_TIMEOUT_MS) {
        clearInterval(interval);
        if (ready) {
          sessionStorage.setItem(SESSION_KEY, "1");
          event("ai_referral_session", { source });
        }
      }
    }, GTAG_POLL_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return null;
}
