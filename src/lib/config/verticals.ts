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
}

export const verticals: Vertical[] = [
  {
    id: 'dive-centers',
    name: 'Dive Centers',
    slug: 'dive-centers',
    heroHeadline: 'Run your entire dive center from one HQ.',
    heroDescription: 'Coordinate instructors, boat capacity, rental gear, and course bookings in one connected system.',
    painPoint: 'Managing boat manifests and student records across different systems.',
    keyCapability: 'Integrated boat dispatch and certification tracking.',
    representativeFlow: [
      "Customer books an open water course online and fills in medical forms.",
      "RidgeHQ automatically reserves the required gear sizing and tank slots.",
      "Instructor is assigned based on language preference and availability.",
      "Boat manifest automatically updates with the correct pax count and weight limits.",
      "Post-dive logs and certification progress are recorded in the client profile."
    ],
    constraints: [
      "Boat seating capacity and weight distribution",
      "Instructor-to-student ratios for different course types",
      "Specialty tank and gear availability"
    ],
    faqs: [
      { question: "Does it integrate with PADI/SSI?", answer: "RidgeHQ acts as your operational system of record and holds certification info for your manifests, though final cert issuance still happens via your agency portal." },
      { question: "Can we handle multiple boats?", answer: "Yes, you can manage separate manifests, crew schedules, and departure times for multiple vessels simultaneously." }
    ]
  },
  {
    id: 'surf-schools',
    name: 'Surf Schools',
    slug: 'surf-schools',
    heroHeadline: 'Run your surf school from one HQ.',
    heroDescription: 'Manage changing conditions, instructor schedules, and board rentals seamlessly.',
    painPoint: 'Rescheduling sessions manually when the tide or swell changes.',
    keyCapability: 'Tide-aware scheduling and instant resource reallocation.',
    representativeFlow: [
      "Group books a 3-day beginner camp online.",
      "RidgeHQ checks instructor availability against the incoming swell forecast.",
      "Foamies and wetsuits are automatically reserved from the rental fleet.",
      "If conditions change, bulk-reschedule the group and send automated SMS updates.",
      "Track student progress across the 3 days."
    ],
    constraints: [
      "Tide charts and safe swell conditions",
      "Wetsuit sizing and board availability",
      "Instructor availability based on certification level (e.g., ISA L1 vs L2)"
    ],
    faqs: [
      { question: "How does it handle bad weather?", answer: "You can bulk-reschedule affected sessions and automatically notify all participants via SMS and email with a few clicks." },
      { question: "Can it manage private and group lessons?", answer: "Yes, the calendar handles private sessions, open group classes, and multi-day camps simultaneously." }
    ]
  },
  {
    id: 'kitesurf-schools',
    name: 'Kitesurf Schools',
    slug: 'kitesurf-schools',
    heroHeadline: 'Run your kitesurf school from one HQ.',
    heroDescription: 'Connect wind conditions to your schedule, manage expensive gear, and track student progression (IKO/VDWS).',
    painPoint: 'Wasting time manually communicating wind delays and finding available matched gear sizes.',
    keyCapability: 'Wind-dependent scheduling and precise kite size inventory management.',
    representativeFlow: [
      "Student books a block of 6 hours of instruction.",
      "Lessons are scheduled but marked as 'wind-dependent'.",
      "When the wind hits 15 knots, instructor is confirmed.",
      "Specific kite sizes (e.g., 9m or 12m) and harnesses are reserved based on the student's weight.",
      "Progress is tracked step-by-step for IKO/VDWS sign-off."
    ],
    constraints: [
      "Strict wind window requirements (e.g., 12-25 knots)",
      "Kite size limits based on live wind speed and student weight",
      "Radio helmet and safety boat availability"
    ],
    faqs: [
      { question: "Can we manage boat-assisted lessons?", answer: "Yes, you can schedule and manage safety boat availability alongside your instructors." },
      { question: "Does it track student levels?", answer: "Yes, you can log progress against standard progression steps so the next instructor knows exactly where to pick up." }
    ]
  },
  {
    id: 'sailing-schools',
    name: 'Sailing Schools',
    slug: 'sailing-schools',
    heroHeadline: 'Run your sailing school from one HQ.',
    heroDescription: 'Manage multi-day courses, boat fleet maintenance, and certified instructor scheduling.',
    painPoint: 'Juggling vessel availability against instructor schedules and multi-day course constraints.',
    keyCapability: 'Fleet management integrated directly with long-form scheduling.',
    representativeFlow: [
      "Client books a 5-day competent crew course.",
      "RidgeHQ reserves a specific keelboat for the duration.",
      "A qualified skipper is assigned for the 5-day block.",
      "Automated reminders send out packing lists and joining instructions.",
      "Post-course, the boat is scheduled for a turnaround/cleaning block."
    ],
    constraints: [
      "Boat availability and scheduled maintenance blocks",
      "Skipper qualification requirements",
      "Minimum crew limits for specific vessels"
    ],
    faqs: [
      { question: "Can we handle bareboat charters too?", answer: "Yes, the system handles both guided instruction courses and pure fleet rentals." },
      { question: "How are multi-day courses displayed?", answer: "Multi-day blocks are clearly visualized on the agenda, blocking both the vessel and the instructor for the duration." }
    ]
  },
  {
    id: 'windsurf-schools',
    name: 'Windsurf Schools',
    slug: 'windsurf-schools',
    heroHeadline: 'Run your windsurf center from one HQ.',
    heroDescription: 'Manage high-volume rentals, storage slots, and wind-dependent lessons.',
    painPoint: 'Losing track of rental gear on the water and managing rigid storage contracts.',
    keyCapability: 'Live rental tracking and long-term storage management.',
    representativeFlow: [
      "Client walks in for a 2-hour equipment rental.",
      "Staff assigns a specific board and rig via the POS.",
      "The system tracks the return time and alerts if overdue.",
      "Client decides to book a lesson for the next day, seamlessly added to their profile.",
      "Payment for both is handled on one invoice."
    ],
    constraints: [
      "Wind conditions for beginner vs. advanced lessons",
      "Rig and board volume matching to student skill",
      "Physical storage rack availability for client gear"
    ],
    faqs: [
      { question: "Can we manage long-term gear storage for clients?", answer: "Yes, you can manage and bill for long-term storage racks directly in the platform." },
      { question: "Does it work well for quick walk-in rentals?", answer: "The point-of-sale is designed for rapid walk-in processing, getting clients on the water quickly." }
    ]
  },
  {
    id: 'outdoor-whitewater',
    name: 'Outdoor & Whitewater',
    slug: 'outdoor-whitewater',
    heroHeadline: 'Run your outdoor operation from one HQ.',
    heroDescription: 'Coordinate guides, transport shuttles, and large group bookings for rafting and canyoning.',
    painPoint: 'Coordinating complex logistics like shuttle buses and varying guide ratios.',
    keyCapability: 'Integrated logistics, transport mapping, and group management.',
    representativeFlow: [
      "Corporate group of 30 books a half-day rafting trip.",
      "RidgeHQ calculates the need for 5 rafts and 6 guides.",
      "Transport shuttle seats are automatically reserved.",
      "Waivers are sent out and tracked digitally before arrival.",
      "Guides see their assigned rafts and passenger lists on their phones."
    ],
    constraints: [
      "Water levels and flow rates",
      "Strict guide-to-client ratios per raft",
      "Shuttle bus seating capacity"
    ],
    faqs: [
      { question: "How does it handle digital waivers?", answer: "Waivers are sent automatically upon booking and tracked against the booking record, ensuring nobody boards without signing." },
      { question: "Can we manage shuttle transport?", answer: "Yes, you can attach transport resources (like a 15-seater van) to activities to ensure you don't overbook your shuttles." }
    ]
  },
  {
    id: 'ski-schools',
    name: 'Ski Schools',
    slug: 'ski-schools',
    heroHeadline: 'Run your ski school from one HQ.',
    heroDescription: 'Assign instructors based on skill levels and manage peak-season booking volume.',
    painPoint: 'Matching student ability levels with the right instructor availability during morning rush hours.',
    keyCapability: 'Skills-based instructor assignment and high-volume group management.',
    representativeFlow: [
      "Family books private lessons and group classes for different kids.",
      "RidgeHQ flags missing ability levels and requests them.",
      "Instructors are assigned based on language skills and certification levels.",
      "Morning meeting points are communicated automatically via SMS.",
      "End-of-week medals and progress are logged."
    ],
    constraints: [
      "Instructor language capabilities",
      "Instructor certification levels (e.g., off-piste vs beginner)",
      "Strict morning and afternoon scheduling blocks"
    ],
    faqs: [
      { question: "Can we filter instructors by language?", answer: "Yes, instructors can be tagged with languages and specific certifications to ensure the right match for the client." },
      { question: "Does it handle peak-season walk-ins quickly?", answer: "The fast POS interface allows your desk staff to book and assign walk-ins rapidly during the morning rush." }
    ]
  },
  {
    id: 'dive-resorts',
    name: 'Dive Resorts',
    slug: 'dive-resorts',
    heroHeadline: 'Run your dive resort from one HQ.',
    heroDescription: 'Connect accommodation bookings with daily dive operations and full-board packages.',
    painPoint: 'Using separate software for hotel beds and dive boats, leading to billing nightmares.',
    keyCapability: 'Unified accommodation and activity scheduling with single-folio billing.',
    representativeFlow: [
      "Guest books a 7-night 'Stay & Dive' package.",
      "A room is blocked out in the accommodation module.",
      "10 dive slots are credited to their profile.",
      "As they dive each day, slots are drawn down from their package.",
      "At checkout, room, dives, and bar tabs are settled on a single invoice."
    ],
    constraints: [
      "Room availability and turnaround times",
      "Package inclusion limits (e.g., max 10 dives)",
      "Boat and guide availability for resort guests vs externals"
    ],
    faqs: [
      { question: "Can we bill everything to the room?", answer: "Yes, activities, retail items, and rentals can be billed to the guest's master folio for settlement at checkout." },
      { question: "Does it manage room cleaning statuses?", answer: "Yes, the accommodation module includes basic housekeeping statuses to manage turnovers." }
    ]
  },
  {
    id: 'surf-camps',
    name: 'Surf Camps',
    slug: 'surf-camps',
    heroHeadline: 'Run your surf camp from one HQ.',
    heroDescription: 'Manage beds, meals, daily surf lessons, and airport transfers in one unified system.',
    painPoint: 'Coordinating arrivals, bed assignments, and lesson groups across disparate spreadsheets.',
    keyCapability: 'Seamless integration of hospitality and activity operations.',
    representativeFlow: [
      "Guest books a 1-week surf camp package with airport transfer.",
      "RidgeHQ adds them to the Sunday arrival transfer manifest.",
      "A bed in the shared dorm is assigned.",
      "They are automatically added to the morning beginner surf group for the week.",
      "Dietary requirements are flagged for the kitchen."
    ],
    constraints: [
      "Bed and room capacity",
      "Instructor ratios for the included lessons",
      "Transfer vehicle limits"
    ],
    faqs: [
      { question: "Can we manage shared dorms?", answer: "Yes, you can manage bookings by the bed in shared dormitories as well as private rooms." },
      { question: "Can we track dietary requirements?", answer: "Yes, custom fields allow you to collect and report on dietary needs for your camp's meal planning." }
    ]
  },
  {
    id: 'kayak-rental-tours',
    name: 'Kayak Rental & Tours',
    slug: 'kayak-rental-tours',
    heroHeadline: 'Run your kayak operation from one HQ.',
    heroDescription: 'Track live inventory for rentals while scheduling guides for group tours.',
    painPoint: 'Double-booking equipment between walk-in rentals and scheduled tours.',
    keyCapability: 'Unified inventory across rentals and guided activities.',
    representativeFlow: [
      "A group books a guided sunset tour online.",
      "RidgeHQ reserves 10 double kayaks and assigns a guide.",
      "Meanwhile, a walk-in requests 2 single kayaks for 1 hour.",
      "The POS only allows renting out singles that aren't needed for the upcoming tour.",
      "Waivers are signed digitally via QR code on site."
    ],
    constraints: [
      "Physical inventory of single vs. double kayaks",
      "Turnaround time for cleaning/checking gear",
      "Guide availability and legal ratios"
    ],
    faqs: [
      { question: "Does it prevent double-booking gear?", answer: "Yes, gear assigned to a scheduled tour is automatically removed from the available pool for walk-in rentals." },
      { question: "Can we do QR code waivers?", answer: "Yes, you can display a QR code at the desk for walk-ins to sign waivers on their own phones." }
    ]
  },
  {
    id: 'bike-rental-tours',
    name: 'Bike Rental & Tours',
    slug: 'bike-rental-tours',
    heroHeadline: 'Run your bike operation from one HQ.',
    heroDescription: 'Manage a complex fleet of e-bikes, mountain bikes, and guided tours.',
    painPoint: 'Tracking maintenance history, battery charging cycles, and precise sizing availability.',
    keyCapability: 'Asset-level tracking and maintenance scheduling.',
    representativeFlow: [
      "Customer books an e-MTB rental for 3 days.",
      "RidgeHQ reserves a size 'Large' bike.",
      "Upon return, the mechanic logs a brake issue in the system.",
      "The specific bike is marked 'Out of Service' and removed from inventory.",
      "Once repaired, it is released back into the available fleet."
    ],
    constraints: [
      "Frame sizing matches (S, M, L, XL)",
      "Battery charging turnaround times",
      "Maintenance blocks and safety checks"
    ],
    faqs: [
      { question: "Can we track maintenance per bike?", answer: "Yes, you can track service history and flag specific assets as out of order, immediately updating your availability." },
      { question: "Does it handle multi-day pricing correctly?", answer: "Yes, the pricing engine supports complex multi-day rules, half-days, and seasonal pricing." }
    ]
  },
  {
    id: 'boat-rental-courses',
    name: 'Boat Rental & Courses',
    slug: 'boat-rental-courses',
    heroHeadline: 'Run your boat operation from one HQ.',
    heroDescription: 'Manage high-value boat charters, licensing checks, and powerboat courses.',
    painPoint: 'Verifying licenses for bareboat charters and managing high-value deposits.',
    keyCapability: 'Document verification workflows and robust deposit management.',
    representativeFlow: [
      "Client books a bareboat charter online.",
      "RidgeHQ prompts them to upload their boat license and ID.",
      "Staff verifies the documents before the arrival day.",
      "A security deposit is held via the integrated payment gateway.",
      "After the post-rental inspection, the deposit is released."
    ],
    constraints: [
      "Vessel availability and turnaround time",
      "License verification status",
      "Captain/crew availability (if skippered)"
    ],
    faqs: [
      { question: "Can clients upload documents before arriving?", answer: "Yes, the customer portal allows them to upload licenses, IDs, and sign waivers in advance." },
      { question: "How are security deposits handled?", answer: "With supported payment gateways, you can pre-authorize and hold security deposits, releasing them post-charter." }
    ]
  }
];
