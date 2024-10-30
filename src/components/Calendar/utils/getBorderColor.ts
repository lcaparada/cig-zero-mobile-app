import {
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  isToday,
  subDays,
} from "date-fns";

import { ThemeColors } from "@theme";

export const getBorderColor = (
  date: Date,
  dateToCheck: Date,
  userCreatedAt: string,
  hasSmokeRecord: boolean
): Partial<ThemeColors> => {
  const isFutureOrSameMonth =
    isSameMonth(date, dateToCheck) && !isBefore(dateToCheck, new Date());

  const isOutOfRange =
    isBefore(dateToCheck, subDays(new Date(userCreatedAt), 1)) ||
    isAfter(dateToCheck, new Date());

  if (isSameDay(date, dateToCheck)) return "shadowBlue";
  if (hasSmokeRecord) return "errorDark";
  if (isToday(dateToCheck) || isFutureOrSameMonth || !isOutOfRange)
    return "primary";

  return "backgroundSecondConstrast";
};
