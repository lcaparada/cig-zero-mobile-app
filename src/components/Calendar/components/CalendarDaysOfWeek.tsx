import { Box, BoxProps } from "src/components/Box/Box";
import { Text } from "src/components/Text/Text";

import { daysOfTheWeek } from "../calendarPreset";

interface CalendarDaysOfWeekProps {
  COLUMN_GAP: number;
}

export const CalendarDaysOfWeek = ({ COLUMN_GAP }: CalendarDaysOfWeekProps) => {
  return (
    <Box {...$boxWrapper} style={{ columnGap: Math.floor(COLUMN_GAP - 1) }}>
      {daysOfTheWeek.map((d, i) => (
        <Box key={i} width={38} alignItems={"center"} justifyContent={"center"}>
          <Text weight="medium" color="backgroundSecondConstrast">
            {d}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

const $boxWrapper: BoxProps = {
  flexDirection: "row",
  mt: "s20",
};
