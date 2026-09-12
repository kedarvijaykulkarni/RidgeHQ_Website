/**
 * Case-study / evidence architecture (Phase 16 of the AI-discoverability
 * initiative). No real design-partner outcomes exist yet — this ships with
 * zero entries by design. The structure exists so the first real result can
 * be published as a content task, not an engineering one, once it exists.
 *
 * Never populate this with a hypothetical or illustrative story — that's a
 * different, explicitly-labeled format (see the "workflow example"
 * alternative noted in the tracking issue), not this one. Every entry here
 * must be a real, consented design-partner outcome.
 */
export interface CaseStudy {
  slug: string;
  businessType: string;
  problem: string;
  previousWorkflow: string;
  operationalChallenge: string;
  whyEvaluated: string;
  implementation: string;
  observedResult: string;
  customerQuote?: string;
  relevantCapabilities: string[]; // src/lib/config/platform.ts slugs
  publishedAt: string;
}

export const caseStudies: CaseStudy[] = [];
