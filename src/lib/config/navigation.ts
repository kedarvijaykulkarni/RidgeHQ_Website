export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export const mainNav: NavItem[] = [
  { title: 'Platform', href: '/platform' },
  { title: 'Solutions', href: '/solutions' },
  { title: 'AI Copilot', href: '/ai-copilot' },
  { title: 'Integrations', href: '/integrations' },
  { title: 'Pricing', href: '/pricing' },
  { title: 'Blog', href: '/blog' },
  { title: 'Company', href: '/about' },
];

export const footerNav = {
  solutions: [
    { title: 'Dive Centers', href: '/solutions/dive-centers' },
    { title: 'Surf Schools', href: '/solutions/surf-schools' },
    { title: 'Ski Schools', href: '/solutions/ski-schools' },
    { title: 'Rentals & Tours', href: '/solutions/kayak-rental-tours' },
    { title: 'All Solutions', href: '/solutions' },
  ],
  company: [
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
    { title: 'Design Partners', href: '/design-partners' },
  ],
  legal: [
    { title: 'Security', href: '/security' },
    { title: 'Privacy', href: '/privacy' },
    { title: 'Terms', href: '/terms' },
  ],
};
