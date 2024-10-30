import { Box } from "src/components/Box/Box";
import { Text } from "src/components/Text/Text";

import { AchievementProgressCardProps } from "../AchievementProgressCard/AchievementProgressCard";

import { formatNumber } from "./utils";

type CountProps = AchievementProgressCardProps["data"][0];

export const Count = ({ current, target }: CountProps) => {
  return (
    <Box
      backgroundColor={"primary"}
      borderRadius={"s16"}
      paddingVertical={"s4"}
      paddingHorizontal={"s8"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text preset="notes" color={"neutralLighest"} weight="semiBold">
        {formatNumber(current ?? 0, "hours")}/
        {formatNumber(target ?? 0, "hours")}
      </Text>
    </Box>
  );
};
