import { shadow } from "@theme";

import { Box } from "src/components/Box/Box";
import { IconName } from "src/components/Icon/Icon";

import { MissionCardBadge } from "./MissionsCardBadge";
import { MissionsCardDescription } from "./MissionsCardDescription";
import { MissionsCardHeader } from "./MissionsCardHeader";
import { MissionsProgressBar } from "./MissionsProgressBar";

interface MissionsCardProps {
  icon: IconName;
  title: string;
  index: number;
  description: string;
}

export const MissionsCard = ({
  icon,
  index,
  title,
  description,
}: MissionsCardProps) => {
  return (
    <Box
      width="100%"
      borderRadius="s16"
      paddingVertical="s18"
      paddingHorizontal="s20"
      backgroundColor="primary"
      {...shadow}
    >
      <Box flexDirection="row" columnGap="s8">
        <MissionCardBadge number={index} />
        <Box flex={1}>
          <MissionsCardHeader iconName={icon} text={title} />
          <MissionsCardDescription description={description} />
          <MissionsProgressBar />
        </Box>
      </Box>
    </Box>
  );
};
