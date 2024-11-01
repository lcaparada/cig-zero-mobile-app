import { format, isBefore, isSameMonth, subDays } from "date-fns";

import { useAuth } from "@services";
import { Box, BoxProps, TouchableOpacityBox } from "src/components/Box/Box";
import { Text } from "src/components/Text/Text";
import { IndexedSmokingRecordsState } from "src/screens/app/CalendarScreen/useCalendarScreen";

import { getCircleStyle } from "../utils";

interface CalendarDaysProps {
  days: Date[];
  date: Date;
  COLUMN_GAP: number;
  selectDate: (d: Date) => void;
  indexedSmokingRecords: IndexedSmokingRecordsState;
}

export const CalendarDays = ({
  days,
  date,
  COLUMN_GAP,
  indexedSmokingRecords,
  selectDate,
}: CalendarDaysProps) => {
  const { session } = useAuth();
  const userCreatedAt = session?.user?.created_at
    ? new Date(session.user.created_at).toISOString()
    : new Date().toISOString();
  return (
    <Box {...$numberDayWrapper} style={{ columnGap: Math.floor(COLUMN_GAP) }}>
      {days.map((d, i) => {
        const dateString = new Date(d)?.toISOString()?.split("T")[0];
        const hasSmokeRecord =
          indexedSmokingRecords?.hasOwnProperty(dateString);
        const circleStyle = getCircleStyle(
          d,
          date,
          userCreatedAt,
          hasSmokeRecord
        );
        return (
          <TouchableOpacityBox
            key={i}
            {...$dayWrapper}
            activeOpacity={0}
            onPress={() => {
              if (isBefore(d, subDays(userCreatedAt, 1))) {
                return null;
              } else {
                selectDate(d);
              }
            }}
            opacity={isSameMonth(date, d) ? 1 : 0.2}
            {...circleStyle.circle}
          >
            <Text
              weight="semiBold"
              preset="paragraphsBig"
              {...circleStyle.text}
            >
              {format(d, "d")}
            </Text>
          </TouchableOpacityBox>
        );
      })}
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
