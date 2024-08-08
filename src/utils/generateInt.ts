/**
 * Keep value between 0 and 1
 */
export const generateIntLessThanOne = (value: number): number =>
  Math.max(0, Math.min(value, 1)) || 0;