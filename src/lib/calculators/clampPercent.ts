/** Clamps a percent input to [0, 100] — HTML's `min`/`max` on <input> are
 *  advisory only and don't stop a user from typing an out-of-range value. */
export function clampPercent(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.min(100, Math.max(0, value));
}
