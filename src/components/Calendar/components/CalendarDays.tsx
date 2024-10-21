import { format, isBefore, isSameMonth, isToday } from "date-fns";

import { Box, BoxProps, TouchableOpacityBox } from "src/components/Box/Box";
import { Text } from "src/components/Text/Text";

import { getBorderColor, getTextColor } from "../utils";

interface CalendarDaysProps {
  days: Date[];
  date: Date;
  COLUMN_GAP: number;
  selectDate: (d: Date) => void;
}

export const CalendarDays = ({
  days,
  date,
  COLUMN_GAP,
  selectDate,
}: CalendarDaysProps) => {
  return (
    <Box {...$numberDayWrapper} style={{ columnGap: Math.floor(COLUMN_GAP) }}>
      {days.map((d, i) => (
        <TouchableOpacityBox
          key={i}
          {...$dayWrapper}
          activeOpacity={0}
          onPress={() => selectDate(d)}
          borderStyle={
            isBefore(d, new Date()) || isToday(d) ? "dashed" : "solid"
          }
          opacity={isSameMonth(date, d) ? 1 : 0.2}
          borderColor={getBorderColor(date, d)}
        >
          <Text
            weight="semiBold"
            preset="paragraphsBig"
            color={getTextColor(date, d)}
            opacity={isSameMonth(date, d) ? 1 : 0.2}
          >
            {format(d, "d")}
          </Text>
        </TouchableOpacityBox>
      ))}
    </Box>
  );
};

const $dayWrapper: BoxProps = {
  width: 37,
  height: 37,
  borderWidth: 2,

  borderRadius: "s48",
  alignItems: "center",
  justifyContent: "center",
};

const $numberDayWrapper: BoxProps = {
  flexDirection: "row",
  flexWrap: "wrap",
  rowGap: "s8",
  mt: "s10",
};
