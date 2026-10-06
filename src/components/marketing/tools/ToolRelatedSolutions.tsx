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
    <Section className="border-t border-border">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-ink">Built for operators like you</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {relatedVerticals.map((v) => (
            <Link
              key={v.slug}
              href={`/solutions/${v.slug}`}
              className="chip-link"
            >
              {v.name}
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
