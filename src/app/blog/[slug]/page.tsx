import { Container, Section } from "@/components/ui/Layout";
import { visibleBlogPosts } from "@/lib/config/blog";
import { notFound } from "next/navigation";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { CTASection } from "@/components/marketing/CTASection";
import { StructuredData } from "@/components/seo/StructuredData";
import ReactMarkdown from 'react-markdown';
import { pageSeo } from "@/lib/config/seo";

export async function generateStaticParams() {
  return visibleBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = visibleBlogPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) return {};

  return {
    ...pageSeo(`/blog/${post.slug}`),
    title: `${post.title} — Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = visibleBlogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": post.title,
              "description": post.excerpt,
              "image": `https://www.ridgehq.app/opengraph-image`,
              "datePublished": post.publishedAt,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "publisher": {
                "@id": "https://www.ridgehq.app/#organization"
              }
            }
          ]
        }}
      />
      <Section className="pb-8 pt-24 border-b border-border">
        <Container className="max-w-3xl">
          <PageBreadcrumbs trail={[{ label: "Blog", href: "/blog" }, { label: post.title, href: `/blog/${post.slug}` }]} />
          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-ink-secondary">
            <span className="font-medium text-ink-secondary">{post.author}</span>
            <span>•</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })}
            </span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
        </Container>
      </Section>
      
      <Section className="py-12">
        <Container className="max-w-3xl">
          <div className="prose prose-lg max-w-none prose-headings:text-[var(--ink)] prose-headings:break-words max-sm:prose-h1:text-3xl prose-a:text-[var(--accent)] prose-a:hover:text-[var(--accent-2)] prose-p:text-[var(--ink-secondary)] prose-li:text-[var(--ink-secondary)] prose-strong:text-[var(--ink)]">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </Container>
      </Section>
      
      <CTASection
        headline="See how this looks running on RidgeHQ"
        description="Explore the platform capability this post describes, or book a demo when you're ready to see your own operation."
        primaryCtaText="Explore the Platform"
        primaryCtaHref="/platform"
        secondaryCtaText="Book a Demo"
        secondaryCtaHref="/book-demo"
      />
    </div>
  );
}
