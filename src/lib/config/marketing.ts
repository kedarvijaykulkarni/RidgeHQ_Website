export type MarketingPhase = 'pilot' | 'public';
export type PricingMode = 'pilot' | 'public';

export interface MarketingConfig {
  phase: MarketingPhase;
  pricingMode: PricingMode;
  allowSelfServiceSignup: boolean;
  commissionRateDirectBookings: string;
}

export const marketingConfig: MarketingConfig = {
  phase: 'pilot',
  pricingMode: 'pilot',
  allowSelfServiceSignup: false,
  commissionRateDirectBookings: '0%',
};
