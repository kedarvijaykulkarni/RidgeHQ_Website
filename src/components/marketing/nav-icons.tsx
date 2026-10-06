import {
  ShoppingCart,
  CalendarClock,
  CalendarRange,
  Boxes,
  Users,
  IdCard,
  BarChart3,
  Store,
  Workflow,
  Sparkles,
  Plug,
  LayoutGrid,
  Package,
  FileSignature,
  GraduationCap,
  Building2,
  Bike,
  Waves,
  Sailboat,
  Snowflake,
  Ship,
  LifeBuoy,
  Terminal,
  Tent,
  Fish,
  Wind,
  Anchor,
  Kayak,
  type LucideIcon,
} from "lucide-react";

/** lucide-react icons referenced by name from `navigation.ts`, shared by the desktop and mobile menus. */
const ICONS: Record<string, LucideIcon> = {
  ShoppingCart,
  CalendarClock,
  CalendarRange,
  Boxes,
  Users,
  IdCard,
  BarChart3,
  Store,
  Workflow,
  Sparkles,
  Plug,
  LayoutGrid,
  Package,
  FileSignature,
  GraduationCap,
  Building2,
  Bike,
  Waves,
  Sailboat,
  Snowflake,
  Ship,
  LifeBuoy,
  Terminal,
  Tent,
  Fish,
  Wind,
  Anchor,
  Kayak,
};

export function NavIcon({ name, className }: { name?: string; className?: string }) {
  const Cmp = name ? ICONS[name] : undefined;
  if (!Cmp) return null;
  return <Cmp className={className} aria-hidden />;
}

/** Whether an icon name from the nav config resolves — used by tests to catch missing icons. */
export function hasNavIcon(name: string) {
  return name in ICONS;
}
