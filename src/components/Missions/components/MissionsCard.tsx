import { StyleSheet } from "react-native";

import { shadow } from "@theme";

import { Missions } from "@domain";
import { Box } from "src/components/Box/Box";
import { Icon, IconName } from "src/components/Icon/Icon";

import { MissionCardBadge } from "./MissionsCardBadge";
import { MissionsCardDescription } from "./MissionsCardDescription";
import { MissionsCardHeader } from "./MissionsCardHeader";
import { MissionsProgressBar } from "./MissionsProgressBar";

interface MissionsCardProps extends Omit<Missions, "category" | "id"> {
  icon: IconName;
  index: number;
}

export const MissionsCard = ({
  icon,
  index,
  title,
  target,
  current,
  description,
  isCompleted,
}: MissionsCardProps) => {
  return (
    <Box width={"100%"}>
      <Box
        width="100%"
        borderRadius="s16"
        paddingVertical="s18"
        paddingHorizontal="s20"
        backgroundColor="primary"
        opacity={isCompleted ? 0.5 : 1}
        {...shadow}
      >
        <Box flexDirection="row" columnGap="s8">
          <MissionCardBadge number={index} />
          <Box flex={1}>
            <MissionsCardHeader iconName={icon} text={title} />
            <MissionsCardDescription description={description} />
            <MissionsProgressBar current={current} target={target} />
          </Box>
        </Box>
      </Box>
      {isCompleted ? (
        <Box
          style={StyleSheet.absoluteFillObject}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box flexDirection={"row"} alignItems={"flex-end"}>
            <Icon name="star" size="s30" color="solarGold" fill="solarGold" />
            <Icon name="star" size="s48" color="solarGold" fill="solarGold" />
            <Icon name="star" size="s30" color="solarGold" fill="solarGold" />
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};
