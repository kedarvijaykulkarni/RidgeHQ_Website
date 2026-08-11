export interface Vertical {
  id: string;
  name: string;
  slug: string;
  heroHeadline: string;
  heroDescription: string;
  painPoint: string;
  keyCapability: string;
}

export const verticals: Vertical[] = [
  {
    id: 'dive-centers',
    name: 'Dive Centers',
    slug: 'dive-centers',
    heroHeadline: 'Run your entire dive center from one HQ.',
    heroDescription: 'Coordinate instructors, boat capacity, rental gear, and course bookings in one connected system.',
    painPoint: 'Managing boat manifests and student records across different systems.',
    keyCapability: 'Integrated boat dispatch and certification tracking.',
  },
  {
    id: 'surf-schools',
    name: 'Surf Schools',
    slug: 'surf-schools',
    heroHeadline: 'Run your surf school from one HQ.',
    heroDescription: 'Manage changing conditions, instructor schedules, and board rentals seamlessly.',
    painPoint: 'Rescheduling sessions manually when the tide or swell changes.',
    keyCapability: 'Tide-aware scheduling and instant resource reallocation.',
  },
  {
    id: 'kayak-rental-tours',
    name: 'Kayak Rental & Tours',
    slug: 'kayak-rental-tours',
    heroHeadline: 'Run your kayak operation from one HQ.',
    heroDescription: 'Track live inventory for rentals while scheduling guides for group tours.',
    painPoint: 'Double-booking equipment between walk-in rentals and scheduled tours.',
    keyCapability: 'Unified inventory across rentals and guided activities.',
  },
  {
    id: 'ski-schools',
    name: 'Ski Schools',
    slug: 'ski-schools',
    heroHeadline: 'Run your ski school from one HQ.',
    heroDescription: 'Assign instructors based on skill levels and manage peak-season booking volume.',
    painPoint: 'Matching student ability levels with the right instructor availability.',
    keyCapability: 'Skills-based instructor assignment and group management.',
  }
  // The remaining verticals (Kitesurf, Sailing, Windsurf, Outdoor, Dive Resorts, Surf Camps, Bike Rentals, Boat Rentals) follow the same pattern.
];
