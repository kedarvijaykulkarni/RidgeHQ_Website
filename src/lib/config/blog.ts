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
    content: "Every empty seat on a boat or missing student in a class costs you money. \n\n## Implement smart deposits\nRequiring a deposit or full payment upfront is the easiest way to ensure commitment. \n\n## Automated reminders\nSend automated SMS and email reminders 24 hours before the activity. Often, customers simply forget the exact meeting time or location.\n\n## Know what it's actually costing you\nBefore changing your deposit or reminder policy, it helps to know the size of the problem. Use the [No-Show Cost Calculator](/tools/no-show-cost-calculator) to estimate what your current no-show rate costs over a year — it's a useful baseline to measure any change against.",
    author: "RidgeHQ Team",
    publishedAt: "2026-08-02",
    category: "Growth",
    readingTime: "4 min read",
  },
  {
    slug: "spreadsheets-to-operations-system",
    title: "Moving From Spreadsheets to an Operations System: A Practical Checklist",
    excerpt: "How to tell when spreadsheets and a booking widget have stopped being enough, and what to check before you switch to a connected system.",
    content: "Most activity businesses start on spreadsheets, a booking widget, and a group chat — and for a while, that's the right call. The switch usually isn't about age or size; it's about whether information still moves without someone manually copying it.\n\n## Signs the spreadsheet stage is over\n- The same booking gets typed into more than one place (the widget, then a manifest, then a staff message).\n- Gear or resource sizing lives in someone's memory or a separate tab, not attached to the booking.\n- A schedule change (a cancellation, a reschedule) doesn't automatically update who's on it or what's due back.\n- Reconciling the day's takings means checking two or three tools against each other.\n- The owner or manager is the only person who can see \"the whole day\" at once.\n\n## What to check before switching systems\n1. **Where does a booking actually originate**, and does the new system capture all of those channels (website, front desk, phone, agents) into one record?\n2. **What has to move with a booking** — staff assignment, gear/resource allocation, waiver status, payment state — and does the system carry all of it, or just the transaction?\n3. **What happens on a change.** A cancellation or reschedule should update everywhere it needs to, not require a second manual step.\n4. **Who needs to see it, and where.** If your team works from a boat, a shop floor, or a trailhead, the schedule needs to be usable on a phone, not just a back-office screen.\n\n## Estimate the cost of staying as-is\nThe time spent re-entering the same booking, chasing a waiver, or reconciling gear across separate tools is a real, if hidden, cost. The [Admin Time Cost Calculator](/tools/admin-time-cost-calculator) turns your own weekly hours into an annual estimate, so you have a number to weigh against the cost and disruption of switching systems.",
    author: "RidgeHQ Team",
    publishedAt: "2026-09-04",
    category: "Operations",
    readingTime: "6 min read",
  },
];
