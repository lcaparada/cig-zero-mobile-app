import { parseISO } from "date-fns";

export const calculateTimeDifferenceFromNow = (date: string) => {
  if (!date) {
    return { days: 0, hours: 0, minutes: 0 };
  }

  const dateInTimestamp = parseISO(date).getTime();

  if (isNaN(dateInTimestamp)) {
    return { days: 0, hours: 0, minutes: 0 };
  }

  const now = Date.now();
  const totalMilliseconds = now - dateInTimestamp;
  const totalMinutes = Math.floor(totalMilliseconds / 60000);
  const totalHours = Math.floor(totalMinutes / 60);
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;

  return { days, hours, minutes };
};
