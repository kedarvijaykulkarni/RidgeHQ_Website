import { LeadIntent, getIntentLabel } from './formIntent';

export interface ZohoFormContext {
  intent: LeadIntent;
  sourcePage: string;
  sourceCta?: string;
  vertical?: string;
  planInterest?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export function buildZohoFormUrl(baseUrl: string, context: ZohoFormContext): string {
  try {
    const url = new URL(baseUrl);
    
    // Enable iframe resizing messages
    url.searchParams.set('zf_rszfm', '1');

    // Map internal intent to exact choice label in Zoho Forms
    // In Zoho Forms, we map 'How can we help?' field to the 'intent' alias
    url.searchParams.set('intent', encodeURIComponent(getIntentLabel(context.intent)));
    
    if (context.sourcePage) {
      url.searchParams.set('source_page', encodeURIComponent(context.sourcePage));
    }
    
    if (context.vertical) {
      url.searchParams.set('vertical', encodeURIComponent(context.vertical));
    }

    if (context.planInterest) {
      url.searchParams.set('plan_interest', encodeURIComponent(context.planInterest));
    }
    
    // UTM parameters
    if (context.utmSource) url.searchParams.set('utm_source', encodeURIComponent(context.utmSource));
    if (context.utmMedium) url.searchParams.set('utm_medium', encodeURIComponent(context.utmMedium));
    if (context.utmCampaign) url.searchParams.set('utm_campaign', encodeURIComponent(context.utmCampaign));
    
    // Add referrer if executed on client
    if (typeof window !== 'undefined') {
      try {
        let rfr = window.location.href;
        if (window.self !== window.top) {
          rfr = document.referrer;
        }
        
        if (rfr) {
          // Truncate if too long (Zoho limit)
          if (rfr.length > 1800) {
            const queryIndex = rfr.indexOf('?');
            if (queryIndex > -1) rfr = rfr.substring(0, queryIndex);
            if (rfr.length > 1800) rfr = rfr.substring(0, 1800);
          }
          url.searchParams.set('referrername', encodeURIComponent(rfr));
        }
      } catch {
        // Ignore iframe cross-origin errors
      }
    }

    return url.toString();
  } catch (error) {
    console.error('Invalid Zoho Form URL configuration', error);
    return baseUrl;
  }
}
