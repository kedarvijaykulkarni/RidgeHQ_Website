export interface FAQ {
  question: string;
  answer: string;
}

export const generalFaqs: FAQ[] = [
  {
    question: 'How is RidgeHQ different from standard booking software?',
    answer: 'Standard booking software stops at the transaction. RidgeHQ connects the booking directly to your operational plan — it lands on the session your team works from, rentals reserve the specific unit, and payments flow into the daily close and reporting — without a second system.',
  },
  {
    question: 'Do you charge a commission on bookings?',
    answer: 'No. We charge 0% platform commission on your direct website bookings. You only pay your standard payment gateway fees (like Stripe) and our predictable monthly subscription.',
  },
  {
    question: 'How does the AI Copilot work?',
    answer: 'The RidgeHQ Copilot is built into your operational context. It can inspect availability, suggest schedule adjustments, and help manage resources. It uses the same secure permissions as your staff, and critical actions require your confirmation.',
  },
  {
    question: 'Is my business type supported?',
    answer: 'RidgeHQ is designed for operators who manage complex combinations of people, time, and gear. This includes dive centers, surf schools, boat and bike rentals, outdoor tours, and activity resorts.',
  },
  {
    question: 'Can I use RidgeHQ from Claude, ChatGPT, or Claude Code?',
    answer: 'Yes. RidgeHQ supports MCP (Model Context Protocol), so you can connect your own AI assistant to your account and ask for things like today’s brief, bookings, or availability, with everyday scheduling changes confirmed before they run. It requires a RidgeHQ account on the Grow or Scale plan — see /docs for setup.',
  },
];
