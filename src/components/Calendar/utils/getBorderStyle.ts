import { isBefore, isSameMonth, isToday } from "date-fns";

export const getBorderStyle = (
  date: Date,
  dateToCheck: Date,
  userCreatedAt: string,
  hasSmokeRecord: boolean
): "dashed" | "solid" => {
  return (isToday(dateToCheck) ||
    (userCreatedAt && isBefore(dateToCheck, userCreatedAt))) &&
    isSameMonth(dateToCheck, date) &&
    !hasSmokeRecord
    ? "dashed"
    : "solid";
};
