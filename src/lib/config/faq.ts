export interface FAQ {
  question: string;
  answer: string;
}

export const generalFaqs: FAQ[] = [
  {
    question: 'How is RidgeHQ different from standard booking software?',
    answer: 'Standard booking software stops at the transaction. RidgeHQ connects the booking directly into your daily operational plan—automatically updating staff schedules, resource availability, gear inventory, and reporting without needing a second system.',
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
];
