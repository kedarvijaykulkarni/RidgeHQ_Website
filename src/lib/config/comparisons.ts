/**
 * Comparison-page content (Phase 15 of the AI-discoverability initiative).
 *
 * Standing rule (marketing-copy-guardrails): RidgeHQ never names a specific
 * competitor on the site — the founder has a strict IP/non-compete line, and
 * this applies to every competitor, not just the unnamed market leader the
 * Brain vault itself declines to name. Every comparison here is therefore
 * against a category (commission-based booking platforms, spreadsheets/
 * manual tools), never a named product — sourced from
 * D:\work\RidgeHQAPP\Brain\RidgeHQAPP\wiki\competitors.md's Set B/Set C
 * analysis without attributing any figure to a specific company.
 *
 * Every row must be honest about RidgeHQ's own limitations too (Phase 15
 * rule): state what the category does well, not just where RidgeHQ wins.
 */
export interface ComparisonRow {
  dimension: string;
  category: string; // how the compared category typically works
  ridgehq: string; // how RidgeHQ works
}

export interface Comparison {
  slug: string;
  title: string;
  /** Short label for the compared category, used as a table column header. */
  categoryLabel: string;
  heroHeadline: string;
  heroTagline: string;
  lastUpdated: string; // ISO date — comparison content ages, date it
  categoryStrengths: string; // honest: what this category does well
  ridgehqLimitations: string; // honest: where RidgeHQ currently falls short
  rows: ComparisonRow[];
  whoShouldChooseCategory: string;
  whoShouldChooseRidgeHq: string;
}

export const comparisons: Comparison[] = [
  {
    slug: "commission-based-booking-platforms",
    title: "RidgeHQ vs. Commission-Based Booking Platforms",
    categoryLabel: "Commission-based platforms",
    heroHeadline: "0% commission vs. a percentage of every direct booking.",
    heroTagline:
      "Many booking platforms charge no monthly fee but take a commission — typically in the 1.5%–6% range — on every booking, often passed to the customer at checkout. RidgeHQ charges a flat subscription and 0% commission on direct bookings.",
    lastUpdated: "2026-09-12",
    categoryStrengths:
      "Commission-based platforms are genuinely easier to start with — no upfront subscription cost, and often broader out-of-the-box marketplace/OTA distribution than a smaller, newer platform can offer. For a low-volume or seasonal operation, a $0-monthly, commission-only model can be the cheaper option in absolute terms.",
    ridgehqLimitations:
      "RidgeHQ launches with fewer built-in OTA/marketplace connectors than an established commission-based platform, and Stripe is currently the only supported payment gateway. If broad third-party marketplace distribution is your primary channel today, that gap is real and worth weighing.",
    rows: [
      {
        dimension: "Pricing model",
        category: "Often $0/month, with a commission (commonly 1.5%–6%) on each booking, sometimes passed to the customer at checkout.",
        ridgehq: "Flat monthly subscription, 0% platform commission on direct website bookings.",
      },
      {
        dimension: "Cost at higher booking volume",
        category: "Cost scales with revenue — the more you sell, the more the platform earns, regardless of your margin.",
        ridgehq: "Cost stays flat regardless of booking volume — your growth doesn't increase what you pay the platform.",
      },
      {
        dimension: "OTA / marketplace distribution",
        category: "Often broad, established third-party marketplace integrations out of the box.",
        ridgehq: "Fewer built-in connectors today — a real gap for operators relying heavily on marketplace channels.",
      },
      {
        dimension: "Payment processing",
        category: "Varies by platform; several support multiple gateways.",
        ridgehq: "Stripe only, at this stage.",
      },
    ],
    whoShouldChooseCategory:
      "An operator who sells primarily through third-party marketplaces/OTAs, has low or highly seasonal direct-booking volume, or needs broad payment-gateway options today.",
    whoShouldChooseRidgeHq:
      "An operator with meaningful and growing direct-booking volume, for whom a percentage-of-revenue fee compounds into real money — and who values a predictable, flat cost regardless of a strong month.",
  },
  {
    slug: "spreadsheets-and-manual-tools",
    title: "RidgeHQ vs. Spreadsheets, WhatsApp, and Paper",
    categoryLabel: "Spreadsheets / manual tools",
    heroHeadline: "The tools most activity businesses actually run on today.",
    heroTagline:
      "Most activity businesses aren't switching from a competing platform — they're switching from a booking widget, a spreadsheet, a group chat, and a whiteboard, each updated by hand. This comparison is about that gap, not a specific vendor.",
    lastUpdated: "2026-09-12",
    categoryStrengths:
      "Spreadsheets and chat tools are free, familiar, and infinitely flexible — there's no subscription, no learning curve past what your team already knows, and no risk of a vendor going away. For a very small, low-volume operation, this can genuinely be enough.",
    ridgehqLimitations:
      "RidgeHQ requires a subscription and some setup time that a spreadsheet doesn't. If your booking volume is low enough that reconciling a spreadsheet by hand takes a few minutes a week rather than hours, the switch may not be worth it yet — see the calculators above to check your own numbers rather than assume.",
    rows: [
      {
        dimension: "Setup cost",
        category: "None — usually already in place.",
        ridgehq: "A subscription and initial setup, offset by removed manual admin time (see the Admin Time Cost Calculator).",
      },
      {
        dimension: "Keeping bookings, staff, and gear in sync",
        category: "Manual — someone re-types or reconciles between tools.",
        ridgehq: "Automatic — a booking updates the schedule, staff assignment, and resource plan from the same record.",
      },
      {
        dimension: "Risk of double-booking or gear conflicts",
        category: "Depends entirely on the person reconciling catching the conflict.",
        ridgehq: "Checked against capacity, ratios, and gear availability at booking time.",
      },
      {
        dimension: "Reporting",
        category: "Manual — built by hand from scattered records.",
        ridgehq: "Generated from the same live operational data.",
      },
    ],
    whoShouldChooseCategory:
      "A very low-volume, single-operator business where manual reconciliation genuinely takes minutes, not hours, each week.",
    whoShouldChooseRidgeHq:
      "An operator spending real, recurring staff time reconciling bookings, schedules, and gear across separate tools — quantify it first with the Admin Time Cost Calculator.",
  },
];
