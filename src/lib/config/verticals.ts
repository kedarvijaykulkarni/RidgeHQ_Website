export interface VerticalFeatureSection {
  heading: string;
  body: string;
  points: string[];
}

export interface VerticalWorkflowStep {
  title: string;
  detail: string;
}

export interface VerticalOutcome {
  label: string;
  detail: string;
}

export interface Vertical {
  id: string;
  name: string;
  slug: string;
  heroHeadline: string;
  heroDescription: string;
  painPoint: string;
  keyCapability: string;
  representativeFlow: string[];
  constraints: string[];
  faqs: { question: string; answer: string }[];
  /**
   * Extended marketing content. Added progressively per vertical — the
   * template renders these sections only when the data is present, so a
   * vertical without them still renders the core layout.
   */
  heroProofPoints?: string[];
  featureSections?: VerticalFeatureSection[];
  workflow?: VerticalWorkflowStep[];
  outcomes?: VerticalOutcome[];
}

export const verticals: Vertical[] = [
  {
    id: 'dive-centers',
    name: 'Dive Centers',
    slug: 'dive-centers',
    heroHeadline: 'Run your entire dive center from one HQ.',
    heroDescription: 'Coordinate instructors, boat capacity, rental gear, and course bookings in one connected system.',
    heroProofPoints: [
      "0% commission on direct bookings",
      "Digital waivers built in",
      "Boat manifests from the same schedule",
    ],
    painPoint: 'Most dive centers run the shop on a booking tool, the boat on a whiteboard, gear sizing in a binder, and course records in a spreadsheet. Every course that fills online has to be re-keyed onto the manifest, every kit swap checked by hand, and nobody sees the whole day in one place.',
    keyCapability: 'Every booking lands on the day plan with the diver, their certification level, and their kit sizing attached — so the manifest, the ratios, and the gear draw-down build themselves.',
    representativeFlow: [
      "Customer books an open water course online and fills in medical forms.",
      "RidgeHQ automatically reserves the required gear sizing and tank slots.",
      "Instructor is assigned based on language preference and availability.",
      "Boat manifest automatically updates with the correct pax count and weight limits.",
      "Post-dive logs and certification progress are recorded in the client profile."
    ],
    featureSections: [
      {
        heading: "Sell every seat without running a second system",
        body: "Your website widget, front-desk register, phone bookings, and agent referrals all write to the same availability. A course that fills online is a course the desk sees full a second later — no re-keying, no double-booked tanks.",
        points: [
          "Public booking widget taking deposits or full payment, with medical and experience questions collected up front",
          "Front-desk POS for walk-in fun dives, gear rental, and retail on one ticket",
          "Agent and partner bookings with automatic commission tracking and settlement",
          "0% platform commission on your direct bookings — your marketing stays yours",
        ],
      },
      {
        heading: "Dive-day operations: boats, manifests, and ratios",
        body: "Every confirmed booking arrives on the day plan with the diver's certification level and stored kit sizing attached. Build the boat manifest from that plan in a couple of clicks, and the system holds you to seat count, weight, and instructor-to-diver ratios.",
        points: [
          "Boat manifests generated from the schedule and checked against passenger capacity and assigned crew",
          "Instructor-to-student ratios enforced per course type before a session confirms",
          "Wetsuit, BCD, fin, and weight sizing pulled from each diver's profile onto the check-in list",
          "Tide, visibility, and water-temperature context on the session, with per-activity suitability limits",
          "Cylinder and specialty-gear stock drawn down as sessions and rentals are booked",
        ],
      },
      {
        heading: "The paperwork runs itself",
        body: "Waivers, confirmations, reminders, and certification records are part of the booking, not a stack of add-ons. When a booking changes, the money trail stays correct on its own.",
        points: [
          "Digital waivers per participant, with typed e-signature and conditional medical questions — built in, not a metered extra",
          "Automated confirmations and pre-arrival reminders with joining instructions",
          "Course completion logged per diver, producing the record your agency paperwork needs",
          "Order-safe changes: edits to a paid order create a credit note instead of silently rewriting it",
          "An AI copilot that reads your day and can reschedule sessions or move divers between them, with confirmation on anything riskier",
        ],
      },
    ],
    workflow: [
      { title: "Booking", detail: "A diver books an Open Water course or a two-tank trip on your site, pays a deposit, and answers medical and experience questions." },
      { title: "Payment", detail: "Deposit or full payment is captured through your own gateway; the balance is scheduled and tracked against the order." },
      { title: "Waiver", detail: "The participant signs the liability waiver and any conditional medical questions before arrival, linked to their profile." },
      { title: "Schedule", detail: "The session picks up an instructor by language and certification level, and reserves cylinders and rental kit in the diver's sizes." },
      { title: "Manifest", detail: "The boat manifest builds from the day plan with pax count, weights, and crew, flagging any ratio or capacity breach." },
      { title: "Day close", detail: "Dive logs and course progress are recorded, balances are settled at the desk, and the day's numbers land in reporting." },
    ],
    outcomes: [
      { label: "Bookings around the clock", detail: "The widget sells courses and trips while the shop is shut, into the same calendar your team works from." },
      { label: "One operational picture", detail: "Bookings, boats, staff, gear, and payments move together — you stop being the integration between five tools." },
      { label: "Less double-entry", detail: "A booking is entered once. Manifests, waivers, ratios, and reporting read from it instead of asking you to copy it." },
      { label: "Works at the dock", detail: "Instructors see their sessions, participant lists, and kit sizing from a phone, not a printout left in the office." },
    ],
    constraints: [
      "Boat passenger capacity, weight distribution, and crew assignment",
      "Instructor-to-student ratios that vary by course and agency standard",
      "Cylinder, weight, and specialty-gear stock (nitrox, drysuit, camera)",
      "Certification prerequisites and medical clearance per course",
      "Tide windows, visibility, and water temperature for the site",
    ],
    faqs: [
      { question: "Does it integrate with PADI or SSI?", answer: "RidgeHQ is your operational system of record. It tracks certification level and course completion for your manifests and hands you the record you need, but final certification is still issued through your agency's own portal." },
      { question: "Can we run more than one boat?", answer: "Yes. Each vessel has its own manifest, capacity, crew roster, and departure time, and the day plan shows them side by side." },
      { question: "How are digital waivers handled?", answer: "Waivers are sent with every booking and signed per participant with a typed e-signature. You can add conditional medical questions that expand only when a diver answers yes. It is built in, not a paid add-on." },
      { question: "What happens when a diver reschedules or a trip is cancelled?", answer: "Changes to a paid order create a credit note rather than overwriting it, so your accounts stay reconcilable. Moving a diver to another session is a one-step, reversible action." },
      { question: "Do you take a commission on our bookings?", answer: "No. Direct bookings through your own site carry 0% platform commission. You pay your normal payment-gateway fee and a flat monthly subscription." },
      { question: "Can the AI copilot change live bookings?", answer: "It can read your schedule and bookings and carry out reversible scheduling actions — rescheduling a session, reassigning a diver — each with a confirm step. Money-moving actions are logged and left for you to complete." },
    ],
  },
  {
    id: 'surf-schools',
    name: 'Surf Schools',
    slug: 'surf-schools',
    heroHeadline: 'Run your surf school from one HQ.',
    heroDescription: 'Manage changing conditions, instructor schedules, and board rentals seamlessly.',
    heroProofPoints: [
      "Tide and swell context on every session",
      "One calendar for lessons, camps, and rentals",
      "0% commission on direct bookings",
    ],
    painPoint: 'Surf schedules move with the tide and the swell, and most schools re-plan by hand: texting instructors, chasing wetsuit sizes, rebooking groups one message at a time. The booking site, the rental board rack, and the progress sheet never agree with each other.',
    keyCapability: 'The day plan carries tide and swell context, wetsuit and board sizing, and instructor level in one view — so when conditions shift you move a whole group and the resources follow.',
    representativeFlow: [
      "Group books a 3-day beginner camp online.",
      "RidgeHQ checks instructor availability against the incoming swell forecast.",
      "Foamies and wetsuits are automatically reserved from the rental fleet.",
      "If conditions change, bulk-reschedule the group and send automated SMS updates.",
      "Track student progress across the 3 days."
    ],
    featureSections: [
      {
        heading: "Fill every lesson without a second system",
        body: "Website bookings, front-desk sales, and multi-day camp packages all write to the same session capacity. A camp that sells out online shows full at the desk the moment it happens.",
        points: [
          "Public booking widget for lessons, courses, and camp packages with deposits or full payment",
          "Front-desk POS for walk-in lessons, board and wetsuit rental, and retail on one ticket",
          "Multi-day camps that block the instructor and the equipment for the whole run",
          "0% platform commission on your direct bookings",
        ],
      },
      {
        heading: "Plan around the tide, re-plan in one move",
        body: "Each session shows the tide window and swell forecast for your break next to the roster and the board list. When the forecast turns, reschedule the group in one action and everyone is notified.",
        points: [
          "Tide, swell height, and swell period context on the session from your spot's forecast",
          "Per-activity suitability limits so a beginner group is flagged when the surf is too big",
          "Bulk reschedule a group or a day, with automated messages to every participant",
          "Wetsuit and board sizing reserved from the rental fleet against each booking",
          "Instructor assignment by certification level and language",
        ],
      },
      {
        heading: "The admin runs itself",
        body: "Waivers, confirmations, reminders, and progress records are part of the booking. Changes to a paid order stay reconcilable instead of quietly overwriting the numbers.",
        points: [
          "Digital waivers per participant with typed e-signature and conditional health questions — built in",
          "Automated confirmations and pre-session reminders with meeting point and kit list",
          "Student progression logged per person so the next instructor knows where to start",
          "Order-safe changes: edits to a paid order create a credit note, not a silent rewrite",
          "An AI copilot that reads the day and can reschedule or move students between sessions, with confirmation",
        ],
      },
    ],
    workflow: [
      { title: "Booking", detail: "A group books a 3-day beginner camp online, pays a deposit, and answers experience and health questions." },
      { title: "Payment", detail: "Deposit is captured through your own gateway; the balance is scheduled and tracked against the order." },
      { title: "Waiver", detail: "Each participant signs the waiver and any conditional health questions before the first session." },
      { title: "Schedule", detail: "Sessions are placed against the tide window, an instructor is assigned by level, and foamies and wetsuits are reserved in the right sizes." },
      { title: "Re-plan", detail: "If the swell forecast turns, the whole group is rescheduled in one move and every participant is messaged automatically." },
      { title: "Day close", detail: "Progress is logged per student, balances settled at the desk, and the day's numbers land in reporting." },
    ],
    outcomes: [
      { label: "Bookings around the clock", detail: "The widget sells lessons and camps overnight into the same calendar your instructors work from." },
      { label: "Weather moves, you don't scramble", detail: "One reschedule action moves the group, the instructor, and the boards, and notifies everyone." },
      { label: "Less double-entry", detail: "A booking is entered once. Rosters, waivers, kit, and progress read from it instead of a separate sheet." },
      { label: "Works on the beach", detail: "Instructors see their sessions, participant lists, and sizing from a phone." },
    ],
    constraints: [
      "Tide windows and safe swell height for each ability level",
      "Wetsuit and board sizing matched to student size and skill",
      "Instructor availability by certification level (e.g. ISA L1 vs L2) and language",
      "Rental fleet shared between lessons and walk-in hire",
      "Multi-day camp blocks that span several sessions",
    ],
    faqs: [
      { question: "How does it handle a bad forecast?", answer: "Each session carries the tide and swell context for your spot. When conditions turn, you bulk-reschedule the affected sessions or a whole day and every participant is notified by email and SMS in one step." },
      { question: "Can it manage private and group lessons together?", answer: "Yes. The calendar handles private sessions, open group classes, and multi-day camps at the same time, each with its own capacity and instructor ratio." },
      { question: "Does it track student progression?", answer: "Yes. Progress is logged per student against your progression steps, so the next instructor picks up exactly where the last one left off." },
      { question: "Can we rent boards and wetsuits through the same system?", answer: "Yes. The rental fleet is shared between lessons and walk-in hire, so kit committed to a class is not offered to a walk-in, and both go on one ticket." },
      { question: "Do you take a commission on our bookings?", answer: "No. Direct bookings through your own site carry 0% platform commission — you pay your normal gateway fee and a flat monthly subscription." },
      { question: "What happens to the money when a camp booking changes?", answer: "Changes to a paid order produce a credit note rather than overwriting it, so your accounts stay reconcilable." },
    ]
  },
  {
    id: 'kitesurf-schools',
    name: 'Kitesurf Schools',
    slug: 'kitesurf-schools',
    heroHeadline: 'Run your kitesurf school from one HQ.',
    heroDescription: 'Connect wind conditions to your schedule, manage expensive gear, and track student progression (IKO/VDWS).',
    heroProofPoints: [
      "Wind speed and direction on every session",
      "Kite and harness sizing tied to student weight",
      "0% commission on direct bookings",
    ],
    painPoint: 'Kite lessons only happen in a wind window, so schools spend the morning texting students "wind is on" and then hunting for a kite in the right size. The booking tool, the gear board, and the progression cards live in three places and none of them know the forecast.',
    keyCapability: 'Sessions hold the wind forecast for your spot, and confirming one reserves the right kite size and harness for each student\'s weight — so a wind window turns into a full, kitted, briefed lesson in minutes.',
    representativeFlow: [
      "Student books a block of 6 hours of instruction.",
      "Lessons are scheduled but marked as 'wind-dependent'.",
      "When the wind hits 15 knots, instructor is confirmed.",
      "Specific kite sizes (e.g., 9m or 12m) and harnesses are reserved based on the student's weight.",
      "Progress is tracked step-by-step for IKO/VDWS sign-off."
    ],
    featureSections: [
      {
        heading: "Sell instruction blocks without a second system",
        body: "Website bookings, front-desk sales, and pre-paid hour blocks all draw from the same instructor capacity. An hours package bought online is visible to the team immediately, and hours are drawn down as they are used.",
        points: [
          "Public booking widget for lesson blocks, courses, and taster sessions with deposits or full payment",
          "Pre-paid hour packages tracked per student and drawn down session by session",
          "Front-desk POS for walk-in lessons, gear hire, and retail on one ticket",
          "0% platform commission on your direct bookings",
        ],
      },
      {
        heading: "Wind-dependent scheduling that actually holds the wind",
        body: "Each session shows the forecast wind speed and direction for your spot next to the roster and the kite board. Provisional lessons stay flagged as wind-dependent until you confirm, and confirming reserves matched gear.",
        points: [
          "Wind speed, direction, and gust context on the session from your spot's forecast",
          "Per-activity thresholds with a minimum and maximum wind limit, so a session is flagged when it is too light or too strong",
          "Kite size and harness reserved against student weight when a session confirms",
          "Radio helmet and safety-boat availability scheduled alongside the instructor",
          "Confirm or postpone a whole session in one move, with automated messages to every student",
        ],
      },
      {
        heading: "Progression and paperwork on rails",
        body: "IKO or VDWS progression, waivers, and confirmations travel with the booking. Money-affecting changes leave a clean trail instead of overwriting a paid order.",
        points: [
          "Progression logged step by step per student for IKO / VDWS sign-off",
          "Digital waivers per participant with typed e-signature and conditional health questions — built in",
          "Automated confirmations and 'wind is on' messages with meeting point and kit",
          "Order-safe changes: edits to a paid order create a credit note, not a silent rewrite",
          "An AI copilot that reads the day and can reschedule or reassign students, with confirmation on riskier actions",
        ],
      },
    ],
    workflow: [
      { title: "Booking", detail: "A student books a 6-hour instruction block online, pays up front, and gives their weight and experience." },
      { title: "Payment", detail: "Payment is captured through your own gateway and the hours are credited to the student's profile." },
      { title: "Waiver", detail: "The student signs the waiver and conditional health questions before the first session." },
      { title: "Wind call", detail: "Provisional sessions stay flagged wind-dependent; when the forecast lands in your window you confirm and everyone is messaged." },
      { title: "Kit & brief", detail: "Confirming reserves the right kite size and harness for the student's weight, plus radio helmet and safety boat." },
      { title: "Sign-off", detail: "Progression is logged per student, hours are drawn down, and the day's numbers land in reporting." },
    ],
    outcomes: [
      { label: "Wind windows become lessons", detail: "One confirm action turns a forecast into a kitted, briefed session with the whole group notified." },
      { label: "Expensive gear stays tracked", detail: "Kites and harnesses committed to a session are never double-booked to a walk-in." },
      { label: "Hours never go missing", detail: "Pre-paid blocks are drawn down automatically, so nobody argues about how many hours are left." },
      { label: "One picture of the day", detail: "Forecast, roster, gear, and progression sit in one view instead of three." },
    ],
    constraints: [
      "Wind window with both a minimum and maximum safe speed",
      "Wind direction suitable for the teaching zone",
      "Kite size and harness matched to student weight and live wind",
      "Radio helmet and safety-boat availability per lesson",
      "Pre-paid instruction hours tracked per student",
    ],
    faqs: [
      { question: "Can we manage boat-assisted lessons?", answer: "Yes. Safety-boat availability is scheduled alongside your instructors, so a lesson that needs the boat cannot be confirmed when the boat is already out." },
      { question: "Does it track student levels?", answer: "Yes. Progress is logged against IKO or VDWS progression steps, so the next instructor knows exactly where to pick up." },
      { question: "How does it handle the wind call?", answer: "Sessions carry the forecast wind speed and direction for your spot and stay flagged as wind-dependent until you confirm. Confirming or postponing a session messages every student in one step." },
      { question: "Can it stop us double-booking kites?", answer: "Yes. A kite size and harness reserved for a confirmed session is removed from the pool, so it is not offered to another lesson or a walk-in rental." },
      { question: "Do you take a commission on our bookings?", answer: "No. Direct bookings through your own site carry 0% platform commission — you pay your normal gateway fee and a flat monthly subscription." },
      { question: "What happens to pre-paid hours if a student cancels a session?", answer: "Unused hours stay on the student's profile. Changes to a paid order create a credit note rather than overwriting it." },
    ]
  },
  {
    id: 'sailing-schools',
    name: 'Sailing Schools',
    slug: 'sailing-schools',
    heroHeadline: 'Run your sailing school from one HQ.',
    heroDescription: 'Manage multi-day courses, boat fleet maintenance, and certified instructor scheduling.',
    heroProofPoints: [
      "Vessels, inspections, and crew in one place",
      "Multi-day courses block boat and instructor",
      "0% commission on direct bookings",
    ],
    painPoint: 'A sailing school is really a scheduling puzzle: a five-day course needs the right boat for five days, a qualified skipper for the same five days, and no clash with a maintenance haul-out or a weekend charter. Run that across a fleet on a spreadsheet and something always gets double-booked.',
    keyCapability: 'The fleet — with each vessel\'s capacity, inspection and licence dates, and assigned crew — sits inside the same calendar as your courses, so a multi-day course reserves the boat and the skipper together and refuses to clash.',
    representativeFlow: [
      "Client books a 5-day competent crew course.",
      "RidgeHQ reserves a specific keelboat for the duration.",
      "A qualified skipper is assigned for the 5-day block.",
      "Automated reminders send out packing lists and joining instructions.",
      "Post-course, the boat is scheduled for a turnaround/cleaning block."
    ],
    featureSections: [
      {
        heading: "Sell courses and charters from one calendar",
        body: "Instruction courses and bareboat or skippered charters draw from the same fleet availability, so a boat booked for a weekend charter is not offered to a course starting Monday.",
        points: [
          "Public booking widget for courses, RYA-style progression, and charters with deposits or full payment",
          "Skippered and bareboat charters managed alongside taught courses",
          "Front-desk POS for day sails, club membership, and retail on one ticket",
          "0% platform commission on your direct bookings",
        ],
      },
      {
        heading: "Fleet management inside the schedule",
        body: "Every vessel carries its passenger capacity, registration, and inspection, licence, and insurance expiry dates, plus its assigned crew. Maintenance and turnaround blocks sit on the same calendar as the courses.",
        points: [
          "Vessel records with capacity, registration, and inspection / licence / insurance expiry tracking",
          "Crew assignment per vessel, so only qualified skippers can be scheduled to it",
          "Maintenance, haul-out, and turnaround blocks that take a boat out of availability",
          "Multi-day courses that block both the vessel and the instructor for the full run",
          "Minimum-crew limits enforced per vessel before a session confirms",
        ],
      },
      {
        heading: "The admin runs itself",
        body: "Joining instructions, waivers, and progression records travel with the booking, and money-affecting changes leave a clean trail.",
        points: [
          "Automated joining instructions, packing lists, and pre-course reminders",
          "Digital waivers per participant with typed e-signature and conditional health questions — built in",
          "Progression logged per student across a multi-day course for certificate sign-off",
          "Order-safe changes: edits to a paid order create a credit note, not a silent rewrite",
          "An AI copilot that reads the schedule and can reschedule sessions or reassign crew, with confirmation",
        ],
      },
    ],
    workflow: [
      { title: "Booking", detail: "A client books a 5-day Competent Crew course online and pays a deposit." },
      { title: "Payment", detail: "Deposit is captured through your own gateway; the balance is scheduled against the order." },
      { title: "Boat & skipper", detail: "A specific keelboat is reserved for the five days and a qualified skipper is assigned to the same block." },
      { title: "Waiver & brief", detail: "Each participant signs the waiver and health questions; joining instructions and a packing list go out automatically." },
      { title: "Course run", detail: "The multi-day block shows on the agenda holding boat and instructor; progression is logged each day." },
      { title: "Turnaround", detail: "After the course the boat drops into a cleaning and turnaround block, and the day's numbers land in reporting." },
    ],
    outcomes: [
      { label: "No more double-booked boats", detail: "Courses, charters, and maintenance share one calendar, so a vessel can only be in one place." },
      { label: "Only qualified crew get scheduled", detail: "Crew assignment per vessel means an unqualified skipper can't be dropped onto the wrong boat." },
      { label: "Compliance dates in view", detail: "Inspection, licence, and insurance expiry are tracked on the vessel, not remembered." },
      { label: "One operational picture", detail: "Fleet, instructors, bookings, and payments move together instead of across separate tools." },
    ],
    constraints: [
      "Vessel availability against courses, charters, and maintenance blocks",
      "Skipper and instructor qualification requirements per vessel",
      "Minimum and maximum crew limits for specific boats",
      "Inspection, licence, and insurance expiry dates per vessel",
      "Multi-day course blocks spanning consecutive days",
    ],
    faqs: [
      { question: "Can we handle bareboat charters as well as courses?", answer: "Yes. Taught courses and bareboat or skippered charters draw from the same fleet availability, so the two can never book the same boat for overlapping dates." },
      { question: "How are multi-day courses shown?", answer: "A multi-day course appears as a single block on the agenda that holds both the vessel and the instructor for the whole run." },
      { question: "Does it track vessel compliance?", answer: "Each vessel records its registration and its inspection, licence, and insurance expiry dates, with the asset flagged as those dates approach." },
      { question: "Can it stop an unqualified skipper being scheduled?", answer: "Crew are assigned per vessel, so only the skippers cleared for a boat can be scheduled onto it." },
      { question: "Do you take a commission on our bookings?", answer: "No. Direct bookings through your own site carry 0% platform commission — you pay your normal gateway fee and a flat monthly subscription." },
      { question: "What happens if a course booking changes?", answer: "Changes to a paid order create a credit note rather than overwriting it, so your accounts stay reconcilable." },
    ]
  },
  {
    id: 'windsurf-schools',
    name: 'Windsurf Schools',
    slug: 'windsurf-schools',
    heroHeadline: 'Run your windsurf center from one HQ.',
    heroDescription: 'Manage high-volume rentals, storage slots, and wind-dependent lessons.',
    heroProofPoints: [
      "Live view of every board and rig on the water",
      "Lessons and walk-in hire share one fleet",
      "0% commission on direct bookings",
    ],
    painPoint: 'A busy windsurf center turns over gear all day and rents storage racks all season, while also teaching wind-dependent lessons. On paper, you never quite know what is on the water, what is due back, or whether the board a lesson needs is already out with a walk-in.',
    keyCapability: 'One shared fleet across lessons and walk-in hire, with each board and rig tracked out and back and every storage rack billed on schedule — so the desk always knows what is available right now.',
    representativeFlow: [
      "Client walks in for a 2-hour equipment rental.",
      "Staff assigns a specific board and rig via the POS.",
      "The system tracks the return time and alerts if overdue.",
      "Client decides to book a lesson for the next day, seamlessly added to their profile.",
      "Payment for both is handled on one invoice."
    ],
    featureSections: [
      {
        heading: "Fast walk-in hire without a second system",
        body: "The front-desk POS moves a walk-in from counter to water in a few taps, assigning a specific board and rig and starting the return clock. Lessons booked online land in the same calendar.",
        points: [
          "Front-desk POS for rapid walk-in rental, retail, and add-ons on one ticket",
          "Public booking widget for lessons, courses, and pre-booked hire with deposits or full payment",
          "Return times tracked per item with an overdue flag at the desk",
          "0% platform commission on your direct bookings",
        ],
      },
      {
        heading: "One fleet, shared between lessons and hire",
        body: "Boards and rigs committed to a lesson are not offered to a walk-in, and vice versa. Every unit shows its status — available, out, due back, in for repair.",
        points: [
          "Shared board and rig inventory across taught lessons and walk-in hire",
          "Volume and rig size matched to student weight and skill level",
          "Wind speed and direction context on lesson sessions from your spot's forecast",
          "Per-activity thresholds separating beginner-safe from advanced-only conditions",
          "Maintenance status that pulls a damaged board out of availability until it is fixed",
        ],
      },
      {
        heading: "Season-long storage and clean books",
        body: "Storage racks are managed and billed like any other resource, and money-affecting changes leave a clean trail.",
        points: [
          "Long-term storage racks tracked per client and billed on a recurring schedule",
          "Digital waivers per participant with typed e-signature and conditional health questions — built in",
          "Automated confirmations and reminders for booked lessons and hire",
          "Order-safe changes: edits to a paid order create a credit note, not a silent rewrite",
          "An AI copilot that reads the day and can reschedule lessons or reassign instructors, with confirmation",
        ],
      },
    ],
    workflow: [
      { title: "Walk-in", detail: "A client asks for a 2-hour rental; the desk assigns a specific board and rig on the POS." },
      { title: "Payment", detail: "Rental and any retail go on one ticket, paid through your own gateway." },
      { title: "On the water", detail: "The item is marked out with a return time; the desk sees an overdue flag if it runs late." },
      { title: "Add a lesson", detail: "The client books a lesson for the next day; it is added to their profile and the same calendar." },
      { title: "Return & settle", detail: "Gear is checked back in, any damage is logged, and the balance is settled on the existing ticket." },
      { title: "Day close", detail: "Outstanding items, storage billing, and the day's takings land in reporting." },
    ],
    outcomes: [
      { label: "You know what's on the water", detail: "Every board and rig shows available, out, due back, or in for repair — in real time." },
      { label: "Lessons and hire stop colliding", detail: "Kit committed to a class is never handed to a walk-in, and vice versa." },
      { label: "Storage bills itself", detail: "Season racks are on a recurring charge instead of a note in a drawer." },
      { label: "One ticket per customer", detail: "Rental, lessons, and retail settle together instead of across separate systems." },
    ],
    constraints: [
      "Wind speed and direction thresholds for beginner vs. advanced lessons",
      "Board volume and rig size matched to student weight and skill",
      "Shared fleet split between taught lessons and walk-in hire",
      "Return times and overdue tracking for items on the water",
      "Physical storage rack availability and recurring billing",
    ],
    faqs: [
      { question: "Can we manage long-term gear storage for clients?", answer: "Yes. Storage racks are tracked per client and billed on a recurring schedule, alongside the rest of the operation." },
      { question: "Does it work for fast walk-in rentals?", answer: "Yes. The POS is built for rapid walk-in processing — assign a specific board and rig, start the return clock, and take payment in a few taps." },
      { question: "Can it stop a lesson and a walk-in taking the same board?", answer: "Yes. The fleet is shared, so a unit committed to a lesson is removed from the walk-in pool and vice versa." },
      { question: "How does it handle wind-dependent lessons?", answer: "Lesson sessions carry the forecast wind speed and direction for your spot, with per-activity limits so a beginner session is flagged when it is too strong." },
      { question: "Do you take a commission on our bookings?", answer: "No. Direct bookings through your own site carry 0% platform commission — you pay your normal gateway fee and a flat monthly subscription." },
      { question: "What happens when a booking changes?", answer: "Changes to a paid order create a credit note rather than overwriting it, so your accounts stay reconcilable." },
    ]
  },
  {
    id: 'outdoor-whitewater',
    name: 'Outdoor & Whitewater',
    slug: 'outdoor-whitewater',
    heroHeadline: 'Run your outdoor operation from one HQ.',
    heroDescription: 'Coordinate guides, transport shuttles, and large group bookings for rafting and canyoning.',
    heroProofPoints: [
      "Group size drives rafts, guides, and shuttle seats",
      "Waivers signed per participant before arrival",
      "0% commission on direct bookings",
    ],
    painPoint: 'A single rafting or canyoning trip is a logistics chain: enough boats for the headcount, enough guides for the ratio, enough shuttle seats to get everyone to the put-in, and a signed waiver for every person. Miss one link and the trip runs short-handed or leaves someone at the depot.',
    keyCapability: 'A booking\'s headcount drives the whole chain — rafts, guides at the legal ratio, and shuttle seats are all reserved together, and no one boards without a signed waiver on file.',
    representativeFlow: [
      "Corporate group of 30 books a half-day rafting trip.",
      "RidgeHQ calculates the need for 5 rafts and 6 guides.",
      "Transport shuttle seats are automatically reserved.",
      "Waivers are sent out and tracked digitally before arrival.",
      "Guides see their assigned rafts and passenger lists on their phones."
    ],
    featureSections: [
      {
        heading: "Take group bookings without a second system",
        body: "Individual and large group bookings land in the same trip capacity, whether they come from your website, a phone call, or an agent. A group that books online is on the trip roster immediately.",
        points: [
          "Public booking widget for scheduled departures and private group trips with deposits or full payment",
          "Agent and partner bookings with automatic commission tracking and settlement",
          "Front-desk POS for walk-ups, photos, and retail on one ticket",
          "0% platform commission on your direct bookings",
        ],
      },
      {
        heading: "Guides, boats, and shuttles planned together",
        body: "The trip plan reserves every resource the headcount needs at once and holds you to the ratios. Guides pick up their raft and passenger list on a phone.",
        points: [
          "Raft and guide counts driven by headcount and your guide-to-client ratio",
          "Shuttle vehicles attached to a trip with seat capacity enforced so transport is never overbooked",
          "Guide assignment by qualification, so only cleared guides are scheduled to a river section",
          "Water-level and condition notes on the departure for the day's call",
          "Assigned rafts and passenger lists visible to guides in the field",
        ],
      },
      {
        heading: "Waivers and paperwork handled up front",
        body: "Every participant signs before they arrive, and money-affecting changes leave a clean trail.",
        points: [
          "Digital waivers per participant with typed e-signature and conditional health / swimmer questions — built in",
          "Waiver status tracked against the booking so the desk sees who still needs to sign",
          "Automated confirmations and pre-arrival instructions with meeting point and kit list",
          "Order-safe changes: edits to a paid order create a credit note, not a silent rewrite",
          "An AI copilot that reads the day and can reschedule departures or reassign guides, with confirmation",
        ],
      },
    ],
    workflow: [
      { title: "Booking", detail: "A group of 30 books a half-day rafting trip online and pays a deposit." },
      { title: "Resources", detail: "The trip reserves the rafts and guides the headcount needs at your ratio, plus shuttle seats for everyone." },
      { title: "Waivers", detail: "Waiver links go to every participant; the desk sees who has signed and who is outstanding." },
      { title: "Payment", detail: "The balance is scheduled and settled through your own gateway, on one ticket." },
      { title: "Departure", detail: "Guides get their assigned raft and passenger list; the shuttle manifest matches the headcount." },
      { title: "Day close", detail: "Attendance, extras, and the day's takings land in reporting." },
    ],
    outcomes: [
      { label: "No trip runs short", detail: "Rafts, guides, and shuttle seats are all reserved from the same headcount, at the ratio you set." },
      { label: "Everyone has signed", detail: "Waiver status per participant is on the booking, so nobody boards unsigned." },
      { label: "Shuttles never overbook", detail: "Vehicle seat capacity is enforced when transport is attached to a trip." },
      { label: "Guides work from a phone", detail: "Assigned boats and passenger lists are in the field, not on a clipboard in the office." },
    ],
    constraints: [
      "Water levels and flow rates for the day's call",
      "Guide-to-client ratios that vary by river section and activity",
      "Guide qualification per section or activity",
      "Shuttle vehicle seat capacity",
      "Waiver completion for every participant before departure",
    ],
    faqs: [
      { question: "How are digital waivers handled?", answer: "Waivers are sent automatically when a booking is made and signed per participant. Their status is tracked against the booking, so the desk can see at a glance who still needs to sign before the trip." },
      { question: "Can we manage shuttle transport?", answer: "Yes. Attach a vehicle to a trip and its seat capacity is enforced, so you cannot commit more passengers to a shuttle run than it can carry." },
      { question: "Does it handle large corporate groups?", answer: "Yes. A group books once and the system sizes the rafts, guides, and shuttle seats from the headcount, keeping your guide-to-client ratio." },
      { question: "Can it stop an unqualified guide being scheduled?", answer: "Guides are assigned by qualification, so only those cleared for a river section or activity can be scheduled to it." },
      { question: "Do you take a commission on our bookings?", answer: "No. Direct bookings through your own site carry 0% platform commission — you pay your normal gateway fee and a flat monthly subscription." },
      { question: "What happens when a group changes its numbers?", answer: "Adjust the booking and the resource requirements update. Changes to a paid order create a credit note rather than overwriting it." },
    ]
  },
  {
    id: 'ski-schools',
    name: 'Ski Schools',
    slug: 'ski-schools',
    heroHeadline: 'Run your ski school from one HQ.',
    heroDescription: 'Assign instructors based on skill levels and manage peak-season booking volume.',
    heroProofPoints: [
      "Instructor match by level and language",
      "Built for the 8:45 morning rush",
      "0% commission on direct bookings",
    ],
    painPoint: 'Ski school demand arrives in a wall at 8:45 a.m.: families wanting privates and group classes at different levels, in different languages, all for the same slot. Matching every booking to the right instructor by hand, at that speed, is where the mistakes happen.',
    keyCapability: 'Every booking carries the student\'s level and language, and instructors are tagged by certification and language — so assignment for the morning rush is a filtered match, not a guessing game.',
    representativeFlow: [
      "Family books private lessons and group classes for different kids.",
      "RidgeHQ flags missing ability levels and requests them.",
      "Instructors are assigned based on language skills and certification levels.",
      "Morning meeting points are communicated automatically via SMS.",
      "End-of-week medals and progress are logged."
    ],
    featureSections: [
      {
        heading: "Peak-season volume without a second system",
        body: "Website bookings, front-desk sales, and week-long course packages all draw from the same class capacity, so a group class that fills online is full at the desk before the queue reaches it.",
        points: [
          "Public booking widget for privates, group classes, and multi-day courses with deposits or full payment",
          "Front-desk POS built for rapid booking and assignment during the morning rush",
          "Week-long courses that block the instructor and hold a place in the class for the whole week",
          "0% platform commission on your direct bookings",
        ],
      },
      {
        heading: "The right instructor, matched fast",
        body: "Each booking records the student's ability level; each instructor is tagged with certifications and languages. Assignment filters to the instructors who actually fit, and flags a booking that is missing its level.",
        points: [
          "Instructor assignment filtered by certification level (beginner, all-mountain, off-piste) and language",
          "Ability level requested on the booking and flagged when it is missing",
          "Morning and afternoon scheduling blocks kept separate so a slot is never sold twice",
          "Session language tagged so bookings and instructors are matched on it",
          "Group class ratios enforced before a class confirms",
        ],
      },
      {
        heading: "The week runs itself",
        body: "Meeting points, waivers, and end-of-week progress travel with the booking, and money-affecting changes leave a clean trail.",
        points: [
          "Automated meeting-point and start-time messages each morning",
          "Digital waivers per participant with typed e-signature and conditional health questions — built in",
          "Progress and end-of-week awards logged per student",
          "Order-safe changes: edits to a paid order create a credit note, not a silent rewrite",
          "An AI copilot that reads the day and can reschedule lessons or reassign instructors, with confirmation",
        ],
      },
    ],
    workflow: [
      { title: "Booking", detail: "A family books privates and group classes for children at different levels, and pays a deposit." },
      { title: "Levels", detail: "The system requests any missing ability levels so every child can be placed correctly." },
      { title: "Assignment", detail: "Instructors are matched by certification level and language, keeping morning and afternoon blocks separate." },
      { title: "Waiver", detail: "Each participant signs the waiver and health questions before the first lesson." },
      { title: "Each morning", detail: "Meeting point and start time go out automatically; the desk handles walk-ins on the same screen." },
      { title: "End of week", detail: "Progress and awards are logged per student, and the week's numbers land in reporting." },
    ],
    outcomes: [
      { label: "The 8:45 rush is manageable", detail: "Bookings arrive pre-tagged with level and language, so assignment is a filter, not a scramble." },
      { label: "Right instructor, first time", detail: "Certification and language matching cuts the mid-morning reshuffles." },
      { label: "Slots sell once", detail: "Separate morning and afternoon blocks stop the same instructor hour being sold twice." },
      { label: "One operational picture", detail: "Bookings, instructors, and payments move together across the season." },
    ],
    constraints: [
      "Instructor certification levels (beginner, all-mountain, off-piste)",
      "Instructor and session language",
      "Separate morning and afternoon scheduling blocks",
      "Group class size and ratio limits",
      "Student ability level captured before assignment",
    ],
    faqs: [
      { question: "Can we filter instructors by language?", answer: "Yes. Instructors are tagged with languages and certifications, and sessions carry a language, so bookings and instructors are matched on both." },
      { question: "Does it handle the morning walk-in rush?", answer: "Yes. The POS is built for fast booking and assignment, so desk staff can place walk-ins during the rush without leaving the screen." },
      { question: "What if a booking is missing the student's level?", answer: "The booking is flagged and the level is requested, so nobody is assigned to a class that does not fit them." },
      { question: "Can it manage week-long courses?", answer: "Yes. A multi-day course blocks the instructor and holds the student's place in the class for the whole week." },
      { question: "Do you take a commission on our bookings?", answer: "No. Direct bookings through your own site carry 0% platform commission — you pay your normal gateway fee and a flat monthly subscription." },
      { question: "What happens when a family changes its lessons mid-week?", answer: "Adjust the booking and the schedule updates. Changes to a paid order create a credit note rather than overwriting it." },
    ]
  },
  {
    id: 'dive-resorts',
    name: 'Dive Resorts',
    slug: 'dive-resorts',
    heroHeadline: 'Run your dive resort from one HQ.',
    heroDescription: 'Connect accommodation bookings with daily dive operations and full-board packages.',
    heroProofPoints: [
      "Rooms and dive operations on one system",
      "Package dives drawn down as they're used",
      "0% commission on direct bookings",
    ],
    painPoint: 'A dive resort runs a hotel and a dive center at once. When the beds live in one system and the boats in another, package dives get miscounted, a guest gets billed twice, and reception and the dive desk spend the week reconciling by hand.',
    keyCapability: 'Accommodation and the dive schedule share one system and one guest folio — a Stay & Dive package books the room and credits the dives, and each day on the boat draws the package down automatically.',
    representativeFlow: [
      "Guest books a 7-night 'Stay & Dive' package.",
      "A room is blocked out in the accommodation module.",
      "10 dive slots are credited to their profile.",
      "As they dive each day, slots are drawn down from their package.",
      "At checkout, room, dives, and bar tabs are settled on a single invoice."
    ],
    featureSections: [
      {
        heading: "Sell packages without a second system",
        body: "Stay & Dive packages, room-only stays, and day-guest dives all book through the same widget and land on the same calendar, so reception and the dive desk see one version of the week.",
        points: [
          "Public booking widget for accommodation, dive packages, and courses with deposits or full payment",
          "Package definitions that reserve the room and credit a set number of dives in one step",
          "Day guests and externals booked onto the same boats as resort guests, capacity permitting",
          "0% platform commission on your direct bookings",
        ],
      },
      {
        heading: "Rooms and dive days, planned together",
        body: "The accommodation calendar and the dive schedule sit in the same system. Package dives count down as they are used, and the boat plan shows resort guests and day guests together.",
        points: [
          "Accommodation inventory with availability and turnaround blocks",
          "Package dive balance drawn down per guest as each day is logged",
          "Boat manifests built from the day plan with capacity, weights, and assigned crew",
          "Rental gear sizing pulled from each diver's profile onto the check-in list",
          "Tide, visibility, and water-temperature context on each dive session",
        ],
      },
      {
        heading: "One folio, clean books",
        body: "Everything a guest spends lands on one folio, and money-affecting changes leave a clean trail.",
        points: [
          "Room, dives, rentals, and retail settled on a single guest folio at checkout",
          "Digital waivers per participant with typed e-signature and conditional medical questions — built in",
          "Course completion logged per diver, producing the record your agency paperwork needs",
          "Order-safe changes: edits to a paid order create a credit note, not a silent rewrite",
          "An AI copilot that reads the day and can reschedule dives or move divers between boats, with confirmation",
        ],
      },
    ],
    workflow: [
      { title: "Booking", detail: "A guest books a 7-night Stay & Dive package online and pays a deposit." },
      { title: "Room & dives", detail: "A room is held for the stay and the package's dives are credited to the guest's profile." },
      { title: "Waiver", detail: "The guest signs the liability waiver and conditional medical questions before the first dive." },
      { title: "Each day", detail: "The guest is added to a boat; the dive is logged and one dive is drawn down from the package." },
      { title: "Extras", detail: "Nitrox, rentals, courses, and the bar tab are posted to the same folio through the week." },
      { title: "Checkout", detail: "Room, dives, and extras settle on a single invoice, and the numbers land in reporting." },
    ],
    outcomes: [
      { label: "No more double billing", detail: "One folio per guest means the room, the dives, and the bar tab reconcile themselves." },
      { label: "Package dives always add up", detail: "Each day on the boat draws the package down, so the count is right at checkout." },
      { label: "Reception and dive desk agree", detail: "Beds and boats share one calendar instead of two systems that drift apart." },
      { label: "One operational picture", detail: "Accommodation, dive schedule, gear, and payments move together." },
    ],
    constraints: [
      "Room availability and turnaround times",
      "Package inclusion limits (e.g. dives included, nitrox, equipment)",
      "Boat and guide capacity shared between resort guests and day guests",
      "Certification and medical clearance per dive or course",
      "Tide, visibility, and water temperature for each site",
    ],
    faqs: [
      { question: "Can we bill everything to one folio?", answer: "Yes. Dives, courses, rentals, retail, and the bar tab all post to the guest's folio and settle on a single invoice at checkout." },
      { question: "How are package dives tracked?", answer: "A package credits a set number of dives to the guest's profile, and each logged dive day draws one down, so the balance is always current." },
      { question: "Can day guests dive with resort guests?", answer: "Yes. Externals book onto the same boats as resort guests, up to the vessel's capacity and crew limits." },
      { question: "Does it manage accommodation turnaround?", answer: "Yes. The accommodation calendar handles availability and turnaround blocks alongside the dive schedule." },
      { question: "Do you take a commission on our bookings?", answer: "No. Direct bookings through your own site carry 0% platform commission — you pay your normal gateway fee and a flat monthly subscription." },
      { question: "What happens if a guest shortens their stay?", answer: "Adjust the booking and the room and dive credits update. Changes to a paid order create a credit note rather than overwriting it." },
    ]
  },
  {
    id: 'surf-camps',
    name: 'Surf Camps',
    slug: 'surf-camps',
    heroHeadline: 'Run your surf camp from one HQ.',
    heroDescription: 'Manage beds, meals, daily surf lessons, and airport transfers in one unified system.',
    heroProofPoints: [
      "Beds, lessons, and transfers on one system",
      "Weekly package sets the whole guest itinerary",
      "0% commission on direct bookings",
    ],
    painPoint: 'A surf camp week has a lot of moving parts per guest: a bed, an airport pickup, a lesson group at their level, and a note for the kitchen. Run that on a booking tool plus three spreadsheets and every Sunday changeover is a fire drill.',
    keyCapability: 'One weekly package books the bed, adds the guest to the arrival transfer, places them in the right surf group, and captures dietary needs — so the changeover list builds itself.',
    representativeFlow: [
      "Guest books a 1-week surf camp package with airport transfer.",
      "RidgeHQ adds them to the Sunday arrival transfer manifest.",
      "A bed in the shared dorm is assigned.",
      "They are automatically added to the morning beginner surf group for the week.",
      "Dietary requirements are flagged for the kitchen."
    ],
    featureSections: [
      {
        heading: "Sell the week without a second system",
        body: "Weekly and multi-week packages, add-on nights, and extra lessons all book through one widget and land on one calendar, so the whole camp itinerary comes from a single booking.",
        points: [
          "Public booking widget for camp packages, private rooms, and shared dorm beds with deposits or full payment",
          "Package definitions that bundle bed, board, lessons, and transfer into one product",
          "Add-ons — extra lessons, rental boards, video coaching — on the same booking",
          "0% platform commission on your direct bookings",
        ],
      },
      {
        heading: "Hospitality and surf, planned together",
        body: "Beds, transfers, and lesson groups share one system. A booking places the guest everywhere it needs to at once, and the changeover view shows arrivals, departures, and bed moves for the day.",
        points: [
          "Accommodation by the bed in shared dorms as well as private rooms",
          "Arrival and departure transfer manifests sized against vehicle seat capacity",
          "Guests placed in a surf group by level, with instructor ratios enforced",
          "Tide and swell context on lesson sessions from your spot's forecast",
          "Rental boards and wetsuits reserved for the week from the shared fleet",
        ],
      },
      {
        heading: "The week runs itself",
        body: "Kitchen notes, waivers, and pre-arrival information travel with the booking, and money-affecting changes leave a clean trail.",
        points: [
          "Dietary and allergy requirements captured on the booking and reportable for the kitchen",
          "Digital waivers per participant with typed e-signature and conditional health questions — built in",
          "Automated pre-arrival emails with travel details, packing list, and schedule",
          "Order-safe changes: edits to a paid order create a credit note, not a silent rewrite",
          "An AI copilot that reads the week and can reschedule lessons or reassign instructors, with confirmation",
        ],
      },
    ],
    workflow: [
      { title: "Booking", detail: "A guest books a one-week camp package with airport transfer and pays a deposit." },
      { title: "Itinerary", detail: "The package assigns a bed, adds the guest to the Sunday arrival transfer, and books their week of lessons." },
      { title: "Group & kitchen", detail: "The guest is placed in a surf group by level; dietary needs are flagged for the kitchen." },
      { title: "Waiver", detail: "Each guest signs the waiver and health questions before the first session." },
      { title: "Changeover", detail: "The Sunday view shows arrivals, departures, transfer manifests, and bed moves in one place." },
      { title: "Week close", detail: "Extras are settled, progress is logged, and the week's numbers land in reporting." },
    ],
    outcomes: [
      { label: "Changeover stops being a fire drill", detail: "Arrivals, departures, transfers, and bed moves come off one list built from the bookings." },
      { label: "One booking sets the whole week", detail: "Bed, board, lessons, and transfer are placed together, not entered four times." },
      { label: "The kitchen gets clean numbers", detail: "Dietary and allergy needs are reportable per week instead of scattered in emails." },
      { label: "One operational picture", detail: "Beds, transfers, lessons, and payments move together." },
    ],
    constraints: [
      "Bed and room capacity across dorms and private rooms",
      "Instructor ratios for the included lessons",
      "Transfer vehicle seat capacity for arrivals and departures",
      "Tide and swell suitability for each group's level",
      "Rental board and wetsuit stock reserved for the week",
    ],
    faqs: [
      { question: "Can we manage shared dorms?", answer: "Yes. You can sell and assign by the bed in shared dormitories as well as booking whole private rooms." },
      { question: "Can we track dietary requirements?", answer: "Yes. Dietary and allergy needs are captured on the booking and can be reported per week for the kitchen." },
      { question: "How are airport transfers handled?", answer: "Guests are added to arrival and departure manifests sized against the vehicle's seat capacity, so a transfer run is never overbooked." },
      { question: "Can a package bundle bed, lessons, and transfer?", answer: "Yes. A package product bundles accommodation, the week of lessons, board hire, and the transfer, so one booking sets the whole itinerary." },
      { question: "Do you take a commission on our bookings?", answer: "No. Direct bookings through your own site carry 0% platform commission — you pay your normal gateway fee and a flat monthly subscription." },
      { question: "What happens when a guest changes their dates?", answer: "Adjust the booking and the bed, transfer, and lessons update. Changes to a paid order create a credit note rather than overwriting it." },
    ]
  },
  {
    id: 'kayak-rental-tours',
    name: 'Kayak Rental & Tours',
    slug: 'kayak-rental-tours',
    heroHeadline: 'Run your kayak operation from one HQ.',
    heroDescription: 'Track live inventory for rentals while scheduling guides for group tours.',
    heroProofPoints: [
      "One inventory for tours and walk-in hire",
      "Guides scheduled at the ratio you set",
      "0% commission on direct bookings",
    ],
    painPoint: 'A kayak operation sells guided tours and hires boats by the hour from the same rack. Without one shared inventory, a tour turns up needing ten doubles that walked out the door an hour earlier, and the desk finds out at the water.',
    keyCapability: 'Tours and walk-in hire draw from one boat inventory, so a kayak reserved for the 6 p.m. tour is not on the walk-in rack at 5 — and guides are scheduled against the tour headcount at your ratio.',
    representativeFlow: [
      "A group books a guided sunset tour online.",
      "RidgeHQ reserves 10 double kayaks and assigns a guide.",
      "Meanwhile, a walk-in requests 2 single kayaks for 1 hour.",
      "The POS only allows renting out singles that aren't needed for the upcoming tour.",
      "Waivers are signed per participant on a device at the desk."
    ],
    featureSections: [
      {
        heading: "Tours and hire from one system",
        body: "Scheduled tours booked online and walk-in hire at the desk draw from the same boat inventory, so committed stock is never offered twice.",
        points: [
          "Public booking widget for guided tours and pre-booked hire with deposits or full payment",
          "Front-desk POS for walk-in hire, retail, and add-ons on one ticket",
          "Return times tracked per boat with an overdue flag at the desk",
          "0% platform commission on your direct bookings",
        ],
      },
      {
        heading: "Live inventory that stops the clashes",
        body: "Every boat shows its status, and stock reserved for an upcoming tour is held back from walk-in hire automatically.",
        points: [
          "Single and double kayaks tracked as separate stock with live availability",
          "Boats reserved for a scheduled tour removed from the walk-in pool for that window",
          "Turnaround time between a return and the next hire built into availability",
          "Maintenance status that pulls a damaged boat out until it is checked back in",
          "Guides scheduled against the tour headcount at your guide-to-client ratio",
        ],
      },
      {
        heading: "Paperwork and books stay clean",
        body: "Waivers and confirmations travel with the booking, and money-affecting changes leave a clean trail.",
        points: [
          "Digital waivers per participant with typed e-signature and conditional health / swimmer questions — built in",
          "Waiver status tracked on the booking so the desk sees who still needs to sign",
          "Automated confirmations and pre-tour instructions with meeting point and kit",
          "Order-safe changes: edits to a paid order create a credit note, not a silent rewrite",
          "An AI copilot that reads the day and can reschedule tours or reassign guides, with confirmation",
        ],
      },
    ],
    workflow: [
      { title: "Tour booking", detail: "A group books a guided sunset tour online and pays a deposit." },
      { title: "Reserve", detail: "The tour reserves the doubles it needs and assigns a guide at your ratio." },
      { title: "Walk-in", detail: "A walk-in asks for singles for an hour; the POS only offers boats not needed for the upcoming tour." },
      { title: "Waivers", detail: "Every participant signs on a device at the desk; the booking shows who is outstanding." },
      { title: "On the water", detail: "Boats are marked out with return times; the desk sees an overdue flag if a hire runs late." },
      { title: "Day close", detail: "Returns, damage notes, and the day's takings land in reporting." },
    ],
    outcomes: [
      { label: "Tours never come up short", detail: "Boats reserved for a departure are held back from walk-in hire for that window." },
      { label: "You know what's on the water", detail: "Every kayak shows available, out, due back, or in for repair." },
      { label: "Guides scheduled to the ratio", detail: "Guide numbers come off the tour headcount, not a mental estimate." },
      { label: "One ticket per customer", detail: "Tours, hire, and retail settle together instead of across separate systems." },
    ],
    constraints: [
      "Separate stock of single vs. double kayaks",
      "Turnaround time for cleaning and checking boats between hires",
      "Guide availability and guide-to-client ratios per tour",
      "Return times and overdue tracking for boats on the water",
      "Waiver completion for every participant before launch",
    ],
    faqs: [
      { question: "Does it prevent double-booking gear?", answer: "Yes. Boats assigned to a scheduled tour are removed from the walk-in pool for that window, so the same kayak cannot be hired out from under a departure." },
      { question: "How are waivers handled for walk-ins?", answer: "Waivers are signed per participant on a device at the desk, with a typed e-signature. The booking shows who has signed and who is still outstanding." },
      { question: "Can it track single and double kayaks separately?", answer: "Yes. Each is its own stock with live availability, so a tour needing doubles does not draw down your singles." },
      { question: "Does it handle guide ratios?", answer: "Yes. Guides are scheduled against the tour headcount at the guide-to-client ratio you set." },
      { question: "Do you take a commission on our bookings?", answer: "No. Direct bookings through your own site carry 0% platform commission — you pay your normal gateway fee and a flat monthly subscription." },
      { question: "What happens when a tour group changes numbers?", answer: "Adjust the booking and the boats and guides update. Changes to a paid order create a credit note rather than overwriting it." },
    ]
  },
  {
    id: 'bike-rental-tours',
    name: 'Bike Rental & Tours',
    slug: 'bike-rental-tours',
    heroHeadline: 'Run your bike operation from one HQ.',
    heroDescription: 'Manage a complex fleet of e-bikes, mountain bikes, and guided tours.',
    heroProofPoints: [
      "Every bike tracked as its own asset",
      "Size and service state drive availability",
      "0% commission on direct bookings",
    ],
    painPoint: 'A bike fleet is not interchangeable stock — it is individual assets, each with a frame size, a service history, and a battery that needs turnaround time. Booking "an e-bike" and sorting out which one on the morning of pickup is how you end up handing over a bike with a flagged brake.',
    keyCapability: 'Every bike is its own tracked asset with a size and a service state, so a booking reserves a specific frame in the right size and a bike flagged for repair simply is not offered.',
    representativeFlow: [
      "Customer books an e-MTB rental for 3 days.",
      "RidgeHQ reserves a size 'Large' bike.",
      "Upon return, the mechanic logs a brake issue in the system.",
      "The specific bike is marked 'Out of Service' and removed from inventory.",
      "Once repaired, it is released back into the available fleet."
    ],
    featureSections: [
      {
        heading: "Rentals and tours from one system",
        body: "Online rentals, walk-in hire, and guided tours all draw from the same fleet, so a bike committed to Saturday's tour is not double-booked to a three-day rental.",
        points: [
          "Public booking widget for rentals and guided tours with deposits or full payment",
          "Multi-day, half-day, and seasonal pricing rules on the same products",
          "Front-desk POS for walk-in hire, accessories, and retail on one ticket",
          "0% platform commission on your direct bookings",
        ],
      },
      {
        heading: "Asset-level fleet management",
        body: "Each bike carries its type, frame size, and service record. Availability reflects the real state of each unit, not a generic count.",
        points: [
          "Bookings reserve a specific bike by type and frame size (S / M / L / XL)",
          "Service history and safety checks logged per bike",
          "A bike flagged out of service is removed from availability until it is checked back in",
          "Turnaround time between a return and the next hire built into availability",
          "Guided tours reserve specific bikes and assign a guide at your ratio",
        ],
      },
      {
        heading: "Paperwork and books stay clean",
        body: "Waivers and confirmations travel with the booking, and money-affecting changes leave a clean trail.",
        points: [
          "Digital waivers per participant with typed e-signature and conditional health questions — built in",
          "Automated confirmations and pickup instructions with the reserved bike and size",
          "Security deposits pre-authorised through supported gateways and released after inspection",
          "Order-safe changes: edits to a paid order create a credit note, not a silent rewrite",
          "An AI copilot that reads the day and can reschedule tours or reassign guides, with confirmation",
        ],
      },
    ],
    workflow: [
      { title: "Booking", detail: "A customer books an e-MTB for 3 days online, choosing frame size, and pays a deposit." },
      { title: "Reserve", detail: "A specific Large e-MTB is held for the dates; multi-day pricing is applied automatically." },
      { title: "Waiver & deposit", detail: "The customer signs the waiver and a security deposit is pre-authorised through your gateway." },
      { title: "Pickup", detail: "The reserved bike is handed over; the customer confirms condition on the booking." },
      { title: "Return", detail: "The mechanic checks the bike in; any issue is logged and the bike is flagged out of service if needed." },
      { title: "Settle", detail: "The deposit is released after inspection and the day's numbers land in reporting." },
    ],
    outcomes: [
      { label: "No surprise bikes at pickup", detail: "A specific frame in the right size is reserved at booking, not chosen in the morning scramble." },
      { label: "Flagged bikes stay in the workshop", detail: "An out-of-service bike is off availability until it is checked back in." },
      { label: "Rentals and tours don't collide", detail: "One fleet, so a bike on Saturday's tour is not also on a weekend rental." },
      { label: "Deposits handled cleanly", detail: "Pre-authorised at booking, released after inspection, all on the same order." },
    ],
    constraints: [
      "Frame size matching (S / M / L / XL) per booking",
      "Battery and cleaning turnaround time between hires",
      "Service history and safety checks per bike",
      "Shared fleet across rentals, walk-in hire, and guided tours",
      "Security deposit pre-authorisation and release",
    ],
    faqs: [
      { question: "Can we track maintenance per bike?", answer: "Yes. Service history and safety checks are logged per bike, and flagging one out of service removes it from availability immediately." },
      { question: "Does it handle multi-day and seasonal pricing?", answer: "Yes. Products support multi-day rules, half-days, and seasonal pricing, applied automatically at booking." },
      { question: "Can it reserve a specific frame size?", answer: "Yes. Bookings reserve a specific bike by type and frame size, so the right bike is set aside before the customer arrives." },
      { question: "How are security deposits handled?", answer: "With supported payment gateways, a deposit is pre-authorised at booking and released after the post-rental inspection." },
      { question: "Do you take a commission on our bookings?", answer: "No. Direct bookings through your own site carry 0% platform commission — you pay your normal gateway fee and a flat monthly subscription." },
      { question: "What happens if a rental is cut short or extended?", answer: "Adjust the booking and pricing and availability update. Changes to a paid order create a credit note rather than overwriting it." },
    ]
  },
  {
    id: 'boat-rental-courses',
    name: 'Boat Rental & Courses',
    slug: 'boat-rental-courses',
    heroHeadline: 'Run your boat operation from one HQ.',
    heroDescription: 'Manage high-value boat charters, licensing checks, and powerboat courses.',
    heroProofPoints: [
      "Licence and ID checked before the charter",
      "Deposits pre-authorised and released cleanly",
      "0% commission on direct bookings",
    ],
    painPoint: 'Handing over a boat worth six figures depends on two things going right: the right licence on file for a bareboat charter, and a security deposit that is actually held. Chase both by email and one of them slips — the client turns up without the paperwork, or the deposit was never taken.',
    keyCapability: 'The booking collects the licence and ID up front for staff to verify, pre-authorises the deposit through your gateway, and holds the specific vessel — so nothing is handed over until the checks clear.',
    representativeFlow: [
      "Client books a bareboat charter online.",
      "RidgeHQ prompts them to upload their boat license and ID.",
      "Staff verifies the documents before the arrival day.",
      "A security deposit is held via the integrated payment gateway.",
      "After the post-rental inspection, the deposit is released."
    ],
    featureSections: [
      {
        heading: "Charters and courses from one calendar",
        body: "Bareboat and skippered charters and taught powerboat courses draw from the same fleet availability, so a boat out on a course is not offered for a weekend charter.",
        points: [
          "Public booking widget for charters and courses with deposits or full payment",
          "Bareboat, skippered, and instruction bookings managed on the same vessels",
          "Front-desk POS for fuel, provisioning, and extras on one ticket",
          "0% platform commission on your direct bookings",
        ],
      },
      {
        heading: "Checks before the keys",
        body: "Document collection, verification, and the deposit are part of the booking flow, and the vessel's own compliance dates are tracked.",
        points: [
          "Licence and ID uploaded by the client before arrival for staff to verify",
          "Booking held in an unverified state until the documents are cleared",
          "Security deposit pre-authorised through supported gateways and released after inspection",
          "Vessel records with capacity, registration, and inspection / licence / insurance expiry tracking",
          "Skipper assignment per vessel for skippered charters and courses",
        ],
      },
      {
        heading: "Handover and books stay clean",
        body: "Waivers, condition records, and confirmations travel with the booking, and money-affecting changes leave a clean trail.",
        points: [
          "Digital waivers per participant with typed e-signature and conditional experience questions — built in",
          "Pre-departure condition notes and post-charter inspection recorded against the booking",
          "Automated confirmations and joining instructions with berth and check-in time",
          "Order-safe changes: edits to a paid order create a credit note, not a silent rewrite",
          "An AI copilot that reads the schedule and can reschedule charters or reassign skippers, with confirmation",
        ],
      },
    ],
    workflow: [
      { title: "Booking", detail: "A client books a bareboat charter online and pays a deposit toward the fee." },
      { title: "Documents", detail: "The client uploads their boat licence and ID; the booking stays unverified until staff clear them." },
      { title: "Deposit", detail: "A security deposit is pre-authorised through your gateway ahead of the arrival day." },
      { title: "Handover", detail: "With checks cleared, the specific vessel is handed over and pre-departure condition is recorded." },
      { title: "Return", detail: "The post-charter inspection is logged against the booking and any damage noted." },
      { title: "Settle", detail: "The deposit is released after inspection and the numbers land in reporting." },
    ],
    outcomes: [
      { label: "No handover without the paperwork", detail: "The booking stays unverified until the licence and ID are checked." },
      { label: "Deposits are actually held", detail: "Pre-authorised at booking and released after inspection, on the same order." },
      { label: "Charters and courses don't clash", detail: "One fleet calendar, so a boat on a course is not chartered the same dates." },
      { label: "Compliance dates in view", detail: "Inspection, licence, and insurance expiry are tracked on the vessel." },
    ],
    constraints: [
      "Vessel availability and turnaround time between bookings",
      "Client licence and ID verification status",
      "Skipper and instructor availability for skippered work",
      "Inspection, licence, and insurance expiry per vessel",
      "Security deposit pre-authorisation and release",
    ],
    faqs: [
      { question: "Can clients upload documents before arriving?", answer: "Yes. The client uploads their licence and ID with the booking, and the booking stays unverified until your staff have checked them." },
      { question: "How are security deposits handled?", answer: "With supported payment gateways, the deposit is pre-authorised at booking and released after the post-charter inspection." },
      { question: "Can we run charters and courses on the same boats?", answer: "Yes. Bareboat, skippered, and instruction bookings draw from the same fleet availability, so the two cannot book a vessel for overlapping dates." },
      { question: "Does it track vessel compliance?", answer: "Each vessel records its registration and its inspection, licence, and insurance expiry dates, and is flagged as those dates approach." },
      { question: "Do you take a commission on our bookings?", answer: "No. Direct bookings through your own site carry 0% platform commission — you pay your normal gateway fee and a flat monthly subscription." },
      { question: "What happens if a charter is shortened or cancelled?", answer: "Changes to a paid order create a credit note rather than overwriting it, so your accounts stay reconcilable." },
    ]
  }
];
