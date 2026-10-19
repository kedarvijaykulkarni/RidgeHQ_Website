import crypto from "crypto";
import fs from "fs";
import path from "path";
import { marketingConfig } from "@/lib/config/marketing";

// Pinned copy of the RidgeHQAPP public fact export (docs/brain-facts/export.json).
// Regenerate it with `brain_facts.py export` in RidgeHQAPP; never edit it by hand.
const exported = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "docs/brain-facts/export.json"), "utf8"),
);

// Mirrors Python json.dumps(sort_keys=True, ensure_ascii=False, separators=(",", ":")).
function canonical(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value && typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>)
      .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
      .map(([k, v]) => `${JSON.stringify(k)}:${canonical(v)}`);
    return `{${entries.join(",")}}`;
  }
  return JSON.stringify(value);
}

function filesUnder(dir: string, exts: string[]): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return filesUnder(full, exts);
    return exts.some((ext) => entry.name.endsWith(ext)) ? [full] : [];
  });
}

// Update these together with docs/brain-facts/export.json when the export is regenerated.
const PINNED_BRAIN_REVISION = "6b13403e30fa2cf4d82fae8fbe69e687f7ae2567";
const PINNED_MANIFEST_SHA256 = "c143fdbf8c095627bdd2c758a1f703558768358f17edbcba4c84ee82ded991e6";
const PINNED_FACT_IDS = [
  "brand.public-name",
  "commercial.sales-led",
  "commission.direct-bookings",
  "feature.waivers",
  "onboarding.service-prices",
  "pricing.annual-grow",
  "pricing.design-partner-pilot",
  "pricing.monthly-plans",
  "support.scale-bounded",
];

describe("pinned Brain fact export", () => {
  it("is the pinned revision, fact set and manifest hash", () => {
    expect(exported.schema_version).toBe(1);
    expect(exported.source.brain_revision).toBe(PINNED_BRAIN_REVISION);
    expect(exported.facts.map((f: { id: string }) => f.id)).toEqual(PINNED_FACT_IDS);
    const digest = crypto.createHash("sha256").update(canonical(exported.facts), "utf8").digest("hex");
    expect(digest).toBe(exported.manifest_sha256);
    expect(digest).toBe(PINNED_MANIFEST_SHA256);
  });

  it("keeps the live site in pilot pricing mode while the ladder is held", () => {
    expect(marketingConfig.pricingMode).toBe("pilot");
  });

  it("keeps waivers as an approved website claim and QR signing out of it", () => {
    const waivers = exported.facts.find((f: { id: string }) => f.id === "feature.waivers");
    expect(waivers.channels).toContain("website");
    expect(waivers.scope).toMatch(/QR-linked waiver signing is not built/);
  });

  it("exports no unapproved AI or SMS claims", () => {
    const ids = exported.facts.map((f: { id: string }) => f.id);
    expect(ids.filter((id: string) => id.startsWith("ai.") || id.startsWith("sms."))).toEqual([]);
  });

  it("never presents QR-linked waiver signing as available", () => {
    const qualifier = /roadmap|planned|not (yet )?(built|available)|soon|lacks|aim|until|will|upcoming/i;
    const roots = ["src", "content", "public"].map((d) => path.join(process.cwd(), d));
    const files = roots.flatMap((r) => filesUnder(r, [".ts", ".tsx", ".md", ".txt"]));
    const offenders = files.flatMap((f) =>
      f.endsWith("brain-facts.test.ts")
        ? []
        : fs
            .readFileSync(f, "utf8")
            .split(/\r?\n/)
            .filter((line) => /QR[^.]{0,40}(waiver|sign)|(waiver|sign)[^.]{0,40}QR/i.test(line) && !qualifier.test(line))
            .map((line) => `${path.relative(process.cwd(), f)}: ${line.trim().slice(0, 100)}`),
    );
    expect(offenders).toEqual([]);
  });

  it("public site content has no retired brand name or unapproved €79 price", () => {
    const roots = ["src", "content", "public"].map((d) => path.join(process.cwd(), d));
    const files = roots.flatMap((r) => filesUnder(r, [".ts", ".tsx", ".md", ".txt"]));
    const offenders = files.filter(
      (f) => !f.endsWith("brain-facts.test.ts") && /aquaroster|€\s?79\b/i.test(fs.readFileSync(f, "utf8")),
    );
    expect(offenders).toEqual([]);
  });
});
