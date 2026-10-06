import fs from "fs";
import path from "path";
import { verticals } from "./verticals";

// Phrases for capabilities the Brain vault does not document as implemented
// (checked 2026-10-06 against development-reference/Modules). If one of these
// becomes true, confirm it in the vault first, then remove it from this list.
const UNSUPPORTED_CLAIMS: RegExp[] = [
  /ratios? (?:are |is )?enforced/i,
  /enforce[sd]? (?:an? )?(?:instructor|guide)[- ]to[- ]/i,
  /real-time availability/i,
  /matched by (?:language|level|certification)/i,
  /encrypted (?:in transit and )?at rest/i,
  /pre-authori[sz]e[ds]? (?:a |the )?(?:security )?deposit/i,
  /deposits? (?:are )?pre-authori[sz]ed/i,
  /accounting-ready exports?/i,
  /payment links?/i,
  /carried forward/i,
  /drawn down (?:automatically|as )/i,
  /encrypted (?:off-server )?backups/i,
  /pre-arrival reminders/i,
  /guardian complet/i,
];

const COPY_FILES = [
  "verticals.ts",
  "products.ts",
  "platform.ts",
  "faq.ts",
  "comparisons.ts",
  "use-cases.ts",
  "product-knowledge.ts",
].map((f) => path.join(__dirname, f));

// Answers that explicitly say "not … today", and FAQ questions, may name the feature.
const NEGATED = /\b(?:not|isn't|doesn't|don't|no)\b[^.]*$/i;

describe("marketing copy makes no unsupported capability claims", () => {
  it.each(COPY_FILES)("%s", (file) => {
    const text = fs.readFileSync(file, "utf8");
    for (const pattern of UNSUPPORTED_CLAIMS) {
      for (const match of text.matchAll(new RegExp(pattern, "gi"))) {
        const sentenceStart = Math.max(text.lastIndexOf(".", match.index), text.lastIndexOf('"', match.index), text.lastIndexOf("'", match.index));
        const before = text.slice(sentenceStart + 1, match.index);
        // A FAQ question may name the feature it asks about ("Does RidgeHQ enforce …?").
        const rest = text.slice(match.index);
        const isQuestion = /^[^"'\n]*\?["']/.test(rest);
        expect({ claim: match[0], context: before.slice(-80), ok: isQuestion || NEGATED.test(before) }).toMatchObject({ ok: true });
      }
    }
  });
});

describe("vertical SEO fields", () => {
  it.each(verticals.map((v) => [v.slug, v] as const))("%s meta description contains its keyword and fits 160 chars", (_slug, v) => {
    expect(v.metaDescription.toLowerCase()).toContain(v.searchKeyword.toLowerCase());
    expect(v.metaDescription.length).toBeLessThanOrEqual(160);
  });
});
