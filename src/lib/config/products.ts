export interface ProductFeatureSection {
  heading: string;
  body: string;
  points: string[];
}

export interface ProductConnection {
  to: string;
  detail: string;
}

export interface ProductOutcome {
  label: string;
  detail: string;
}

export type ProductStatus = "available" | "early-access";

export interface Product {
  id: string;
  title: string;
  slug: string;
  href: string;
  status: ProductStatus;
  /** Short card description used on the /products index. */
  description: string;
  heroHeadline: string;
  heroTagline: string;
  /** Rendered as chips on available products; hidden on early-access. */
  heroProofPoints?: string[];
  /** Shown only on early-access products, in place of the proof chips. */
  roadmapNote?: string;
  featureSections?: ProductFeatureSection[];
  connections?: ProductConnection[];
  outcomes?: ProductOutcome[];
  faqs?: { question: string; answer: string }[];
}

export const products: Product[] = [
  {
    id: "activity-platform",
    title: "Activity Platform",
    slug: "activity-platform",
    href: "/products/activity-platform",
    status: "available",
    description:
      "The full operations core. One booking record that carries staff, resources, payments, and participant paperwork through the whole day.",
    heroHeadline: "Run the whole operation from one platform.",
    heroTagline:
      "Sell, schedule, and run the day without stitching tools together. Walk-ins, phone bookings, your website, and agents all write to one live availability — and staff, resources, payments, and participant paperwork follow the booking.",
    heroProofPoints: [
      "0% commission on direct bookings",
      "One live availability across every channel",
      "Bookings, schedule, POS, and close in one system",
    ],
    featureSections: [
      {
        heading: "Turn every enquiry into a booking that is already on the schedule",
        body: "Your website widget, the front-desk register, phone bookings, and agent referrals all sell against the same availability and the same order. A booking made online is on the day plan a second later — no re-keying, no double-sold seats.",
        points: [
          "Public booking widget for sessions, courses, rentals, and packages, taking a deposit or full payment through your own gateway",
          "Front-desk POS for walk-ins, gear hire, and retail on one ticket, with register open / close and daily cash reconciliation",
          "Agent and partner bookings recorded with their commission for later settlement",
          "0% platform commission on direct bookings — you pay only your payment-gateway fee",
        ],
      },
      {
        heading: "One schedule for time, people, and resources",
        body: "The operational day is sessions, staff capability, capacity, equipment, fleet, rooms, and changing conditions at once. RidgeHQ builds the plan from confirmed demand and holds you to the limits that matter.",
        points: [
          "Sessions, instructors, capacity, and resources in one live view, with conflict warnings before a change confirms",
          "Staff assigned by qualification, language, and real availability",
          "Gear, fleet, and room capacity drawn down as sessions and rentals are booked",
          "Weather, tide, and wind context on the session, with per-activity suitability thresholds",
          "Reschedules cascade to staff, resources, and participant messaging instead of a manual rebuild",
        ],
      },
      {
        heading: "Participants, payments, and a clean close",
        body: "Every booking carries the person behind it — history, sizing, waiver status — and every money-affecting change leaves a trail you can reconcile.",
        points: [
          "One customer record with booking history, stored sizing, notes, and documents",
          "Built-in per-participant digital waivers with typed e-signature and conditional questions",
          "Course completion recorded against the participant as a certification record",
          "Order immutability: edits to a paid order create a credit note, never a silent rewrite",
          "Deposits, balances, and credit notes flow into the daily close and revenue-by-origin reporting",
        ],
      },
    ],
    connections: [
      { to: "Online Bookings & POS", detail: "Every sale — online, desk, phone, or agent — writes to one order model and one live availability." },
      { to: "Scheduling & Dispatch", detail: "Confirmed bookings build the day plan; a reschedule moves staff, resources, and messaging with it." },
      { to: "Gear & Fleet Management", detail: "Booking a session or a rental draws the required gear, boat, or room capacity down automatically." },
      { to: "Staff Coordination", detail: "Instructors and guides are matched to sessions by qualification, language, and availability." },
      { to: "Customer & Participant Profiles", detail: "History, sizing, documents, and waiver status stay attached to the person, not just the booking." },
      { to: "Payments & Reporting", detail: "Deposits, balances, and credit notes reconcile into the daily close and revenue-by-origin reporting." },
    ],
    outcomes: [
      { label: "One source of truth", detail: "Online and desk bookings share one calendar and one order model — nothing is entered twice." },
      { label: "You keep your direct revenue", detail: "0% commission on direct bookings means your own marketing is not taxed." },
      { label: "The day survives a change", detail: "When weather or a cancellation moves a session, the schedule, resources, and staff update together." },
      { label: "Books that reconcile", detail: "Credit-note-on-change keeps paid orders immutable, so revenue records always add up." },
    ],
    faqs: [
      { question: "What is the Activity Platform?", answer: "One system for the operational day: online bookings and POS, scheduling and dispatch, staff, gear and fleet, participant profiles, payments, and the daily close — with an AI copilot built into the operational core rather than bolted on as a chatbot." },
      { question: "Do you charge commission on our bookings?", answer: "No. Direct bookings through your own website carry 0% platform commission. You pay your normal payment-gateway fee and a flat monthly subscription." },
      { question: "Can the website and the front desk sell the same session?", answer: "Yes, and safely. Both draw from the same live availability, so a seat sold at the counter is immediately unavailable online and vice versa." },
      { question: "What can the AI copilot actually do?", answer: "It reads the day and can take a few reversible actions — reschedule a session, reassign a participant, move a rental or accommodation block — each behind a confirmation step and the same permission check a staff member would face. Money-moving actions such as refunds are audited but not automatically reversible, by design." },
      { question: "What happens when a paid booking is changed or cancelled?", answer: "The original order is kept immutable and the change produces a credit note, so your revenue records stay reconcilable instead of being silently rewritten." },
      { question: "Do we have to adopt every part at once?", answer: "The platform is one connected system, but teams usually start with bookings and the schedule, then bring in POS, gear and fleet, and reporting as they settle in." },
      { question: "Can staff use it on mobile?", answer: "Yes. Instructors, guides, and desk staff see the schedule, participant lists, and resource assignments on a phone, with role-based access controlling what each person can change." },
      { question: "What reporting do we get?", answer: "Sales by channel, product, and period; session performance against capacity and attendance; and a daily close that reconciles deposits, balances, and credit notes, with exports for accounting." },
    ],
  },
  {
    id: "rental-app",
    title: "Rental App",
    slug: "rental-app",
    href: "/products/rental-app",
    status: "available",
    description:
      "The rental side of the platform. Track gear by unit and size, keep availability accurate everywhere, and close the day with totals you trust.",
    heroHeadline: "Rental that stays in sync, from stock to check-in.",
    heroTagline:
      "Track rental gear by unit and size, keep availability accurate across your website and the front desk, hold back anything in for repair, and close the day with totals you trust — whether you rent kayaks, bikes, boards, or boats.",
    heroProofPoints: [
      "Every unit tracked as its own asset",
      "Size and service state drive availability",
      "0% commission on direct rental bookings",
    ],
    featureSections: [
      {
        heading: "Inventory that reflects the real fleet",
        body: "Build your rental catalogue once — types, variants, sizes, and individual units — then let availability follow the actual state of each item instead of a generic count.",
        points: [
          "Gear types and individual units carrying size and variant (S / M / L / XL, model, length)",
          "Condition and status per unit: rentable, in for repair, out of service",
          "Related assets like boats, trailers, or vans managed alongside the gear",
          "Week-based rental and unavailability blocks held against a specific unit",
        ],
      },
      {
        heading: "One live availability across every channel",
        body: "A single inventory powers your booking widget, the front desk, and partner sales — so a board committed to a three-day hire cannot be sold again for the weekend.",
        points: [
          "Website checkout and payment links sell rentals against live stock",
          "Walk-in and phone hire land in the same schedule",
          "Turnaround time between a return and the next hire built into availability",
          "Partner and reseller bookings drawn from the same source of truth",
        ],
      },
      {
        heading: "Faster counter, cleaner close",
        body: "Keep the hand-over quick and finish the day with numbers that reconcile.",
        points: [
          "Rental checkout with deposit or full payment and the reserved unit attached to the order",
          "Security deposits pre-authorised through supported gateways and released after inspection",
          "Sizing and add-ons — PFDs, helmets, wetsuits — pulled onto the check-in list",
          "Per-unit utilisation to right-size the fleet and set pricing",
          "Register close and accounting-ready exports",
        ],
      },
    ],
    connections: [
      { to: "Scheduling & Dispatch", detail: "Rental blocks share the day plan with sessions, so a guided tour and a multi-day hire never claim the same unit." },
      { to: "Online Bookings & POS", detail: "Rentals sell through the same widget and register as sessions and retail, on one order." },
      { to: "Customer & Participant Profiles", detail: "Stored sizing and rental history sit on the customer record for a faster hand-over next time." },
      { to: "Payments & Reporting", detail: "Deposits, balances, and damage charges flow into the daily close." },
    ],
    outcomes: [
      { label: "No mystery stock", detail: "Availability reflects the real state of each unit, not a number in a spreadsheet." },
      { label: "Flagged gear stays off the floor", detail: "An item in for repair is removed from availability until it is checked back in." },
      { label: "Rentals and sessions do not collide", detail: "One inventory across hire, walk-ins, and guided activities." },
      { label: "Deposits handled cleanly", detail: "Pre-authorised at booking, released after inspection, all on one order." },
    ],
    faqs: [
      { question: "Is the Rental App separate from the platform?", answer: "No. It is the rental side of the same RidgeHQ system, sharing one calendar, customer records, and payments with bookings and scheduling." },
      { question: "Can I sell rentals online and at the counter without double inventory?", answer: "Yes. One live inventory feeds the website checkout, the front desk, payment links, and partners." },
      { question: "Do you track availability at size and unit level?", answer: "Yes. Bookings reserve a specific unit in the right size, and a unit flagged out of service is not offered." },
      { question: "How are deposits and damage handled?", answer: "With supported gateways, a security deposit is pre-authorised at booking and released after the post-rental inspection. Damage charges attach to the same order." },
      { question: "Can we manage maintenance windows?", answer: "Yes. Week-based blocks and out-of-service status keep an item off availability until it is ready to rent again." },
      { question: "What about multi-day and seasonal pricing?", answer: "Rental products support multi-day, half-day, and seasonal pricing rules, applied automatically at booking." },
      { question: "Can partners or resellers sell our rentals?", answer: "Yes. Partner and reseller bookings draw from the same live inventory and are recorded with their commission for later settlement, so distribution grows without a second stock list." },
      { question: "Do we get utilisation and end-of-day reporting?", answer: "Yes. Per-unit utilisation helps you right-size the fleet and pricing, and the register closes with reconciled totals and accounting-ready exports." },
    ],
  },
  {
    id: "waiver-app",
    title: "Waiver App",
    slug: "waiver-app",
    href: "/products/waiver-app",
    status: "available",
    description:
      "Per-participant digital waivers, part of the platform — not a metered add-on. Typed e-signature, conditional questions, tied to the booking.",
    heroHeadline: "Per-participant digital waivers, built into the booking.",
    heroTagline:
      "Every participant signs their own waiver, with a typed e-signature and questions that adapt to the activity and the person. It is attached to the booking from the moment it is made — not a metered add-on you bolt on later.",
    heroProofPoints: [
      "Built in, not a paid add-on",
      "One waiver per participant, not per booking",
      "Signed records tied to the booking and the profile",
    ],
    featureSections: [
      {
        heading: "Requirements that match the activity",
        body: "Define which waiver a product needs and what it has to collect. The form adapts to the activity and the participant instead of being one static PDF for everyone.",
        points: [
          "Waiver requirements set per product and enforced per participant before a session is ready",
          "Conditional questions that show or hide based on earlier answers — medical, experience, age",
          "Field validation so required information cannot be skipped",
          "Separate forms for different services — a lesson, a rental, a participant under age",
        ],
      },
      {
        heading: "Signed before check-in, on any device",
        body: "Send the waiver with the booking confirmation and let participants complete it ahead of arrival, on a phone, tablet, or laptop.",
        points: [
          "Typed e-signature captured per participant",
          "Shareable link sent with booking confirmations",
          "Completion status visible on the booking at a glance",
          "Guardian completion for participants under age",
        ],
      },
      {
        heading: "One record, easy to find later",
        body: "Every signed waiver stays on the booking and the customer profile, so nothing is re-asked and nothing is lost.",
        points: [
          "Signed waivers linked to the booking and the participant's profile",
          "Prior answers carried forward for returning customers",
          "Search and export any signed waiver",
          "Row-level tenant isolation so only your team sees your records",
        ],
      },
    ],
    connections: [
      { to: "Online Bookings & POS", detail: "A booking carries its per-participant waiver requirement from the moment it is made." },
      { to: "Customer & Participant Profiles", detail: "Signed waivers and health answers live on the participant record across visits." },
      { to: "Scheduling & Dispatch", detail: "The day plan shows which participants are waiver-complete before a session runs." },
    ],
    outcomes: [
      { label: "No paper at the counter", detail: "Participants sign ahead of time on their own device." },
      { label: "Fewer missing details", detail: "Validation and conditional questions mean the medical and experience information is actually there." },
      { label: "It is included", detail: "Per-participant waivers are part of the platform, not a per-signature charge." },
      { label: "Records you can produce", detail: "Every signed waiver is searchable and exportable, tied to the booking." },
    ],
    faqs: [
      { question: "Is the waiver feature really built in?", answer: "Yes. Per-participant digital waivers are part of RidgeHQ, not a metered add-on — there is no per-signature or separate monthly waiver fee." },
      { question: "One waiver per booking, or per person?", answer: "Per person. Each participant on a booking signs and answers their own form." },
      { question: "Can questions change based on answers?", answer: "Yes. Conditional questions show or hide based on earlier responses, and fields can be made mandatory with validation rules." },
      { question: "Can participants sign before they arrive?", answer: "Yes. The waiver goes out with the confirmation and can be completed on any device. The booking shows who has finished." },
      { question: "How are minors handled?", answer: "A guardian completes and signs the waiver on the participant's behalf." },
      { question: "Where do signed waivers go?", answer: "Onto the booking and the participant's profile — searchable and exportable, and isolated to your account at the database level." },
      { question: "Can we use different waivers for different activities?", answer: "Yes. Each product defines its own waiver and questions, so a lesson, a rental, and a guided trip each collect only what they need." },
      { question: "Do returning customers have to fill everything in again?", answer: "No. Prior answers are carried forward on the participant's profile, so a repeat visitor reviews and confirms rather than re-entering the whole form." },
    ],
  },
  {
    id: "channel-manager",
    title: "Channel Manager",
    slug: "channel-manager",
    href: "/products/channel-manager",
    status: "early-access",
    description:
      "Distribution to external sales channels from one live availability. In development with design partners — data foundations are in place.",
    heroHeadline: "Channel distribution is on the roadmap.",
    heroTagline:
      "RidgeHQ is built so your live availability can drive external sales channels without a second calendar. The data foundations are in place; the connectors are being built with the operators who need them first.",
    roadmapNote:
      "In development — not yet available. Booking origin, external references, and per-tenant channel credentials already exist in the data model. Live connectors are being built one channel at a time with design partners.",
    featureSections: [
      {
        heading: "What it will do",
        body: "One live availability, pushed to the sales channels you choose, with external bookings flowing back onto the same day plan and order model as your direct sales.",
        points: [
          "Availability and capacity pushed from your RidgeHQ calendar to connected channels",
          "External bookings imported automatically onto the same schedule and order model",
          "Cancellations reflected back without a manual reconciliation",
          "Per-channel commission and net-revenue visibility in reporting",
        ],
      },
      {
        heading: "Why it is not a checkbox yet",
        body: "Every channel has its own model — per-slot versus schedule-based availability, different authentication, different cancellation rules. We are building connectors one at a time, with a real operator on each, rather than shipping a shallow list.",
        points: [
          "Booking origin and external reference already tracked on every order",
          "Per-tenant channel credential storage already in the data model",
          "Connector work sequenced by which channel a paying customer actually needs",
        ],
      },
      {
        heading: "Help shape the first connectors",
        body: "If external distribution is critical to your operation, tell us which channel and how you sell on it. Design partners get the first integrations and a direct line to the build.",
        points: [
          "Bring your channel mix and volume to a short call",
          "Early integrations prioritised for design partners",
          "Direct feedback loop with the team building it",
        ],
      },
    ],
    outcomes: [
      { label: "One calendar, zero double entry", detail: "The goal: external channels read the same availability your direct sales do." },
      { label: "Origin already tracked", detail: "Every order records where it came from today, ready for channel reporting." },
      { label: "Built with operators", detail: "Connectors are prioritised by real customer need, not a marketing list." },
    ],
    faqs: [
      { question: "Can I sell on external channels through RidgeHQ today?", answer: "Not yet. The data foundations — booking origin, external references, and per-tenant channel credentials — are in place, but the live connectors are still being built." },
      { question: "Which channels will you support first?", answer: "The ones our design partners actually sell on. Tell us your channel mix and it factors into the build order." },
      { question: "Will external bookings land on the same schedule as direct sales?", answer: "That is the design — one availability, one order model, external bookings on the same day plan as everything else." },
      { question: "How do I get early access?", answer: "Join the design partner program and bring your channel requirements to the call." },
      { question: "Do the data foundations exist already?", answer: "Yes. Every order records its origin and any external reference today, and the data model already holds per-tenant channel credentials — the live connectors are what is still being built." },
      { question: "Will it replace our direct booking widget?", answer: "No. It is built to complement direct sales — your own widget stays the primary, commission-free channel, with external channels reading the same availability." },
    ],
  },
];
