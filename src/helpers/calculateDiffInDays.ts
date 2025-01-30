import { differenceInDays } from "date-fns";

/**
 * Calculates the difference in days between two dates.
 *
 * @param {Date | string} laterDate Oldest date.
 * @param {Date | string} earlierDate Most recent date.
 *
 * @returns {number} The difference in days between the two dates.
 */
export const calculateDiffInDays = (
  laterDate: Date | string,
  earlierDate: Date | string
): number => {
  const diff = differenceInDays(laterDate, earlierDate);
  return diff;
};
