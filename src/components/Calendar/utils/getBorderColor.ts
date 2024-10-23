import { isBefore, isSameMonth, isToday } from "date-fns";

export const getBorderColor = (
  date: Date,
  dateToCheck: Date,
  hasSmokeRecord: boolean
): "primary" | "backgroundSecondConstrast" => {
  const isFutureOrSameMonth =
    isSameMonth(date, dateToCheck) && !isBefore(dateToCheck, new Date());
  return isToday(dateToCheck) || isFutureOrSameMonth || hasSmokeRecord
    ? "primary"
    : "backgroundSecondConstrast";
};
