import { mainNav } from './navigation';
import { hasNavIcon } from '@/components/marketing/nav-icons';

describe('mainNav icons', () => {
  const names = mainNav.flatMap((item) =>
    [...(item.groups ?? []), ...(item.secondaryGroups ?? [])].flatMap((group) => [
      group.icon,
      ...group.items.map((link) => link.icon),
    ])
  ).filter((name): name is string => Boolean(name));

  it('uses at least one icon', () => {
    expect(names.length).toBeGreaterThan(0);
  });

  it.each(names)('resolves icon "%s" in the shared nav icon map', (name) => {
    expect(hasNavIcon(name)).toBe(true);
  });
});
