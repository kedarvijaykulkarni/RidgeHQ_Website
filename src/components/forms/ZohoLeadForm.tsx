"use client";

import React, { useEffect, useState, useRef } from "react";
import { LeadIntent } from "@/lib/zoho/formIntent";
import { buildZohoFormUrl } from "@/lib/zoho/buildZohoFormUrl";

interface ZohoLeadFormProps {
  intent: LeadIntent;
  sourcePage: string;
  sourceCta?: string;
  vertical?: string;
  planInterest?: string;
}

export function ZohoLeadForm({ intent, sourcePage, vertical, planInterest }: ZohoLeadFormProps) {
  const [mounted, setMounted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setMounted(true);
    
    const handleMessage = (event: MessageEvent) => {
      const evntData = event.data;
      if (evntData && typeof evntData === 'string') {
        const zf_ifrm_data = evntData.split("|");
        if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
          const zf_perma = zf_ifrm_data[0];
          const zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[1], 10) + 15) + "px";
          
          const iframe = iframeRef.current;
          if (iframe && iframe.src.indexOf('formperma') > 0 && iframe.src.indexOf(zf_perma) > 0) {
            const prevIframeHeight = iframe.style.height;
            const zf_tout = zf_ifrm_data.length === 3;
            
            if (zf_tout) {
              iframe.scrollIntoView({ behavior: 'smooth' });
            }

            if (prevIframeHeight !== zf_ifrm_ht_nw) {
              if (zf_tout) {
                setTimeout(() => {
                  if (iframeRef.current) iframeRef.current.style.height = zf_ifrm_ht_nw;
                }, 500);
              } else {
                iframe.style.height = zf_ifrm_ht_nw;
              }
            }
          }
        }
      }
    };
    
    window.addEventListener('message', handleMessage, false);
    return () => window.removeEventListener('message', handleMessage, false);
  }, []);

  if (!mounted) {
    return <div className="h-[600px] w-full animate-pulse bg-slate-900/50 rounded-xl" />;
  }

  const formUrl = process.env.NEXT_PUBLIC_ZOHO_FORM_URL;

  if (!formUrl) {
    return (
      <div className="w-full max-w-2xl mx-auto glass-card p-6 md:p-8">
        <div className="text-center space-y-4 py-12">
          <div className="w-16 h-16 bg-yellow-500/20 rounded-full mx-auto flex items-center justify-center">
            <span className="text-2xl">⚠️</span>
          </div>
          <h3 className="text-2xl font-semibold">Missing Zoho Configuration</h3>
          <p className="text-slate-400">
            The <code>NEXT_PUBLIC_ZOHO_FORM_URL</code> environment variable is not set.
            Please complete the Zoho Admin Setup and provide the public permalink.
          </p>
          <div className="pt-4 border-t border-white/10 text-left text-sm text-slate-500">
            <p className="mb-2 font-mono">Current Context payload:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Intent: {intent}</li>
              <li>Source Page: {sourcePage}</li>
              {vertical && <li>Vertical: {vertical}</li>}
              {planInterest && <li>Plan Interest: {planInterest}</li>}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  const embedUrl = buildZohoFormUrl(formUrl, {
    intent,
    sourcePage,
    vertical,
    planInterest
  });

  return (
    <div className="w-full mx-auto relative rounded-xl overflow-hidden glass-card">
      <iframe 
        ref={iframeRef}
        src={embedUrl}
        className="w-full min-h-[650px] border-none transition-all duration-500 ease-in-out"
        style={{ height: '650px' }}
        title="RidgeHQ Inquiry Form"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}
