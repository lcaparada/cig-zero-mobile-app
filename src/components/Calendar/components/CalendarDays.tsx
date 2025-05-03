import { format, isSameMonth } from "date-fns";
import * as Haptics from "expo-haptics";
import { usePostHog } from "posthog-react-native";

import { PostHogEventsName } from "@constraints";
import { useAuth, UserMetadata } from "@services";
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

  const userMetaData = session?.user.user_metadata as UserMetadata;

  const userStart = userMetaData.lastSmoking
    ? new Date(userMetaData.lastSmoking).toISOString()
    : new Date(session?.user.created_at ?? "").toISOString();

  const posthog = usePostHog();

  return (
    <Box {...$numberDayWrapper} style={{ columnGap: Math.floor(COLUMN_GAP) }}>
      {days.map((d, i) => {
        const dateString = new Date(d)?.toISOString()?.split("T")[0];
        const hasSmokeRecord =
          indexedSmokingRecords?.hasOwnProperty(dateString);
        const circleStyle = getCircleStyle(d, date, userStart, hasSmokeRecord);
        return (
          <TouchableOpacityBox
            key={i}
            {...$dayWrapper}
            activeOpacity={0}
            onPress={() => {
              posthog.capture(PostHogEventsName.PRESS_TO_SELECT_DATE);
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              selectDate(d);
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
