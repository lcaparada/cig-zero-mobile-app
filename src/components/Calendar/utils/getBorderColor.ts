import { isBefore, isSameDay, isSameMonth, isToday } from "date-fns";

export const getBorderColor = (
  date: Date,
  dateToCheck: Date,
  hasSmokeRecord: boolean
): "primary" | "backgroundSecondConstrast" | "shadowBlue" => {
  const isFutureOrSameMonth =
    isSameMonth(date, dateToCheck) && !isBefore(dateToCheck, new Date());
  return isSameDay(date, dateToCheck)
    ? "shadowBlue"
    : isToday(dateToCheck) || isFutureOrSameMonth || hasSmokeRecord
      ? "primary"
      : "backgroundSecondConstrast";
};
