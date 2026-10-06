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
  /** ISO date — bump when this capability's content is meaningfully updated. Used as the sitemap <lastmod>. */
  lastUpdated: string;
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
    lastUpdated: '2026-10-05',
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
          "Waiver, medical, and your own custom questions collected per participant at checkout",
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
      { to: "Gear & Fleet Management", detail: "Rentals and room bookings reserve a specific unit for their dates, so the desk and the website read the same inventory." },
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
    lastUpdated: '2026-10-06',
    href: '/platform/scheduling',
    description: "Plan with the full picture. See sessions, instructors, trips, and conditions together in one weekly planner.",
    heroHeadline: "The whole operating day in one planner.",
    heroTagline: "Sessions, instructors, boat trips, participants, and local conditions live on one weekly board — so the plan your team works from is built from real bookings, not copied onto a whiteboard every morning.",
    heroProofPoints: [
      "Instructor double-booking blocked at assignment",
      "Spot-aware weather and tide beside the schedule",
      "Printable rosters with each participant's certification level",
    ],
    featureSections: [
      {
        heading: "A weekly planner built around how activity days actually run",
        body: "Most schedules break the moment the day changes: a session moves, a guide calls in, a group grows by two. The planner shows the week by activity, by staff member, or by trip, and every view reads from the same sessions — so a change made in one view is already true in the others.",
        points: [
          "Activities, staff, and trip views of the same week",
          "Create, move, reschedule, duplicate, or cancel a session in place",
          "Bulk-update or clone a set of sessions instead of rebuilding a recurring week by hand",
          "New sessions default to your opening hours and catalogue settings",
          "Locked or cancelled sessions are protected from accidental edits",
        ],
      },
      {
        heading: "Instructors, participants, and trips that stay consistent",
        body: "Assigning people is where manual schedules quietly fail. RidgeHQ checks every instructor assignment against that person's other sessions and refuses an overlap, keeps each session's roster equal to what was actually booked, and treats boat or vehicle trips as a group of sessions with their own pilot and destination.",
        points: [
          "Overlap check when an instructor is assigned — no silent double-booking",
          "Assign, unassign, or transfer a participant between sessions",
          "Trips group sessions, compute capacity from them, and carry a pilot and destination spot",
          "A pilot can't be put on two overlapping trips",
          "Recurring trips and one-click trip cloning for regular departures",
        ],
      },
      {
        heading: "Conditions and communication next to the plan",
        body: "For water and mountain operators the schedule is only half the decision; the other half is whether the conditions allow it. Each session shows marine and tide context for its own spot, and you can message everyone booked on a session without exporting a list.",
        points: [
          "Wind, wave, swell, water-temperature, and tide context for the session's spot",
          "Per-activity thresholds that flag sessions when the forecast breaches them",
          "Optionally stop new bookings for a session when conditions are outside your limits",
          "Email every confirmed participant of a session from the planner",
          "Printable session roster with participant certification levels",
          "A read-only iCal feed of your sessions for calendar apps — no customer data included",
        ],
      },
    ],
    connections: [
      { to: "Online Bookings & POS", detail: "Website, front-desk, and agent bookings land on the session they were made for, so the planner always shows real occupancy." },
      { to: "Staff Coordination", detail: "Instructor and pilot assignments come from your staff list, and each person's hours this month are counted from the sessions they were assigned." },
      { to: "Gear & Fleet Management", detail: "Rental and accommodation calendars sit one click away from the planner, and each trip's gear prep list comes from its participants' gear needs." },
      { to: "Customer & Participant Profiles", detail: "Rosters show who is coming, with the certification level and details your team needs at the dock or the door." },
    ],
    outcomes: [
      { label: "One plan, everyone on it", detail: "The front desk, instructors, and owner read the same week instead of three versions of it." },
      { label: "No double-booked guides", detail: "Overlapping instructor and pilot assignments are refused when they are made, not discovered on the day." },
      { label: "Weather decisions with context", detail: "Forecast and tide sit beside the session they affect, against thresholds you set per activity." },
      { label: "Less re-keying for recurring weeks", detail: "Clone and bulk-edit sessions and trips instead of rebuilding the same schedule every week." },
    ],
    faqs: [
      { question: "Does RidgeHQ stop us from double-booking an instructor?", answer: "Yes. When you assign an instructor to a session, RidgeHQ checks that person's other sessions and refuses an overlapping assignment. Trips apply the same check to pilots." },
      { question: "Can we see weather and tide while planning?", answer: "Yes. Sessions show marine conditions (wind, waves, swell, water temperature) and tide for the session's own spot, falling back to your default spot. You can set per-activity thresholds so sessions outside your limits are flagged." },
      { question: "Can bookings be stopped automatically when conditions are bad?", answer: "Optionally. Each activity's threshold can be set to block new bookings for a session when the forecast breaches it. It is off by default, and when forecast data isn't available the check doesn't block — the final call stays with your team." },
      { question: "Does the planner manage staff availability and time off?", answer: "Not as a separate availability calendar today. The planner shows each person's assigned sessions and prevents overlapping assignments; planning around holidays or days off is still done by your team." },
      { question: "Can our staff see the schedule in their own calendar app?", answer: "Yes. Settings provides a private iCal subscription link that lists your sessions with their time, spot, and booked capacity. It deliberately includes no customer or staff personal data, and the link can be rotated." },
      { question: "How do we handle boat or vehicle trips?", answer: "Create a trip, attach the sessions that travel together, and assign a pilot and destination. Trip capacity is computed from its sessions, recurring trips can be created in one go, and you can email everyone booked on a trip." },
    ],
  },
  {
    id: 'resources',
    title: 'Gear & Fleet Management',
    slug: 'gear-rentals',
    lastUpdated: '2026-10-06',
    href: '/platform/gear-rentals',
    description: "Protect scarce resources. Know exactly what gear, boats, vehicles, and rooms are committed, out for service, or due an inspection.",
    heroHeadline: "Know what you can actually hand out — and what's due back.",
    heroTagline: "Rental gear down to unit and size, boats and vehicles with their inspections and paperwork, and rooms with their bookings: one view of the physical side of the operation, so nothing is promised that isn't available.",
    heroProofPoints: [
      "Availability tracked by unit and by size",
      "Maintenance records that take gear out of service automatically",
      "Licence, insurance, and inspection alerts for boats and vehicles",
    ],
    featureSections: [
      {
        heading: "Rental gear by unit, size, and week",
        body: "\"We have twelve wetsuits\" is not the same as \"we have a medium free on Saturday\". RidgeHQ tracks each gear type as individual units with an optional size, so availability is checked against the size a customer actually needs, and a weekly rental planner shows what is out, booked, or blocked.",
        points: [
          "Gear types and individual units, each with an optional size (S, M, L, 10.5 …)",
          "Size-matched availability instead of a single headcount per type",
          "Rental, maintenance, and unavailable windows on a weekly planner by unit",
          "Per-customer gear needs — renting, bringing their own, or stored with you — recorded on the profile",
        ],
      },
      {
        heading: "Maintenance that changes availability, not just a spreadsheet",
        body: "Gear that is out for service is the most common cause of a morning scramble. Taking a unit out of service creates a maintenance record and removes it from availability immediately; returning it restores availability without anyone remembering to flip a switch.",
        points: [
          "Maintenance records with type, vendor, location, out-since, and expected return",
          "Overdue returns flagged by one consistent rule",
          "Active and history views, filterable by gear type",
          "CSV export of the maintenance register for your records or your insurer",
        ],
      },
      {
        heading: "Boats, vehicles, and rooms with their obligations",
        body: "Larger assets come with paperwork. Boats, vehicles, boards, and bikes are tracked as fleet assets with passenger capacity, registration, crew, and inspection history, and RidgeHQ surfaces what is about to lapse. Accommodation is handled the same way for operators who also sell beds.",
        points: [
          "Fleet assets with passenger capacity, registration, and assigned crew",
          "Inspection log with next-due date; overdue inspections flagged",
          "Alerts when a licence or insurance expires within 30 days",
          "Room types and units with booking, maintenance, and unavailable blocks on a weekly calendar",
        ],
      },
    ],
    connections: [
      { to: "Scheduling & Dispatch", detail: "Rental and accommodation calendars are linked from the planner, and a trip's gear prep list is built from the participants travelling on it." },
      { to: "Customer & Participant Profiles", detail: "Each customer's sizes and gear needs are stored once and reused for every trip they book." },
      { to: "Staff Coordination", detail: "Fleet crew are your staff members, and maintenance actions record which person (or the AI Copilot) made them." },
      { to: "Online Bookings & POS", detail: "Rentals sold online or at the counter draw from the same availability your team sees in the gear planner." },
    ],
    outcomes: [
      { label: "No promises you can't keep", detail: "Availability is checked by unit and size, so a booking never assumes gear that isn't there." },
      { label: "Service status is always current", detail: "Out-for-service gear leaves availability the moment it is logged and returns when it comes back." },
      { label: "Paperwork doesn't lapse quietly", detail: "Inspections, licences, and insurance are flagged before they become a problem on the water or the road." },
      { label: "Faster trip prep", detail: "Gear needs come from customer profiles instead of a last-minute round of messages." },
    ],
    faqs: [
      { question: "Can RidgeHQ track gear sizes, not just quantities?", answer: "Yes. Each gear unit can carry a size, and availability is compared size-for-size, so you can see whether a medium wetsuit — not just any wetsuit — is free for a booking." },
      { question: "What happens when equipment goes for servicing?", answer: "You open a maintenance record for the unit (type, vendor, location, expected return). The unit is removed from availability straight away, flagged if it is overdue, and put back into availability when you mark it returned." },
      { question: "Does it handle boats and vehicles?", answer: "Yes, as fleet assets: vessels, vehicles, boards, bikes, and others, with passenger capacity, registration, crew assignment, an inspection log, and alerts for overdue inspections and for licences or insurance expiring within 30 days." },
      { question: "We also have rooms. Can RidgeHQ manage accommodation?", answer: "Yes. Room types and units have their own weekly calendar with booking, maintenance, and unavailable blocks, kept separate from the activity planner but linked from it." },
      { question: "Can we export our maintenance history?", answer: "Yes. The maintenance register exports to CSV with the same filters you use on screen (status, gear type, overdue)." },
    ],
  },
  {
    id: 'staff',
    title: 'Staff Coordination',
    slug: 'staff',
    lastUpdated: '2026-10-06',
    href: '/platform/staff',
    description: "Assign instructors and guides by role and activity, with overlap checks, clear permissions, and fee rules built in.",
    heroHeadline: "Put the right people on the day — and pay them correctly.",
    heroTagline: "Staff accounts, roles, activity assignments, and fee rules live in the same system as the schedule, so who can do what, who is working when, and what each person is owed all come from one record.",
    heroProofPoints: [
      "Seven operational roles with server-enforced permissions",
      "Overlap checks on every instructor assignment",
      "Fee groups, activity rates, and bonuses calculated from real sessions",
    ],
    featureSections: [
      {
        heading: "Roles that match an activity business",
        body: "A divemaster, a boat pilot, and a front-desk manager need different access. RidgeHQ ships with Owner, Manager, Head Instructor, Instructor, Assistant, Divemaster, and Pilot roles, and permissions are enforced by the server — hiding a button is never the only thing standing between a role and an action.",
        points: [
          "Seven built-in roles: Owner, Manager, Head Instructor, Instructor, Assistant, Divemaster, Pilot",
          "Permissions checked on the server for every action, including AI Copilot actions",
          "Money figures shown only to the roles you allow to see revenue",
          "Login invites for staff, with an audit trail of who changed what",
        ],
      },
      {
        heading: "Assignments that respect the rest of the day",
        body: "Staff are assigned to the activity calendars they work on and to individual sessions in the planner. Every instructor assignment is checked against that person's other sessions, and pilots are checked against overlapping trips, so the schedule can't quietly put one person in two places.",
        points: [
          "Assign each staff member to the activities they run",
          "Choose who appears in the planner",
          "Overlapping instructor and pilot assignments are refused",
          "Each person's hours this month and next session on their profile",
          "Staff keep their own phone, bio, and languages up to date from a self-service profile",
        ],
      },
      {
        heading: "Fees calculated from the work actually done",
        body: "Paying instructors from a spreadsheet means recounting sessions every month. Fee groups hold each person's rates — per session, per hour, or as a commission per activity — with effective dates, plus optional bonuses. Fees are calculated from the sessions staff were actually assigned to, with a note wherever a rate is missing.",
        points: [
          "Fee groups with per-session, per-hour, and commission rates per activity",
          "Rate cards with effective-from and effective-to dates",
          "Per-hour or per-session bonus options on top of the base rate",
          "Calculated fees flag missing rates instead of silently paying zero",
          "Fee statements by date range, downloadable as CSV, with paid status",
        ],
      },
    ],
    connections: [
      { to: "Scheduling & Dispatch", detail: "Staff are assigned to sessions and trips in the planner, where overlaps are checked." },
      { to: "Payments & Reporting", detail: "Staff fees are calculated from assigned sessions and appear in fee statements alongside your other costs." },
      { to: "Gear & Fleet Management", detail: "Boat and vehicle crew are assigned from your staff list." },
      { to: "AI Copilot", detail: "The Copilot acts with the permissions of the person using it, so it can't do what that person's role can't." },
    ],
    outcomes: [
      { label: "Clear responsibility", detail: "Every role sees and does what it should — enforced by the system, not by trust." },
      { label: "No one in two places", detail: "Overlapping assignments are caught at the moment they are made." },
      { label: "Payroll without recounting", detail: "Fees are calculated from real sessions, with gaps flagged before you pay." },
      { label: "Fewer \"what's my schedule?\" messages", detail: "Staff see their next session and hours on their own profile." },
    ],
    faqs: [
      { question: "Which staff roles does RidgeHQ support?", answer: "Owner, Manager, Head Instructor, Instructor, Assistant, Divemaster, and Pilot. Permissions are enforced on the server for each role, and the Owner role is protected from being removed by accident." },
      { question: "Can instructors see revenue figures?", answer: "Only if you allow it. A per-business setting decides which roles may see money figures, and that rule applies everywhere — reports, dashboards, and AI Copilot answers alike." },
      { question: "How are instructor fees calculated?", answer: "You define fee groups with per-session, per-hour, or commission rates for each activity, plus optional bonuses. RidgeHQ calculates each person's fees from the sessions they were assigned to, notes any session missing a rate, and lets you export a statement and mark fees as paid." },
      { question: "Does RidgeHQ track staff availability or time off?", answer: "Not as a dedicated availability calendar today. It prevents overlapping assignments and shows each person's upcoming sessions and monthly hours; leave and days off are still planned by your team." },
      { question: "Can staff log in themselves?", answer: "Yes. You send a staff member an invite, and they can then sign in and update their own profile details such as phone, bio, and languages. Role, pay, and access stay manager-controlled." },
    ],
  },
  {
    id: 'customers',
    title: 'Customer & Participant Profiles',
    slug: 'customers-participants',
    lastUpdated: '2026-10-06',
    href: '/platform/customers-participants',
    description: "Know the participant behind the booking. Keep certifications, sizes, waivers, history, and credits attached to one customer record.",
    heroHeadline: "Every participant's details, ready before they arrive.",
    heroTagline: "Certifications, equipment sizes, gear needs, waivers, order history, and credit live on one customer record that every booking reuses — so your team stops asking the same questions at check-in.",
    heroProofPoints: [
      "Certification records with level and staff verification",
      "Sizes and gear needs stored once, reused for every trip",
      "CSV import to bring your existing customer list across",
    ],
    featureSections: [
      {
        heading: "One record per customer, reused by every booking",
        body: "The same diver or surfer comes back, books for friends, and changes plans. RidgeHQ keeps one customer record with contact details, order history, and credit balance, and attaches each booking to it — so history is never split across spreadsheets and inboxes.",
        points: [
          "Contact details, profile photo, and full order history",
          "Credit balance per customer",
          "CSV import to migrate an existing list; CSV export of all or selected customers",
          "QR-code walk-in self-registration that creates or finds the customer by email",
        ],
      },
      {
        heading: "Qualifications that are checked, not assumed",
        body: "Selling an advanced course to someone without the prerequisite, or putting an unqualified participant on a session, is a safety and a reputation problem. Customers carry certification records with a level and the staff member who verified them, and products can require a minimum skill level that the booking form then asks for — only where it is required.",
        points: [
          "Certification records with level, document, and verifying staff member",
          "Shared agency catalogue of levels and specialties (PADI, SSI, CMAS), which you can trim",
          "Products can require a skill level; booking forms ask for it only when needed",
          "Certification level printed on session rosters",
        ],
      },
      {
        heading: "Sizes, gear needs, and waivers before the day",
        body: "Most check-in delays come from information that could have been collected earlier. Equipment sizes and per-gear-type needs are stored on the profile, waiver requirements are attached to each participant from the moment of booking, and dive operators can keep a dive log against the same record.",
        points: [
          "Equipment sizing: wetsuit, BCD, fins, mask, shoe size, and weight",
          "Per-gear-type needs — renting, bringing their own, or stored with you",
          "Per-participant waiver requirements and signed captures on the booking",
          "Dive log entries with site, depth, duration, and an automatic dive number",
        ],
      },
    ],
    connections: [
      { to: "Online Bookings & POS", detail: "Every booking — online, front desk, or agent — is attached to a customer record, with waiver requirements per participant." },
      { to: "Gear & Fleet Management", detail: "Stored sizes and gear needs feed availability checks and each trip's gear prep list." },
      { to: "Scheduling & Dispatch", detail: "Rosters show who is on each session with their certification level." },
      { to: "Payments & Reporting", detail: "Order history, credit, and returning-customer rates come from the same records." },
    ],
    outcomes: [
      { label: "Faster check-in", detail: "Sizes, qualifications, and waivers are known before the customer arrives." },
      { label: "Safer allocations", detail: "Required skill levels are asked for at booking and visible on the roster." },
      { label: "History that stays whole", detail: "One record per customer instead of fragments across tools." },
      { label: "An easy way in", detail: "Import your existing customer list from CSV instead of retyping it." },
    ],
    faqs: [
      { question: "Can we import our existing customer list?", answer: "Yes. Customers can be imported from a CSV file, and you can export all or selected customers to CSV at any time — your data stays yours." },
      { question: "How are certifications handled?", answer: "Each customer can hold certification records with a level, an optional document, and the staff member who verified it. A shared catalogue covers common PADI, SSI, and CMAS levels and specialties, and you can hide entries you don't use." },
      { question: "Can a product require a minimum qualification?", answer: "Yes. A product can require a skill level. The booking form then asks for the participant's level only on products that require it, both in public checkout and in the admin booking flow." },
      { question: "Do customers have to give their sizes every time?", answer: "No. Equipment sizes and per-gear-type needs (renting, bringing their own, or stored with you) are kept on the profile and reused for later bookings and trip gear lists." },
      { question: "Can walk-in customers register themselves?", answer: "Yes. A QR code lets a walk-in customer register on their own phone; RidgeHQ finds their existing record by email or creates a new one." },
      { question: "Where are waivers kept?", answer: "Waiver requirements are attached to each participant on the booking, and signed captures are stored with it, so your team can see who still needs to sign before the session starts." },
    ],
  },
  {
    id: 'payments',
    title: 'Payments & Reporting',
    slug: 'payments',
    lastUpdated: '2026-10-06',
    href: '/platform/payments',
    description: "Close the day with context. Payments, invoices, credit notes, staff fees, partner commissions, and reports in one ledger.",
    heroHeadline: "Close the day knowing the numbers are right.",
    heroTagline: "Payments, invoices, credit notes, partner commissions, staff fees, and expenses come from the same orders your team already works with — so the daily close, the P&L, and the commission run all agree with each other.",
    heroProofPoints: [
      "Online orders confirm only after the payment succeeds",
      "Revenue by origin, P&L, and daily close from one ledger",
      "Partner commissions and staff fees calculated, not re-keyed",
    ],
    featureSections: [
      {
        heading: "Payments that match the bookings",
        body: "Money and bookings drift apart when they live in different tools. In RidgeHQ, payments are recorded against the order they settle. Online orders are confirmed only once the payment has actually succeeded, so you never chase a seat held by a checkout that never paid.",
        points: [
          "Card payments through Stripe, recorded against the order",
          "Online orders confirm only after a successful payment",
          "Invoices with the due balance, printable as PDF",
          "Changes to a paid order produce a credit note instead of rewriting it",
          "Every figure in your business currency; other currencies reported separately",
        ],
      },
      {
        heading: "Reports that answer owner questions",
        body: "The questions owners actually ask — what did we make, from which channel, and what did it cost — need bookings, payments, and expenses in one place. RidgeHQ reports revenue by date and by origin, runs a daily close, and builds a profit-and-loss view from captured payments and recorded expenses.",
        points: [
          "Daily close for each trading day",
          "Revenue by date range and by origin — direct, partner, or walk-in",
          "Expense tracking with categories and recurring expenses",
          "P&L: revenue, expenses, net profit, margin, and a 12-month series",
          "Operational season statistics — trips, participant-days, returning customers, activity mix, vessel utilisation — with no money figures, safe to share with the team",
        ],
      },
      {
        heading: "Commissions and staff fees without a spreadsheet",
        body: "Agents, hotels, and resellers need transparent settlement, and staff need to be paid for what they did. Partner commission rules and staff fee groups are set once; RidgeHQ calculates what is owed from real orders and sessions and produces the statements.",
        points: [
          "Partner commission groups and rules per product",
          "Commission owed calculated per order; partner invoices generated",
          "Staff fees calculated from assigned sessions, with fee statements as CSV",
          "Money figures visible only to the roles you allow",
        ],
      },
    ],
    connections: [
      { to: "Online Bookings & POS", detail: "Deposits, balances, register sales, and credit notes come from the same orders the front desk and website create." },
      { to: "Staff Coordination", detail: "Staff fees are calculated from the sessions each person was assigned to." },
      { to: "Scheduling & Dispatch", detail: "Operational statistics — trips, participant-days, and utilisation — are drawn from the sessions you ran." },
      { to: "Customer & Participant Profiles", detail: "Order history, credit, and returning-customer rates come from the same customer records." },
    ],
    outcomes: [
      { label: "Numbers that agree", detail: "The daily close, the P&L, and the commission run all read from one ledger." },
      { label: "No ghost bookings", detail: "Online orders hold their place only once payment has succeeded." },
      { label: "Settlement without disputes", detail: "Partners and staff are paid from calculated, itemised statements." },
      { label: "The right people see the money", detail: "Revenue visibility is a role setting, applied everywhere." },
    ],
    faqs: [
      { question: "Which payment provider does RidgeHQ use?", answer: "Card payments run through Stripe, and each payment is recorded against the order it settles. Direct bookings carry 0% RidgeHQ commission — you pay the payment provider's normal processing fees." },
      { question: "What happens if an online payment fails?", answer: "The order isn't confirmed until the payment succeeds. A failed attempt is recorded and the customer can retry; the booking isn't counted as confirmed in the meantime." },
      { question: "Can RidgeHQ show profit, not just revenue?", answer: "Yes. You can record expenses (including recurring ones), and the financial view shows revenue from captured payments, expenses, net profit, margin, and a 12-month trend." },
      { question: "How do partner and agent commissions work?", answer: "You set commission groups and rules per product. RidgeHQ calculates the commission owed on each partner order, summarises it per partner, and generates partner invoices for settlement." },
      { question: "Can we report in a currency other than euros?", answer: "Yes. Figures are reported in your business's own currency, and any amounts in other currencies are reported separately rather than mixed into the totals." },
      { question: "Can we share performance numbers with staff without showing revenue?", answer: "Yes. The operational statistics view (trips, participant-days, returning customers, activity mix, utilisation) deliberately contains no money figures, and a role setting controls who can see revenue anywhere else." },
    ],
  },
];
