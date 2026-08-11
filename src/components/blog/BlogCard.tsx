import Link from "next/link";
import { BlogPost } from "@/lib/config/blog";
import { ArrowRight } from "lucide-react";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <div className="glass-card p-6 h-full flex flex-col glass-card-hover">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-medium text-[var(--accent)] bg-[var(--accent-soft)] px-2.5 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-[var(--ink-tertiary)]">{post.readingTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-[var(--ink)] mb-3 group-hover:text-[var(--accent)] transition-colors">
          {post.title}
        </h3>
        
        <p className="text-[var(--ink-secondary)] text-sm mb-6 flex-grow">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border)]">
          <div className="flex flex-col">
            <span className="text-sm text-[var(--ink)] font-medium">{post.author}</span>
            <span className="text-xs text-[var(--ink-tertiary)] mt-0.5">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
              })}
            </span>
          </div>
          <div className="flex items-center text-[var(--accent)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
             <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
