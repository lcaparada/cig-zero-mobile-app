import { format } from "date-fns";
import { usePostHog } from "posthog-react-native";

import { PostHogEventsName } from "@constraints";
import { Box } from "src/components/Box/Box";
import { Icon, IconName } from "src/components/Icon/Icon";
import { Text } from "src/components/Text/Text";

import { capitalizeFirstLetter } from "../utils";

interface CalendarComponentHeaderProps {
  date: Date;
  addMonth: () => void;
  subMonth: () => void;
}

export const CalendarComponentHeader = ({
  date,
  addMonth,
  subMonth,
}: CalendarComponentHeaderProps) => {
  const formattedDate = format(date, "MMMM, yyyy");

  const posthog = usePostHog();

  return (
    <Box flexDirection="row" alignItems="center" justifyContent="space-between">
      <Text
        preset="paragraphsLarge"
        weight="semiBold"
        color={"backgroundConstrast"}
      >
        {capitalizeFirstLetter(formattedDate)}
      </Text>
      <Box flexDirection="row" columnGap={"s10"}>
        {["chevronLeft", "chevronRight"].map((name, index) => (
          <Icon
            key={name}
            name={name as IconName}
            color="backgroundConstrast"
            size="s26"
            strokeWidth={2}
            onPress={() => {
              if (index === 0) {
                posthog.capture(PostHogEventsName.PRESS_TO_SUBTRACT_MONTH);
                subMonth();
              } else {
                posthog.capture(PostHogEventsName.PRESS_TO_ADD_MONTH);
                addMonth();
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
