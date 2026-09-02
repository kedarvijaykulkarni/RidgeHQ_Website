export interface CapabilityFeatureSection {
  heading: string;
  body: string;
  points: string[];
}

export interface CapabilityConnection {
  to: string;
  detail: string;
}

export interface CapabilityOutcome {
  label: string;
  detail: string;
}

export interface Capability {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon?: string;
  href: string;
  /**
   * Extended detail-page content. Added progressively per capability — the
   * template renders these sections only when the data is present.
   */
  heroHeadline?: string;
  heroTagline?: string;
  heroProofPoints?: string[];
  featureSections?: CapabilityFeatureSection[];
  connections?: CapabilityConnection[];
  outcomes?: CapabilityOutcome[];
  faqs?: { question: string; answer: string }[];
}

export const platformCapabilities: Capability[] = [
  {
    id: 'bookings',
    title: 'Online Bookings & POS',
    slug: 'bookings-pos',
    href: '/platform/bookings-pos',
    description: 'Sell without creating a second operation. Keep front-desk and online sales connected to the same operational context.',
    heroHeadline: 'One booking record, whichever way the sale comes in.',
    heroTagline: 'Your website widget, the front-desk register, phone bookings, and agent referrals all write to the same availability and the same order — so a sale is never something you re-enter later.',
    heroProofPoints: [
      "0% commission on direct bookings",
      "Front-desk POS and online widget on one system",
      "Order-safe changes with credit notes",
    ],
    featureSections: [
      {
        heading: "Take bookings on your own site, on your terms",
        body: "A public booking widget on your website sells sessions, courses, rentals, and packages against live capacity, taking a deposit or full payment through your own gateway. It is your checkout, not a marketplace listing.",
        points: [
          "Live availability drawn from the same calendar your team works from",
          "Deposit or full payment, with the balance scheduled and tracked against the order",
          "Medical, experience, and dietary questions collected at checkout",
          "Promotional codes that apply to the actual charged total, not just the displayed price",
          "0% platform commission on direct bookings — you pay only your gateway fee",
        ],
      },
      {
        heading: "A front desk that shares the same context",
        body: "The point-of-sale handles walk-ins, add-ons, gear hire, and retail in one basket, against the same availability the website uses. What sells at the counter and what sells online can never quietly overbook each other.",
        points: [
          "Basket orders for walk-in sessions, rentals, and retail on one ticket",
          "Register open / close and daily cash reconciliation",
          "Booking tickets and receipts issued on the spot",
          "Agent and partner bookings recorded with their commission for later settlement",
        ],
      },
      {
        heading: "Changes that keep the books straight",
        body: "Bookings change constantly — reschedules, cancellations, added participants. RidgeHQ treats a paid order as immutable: a change produces a credit note rather than silently rewriting a settled order, so your revenue records always reconcile.",
        points: [
          "Edits to a paid order create a credit note instead of overwriting it",
          "Cancellations handled with a clear money trail",
          "Every order carries its origin — direct, agent, or walk-in — for reporting",
          "Per-participant waiver requirements attached to the booking from the moment it is made",
        ],
      },
    ],
    connections: [
      { to: "Scheduling & Dispatch", detail: "A confirmed booking lands on the day plan with its participants, so the schedule is built from real demand, not re-keyed." },
      { to: "Gear & Fleet Management", detail: "Booking a session or a rental draws the required gear and capacity down automatically." },
      { to: "Customer & Participant Profiles", detail: "Each booking is attached to a customer record, carrying history, sizing, and waiver status." },
      { to: "Payments & Reporting", detail: "Deposits, balances, and credit notes flow straight into the daily close and revenue-by-origin reporting." },
    ],
    outcomes: [
      { label: "One source of truth for sales", detail: "Online and front-desk bookings share one calendar and one order model — nothing is entered twice." },
      { label: "You keep your direct revenue", detail: "0% commission on direct bookings means your own marketing is not taxed." },
      { label: "Books that reconcile", detail: "Credit-note-on-change keeps paid orders immutable, so revenue records always add up." },
      { label: "Faster front desk", detail: "Walk-ins, rentals, and retail go through one basket with the register close handled for you." },
    ],
    faqs: [
      { question: "Do you charge commission on our bookings?", answer: "No. Direct bookings through your own website carry 0% platform commission. You pay your normal payment-gateway fee (for example Stripe) and a flat monthly subscription." },
      { question: "Can the website and the front desk sell the same session?", answer: "Yes, and safely. Both draw from the same live availability, so a seat sold at the counter is immediately unavailable online and vice versa." },
      { question: "What happens when a paid booking is changed or cancelled?", answer: "The original order is kept immutable and the change produces a credit note. Your revenue records stay reconcilable instead of being silently rewritten." },
      { question: "Can we take deposits rather than full payment?", answer: "Yes. Take a deposit at checkout and the balance is scheduled and tracked against the order until it is settled." },
      { question: "Do promo codes affect the amount actually charged?", answer: "Yes. A valid promotional code is applied to the charged total, not only to the price shown on screen." },
      { question: "Can agents and partners book through the same system?", answer: "Yes. Agent and partner bookings are recorded with their commission against the order, ready for settlement in Payments & Reporting." },
    ],
  },
  {
    id: 'scheduling',
    title: 'Scheduling & Dispatch',
    slug: 'scheduling',
    href: '/platform/scheduling',
    description: 'Plan with the full picture. See sessions, people, capacity, and resources together in one live view.',
  },
  {
    id: 'resources',
    title: 'Gear & Fleet Management',
    slug: 'gear-rentals',
    href: '/platform/gear-rentals',
    description: 'Protect scarce resources. Know exactly what gear, rooms, boats, or bikes are already committed.',
  },
  {
    id: 'staff',
    title: 'Staff Coordination',
    slug: 'staff',
    href: '/platform/staff',
    description: 'Assign the right instructors and guides based on qualifications, language, and real-time availability.',
  },
  {
    id: 'customers',
    title: 'Customer & Participant Profiles',
    slug: 'customers-participants',
    href: '/platform/customers-participants',
    description: 'Know the participant behind the booking. Keep client history, waivers, and preferences attached to the workflow.',
  },
  {
    id: 'payments',
    title: 'Payments & Reporting',
    slug: 'payments',
    href: '/platform/payments',
    description: 'Close the day with context. Bring deposits, final payments, operational history, and reporting together.',
  },
];
