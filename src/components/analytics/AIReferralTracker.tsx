"use client";

import { useEffect } from "react";
import { event } from "@/lib/analytics/google-analytics";
import { detectAiReferralSource } from "@/lib/analytics/ai-referral";

// Fires a single `ai_referral_session` GA event when a session's first page
// load came from a known AI-assistant/AI-search referrer, so the
// AI-discoverability initiative can be measured against real traffic
// instead of assumed. Reads `document.referrer` only (already collected by
// GA as `page_referrer`) — no new cookies, no PII, no consent-surface change.
export function AIReferralTracker() {
  useEffect(() => {
    const source = detectAiReferralSource(document.referrer);
    if (!source) return;

    // Fire once per browser session, not on every client-side navigation.
    const key = "ridgehq_ai_referral_fired";
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1");

    event("ai_referral_session", { source });
  }, []);

  return null;
}
