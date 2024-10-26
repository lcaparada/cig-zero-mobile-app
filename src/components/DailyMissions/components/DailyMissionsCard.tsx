import { shadow } from "@theme";

import { Box } from "src/components/Box/Box";
import { IconName } from "src/components/Icon/Icon";

import { DailyMissionCardBadge } from "./DailyMissionsCardBadge";
import { DailyMissionsCardDescription } from "./DailyMissionsCardDescription";
import { DailyMissionsCardHeader } from "./DailyMissionsCardHeader";
import { DailyMissionsProgressBar } from "./DailyMissionsProgressBar";

interface DailyMissionsCardProps {
  icon: IconName;
  title: string;
  index: number;
  description: string;
}

export const DailyMissionsCard = ({
  icon,
  index,
  title,
  description,
}: DailyMissionsCardProps) => {
  return (
    <Box
      height={95}
      width="100%"
      borderRadius="s16"
      paddingVertical="s18"
      paddingHorizontal="s20"
      backgroundColor="primary"
      {...shadow}
    >
      <Box flexDirection="row" columnGap="s8">
        <DailyMissionCardBadge number={index} />
        <Box flex={1}>
          <DailyMissionsCardHeader iconName={icon} text={title} />
          <DailyMissionsCardDescription description={description} />
          <DailyMissionsProgressBar />
        </Box>
      </Box>
    </Box>
  );
};
