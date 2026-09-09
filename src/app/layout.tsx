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
                "@id": "https://www.ridgehq.app/#organization",
                "name": "RidgeHQ",
                "url": "https://www.ridgehq.app",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.ridgehq.app/images/logo/ridgehq-logo-512x512.png"
                },
                "sameAs": [
                  "https://twitter.com/ridgehq",
                  "https://linkedin.com/company/ridgehq"
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://www.ridgehq.app/#website",
                "url": "https://www.ridgehq.app",
                "name": "RidgeHQ",
                "publisher": {
                  "@id": "https://www.ridgehq.app/#organization"
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
