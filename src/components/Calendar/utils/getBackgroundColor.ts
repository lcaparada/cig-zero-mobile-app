import { isAfter, isBefore, isSameDay, isToday, subDays } from "date-fns";

import { ThemeColors } from "@theme";

export const getBackgroundColor = (
  date: Date,
  dateToCheck: Date,
  userCreatedAt: string,
  hasSmokeRecord: boolean
): Partial<ThemeColors> => {
  const isSameDate = isSameDay(date, dateToCheck);
  const isOutOfRange =
    isBefore(dateToCheck, subDays(new Date(userCreatedAt), 1)) ||
    isAfter(dateToCheck, new Date()) ||
    isToday(dateToCheck);

  if (isSameDate) return "shadowBlue";
  if (hasSmokeRecord) return "errorDark";
  if (isOutOfRange) return "background";

  return "primary";
};
