import { useState } from "react";

import {
  Box,
  Text,
  Icon,
  Count,
  Divider,
  BoxProps,
  IconName,
  TouchableOpacityBox,
  AchievementProgressCardProps,
  AchievementProgressCard,
} from "@components";

export interface AchievementHeadingProps extends BoxProps {
  title: string;
  icon: IconName;
  target: number;
  current: number;
  isLastItem: boolean;
  description: string;
  achievements: Pick<
    AchievementProgressCardProps,
    "title" | "target" | "current" | "lastItem" | "percentage" | "description"
  >[];
}

export const AchievementHeading = ({
  icon,
  title,
  target,
  current,
  isLastItem,
  description,
  achievements,
  ...boxProps
}: AchievementHeadingProps) => {
  const [showAchievements, setShowAchievements] = useState(false);

  const handleToggleAchievements = () => {
    setShowAchievements((prev) => !prev);
  };

  return (
    <Box>
      <TouchableOpacityBox
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        paddingHorizontal={"s24"}
        mt={"s24"}
        onPress={handleToggleAchievements}
        {...boxProps}
      >
        <Box flex={1} rowGap={"s6"}>
          <Box flexDirection={"row"} alignItems={"center"} columnGap={"s8"}>
            <Icon name={icon} size="s24" color="primary" strokeWidth={2} />
            <Text
              weight="semiBold"
              preset="paragraphsXL"
              color={"backgroundConstrast"}
            >
              {title}
            </Text>
          </Box>
          <Text
            weight="medium"
            preset="paragraphsBig"
            color={"backgroundSecondConstrast"}
          >
            {description}
          </Text>
        </Box>
        <Count target={target} current={current} />
      </TouchableOpacityBox>

      {!!achievements && showAchievements ? (
        <Box>
          {achievements.map((item, index) => (
            <AchievementProgressCard {...item} key={index} />
          ))}
        </Box>
      ) : null}

      {!isLastItem && <Divider mt={"s30"} />}
    </Box>
  );
};
