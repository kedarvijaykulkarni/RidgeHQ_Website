export type IntegrationState = 'implemented' | 'partial' | 'planned';

export interface Integration {
  id: string;
  name: string;
  category: string;
  state: IntegrationState;
  description: string;
}

// States verified against the Brain vault's development-reference
// Architecture/Integration-Architecture.md and Development-Index.md
// (2026-10-06). Keep the order implemented → partial → planned: the home
// page shows the first implemented entries.
export const integrations: Integration[] = [
  {
    id: 'stripe',
    name: 'Stripe',
    category: 'Payments',
    state: 'implemented',
    description: 'Card payments for online checkout, recorded against the order they settle. Online orders confirm only once the payment succeeds.',
  },
  {
    id: 'booking-widget',
    name: 'Booking widget embed',
    category: 'Your website',
    state: 'implemented',
    description: 'Embed the booking checkout on your own site, with an allow-list of the domains permitted to show it.',
  },
  {
    id: 'ai-providers',
    name: 'Anthropic, OpenAI, Ollama',
    category: 'AI Copilot',
    state: 'implemented',
    description: 'Choose the model provider behind the AI Copilot, with your own API key or a self-hosted Ollama model.',
  },
  {
    id: 'mcp',
    name: 'Claude & ChatGPT (MCP)',
    category: 'AI assistants',
    state: 'implemented',
    description: 'Connect an outside AI assistant to your account with a revocable access token that carries a staff role.',
  },
  {
    id: 'stormglass',
    name: 'Stormglass',
    category: 'Marine weather',
    state: 'implemented',
    description: 'Hourly wind, wave, swell, water-temperature, and tide data for each of your spots, shown beside the schedule.',
  },
  {
    id: 'email',
    name: 'Email delivery',
    category: 'Notifications',
    state: 'implemented',
    description: 'Booking confirmations, cancellations, and messages to a session’s or trip’s participants, sent from RidgeHQ.',
  },
  {
    id: 'ical',
    name: 'Calendar feed (iCal)',
    category: 'Calendars',
    state: 'implemented',
    description: 'A private, read-only subscription feed of your sessions for Google, Apple, or Outlook calendars — no customer data included.',
  },
  {
    id: 'paypal-redsys',
    name: 'PayPal & Redsys',
    category: 'Payments',
    state: 'partial',
    description: 'Gateway adapters exist alongside Stripe; talk to us before relying on them for your checkout.',
  },
  {
    id: 'agency-certifications',
    name: 'PADI / SSI',
    category: 'Certification',
    state: 'planned',
    description: 'Agency-system integration is on the roadmap. Today, certifications are recorded and verified by your staff in RidgeHQ.',
  },
  {
    id: 'accounting-export',
    name: 'Accounting export',
    category: 'Accounting',
    state: 'planned',
    description: 'An export to accounting software is planned. Today, reports and fee statements are available in RidgeHQ and as CSV.',
  },
];
