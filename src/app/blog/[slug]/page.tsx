import { Container, Section } from "@/components/ui/Layout";
import { blogPosts } from "@/lib/config/blog";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/marketing/CTASection";
import { StructuredData } from "@/components/seo/StructuredData";
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) return {};
  
  return {
    title: `${post.title} — RidgeHQ Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
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
              "image": `https://ridgehq.app/images/brand/og-image.jpg`,
              "datePublished": post.publishedAt,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "publisher": {
                "@id": "https://ridgehq.app/#organization"
              }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://ridgehq.app/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Blog",
                  "item": "https://ridgehq.app/blog"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": post.title,
                  "item": `https://ridgehq.app/blog/${post.slug}`
                }
              ]
            }
          ]
        }}
      />
      <Section className="pb-8 pt-24 border-b border-white/5">
        <Container className="max-w-3xl">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.category }]} />
          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span className="font-medium text-slate-300">{post.author}</span>
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
          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-[var(--ink)] prose-a:text-[var(--accent)] hover:prose-a:text-[var(--accent-2)] prose-p:text-[var(--ink-secondary)] prose-li:text-[var(--ink-secondary)] prose-strong:text-[var(--ink)]">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </Container>
      </Section>
      
      <CTASection 
        headline="Ready to put this into practice?" 
        description="See how RidgeHQ can help you implement these strategies in your own activity business." 
      />
    </div>
  );
}
