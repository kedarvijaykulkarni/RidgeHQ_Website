import crypto from "crypto";
import fs from "fs";
import path from "path";

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

describe("pinned Brain fact export", () => {
  it("has the expected schema and a matching manifest hash", () => {
    expect(exported.schema_version).toBe(1);
    expect(exported.source.brain_revision).toMatch(/^[0-9a-f]{40}$/);
    const digest = crypto.createHash("sha256").update(canonical(exported.facts), "utf8").digest("hex");
    expect(digest).toBe(exported.manifest_sha256);
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

  it("public site content does not use the retired brand name", () => {
    const roots = ["src", "content", "public"].map((d) => path.join(process.cwd(), d));
    const files = roots.flatMap((r) => filesUnder(r, [".ts", ".tsx", ".md", ".txt"]));
    const offenders = files.filter(
      (f) => !f.endsWith("brain-facts.test.ts") && /aquaroster/i.test(fs.readFileSync(f, "utf8")),
    );
    expect(offenders).toEqual([]);
  });
});
