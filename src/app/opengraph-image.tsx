import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Site-wide Open Graph / social card. Generated at build time so every page
// has a real, 200-returning `og:image` — the previous static reference
// (`/images/brand/og-image.jpg`) did not exist and 404'd on every page.
export const alt = "RidgeHQ — The Activity Business OS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Read once at module scope — the asset never changes per request.
const logoSrc = await readFile(
  join(process.cwd(), "public/images/logo/ridgehq-logo-512x512.png"),
).then((buf) => `data:image/png;base64,${buf.toString("base64")}`);

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#0B0F1A",
          padding: "80px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={104} height={104} alt="" />
        <div
          style={{
            marginTop: 44,
            fontSize: 76,
            fontWeight: 700,
            color: "#F8FAFC",
            lineHeight: 1.1,
          }}
        >
          RidgeHQ
        </div>
        <div style={{ marginTop: 16, fontSize: 42, color: "#94A3B8" }}>
          The Activity Business OS
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            color: "#64748B",
            maxWidth: 920,
          }}
        >
          Bookings, scheduling, staff, gear, rentals and payments — one live
          system.
        </div>
      </div>
    ),
    { ...size },
  );
}
