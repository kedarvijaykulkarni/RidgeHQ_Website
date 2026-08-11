export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  readingTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "managing-seasonality-in-activity-businesses",
    title: "Managing Seasonality: Strategies for Activity Businesses",
    excerpt: "Learn how top operators manage staff, cash flow, and asset utilization during the off-season.",
    content: "Seasonality is one of the hardest parts of running an activity business. When the summer rush ends, cash flow tightens, but fixed costs remain. \n\n## Retain your core team\nDon't let your best instructors leave for good. Many successful centers cross-train staff or pivot to maintenance and equipment repair during the slower months.\n\n## Optimize your fleet\nThe off-season is the perfect time to overhaul your rental fleet, sell off depreciating assets, and order replacements for next year.",
    author: "RidgeHQ Team",
    publishedAt: "2026-07-15",
    category: "Operations",
    readingTime: "5 min read",
  },
  {
    slug: "how-to-reduce-no-shows",
    title: "How to Reduce No-Shows and Late Cancellations",
    excerpt: "Practical tips to ensure your booked capacity actually turns into revenue on the day.",
    content: "Every empty seat on a boat or missing student in a class costs you money. \n\n## Implement smart deposits\nRequiring a deposit or full payment upfront is the easiest way to ensure commitment. \n\n## Automated reminders\nSend automated SMS and email reminders 24 hours before the activity. Often, customers simply forget the exact meeting time or location.",
    author: "RidgeHQ Team",
    publishedAt: "2026-08-02",
    category: "Growth",
    readingTime: "4 min read",
  },
];
