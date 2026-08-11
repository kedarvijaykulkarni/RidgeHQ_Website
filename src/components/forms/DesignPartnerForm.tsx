"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import Script from "next/script";

export function DesignPartnerForm() {
  const [returnUrl, setReturnUrl] = useState("https://ridgehq.app/thank-you");

  useEffect(() => {
    // Set the return URL dynamically based on the current environment so it works locally and in production.
    setReturnUrl(`${window.location.origin}/thank-you`);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto p-8 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] shadow-xl relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]"></div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[var(--ink)]">Apply for the Design Partner Program</h2>
        <p className="text-[var(--ink-secondary)] mt-2">Fill out the details below and our founding team will be in touch shortly.</p>
      </div>

      <form 
        action="https://crm.zoho.in/crm/WebToLeadForm" 
        name="WebToLeads1393031000000539006" 
        method="POST" 
        acceptCharset="UTF-8"
        className="space-y-6"
      >
        {/* Zoho Hidden Fields */}
        <input type="hidden" name="xnQsjsdp" value="db4f7ed1a29d2e065e821b81d6801e52bd1a825dd7de961eeafb258d3989e52d" />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input type="hidden" name="xmIwtLD" value="687ea5a725558af84ea06c41f64bfc4b7757697f2eb2c40487e84815b088a7b7c6716a8f0d06407139300ac23667d58b" />
        <input type="hidden" name="actionType" value="TGVhZHM=" />
        <input type="hidden" name="returnURL" value={returnUrl} />
        <input type="hidden" name="aG9uZXlwb3Q" value="" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="First_Name" className="text-sm font-medium text-[var(--ink)]">First Name</label>
            <input 
              type="text" 
              id="First_Name" 
              name="First Name" 
              maxLength={40}
              className="w-full bg-black/20 border border-[var(--border)] rounded-md px-4 py-2 text-[var(--ink)] placeholder:text-[var(--ink-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="Last_Name" className="text-sm font-medium text-[var(--ink)]">Last Name <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              id="Last_Name" 
              name="Last Name" 
              required
              maxLength={80}
              className="w-full bg-black/20 border border-[var(--border)] rounded-md px-4 py-2 text-[var(--ink)] placeholder:text-[var(--ink-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="Email" className="text-sm font-medium text-[var(--ink)]">Work Email <span className="text-red-500">*</span></label>
            <input 
              type="email" 
              id="Email" 
              name="Email" 
              required
              maxLength={100}
              className="w-full bg-black/20 border border-[var(--border)] rounded-md px-4 py-2 text-[var(--ink)] placeholder:text-[var(--ink-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="Phone" className="text-sm font-medium text-[var(--ink)]">Phone Number</label>
            <input 
              type="tel" 
              id="Phone" 
              name="Phone" 
              maxLength={30}
              className="w-full bg-black/20 border border-[var(--border)] rounded-md px-4 py-2 text-[var(--ink)] placeholder:text-[var(--ink-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="Company" className="text-sm font-medium text-[var(--ink)]">Company Name <span className="text-red-500">*</span></label>
          <input 
            type="text" 
            id="Company" 
            name="Company" 
            required
            maxLength={200}
            className="w-full bg-black/20 border border-[var(--border)] rounded-md px-4 py-2 text-[var(--ink)] placeholder:text-[var(--ink-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="Website" className="text-sm font-medium text-[var(--ink)]">Website</label>
          <input 
            type="url" 
            id="Website" 
            name="Website" 
            maxLength={255}
            className="w-full bg-black/20 border border-[var(--border)] rounded-md px-4 py-2 text-[var(--ink)] placeholder:text-[var(--ink-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
          />
        </div>

        <div className="pt-4 border-t border-[var(--border)]">
          <h3 className="text-sm font-bold text-[var(--ink)] mb-4">Location & Additional Info</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label htmlFor="Address_-_City" className="text-sm font-medium text-[var(--ink)]">City <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                id="Address_-_City" 
                name="Address - City" 
                required
                maxLength={255}
                className="w-full bg-black/20 border border-[var(--border)] rounded-md px-4 py-2 text-[var(--ink)] placeholder:text-[var(--ink-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="Address_-_Country_/_Region" className="text-sm font-medium text-[var(--ink)]">Country / Region <span className="text-red-500">*</span></label>
              <select 
                id="Address_-_Country_/_Region" 
                name="Address - Country / Region" 
                required
                defaultValue="-None-"
                className="w-full bg-black/20 border border-[var(--border)] rounded-md px-4 py-2 text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all appearance-none"
              >
                <option value="-None-" disabled>- Select Country -</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="Description" className="text-sm font-medium text-[var(--ink)]">Tell us about your operation and challenges</label>
            <textarea 
              id="Description" 
              name="Description" 
              rows={4}
              className="w-full bg-black/20 border border-[var(--border)] rounded-md px-4 py-3 text-[var(--ink)] placeholder:text-[var(--ink-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all resize-y"
            ></textarea>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Apply to Partner Program
          </Button>
        </div>
        
        {/* Hidden script provided by Zoho for analytics tracking */}
        <Script id="wf_anal" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=c7120b2db8ee43406699ace10f963ad5bb05861117b2f38ef0ae11a94d3d0c24b8fe44ffea890b2b587b8363ac8d39c4gid8c879a9148b8fe4e059f35909b4d142fa4b4803ccaac99ca58c38e711ad8ac0fgid417d9aa65b89f410d958123e91b6662b8e1a1b834030e38c8aa0dee05b863a22gid2471e9066d7492a379267e925112c34658bdb9c5107d521264ad82f24dccae51&tw=fcbb2e14e03fbb9578729c8cf7c05a7c66e997c6cd39399843dba456cf8010db&version=v2" strategy="afterInteractive" />
      </form>
    </div>
  );
}
