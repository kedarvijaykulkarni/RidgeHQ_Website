import { Container, Section } from "@/components/ui/Layout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/lib/config/blog";
import { CTASection } from "@/components/marketing/CTASection";
import { pageSeo } from "@/lib/config/seo";

export const metadata = {
  ...pageSeo("/blog"),
  title: "Blog & Resources",
  description: "Insights, guides, and best practices for running activity businesses.",
};

export default function BlogIndexPage() {
  return (
    <div className="flex flex-col w-full">
      <Section className="pb-12 pt-24">
        <Container>
          <Breadcrumbs className="mb-8" items={[{ label: "Blog" }]} />
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Resources & Insights</h1>
            <p className="text-xl text-slate-400">
              Operational guides, product updates, and best practices for running a modern activity business.
            </p>
          </div>
        </Container>
      </Section>
      
      <Section className="pt-0 min-h-[50vh]">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </Section>
      
      <CTASection 
        headline="Ready to upgrade your operations?" 
        description="Join leading activity centers using RidgeHQ to manage their bookings, gear, and staff in one place." 
      />
    </div>
  );
}
