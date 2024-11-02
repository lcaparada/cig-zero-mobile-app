import { State, PanGestureHandler } from "react-native-gesture-handler";

import { IndexedSmokingRecordsState } from "src/screens/app/CalendarScreen/useCalendarScreen";

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
  indexedSmokingRecords: IndexedSmokingRecordsState;
}

export const Calendar = ({
  date,
  setDate,
  indexedSmokingRecords,
}: CalendarProps) => {
  const {
    days,
    SCREEN_WIDTH,
    handleAddMonth,
    handleSubMonth,
    handleSelectDate,
  } = useCalendar({ date, setDate });

  const PADDING_SCREEN = 24;
  const AVAILABLE_SPACE_SCREEN = SCREEN_WIDTH - PADDING_SCREEN * 2;
  const WIDTH_BALL = 37;
  const COLUMN_GAP = (AVAILABLE_SPACE_SCREEN - WIDTH_BALL * 7) / 6;

  const onHandlerStateChange = ({ nativeEvent }: any) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.translationX > 50) {
        handleSubMonth();
      } else if (nativeEvent.translationX < -50) {
        handleAddMonth();
      }
    }
  };

  return (
    <PanGestureHandler
      onHandlerStateChange={onHandlerStateChange}
      activeOffsetX={[-10, 10]}
    >
      <Box mt={"s24"} paddingHorizontal={"s24"}>
        <CalendarComponentHeader
          date={date}
          addMonth={handleAddMonth}
          subMonth={handleSubMonth}
        />
        <CalendarDaysOfWeek COLUMN_GAP={COLUMN_GAP} />
        <CalendarDays
          date={date}
          days={days}
          COLUMN_GAP={COLUMN_GAP}
          selectDate={handleSelectDate}
          indexedSmokingRecords={indexedSmokingRecords}
        />
        <CalendarInformations />
      </Box>
    </PanGestureHandler>
  );
};
