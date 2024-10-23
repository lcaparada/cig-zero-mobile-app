import { isSameDay } from "date-fns";

export const getBackgroundColor = (
  date: Date,
  dateToCheck: Date,
  hasSmokeRecord: boolean
) => {
  return isSameDay(date, dateToCheck)
    ? "shadowBlue"
    : hasSmokeRecord
      ? "primary"
      : "background";
};
