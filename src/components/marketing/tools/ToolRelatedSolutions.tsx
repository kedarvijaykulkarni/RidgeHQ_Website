import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import { tools } from "@/lib/config/tools";
import { verticals } from "@/lib/config/verticals";

/**
 * "Built for" links from a calculator back to the /solutions/<vertical>
 * pages it's most relevant to (the reverse of the solution page's
 * "Run the numbers" list — both read `tools[].relatedVerticalSlugs`).
 */
export function ToolRelatedSolutions({ slug }: { slug: string }) {
  const related = tools.find((t) => t.slug === slug)?.relatedVerticalSlugs ?? [];
  const relatedVerticals = verticals.filter((v) => related.includes(v.slug));
  if (relatedVerticals.length === 0) return null;

  return (
    <Section className="border-t border-white/5">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white">Built for operators like you</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {relatedVerticals.map((v) => (
            <Link
              key={v.slug}
              href={`/solutions/${v.slug}`}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:border-white/20 hover:text-white transition-colors"
            >
              {v.name}
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
