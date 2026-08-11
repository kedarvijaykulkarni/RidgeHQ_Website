export interface Capability {
  id: string;
  title: string;
  description: string;
  icon?: string;
  href?: string;
}

export const platformCapabilities: Capability[] = [
  {
    id: 'bookings',
    title: 'Online Bookings & POS',
    description: 'Sell without creating a second operation. Keep front-desk and online sales connected to the same operational context.',
    href: '/platform/bookings-pos',
  },
  {
    id: 'scheduling',
    title: 'Scheduling & Dispatch',
    description: 'Plan with the full picture. See sessions, people, capacity, and resources together in one live view.',
    href: '/platform/scheduling',
  },
  {
    id: 'resources',
    title: 'Gear & Fleet Management',
    description: 'Protect scarce resources. Know exactly what gear, rooms, boats, or bikes are already committed.',
    href: '/platform/gear-rentals',
  },
  {
    id: 'staff',
    title: 'Staff Coordination',
    description: 'Assign the right instructors and guides based on qualifications, language, and real-time availability.',
    href: '/platform/staff',
  },
  {
    id: 'customers',
    title: 'Customer & Participant Profiles',
    description: 'Know the participant behind the booking. Keep client history, waivers, and preferences attached to the workflow.',
    href: '/platform/customers-participants',
  },
  {
    id: 'payments',
    title: 'Payments & Reporting',
    description: 'Close the day with context. Bring deposits, final payments, operational history, and reporting together.',
    href: '/platform/payments',
  },
];
