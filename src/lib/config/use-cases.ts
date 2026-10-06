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
  /** ISO date — bump when this use case's content is meaningfully updated. Used as the sitemap <lastmod>. */
  lastUpdated: string;
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
    lastUpdated: "2026-10-06",
    title: "Instructor & Guide Scheduling",
    heroHeadline: "Assign instructors and guides in seconds, not a morning of messages.",
    heroTagline:
      "Put instructors and guides on the sessions they run, with overlapping assignments refused and each participant's level on the roster — instead of checking a whiteboard or a group chat.",
    problem:
      "Every booking needs a specific instructor or guide, not just any available body: the right certification level, the right language, sometimes the right specialty. When that matching happens by memory or a shared chat, mismatches (wrong level, unavailable, double-booked) surface at check-in — the worst possible time.",
    whyItHappens:
      "Bookings and staff schedules typically live in separate tools: a booking widget or spreadsheet on one side, a group chat or whiteboard roster on the other. Nothing connects a booking's requirements (level, language, ratio) to who's actually qualified and free at that time, so the match is made by a person from memory.",
    costOfInaction:
      "Morning rushes (ski school class starts, a wave of surf lesson bookings) are where this fails hardest: an operator matching bookings to instructors one at a time, under time pressure, is exactly where wrong-level or double-booked assignments happen — per the pattern described for ski schools and surf schools.",
    howRidgeHqHelps:
      "In RidgeHQ, bookings and staff live in the same planner. Products can require a minimum skill level, so the booking form asks for it where it matters and the session roster shows each participant's level. Staff are assigned to the activities they run, their languages sit on their profile, and an instructor assignment that overlaps another session is refused when it is made — so a double-booked guide is caught at assignment, not at check-in. Choosing who suits a group is still your team's judgement; RidgeHQ makes sure that judgement is made against the real bookings and the real schedule.",
    whenNotSuitable:
      "If your operation has one or two instructors with no certification/language variation and no ratio requirement to enforce, this specific problem may not be costing you much — a simpler shared calendar may be enough.",
    relatedPlatformSlug: "staff",
    relatedVerticalSlugs: ["ski-schools", "outdoor-whitewater", "surf-schools"],
    faqs: [
      {
        question: "Does this replace my existing staff chat/messaging tool?",
        answer:
          "It replaces the need to use chat as the scheduling system of record. Bookings, rosters, and staff assignments live in the same system, so who is on which session doesn't depend on someone checking a thread. Staff can also subscribe to a read-only calendar feed of sessions.",
      },
      {
        question: "Can it enforce a guide-to-group ratio?",
        answer:
          "Not automatically today. Each session has its own capacity and the roster shows who is booked, so you can size sessions to your ratio — but RidgeHQ does not yet calculate or enforce an instructor-to-participant ratio for you.",
      },
    ],
  },
  {
    slug: "equipment-coordination",
    lastUpdated: "2026-10-06",
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
      "RidgeHQ tracks gear as individual units with sizes, and rentals — online or at the desk — reserve a specific unit for a date and time window, so the same board, boat, or bike can't be hired out twice. A unit with an open maintenance record is removed from availability automatically until it's returned. Allocating kit to a lesson or tour group is still done by your team, from the same inventory.",
    whenNotSuitable:
      "If you only run one sales channel for gear (e.g. lessons only, no separate walk-in hire) with no shared-pool conflict, this specific coordination problem doesn't apply to you.",
    relatedPlatformSlug: "gear-rentals",
    relatedVerticalSlugs: ["kayak-rental-tours", "windsurf-schools", "bike-rental-tours"],
    faqs: [
      {
        question: "Does this track individual items or just gear categories?",
        answer:
          "Individual units. Each gear type (boards, boats, bikes, wetsuits) is tracked as units with an optional size, rentals reserve a specific unit, and a unit with an open maintenance record is excluded until it's returned.",
      },
      {
        question: "Does it cover both scheduled bookings and walk-in hire?",
        answer:
          "Yes — both draw from the same inventory, which is the specific gap this addresses versus running two separate systems.",
      },
    ],
  },
];
