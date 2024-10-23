import { isBefore, isSameMonth, isToday } from "date-fns";

export const getTextColor = (
  date: Date,
  dateToCheck: Date,
  hasSmokeRecord: boolean
): "primary" | "backgroundSecondConstrast" | "background" => {
  if (hasSmokeRecord) {
    return "background";
  }
  if (
    isToday(dateToCheck) ||
    (isSameMonth(date, dateToCheck) && !isBefore(dateToCheck, new Date()))
  ) {
    return "primary";
  }
  return "backgroundSecondConstrast";
};
