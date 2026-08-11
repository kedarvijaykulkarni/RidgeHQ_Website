export type LeadIntent =
  | 'contact'
  | 'design_partner'
  | 'book_demo'
  | 'pricing_interest'
  | 'partner_interest';

export const intentLabels: Record<LeadIntent, string> = {
  contact: 'Contact / question',
  design_partner: 'Design partner / early access',
  book_demo: 'Book a demo',
  pricing_interest: 'Pricing / pilot interest',
  partner_interest: 'Partnership / integration',
};

export const getIntentLabel = (intent: LeadIntent): string => intentLabels[intent];
