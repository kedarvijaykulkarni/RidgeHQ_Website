import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { StructuredData } from "@/components/seo/StructuredData";
import { defaultSeo } from "@/lib/config/seo";
import { GoogleAnalytics } from '@next/third-parties/google';

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
                "@id": "https://ridgehq.app/#organization",
                "name": "RidgeHQ",
                "url": "https://ridgehq.app",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://ridgehq.app/images/brand/logo.png"
                },
                "sameAs": [
                  "https://twitter.com/ridgehq",
                  "https://linkedin.com/company/ridgehq"
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://ridgehq.app/#website",
                "url": "https://ridgehq.app",
                "name": "RidgeHQ",
                "publisher": {
                  "@id": "https://ridgehq.app/#organization"
                }
              }
            ]
          }}
        />
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
