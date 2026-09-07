export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  readingTime: string;
  /**
   * When true, the post is hidden from the blog index, its route, and the
   * sitemap in production builds. It stays visible in local dev so it can be
   * previewed before the claims are verified and the flag is removed.
   */
  draft?: boolean;
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
  {
    slug: "ai-permission-gating-risk-tiered-confirmation",
    title: "Trusting AI Automation: Permission Controls and Revert Paths",
    excerpt:
      "Learn how AI permission gating and explicit confirmation steps manage risk in operational automation, providing unprecedented confidence when transitioning from spreadsheets.",
    content: `_The deployment of powerful AI tools requires robust operational safeguards. RidgeHQ has implemented AI permission gating and risk-tiered confirmations, giving operators confidence when automating core workflows._

## The Operational Risk of Uncontrolled Automation

Migrating critical business processes—like booking and inventory management—from spreadsheets or legacy booking tools is a significant operational upgrade. While the efficiency gains from AI are clear, the underlying risk profile of new automation must be managed proactively. An uncontrolled AI function, even one designed to streamline scheduling, could execute irreversible actions without proper guardrails, leading to data discrepancies or misallocated resources. Operators need assurance that the tool understands not just the intent of the action, but the operational context, the role performing the action, and the potential impact of the change.

Traditional systems often abstract away the granular control necessary for high-stakes operations. In the dive center context, a single misplaced AI function could accidentally unassign a required waiver participant, move a gear rental block against existing reservations, or modify a session schedule without the necessary human oversight. The cost of such a workflow failure is not just time, but reputational damage and direct financial loss. Confidence in a system is built by addressing these inherent operational anxieties head-on.

## Implementing Granular Controls: AI Permission Gating

Our approach addresses system safety by integrating permission checks directly into the AI tool call process. This means every automated action—every AI copilot suggestion or executed change—first checks the user's assigned role. This capability ensures that only authorized personnel can trigger specific workflows or access sensitive data. It is a crucial layer of defense, moving beyond simple read permissions to enforce write permissions based on operational roles within the center.

This robust framework complements our existing Role-based staff permissions system. By enforcing multi-tenancy at the database level and tying permissions to the user role, we ensure absolute data separation and control. The AI does not operate in a vacuum; it operates within the hard boundaries of the center’s established operational rules, maintaining the integrity of the core scheduling, POS, and participant data across all workflows.

## Tiered Risk Confirmation: Controlling Irreversible Actions

The second major safeguard is the implementation of risk-tiered confirmation. Recognizing that some actions are inherently high-risk—such as rescheduling a booked session, assigning or unassigning a participant, or moving an accommodation block—the system mandates an explicit confirmation round-trip before execution. This isn't a simple checkbox; it is a deliberate, visible confirmation step that requires the operator to acknowledge the scope and impact of the intended change.

For medium and high-risk actions, the operator must confirm the action parameters and review the potential cascade effect. This friction point is critical for building trust. It forces a moment of human review at the point where AI suggests an efficiency boost, transforming potential risk into managed process improvement.

## The Power of Revert: Safety Nets in Digital Operations

Beyond controlled execution, reliability requires the ability to undo. For actions that are reversible by nature—such as moving a rental block, adjusting a session date, or participant assignment—the system provides a genuine pre-execution snapshot and a tangible revert path. This means if a change is executed, the operator has the capability to step back to the exact state the system was in before the command was processed. This safeguard is not a soft promise or a database stub; it is a reliable, tested function of the core operational logic.

This operational confidence is paramount when managing the complexity of a dive center's schedule, which involves multiple moving parts: waivers, equipment inventory, payment cycles, and staff scheduling. Knowing that the platform provides a true rollback mechanism drastically reduces the perceived risk of adopting powerful automation, allowing operators to leverage AI benefits immediately and securely.

## Building Operational Certainty with Core System Integrity

These new layers of control—AI permission gating, risk-tiered confirmation, and genuine revert paths—integrate seamlessly with the comprehensive core operational systems we provide. Whether managing complex bookings, utilizing the Event Planner, processing payments via POS, or coordinating staff shifts, the safety net is always in place. Furthermore, foundational elements like waiver management (with typed e-signature enforcement) and order immutability (via credit-note-on-change) reinforce the system's integrity.

By combining best-in-class business logic with newly implemented safety mechanisms for AI, RidgeHQ allows dive center operators to transition confidently off legacy tools. The focus remains on reliable, audit-proof operations, giving you the operational certainty required to scale without sacrificing control.

## Key takeaways

- AI actions are restricted by minimum role checks (permission gating) to prevent unauthorized operations.
- Medium and high-risk actions (e.g., rescheduling) require explicit, visible confirmation rounds to mitigate error.
- Reversible actions maintain a genuine pre-execution snapshot and a tested revert path for full operational safety.
- These controls build trust, enabling operators to reliably use AI automation when moving off spreadsheets.`,
    author: "RidgeHQ Team",
    publishedAt: "2026-09-06",
    category: "Product",
    readingTime: "4 min read",
    draft: true,
  },
];

/** Drafts render in local dev for preview but are excluded from production. */
export const visibleBlogPosts: BlogPost[] = blogPosts.filter(
  (post) => process.env.NODE_ENV === "development" || !post.draft
);
