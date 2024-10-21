import { isBefore, isSameMonth, isToday } from "date-fns";

export const getBorderColor = (date: Date, dateToCheck: Date) => {
  if (isToday(dateToCheck)) {
    return "primary";
  }
  if (isSameMonth(date, dateToCheck) && !isBefore(dateToCheck, new Date())) {
    return "primary";
  }
  return "backgroundSecondConstrast";
};
