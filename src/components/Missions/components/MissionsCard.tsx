import { StyleSheet } from "react-native";

import { shadow } from "@theme";

import { Missions } from "@domain";
import { Box } from "src/components/Box/Box";
import { Icon, IconName } from "src/components/Icon/Icon";

import { MissionCardBadge } from "./MissionsCardBadge";
import { MissionsCardDescription } from "./MissionsCardDescription";
import { MissionsCardHeader } from "./MissionsCardHeader";
import { MissionsProgressBar } from "./MissionsProgressBar";

interface MissionsCardProps extends Omit<Missions, "id" | "title"> {
  icon: IconName;
  index: number;
}

export const MissionsCard = ({
  icon,
  index,
  data,
  percentage,
  category,
  description,
}: MissionsCardProps) => {
  return (
    <Box width={"100%"}>
      <Box
        width="100%"
        borderRadius="s16"
        paddingVertical="s18"
        paddingHorizontal="s20"
        backgroundColor="primary"
        opacity={percentage >= 100 ? 0.5 : 1}
        {...shadow}
      >
        <Box flexDirection="row" columnGap="s8">
          <MissionCardBadge number={index} />
          <Box flex={1}>
            <MissionsCardHeader iconName={icon} text={category.name} />
            <MissionsCardDescription description={description} />
            <MissionsProgressBar
              current={data[0].current}
              target={data[0].target}
            />
          </Box>
        </Box>
      </Box>
      {percentage >= 100 ? (
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
