import type { NextConfig } from "next";

// Baseline security headers applied to every response. A full
// Content-Security-Policy is intentionally left out for now — it needs to be
// tuned against the analytics/form embeds first — and is tracked separately.
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  images: {
    // Negotiate AVIF first, then WebP, then the original.
    formats: ["image/avif", "image/webp"],
    // 90 is used for the product screenshots (fine UI text); 75 is the
    // Next 16 default and must stay listed for everything else.
    qualities: [75, 90],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
