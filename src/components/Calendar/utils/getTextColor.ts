import {
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  isToday,
  subDays,
} from "date-fns";

type TextColor =
  | "primary"
  | "neutralLighest"
  | "background"
  | "backgroundSecondConstrast";

export const getTextColor = (
  date: Date,
  dateToCheck: Date,
  userCreatedAt: string,
  hasSmokeRecord: boolean
): TextColor => {
  const userCreatedDate = new Date(userCreatedAt);
  const isOutOfUserRange = isBefore(dateToCheck, subDays(userCreatedDate, 1));
  const isFutureDate = isAfter(dateToCheck, new Date());
  const isDifferentMonth = !isSameMonth(date, dateToCheck);

  if (isOutOfUserRange) return "backgroundSecondConstrast";

  if (isSameDay(date, dateToCheck)) return "neutralLighest";

  if (hasSmokeRecord) return "background";

  if (isFutureDate && isDifferentMonth) return "backgroundSecondConstrast";

  if (
    isToday(dateToCheck) ||
    (isSameMonth(date, dateToCheck) && isFutureDate)
  ) {
    return "primary";
  }

  return "neutralLighest";
};
