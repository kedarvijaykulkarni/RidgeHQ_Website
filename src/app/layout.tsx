import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { StructuredData } from "@/components/seo/StructuredData";
import { defaultSeo } from "@/lib/config/seo";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { GoogleAnalyticsPageView } from "@/components/analytics/GoogleAnalyticsPageView";
import { CTAEventTracker } from "@/components/analytics/CTAEventTracker";

import { siteUrl } from "@/lib/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = defaultSeo;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${siteUrl}/#organization`,
                "name": "RidgeHQ App",
                "alternateName": ["RidgeHQ", "RidgeHQ Software"],
                "url": siteUrl,
                "logo": {
                  "@type": "ImageObject",
                  "url": `${siteUrl}/images/logo/ridgehq-logo-512x512.png`
                },
                "sameAs": [
                  "https://x.com/ridgehqapp",
                  "https://www.linkedin.com/company/ridgehq",
                  "https://www.instagram.com/ridgehqapp/",
                  "https://www.facebook.com/profile.php?id=61593964984170",
                  "https://www.youtube.com/@ridgehq-app",
                  "https://www.reddit.com/user/ridgehq/"
                ]
              },
              {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                "url": siteUrl,
                "name": "RidgeHQ App",
                "alternateName": ["RidgeHQ", "RidgeHQ Software Platform"],
                "publisher": {
                  "@id": `${siteUrl}/#organization`
                }
              }
            ]
          }}
        />
        <Suspense fallback={null}>
          <GoogleAnalyticsPageView />
        </Suspense>
        <CTAEventTracker />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
