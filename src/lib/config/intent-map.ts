/**
 * Structured industry x problem intent model (Phase 3 of the AI-Discoverability
 * initiative — see docs/ai-discoverability-audit.md).
 *
 * This is a planning artifact, not rendered on any page. It maps the
 * operational problem each vertical is likely to search/ask an AI assistant
 * about to a commercial-intent/fit rating and the resource that already
 * answers it, so future content (problem-based pages, calculators, comparison
 * pages) is prioritized from evidence instead of guesswork.
 *
 * `evidence` points at the exact field in verticals.ts/products.ts that
 * backs the `ridgehqFit` claim — every entry here restates something already
 * published, it does not introduce a new claim.
 */
import { verticals } from "./verticals";
import { siteUrl } from "./site";

export type CommercialIntent = "high" | "medium" | "low";
export type RidgeHQFit = "strong" | "partial" | "none";

export interface Intent {
  industry: string; // slug from verticals.ts
  intent: string;
  category: string;
  commercialIntent: CommercialIntent;
  ridgehqFit: RidgeHQFit;
  evidence: string;
  targetResource: string;
}

export const intentMap: Intent[] = [
  {
    industry: "dive-centers",
    intent: "How do I stop re-typing online bookings onto the boat manifest by hand?",
    category: "booking-management",
    commercialIntent: "high",
    ridgehqFit: "strong",
    evidence: "verticals.ts:dive-centers.keyCapability (manifest/ratio/gear draw-down build from the booking automatically)",
    targetResource: `${siteUrl}/solutions/dive-centers`,
  },
  {
    industry: "surf-schools",
    intent: "How do I reschedule a whole lesson group when the forecast changes, without manually re-messaging everyone?",
    category: "staff-scheduling",
    commercialIntent: "high",
    ridgehqFit: "strong",
    evidence: "verticals.ts:surf-schools.keyCapability (day plan carries tide/swell forecast plus sizing/instructor level)",
    targetResource: `${siteUrl}/solutions/surf-schools`,
  },
  {
    industry: "kitesurf-schools",
    intent: "How do I confirm a kite-size and harness reservation the moment a wind-window lesson is booked?",
    category: "equipment",
    commercialIntent: "medium",
    ridgehqFit: "strong",
    evidence: "verticals.ts:kitesurf-schools.keyCapability (session holds wind forecast and reserves kite size/harness on booking)",
    targetResource: `${siteUrl}/solutions/kitesurf-schools`,
  },
  {
    industry: "sailing-schools",
    intent: "How do I stop double-booking a boat across a multi-day course, a haul-out, and a weekend charter?",
    category: "equipment",
    commercialIntent: "high",
    ridgehqFit: "strong",
    evidence: "verticals.ts:sailing-schools.keyCapability (fleet capacity/inspection/crew inside the same calendar as courses)",
    targetResource: `${siteUrl}/solutions/sailing-schools`,
  },
  {
    industry: "windsurf-schools",
    intent: "How do I know what gear is actually available right now across lessons and walk-in hire?",
    category: "equipment",
    commercialIntent: "medium",
    ridgehqFit: "strong",
    evidence: "verticals.ts:windsurf-schools.keyCapability (shared fleet across lessons/walk-in hire, tracked out and back)",
    targetResource: `${siteUrl}/solutions/windsurf-schools`,
  },
  {
    industry: "outdoor-whitewater",
    intent: "How do I make sure a trip never runs short a guide, a shuttle seat, or a signed waiver?",
    category: "staff-scheduling",
    commercialIntent: "high",
    ridgehqFit: "strong",
    evidence: "verticals.ts:outdoor-whitewater.keyCapability (headcount drives rafts/guide ratio/shuttle seats/waiver together)",
    targetResource: `${siteUrl}/solutions/outdoor-whitewater`,
  },
  {
    industry: "ski-schools",
    intent: "How do I assign instructors to a wave of morning bookings by level and language without manual guesswork?",
    category: "staff-scheduling",
    commercialIntent: "high",
    ridgehqFit: "strong",
    evidence: "verticals.ts:ski-schools.keyCapability (bookings carry level/language, instructors tagged by certification/language)",
    targetResource: `${siteUrl}/solutions/ski-schools`,
  },
  {
    industry: "dive-resorts",
    intent: "How do I stop double-billing guests when accommodation and dives are managed in separate systems?",
    category: "booking-management",
    commercialIntent: "high",
    ridgehqFit: "strong",
    evidence: "verticals.ts:dive-resorts.keyCapability (accommodation and dive schedule share one system and one guest folio)",
    targetResource: `${siteUrl}/solutions/dive-resorts`,
  },
  {
    industry: "surf-camps",
    intent: "How do I coordinate a guest's bed, transfer, lesson group, and dietary note without three spreadsheets?",
    category: "booking-management",
    commercialIntent: "medium",
    ridgehqFit: "strong",
    evidence: "verticals.ts:surf-camps.keyCapability (one weekly package books bed/transfer/lesson group/dietary need)",
    targetResource: `${siteUrl}/solutions/surf-camps`,
  },
  {
    industry: "kayak-rental-tours",
    intent: "How do I avoid a tour turning up short of boats already rented out to walk-ins?",
    category: "equipment",
    commercialIntent: "medium",
    ridgehqFit: "strong",
    evidence: "verticals.ts:kayak-rental-tours.keyCapability (tours and walk-in hire draw from one shared boat inventory)",
    targetResource: `${siteUrl}/solutions/kayak-rental-tours`,
  },
  {
    industry: "bike-rental-tours",
    intent: "How do I make sure a specific bike (right size, not flagged for repair) is what actually gets handed over?",
    category: "equipment",
    commercialIntent: "medium",
    ridgehqFit: "strong",
    evidence: "verticals.ts:bike-rental-tours.keyCapability (every bike tracked as its own asset with size and service state)",
    targetResource: `${siteUrl}/solutions/bike-rental-tours`,
  },
  {
    industry: "boat-rental-courses",
    intent: "How do I make sure a charter never hands over without a verified licence and a held security deposit?",
    category: "booking-management",
    commercialIntent: "high",
    ridgehqFit: "strong",
    evidence: "verticals.ts:boat-rental-courses.keyCapability (booking collects licence/ID and pre-authorises deposit before handover)",
    targetResource: `${siteUrl}/solutions/boat-rental-courses`,
  },
];

if (process.env.NODE_ENV !== "production") {
  const slugs = new Set(verticals.map((v) => v.slug));
  for (const entry of intentMap) {
    if (!slugs.has(entry.industry)) {
      throw new Error(`intent-map.ts: unknown vertical slug "${entry.industry}"`);
    }
  }
}
