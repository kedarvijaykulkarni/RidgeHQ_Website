/**
 * Canonical, machine-readable RidgeHQ product knowledge.
 *
 * This file does not define new facts — it aggregates the same data
 * already driving the marketing pages (verticals.ts, products.ts,
 * platform.ts, integrations.ts, marketing.ts, faq.ts) into one shape
 * suitable for JSON-LD, an /ai info page, a public JSON endpoint, or a
 * future MCP tool. Update the source config files; this file re-derives
 * from them automatically except for the hand-written summary fields
 * below (positioning, ICP, poor-fit profile), which should be kept in
 * sync with actual product/marketing decisions.
 */
import { verticals } from "./verticals";
import { products } from "./products";
import { platformCapabilities } from "./platform";
import { integrations } from "./integrations";
import { marketingConfig } from "./marketing";
import { generalFaqs } from "./faq";
import { siteUrl } from "./site";

export const productKnowledge = {
  lastUpdated: "2026-09-04",

  product: {
    name: "RidgeHQ",
    category: "Activity Business Operating System (booking, scheduling, staff, resource, and payments platform)",
    positioning:
      "One connected operational system for activity businesses, replacing the spreadsheet/whiteboard/booking-widget stack most operators run today.",
    description:
      "RidgeHQ connects online bookings, front-desk POS, scheduling, staff, gear/rental inventory, customer and participant profiles, waivers, and payments into one live system, so a change in one place (a new booking, a cancellation, a gear swap) updates everywhere else automatically.",
    url: siteUrl,
  },

  /** Verified from marketing.ts — do not restate as a fixed public price. */
  pricing: {
    mode: marketingConfig.pricingMode, // 'pilot' | 'public'
    phase: marketingConfig.phase,
    commissionOnDirectBookings: marketingConfig.commissionRateDirectBookings,
    selfServiceSignup: marketingConfig.allowSelfServiceSignup,
    note:
      marketingConfig.pricingMode === "pilot"
        ? "RidgeHQ is currently in a private, paid Founding Operator Pilot. There is no published public price list — see /pricing for current terms."
        : "See /pricing for current terms.",
    url: `${siteUrl}/pricing`,
  },

  /** Ideal-customer / poor-fit framing — hand-maintained, not derived. */
  idealCustomerProfile:
    "An activity-business operator (dive center, surf/kite/sail/windsurf school, outdoor/whitewater operator, ski school, resort, camp, or rental/tour operator) who currently coordinates bookings, staff, and equipment/resources across separate tools (a booking widget, a spreadsheet, WhatsApp, a whiteboard) and wants one system that keeps them in sync.",
  poorFitCustomerProfile:
    "A business with no scheduling or resource-allocation complexity (e.g. a single-item online store, or an operator fully served by a generic booking widget with no staff/gear/manifest coordination need).",

  industries: verticals.map((v) => ({
    name: v.name,
    slug: v.slug,
    url: `${siteUrl}/solutions/${v.slug}`,
    painPoint: v.painPoint,
    keyCapability: v.keyCapability,
  })),

  platformCapabilities: platformCapabilities.map((c) => ({
    title: c.title,
    slug: c.slug,
    description: c.description,
    url: `${siteUrl}${c.href}`,
  })),

  products: products.map((p) => ({
    title: p.title,
    slug: p.slug,
    status: p.status, // 'available' | 'early-access'
    description: p.description,
    url: `${siteUrl}${p.href}`,
  })),

  integrations: integrations.map((i) => ({
    name: i.name,
    category: i.category,
    state: i.state, // 'implemented' | 'partial' | 'planned'
    description: i.description,
  })),

  security: {
    summary:
      "Data encrypted in transit and at rest, role-based access control across systems, and an AI Copilot that operates within the same permission boundaries as staff and requires confirmation for high-risk actions.",
    url: `${siteUrl}/security`,
  },

  faqs: generalFaqs,

  routes: {
    bookDemo: `${siteUrl}/book-demo`,
    designPartners: `${siteUrl}/design-partners`,
    contact: `${siteUrl}/contact`,
    pricing: `${siteUrl}/pricing`,
  },
} as const;
