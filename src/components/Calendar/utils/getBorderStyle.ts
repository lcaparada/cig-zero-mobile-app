import { isBefore, isSameMonth, isToday, startOfDay } from "date-fns";

export const getBorderStyle = (
  date: Date,
  dateToCheck: Date,
  userCreatedAt: string,
  hasSmokeRecord: boolean
): "dashed" | "solid" => {
  return (isToday(dateToCheck) ||
    (userCreatedAt && isBefore(dateToCheck, startOfDay(userCreatedAt)))) &&
    isSameMonth(dateToCheck, date) &&
    !hasSmokeRecord
    ? "dashed"
    : "solid";
};
