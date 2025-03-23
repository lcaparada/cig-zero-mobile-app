import { parseISO, addDays } from "date-fns";

export const calculateTimeDifferenceFromNow = (
  date: string,
  countdownMode: boolean = false
) => {
  if (!date) {
    return { days: 0, hours: 0, minutes: 0 };
  }

  const dateInTimestamp = parseISO(date).getTime();

  if (isNaN(dateInTimestamp)) {
    return { days: 0, hours: 0, minutes: 0 };
  }

  let targetTimestamp = dateInTimestamp;

  if (countdownMode) {
    targetTimestamp = addDays(parseISO(date), 3).getTime();
  }

  const now = Date.now();
  const totalMilliseconds = countdownMode
    ? targetTimestamp - now
    : now - targetTimestamp;

  if (totalMilliseconds <= 0) {
    return { days: 0, hours: 0, minutes: 0 };
  }

  const totalMinutes = Math.floor(totalMilliseconds / 60000);
  const totalHours = Math.floor(totalMinutes / 60);
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;

  return { days, hours, minutes };
};
