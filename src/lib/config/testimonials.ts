/**
 * Testimonial content for the `Testimonial` component (#43). No real, attributed
 * testimonial exists yet — this ships with zero entries by design, same pattern as
 * case-studies.ts. Every entry must be a real, consented quote from a named person;
 * never fabricate one to fill this out. See the marketing-copy-guardrails rule:
 * marketing never outruns the code.
 */
export interface Testimonial {
  name: string;
  role: string;
  business: string;
  quote: string;
  avatarSrc?: string;
}

export const testimonials: Testimonial[] = [];
