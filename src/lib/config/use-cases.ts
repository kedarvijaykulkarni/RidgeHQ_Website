/**
 * Problem-based ("use case") page content — Phase 5 of the AI-discoverability
 * initiative. These pages answer "does RidgeHQ solve my specific operational
 * problem", organized by problem rather than by industry vertical (that's
 * what verticals.ts / /solutions/[slug] already covers).
 *
 * Route: /use-cases/[slug] — deliberately not /solutions/[slug], which is
 * already the 12 industry-vertical route; reusing it here would conflate two
 * different search intents (see intent-map.ts for the evidence backing each
 * entry below).
 *
 * Every `evidence`-style field here restates content already published in
 * verticals.ts/platform.ts — no new product claims are introduced.
 */
export interface UseCase {
  slug: string;
  title: string;
  heroHeadline: string;
  heroTagline: string;
  problem: string;
  whyItHappens: string;
  costOfInaction: string;
  howRidgeHqHelps: string;
  whenNotSuitable: string;
  relatedPlatformSlug: string; // src/lib/config/platform.ts slug
  relatedVerticalSlugs: string[]; // src/lib/config/verticals.ts slugs this draws evidence from
  faqs: { question: string; answer: string }[];
}

export const useCases: UseCase[] = [
  {
    slug: "instructor-scheduling",
    title: "Instructor & Guide Scheduling",
    heroHeadline: "Assign instructors and guides in seconds, not a morning of messages.",
    heroTagline:
      "Match every booking to a qualified instructor or guide by certification, language, and real-time availability — instead of checking a whiteboard or a group chat.",
    problem:
      "Every booking needs a specific instructor or guide, not just any available body: the right certification level, the right language, sometimes the right specialty. When that matching happens by memory or a shared chat, mismatches (wrong level, unavailable, double-booked) surface at check-in — the worst possible time.",
    whyItHappens:
      "Bookings and staff schedules typically live in separate tools: a booking widget or spreadsheet on one side, a group chat or whiteboard roster on the other. Nothing connects a booking's requirements (level, language, ratio) to who's actually qualified and free at that time, so the match is made by a person from memory.",
    costOfInaction:
      "Morning rushes (ski school class starts, a wave of surf lesson bookings) are where this fails hardest: an operator matching bookings to instructors one at a time, under time pressure, is exactly where wrong-level or double-booked assignments happen — per the pattern described for ski schools and surf schools.",
    howRidgeHqHelps:
      "In RidgeHQ, bookings carry the participant's level and language, and instructors/guides are tagged by certification and language — so scheduling is a filtered match against real-time availability, not a manual lookup across two tools. Ski schools filter the morning rush by level and language; outdoor/whitewater operators reserve guides at their required ratio alongside rafts and shuttle seats for the same trip.",
    whenNotSuitable:
      "If your operation has one or two instructors with no certification/language variation and no ratio requirement to enforce, this specific problem may not be costing you much — a simpler shared calendar may be enough.",
    relatedPlatformSlug: "staff",
    relatedVerticalSlugs: ["ski-schools", "outdoor-whitewater", "surf-schools"],
    faqs: [
      {
        question: "Does this replace my existing staff chat/messaging tool?",
        answer:
          "It replaces the need to use chat as the scheduling system of record. Bookings and staff qualifications live in the same system, so assignment doesn't depend on someone checking a thread.",
      },
      {
        question: "Can it enforce a guide-to-group ratio?",
        answer:
          "Yes for trips with a headcount-driven ratio requirement — outdoor/whitewater bookings reserve guides at your required ratio alongside rafts and shuttle seats for the same trip, as described on that vertical's page.",
      },
    ],
  },
  {
    slug: "equipment-coordination",
    title: "Equipment & Gear Coordination",
    heroHeadline: "Know what gear is actually available, right now, before you promise it.",
    heroTagline:
      "Rentals, lesson gear, and tour equipment drawn from one shared inventory — so a booking never reserves a boat, board, or bike that's already out with someone else.",
    problem:
      "Gear (boards, boats, bikes, kites) gets committed twice: once to a lesson or tour booking, and separately to walk-in hire, because the two sales channels don't share one inventory. The conflict is discovered at handover, not at booking time.",
    whyItHappens:
      "Booking software typically tracks reservations, not physical assets. Without gear tied directly to the booking record, walk-in hire and scheduled lessons/tours draw from what looks like separate pools, even though it's the same physical rack or fleet.",
    costOfInaction:
      "A kayak tour arriving to find its boats already rented to a walk-in, or a lesson short a properly sized board, is a same-day scramble that falls on staff and damages the customer's experience — the exact failure mode described for kayak rental/tour and windsurf operations.",
    howRidgeHqHelps:
      "RidgeHQ draws lesson, tour, and walk-in hire from one shared gear/fleet inventory, tracked out and back per item. A board, boat, or bike reserved for a session is not offered on the walk-in rack at the same time, and individually tracked assets (like bikes with a service state) are excluded automatically when flagged for repair.",
    whenNotSuitable:
      "If you only run one sales channel for gear (e.g. lessons only, no separate walk-in hire) with no shared-pool conflict, this specific coordination problem doesn't apply to you.",
    relatedPlatformSlug: "gear-rentals",
    relatedVerticalSlugs: ["kayak-rental-tours", "windsurf-schools", "bike-rental-tours"],
    faqs: [
      {
        question: "Does this track individual items or just gear categories?",
        answer:
          "Both, depending on the vertical: bikes are tracked as individual assets with a size and service state, excluded automatically when flagged for repair; boards and boats are tracked out and back across lessons/tours and walk-in hire from one shared pool.",
      },
      {
        question: "Does it cover both scheduled bookings and walk-in hire?",
        answer:
          "Yes — both draw from the same inventory, which is the specific gap this addresses versus running two separate systems.",
      },
    ],
  },
];
