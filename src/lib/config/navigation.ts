import { platformCapabilities } from './platform';
import { products } from './products';
import { verticals } from './verticals';

export interface NavLink {
  title: string;
  href: string;
  description?: string;
  /** lucide-react icon name, resolved in <NavMenu />. */
  icon?: string;
}

export interface NavGroup {
  title?: string;
  icon?: string;
  items: NavLink[];
}

export interface NavItem {
  title: string;
  href: string;
  /** "See all" link label for a mega-menu footer. */
  viewAllLabel?: string;
  /** Single-column dropdown. */
  children?: NavLink[];
  /** Multi-column mega-menu. Takes precedence over `children`. */
  groups?: NavGroup[];
  /** Accessible label for the `groups` axis when a `secondaryGroups` axis is also present. */
  groupsLabel?: string;
  /** Second axis of a two-axis mega-menu, rendered alongside `groups` (e.g. verticals next to capabilities). */
  secondaryGroups?: NavGroup[];
  /** Accessible label for the `secondaryGroups` axis. */
  secondaryGroupsLabel?: string;
  /** "See all" link for the `groups` axis in a two-axis menu. Defaults to `href`/`viewAllLabel` when absent. */
  groupsViewAllHref?: string;
  groupsViewAllLabel?: string;
  /** "See all" link for the `secondaryGroups` axis in a two-axis menu. */
  secondaryGroupsViewAllHref?: string;
  secondaryGroupsViewAllLabel?: string;
  disabled?: boolean;
}

// ---------------------------------------------------------------------------
// Platform — capabilities, grouped by what they do for the operator.
// ---------------------------------------------------------------------------

const capabilityIcons: Record<string, string> = {
  'bookings-pos': 'ShoppingCart',
  scheduling: 'CalendarClock',
  'gear-rentals': 'Boxes',
  staff: 'Users',
  'customers-participants': 'IdCard',
  payments: 'BarChart3',
};

function capLink(slug: string): NavLink | null {
  const cap = platformCapabilities.find((c) => c.slug === slug);
  if (!cap) return null;
  return {
    title: cap.title,
    href: cap.href,
    description: cap.description,
    icon: capabilityIcons[slug],
  };
}

