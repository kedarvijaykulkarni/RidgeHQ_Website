export interface Tool {
  title: string;
  slug: string;
  description: string;
  /**
   * Verticals whose day-to-day economics this calculator speaks to. Drives
   * the cross-links in both directions: the tool page's "Built for" list and
   * each /solutions/<vertical> page's "Run the numbers" list.
   */
  relatedVerticalSlugs: string[];
}

export const tools: Tool[] = [
  {
    title: "No-Show Cost Calculator",
    slug: "no-show-cost-calculator",
    description: "Estimate the annual revenue lost to no-shows, from your own booking volume and no-show rate.",
    relatedVerticalSlugs: ["surf-schools", "kitesurf-schools", "dive-centers", "ski-schools", "kayak-rental-tours", "bike-rental-tours"],
  },
  {
    title: "Admin Time Cost Calculator",
    slug: "admin-time-cost-calculator",
    description: "Estimate the annual cost of manually re-keying bookings, waivers, and schedules across separate tools.",
    relatedVerticalSlugs: ["dive-centers", "sailing-schools", "outdoor-whitewater", "dive-resorts", "surf-camps"],
  },
  {
    title: "Cancellation Cost Calculator",
    slug: "cancellation-cost-calculator",
    description: "Estimate what late cancellations cost per year, after accounting for how often you rebook the slot.",
    relatedVerticalSlugs: ["surf-schools", "kitesurf-schools", "windsurf-schools", "outdoor-whitewater", "boat-rental-courses"],
  },
  {
    title: "Revenue Leakage Calculator",
    slug: "revenue-leakage-calculator",
    description: "Estimate what missed charges, unbilled add-ons, and pricing errors cost your operation per year.",
    relatedVerticalSlugs: ["dive-resorts", "surf-camps", "dive-centers", "bike-rental-tours", "kayak-rental-tours"],
  },
  {
    title: "Break-Even Calculator",
    slug: "break-even-calculator",
    description: "Estimate how many bookings per month you need to cover your fixed costs.",
    relatedVerticalSlugs: ["boat-rental-courses", "kayak-rental-tours", "bike-rental-tours", "sailing-schools"],
  },
  {
    title: "ROI Calculator",
    slug: "roi-calculator",
    description: "Estimate the return on investment of a new operational system, from your own cost and savings estimate.",
    relatedVerticalSlugs: ["dive-centers", "dive-resorts", "ski-schools", "surf-camps"],
  },
  {
    title: "CAC:LTV Calculator",
    slug: "cac-ltv-calculator",
    description: "Estimate customer lifetime value and the LTV-to-acquisition-cost ratio for your operation.",
    relatedVerticalSlugs: ["surf-schools", "sailing-schools", "ski-schools", "dive-centers"],
  },
  {
    title: "Instructor Utilization Calculator",
    slug: "instructor-utilization-calculator",
    description: "Estimate what percentage of your instructors' or guides' available time is actually booked.",
    relatedVerticalSlugs: ["ski-schools", "surf-schools", "kitesurf-schools", "windsurf-schools", "sailing-schools", "outdoor-whitewater"],
  },
  {
    title: "Capacity Utilization Calculator",
    slug: "capacity-utilization-calculator",
    description: "Estimate what percentage of your boats, bikes, rooms, or gear inventory is actually booked.",
    relatedVerticalSlugs: ["boat-rental-courses", "kayak-rental-tours", "bike-rental-tours", "dive-resorts", "surf-camps", "windsurf-schools"],
  },
  {
    title: "Spreadsheet Readiness Assessment",
    slug: "spreadsheet-readiness-assessment",
    description: "A short, scored quiz on how much manual reconciliation your current tools actually require.",
    relatedVerticalSlugs: ["outdoor-whitewater", "windsurf-schools", "kayak-rental-tours", "boat-rental-courses", "kitesurf-schools"],
  },
];
