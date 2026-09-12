import { Container, Section } from "@/components/ui/Layout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BlogCard } from "@/components/blog/BlogCard";
import { visibleBlogPosts, type BlogPillar } from "@/lib/config/blog";
import { CTASection } from "@/components/marketing/CTASection";
import { pageSeo } from "@/lib/config/seo";

export const metadata = {
  ...pageSeo("/blog"),
  title: "Blog & Resources",
  description: "RidgeHQ Academy: guides on the business economics, operations, and technology behind running a connected activity business, plus technical deep-dives into RidgeHQ itself.",
};

const PILLARS: BlogPillar[] = ["Business Economics", "Operations", "Technology"];

export default function BlogIndexPage() {
  return (
    <div className="flex flex-col w-full">
      <Section className="pb-12 pt-24">
        <Container>
          <Breadcrumbs className="mb-8" items={[{ label: "Blog" }]} />
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">RidgeHQ Academy</h1>
            <p className="text-xl text-slate-400">
              Guides organized around three pillars: the business economics of running an activity
              operation, the operational workflows behind it, and the technology that connects them.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pt-0 min-h-[50vh]">
        <Container>
          <div className="space-y-16">
            {PILLARS.map((pillar) => {
              const posts = visibleBlogPosts.filter((post) => post.pillar === pillar);
              if (posts.length === 0) return null;

              return (
                <div key={pillar}>
                  <h2 className="text-2xl font-bold text-white mb-6">{pillar}</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                      <BlogCard key={post.slug} post={post} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <CTASection
        headline="See how this looks running on RidgeHQ"
        description="Explore the platform capabilities these posts describe, or book a demo when you're ready to see your own operation."
        primaryCtaText="Explore the Platform"
        primaryCtaHref="/platform"
        secondaryCtaText="Book a Demo"
        secondaryCtaHref="/book-demo"
      />
    </div>
  );
}