const platformGroups: NavGroup[] = [
  {
    title: 'Run the day',
    icon: 'CalendarRange',
    items: ['scheduling', 'gear-rentals', 'staff', 'customers-participants']
      .map(capLink)
      .filter((l): l is NavLink => Boolean(l)),
  },
  {
    title: 'Sell & settle',
    icon: 'Store',
    items: ['bookings-pos', 'payments'].map(capLink).filter((l): l is NavLink => Boolean(l)),
  },
  {
    title: 'Automate & connect',
    icon: 'Workflow',
    items: [
      {
        title: 'AI Copilot',
        href: '/ai-copilot',
        description: 'An assistant that reads the day and can take a few scheduling actions, each behind a confirm step.',
        icon: 'Sparkles',
      },
      {
        title: 'Integrations',
        href: '/integrations',
        description: 'Payment gateways and the tools you already run, connected to the operational core.',
        icon: 'Plug',
      },
      {
        title: 'Connect an AI Assistant',
        href: '/docs',
        description: 'Run Claude, ChatGPT, or Claude Code against your own RidgeHQ account over MCP.',
        icon: 'Terminal',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------

const productIcons: Record<string, string> = {
  'activity-platform': 'LayoutGrid',
  'rental-app': 'Package',
  'waiver-app': 'FileSignature',
  'channel-manager': 'Workflow',
};

const productMenuDescriptions: Record<string, string> = {
  'activity-platform': 'The full operations core — bookings, schedule, staff, resources, payments, close.',
  'rental-app': 'Track rental gear by unit and size, with availability accurate on every channel.',
  'waiver-app': 'Per-participant digital waivers, built in — not a metered add-on.',
  'channel-manager': 'Distribution to external sales channels. In development with design partners.',
};

const productGroups: NavGroup[] = [
  {
    items: products.map((p) => ({
      title: p.status === 'early-access' ? `${p.title} (in development)` : p.title,
      href: p.href,
      description: productMenuDescriptions[p.id],
      icon: productIcons[p.id],
    })),
  },
];

// ---------------------------------------------------------------------------
// Built For — verticals, grouped by business type.
// ---------------------------------------------------------------------------

const verticalIcons: Record<string, string> = {
  'dive-centers': 'Fish',
  'surf-schools': 'Waves',
  'kitesurf-schools': 'Wind',
  'sailing-schools': 'Anchor',
  'windsurf-schools': 'Sailboat',
  'ski-schools': 'Snowflake',
  'outdoor-whitewater': 'LifeBuoy',
  'dive-resorts': 'Building2',
  'surf-camps': 'Tent',
  'kayak-rental-tours': 'Kayak',
  'bike-rental-tours': 'Bike',
  'boat-rental-courses': 'Ship',
};

const verticalMenuDescriptions: Record<string, string> = {
  'dive-centers': 'Boats, manifests, courses, gear',
  'surf-schools': 'Tide-aware lessons and camps',
  'kitesurf-schools': 'Wind-window scheduling, gear match',
  'sailing-schools': 'Multi-day courses and fleet',
  'windsurf-schools': 'High-volume lessons and hire',
  'ski-schools': 'Peak-season lessons, instructor match',
  'outdoor-whitewater': 'Guides, shuttles, group waivers',
  'dive-resorts': 'Rooms plus daily dive operations',
  'surf-camps': 'Beds, lessons, transfers — one week',
  'kayak-rental-tours': 'Tours and hourly hire, one fleet',
  'bike-rental-tours': 'Asset-level fleet, guided tours',
  'boat-rental-courses': 'Charters, licence checks, deposits',
};

const builtForGroupSlugs: { title: string; icon: string; slugs: string[] }[] = [
  {
    title: 'Activity providers',
    icon: 'GraduationCap',
    slugs: ['dive-centers', 'surf-schools', 'kitesurf-schools', 'sailing-schools', 'windsurf-schools', 'ski-schools', 'outdoor-whitewater'],
  },
  { title: 'Resorts & camps', icon: 'Building2', slugs: ['dive-resorts', 'surf-camps'] },
  { title: 'Rentals & tours', icon: 'Bike', slugs: ['kayak-rental-tours', 'bike-rental-tours', 'boat-rental-courses'] },
];

const builtForGroups: NavGroup[] = builtForGroupSlugs.map((group) => ({
  title: group.title,
  icon: group.icon,
  items: group.slugs
    .map((slug) => verticals.find((v) => v.slug === slug))
    .filter((v): v is (typeof verticals)[number] => Boolean(v))
    .map((v) => ({
      title: v.name,
      href: `/solutions/${v.slug}`,
      description: verticalMenuDescriptions[v.slug],
      icon: verticalIcons[v.slug],
    })),
}));

// ---------------------------------------------------------------------------

export const mainNav: NavItem[] = [
  {
    title: 'Solutions',
    href: '/solutions',
    groupsLabel: 'Built For',
    groups: builtForGroups,
    groupsViewAllHref: '/solutions',
    groupsViewAllLabel: 'All industries',
    secondaryGroupsLabel: 'Platform',
    secondaryGroups: platformGroups,
    secondaryGroupsViewAllHref: '/platform',
    secondaryGroupsViewAllLabel: 'See the full platform',
  },
  { title: 'Products', href: '/products', viewAllLabel: 'All products', groups: productGroups },
  { title: 'Blog', href: '/blog' },
  { title: 'Pricing', href: '/pricing' },
];

export const footerNav = {
  products: [
    { title: 'Activity Platform', href: '/products/activity-platform' },
    { title: 'Rental App', href: '/products/rental-app' },
    { title: 'Waiver App', href: '/products/waiver-app' },
    { title: 'Channel Manager', href: '/products/channel-manager' },
    { title: 'All Products', href: '/products' },
  ],
  builtFor: [
    { title: 'Dive Centers', href: '/solutions/dive-centers' },
    { title: 'Surf Schools', href: '/solutions/surf-schools' },
    { title: 'Ski Schools', href: '/solutions/ski-schools' },
    { title: 'Rentals & Tours', href: '/solutions/kayak-rental-tours' },
    { title: 'All Industries', href: '/solutions' },
  ],
  platform: [
    { title: 'AI Copilot', href: '/ai-copilot' },
    { title: 'Integrations', href: '/integrations' },
    { title: 'Connect an AI Assistant', href: '/docs' },
    { title: 'AI Overview', href: '/ai' },
    { title: 'All Platform Features', href: '/platform' },
  ],
  company: [
    { title: 'About', href: '/about' },
    { title: 'Case Studies', href: '/case-studies' },
    { title: 'Press', href: '/press' },
    { title: 'Contact', href: '/contact' },
    { title: 'Design Partners', href: '/design-partners' },
    { title: 'Resources', href: '/resources' },
    { title: 'Free Calculators', href: '/tools' },
    { title: 'Use Cases', href: '/use-cases' },
    { title: 'Compare', href: '/compare' },
  ],
  legal: [
    { title: 'Security', href: '/security' },
    { title: 'Privacy', href: '/privacy' },
    { title: 'Terms', href: '/terms' },
  ],
};
