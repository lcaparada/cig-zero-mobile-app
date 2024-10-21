import { format } from "date-fns";

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

  return (
    <Box flexDirection="row" alignItems="center" justifyContent="space-between">
      <Text preset="paragraphsLarge" weight="semiBold">
        {capitalizeFirstLetter(formattedDate)}
      </Text>
      <Box flexDirection="row">
        {["chevronLeft", "chevronRight"].map((name, index) => (
          <Icon
            key={name}
            name={name as IconName}
            color="backgroundConstrast"
            size="s26"
            strokeWidth={2}
            onPress={() => (index === 0 ? subMonth() : addMonth())}
          />
        ))}
      </Box>
    </Box>
  );
};
