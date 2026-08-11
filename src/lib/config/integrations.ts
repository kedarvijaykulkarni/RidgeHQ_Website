export type IntegrationState = 'implemented' | 'partial' | 'planned';

export interface Integration {
  id: string;
  name: string;
  category: string;
  state: IntegrationState;
  description: string;
}

export const integrations: Integration[] = [
  {
    id: 'stripe',
    name: 'Stripe',
    category: 'Payments',
    state: 'implemented',
    description: 'Process online and in-person payments securely.',
  },
  {
    id: 'xero',
    name: 'Xero',
    category: 'Accounting',
    state: 'planned',
    description: 'Sync your invoices, payments, and operational revenue.',
  },
  {
    id: 'padi',
    name: 'PADI',
    category: 'Certification',
    state: 'planned',
    description: 'Verify student certifications and sync course records.',
  },
  {
    id: 'smartwaiver',
    name: 'Smartwaiver',
    category: 'Legal',
    state: 'planned',
    description: 'Digital liability waivers connected to participant profiles.',
  },
];
