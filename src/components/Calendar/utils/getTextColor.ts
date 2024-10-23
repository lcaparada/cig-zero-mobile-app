import { isBefore, isSameDay, isSameMonth, isToday } from "date-fns";

export const getTextColor = (
  date: Date,
  dateToCheck: Date,
  hasSmokeRecord: boolean
):
  | "primary"
  | "backgroundSecondConstrast"
  | "background"
  | "neutralLighest" => {
  if (isSameDay(date, dateToCheck)) {
    return "neutralLighest";
  }
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
