export interface ReadinessQuestion {
  id: string;
  question: string;
  /** Higher points = further from a connected system, i.e. more spreadsheet/manual reliance. */
  options: { label: string; points: number }[];
}

export interface ReadinessBand {
  minScore: number;
  maxScore: number;
  label: string;
  description: string;
}

export const readinessQuestions: ReadinessQuestion[] = [
  {
    id: "booking-source",
    question: "Where do most of your bookings get recorded first?",
    options: [
      { label: "A single connected system", points: 0 },
      { label: "A booking widget, then re-typed elsewhere", points: 2 },
      { label: "A spreadsheet or paper diary", points: 3 },
    ],
  },
  {
    id: "staff-schedule",
    question: "How is the staff/instructor schedule kept in sync with bookings?",
    options: [
      { label: "It updates automatically from bookings", points: 0 },
      { label: "Someone updates it manually from the booking list", points: 2 },
      { label: "It's a separate whiteboard or group chat", points: 3 },
    ],
  },
  {
    id: "gear-tracking",
    question: "How do you know what gear/equipment is available right now?",
    options: [
      { label: "The system shows live availability", points: 0 },
      { label: "Someone checks a spreadsheet or physical rack", points: 2 },
      { label: "We generally find out at handover", points: 3 },
    ],
  },
  {
    id: "reconciliation",
    question: "How much time per week goes into reconciling bookings, schedules, and gear across tools?",
    options: [
      { label: "Little to none — one system, no reconciling", points: 0 },
      { label: "A few hours a week", points: 2 },
      { label: "It's a daily task for someone", points: 3 },
    ],
  },
  {
    id: "growth-plan",
    question: "Are you planning to add staff, locations, or booking volume in the next year?",
    options: [
      { label: "No significant change expected", points: 0 },
      { label: "Some growth expected", points: 1 },
      { label: "Yes, meaningful growth expected", points: 2 },
    ],
  },
];

export const readinessBands: ReadinessBand[] = [
  {
    minScore: 0,
    maxScore: 3,
    label: "Low urgency",
    description:
      "Your current tools are mostly keeping up with each other. A connected system would still remove some manual work, but the case for switching is weaker than for an operation with more reconciliation overhead.",
  },
  {
    minScore: 4,
    maxScore: 8,
    label: "Worth investigating",
    description:
      "There's real manual reconciliation happening between your booking, staff, and gear tools. Worth quantifying with the cost calculators above before deciding whether to switch.",
  },
  {
    minScore: 9,
    maxScore: 14,
    label: "Strong case for a connected system",
    description:
      "Multiple disconnected tools plus real reconciliation overhead — this is the pattern a connected operational system is specifically built to remove.",
  },
];

export function scoreReadiness(answerPoints: number[]): number {
  return answerPoints.reduce((sum, points) => sum + points, 0);
}

export function getReadinessBand(score: number): ReadinessBand {
  return (
    readinessBands.find((band) => score >= band.minScore && score <= band.maxScore) ??
    readinessBands[readinessBands.length - 1]
  );
}
