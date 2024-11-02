import { useEffect, useMemo, useState } from "react";
import { useWindowDimensions } from "react-native";

import {
  endOfMonth,
  addMonths,
  startOfMonth,
  isSameMonth,
  nextSaturday,
  previousSunday,
  eachDayOfInterval,
} from "date-fns";

import { CalendarProps } from "./Calendar";

export const useCalendar = ({
  date,
  setDate,
}: Pick<CalendarProps, "date" | "setDate">) => {
  const [days, setDays] = useState<Date[]>([]);

  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const updateDate = (monthsToAdd: number) => {
    const newDate = startOfMonth(addMonths(date, monthsToAdd));

    if (isSameMonth(newDate, new Date())) {
      setDate(new Date());
    } else {
      setDate(newDate);
    }
  };

  const handleAddMonth = () => {
    updateDate(1);
  };

  const handleSubMonth = () => {
    updateDate(-1);
  };

  const handleSelectDate = (date: Date) => {
    setDate(date);
  };

  const generateDaysOfMonth = () => {
    const startOfMonthDate = startOfMonth(date);
    const endOfMonthDate = endOfMonth(date);

    return eachDayOfInterval({
      start: previousSunday(startOfMonthDate),
      end: nextSaturday(endOfMonthDate),
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const daysOfMonth = useMemo(() => generateDaysOfMonth(), [date]);

  useEffect(() => {
    setDays(daysOfMonth);
  }, [daysOfMonth]);

  return {
    days,
    date,
    SCREEN_WIDTH,
    handleAddMonth,
    handleSubMonth,
    handleSelectDate,
  };
};
