import { Box } from "../Box/Box";

import {
  CalendarDays,
  CalendarDaysOfWeek,
  CalendarInformations,
  CalendarComponentHeader,
} from "./components";
import { useCalendar } from "./useCalendar";

export interface CalendarProps {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

export const Calendar = ({ date, setDate }: CalendarProps) => {
  const {
    days,
    SCREEN_WIDTH,
    handleAddMonth,
    handleSelectDate,
    handleSubtractMonth,
  } = useCalendar({ date, setDate });

  const PADDING_SCREEN = 24;
  const AVAILABLE_SPACE_SCREEN = SCREEN_WIDTH - PADDING_SCREEN * 2;
  const WIDTH_BALL = 37;
  const COLUMN_GAP = (AVAILABLE_SPACE_SCREEN - WIDTH_BALL * 7) / 6;

  return (
    <Box mt={"s24"} paddingHorizontal={"s24"}>
      <CalendarComponentHeader
        date={date}
        addMonth={handleAddMonth}
        subMonth={handleSubtractMonth}
      />
      <CalendarDaysOfWeek COLUMN_GAP={COLUMN_GAP} />
      <CalendarDays
        date={date}
        days={days}
        COLUMN_GAP={COLUMN_GAP}
        selectDate={handleSelectDate}
      />
      <CalendarInformations />
    </Box>
  );
};
