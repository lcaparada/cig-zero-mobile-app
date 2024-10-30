import { useState } from "react";

import {
  Box,
  Text,
  Icon,
  Count,
  Divider,
  BoxProps,
  TouchableOpacityBox,
  AchievementProgressCard,
} from "@components";

import { AchievementCategory } from "@domain";

export type AchievementHeadingProps = BoxProps &
  Pick<
    AchievementCategory,
    "title" | "description" | "icon" | "achievements"
  > & {
    isLastItem: boolean;
  };

export const AchievementHeading = ({
  icon,
  title,
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
        <Count
          target={achievements.length}
          current={
            achievements.filter(({ is_completed }) => is_completed).length
          }
        />
      </TouchableOpacityBox>

      {!!achievements && showAchievements ? (
        <Box>
          {achievements.map((item, index) => (
            <AchievementProgressCard
              key={index}
              type="hours"
              lastItem={achievements.length - 1 === index}
              {...item}
            />
          ))}
        </Box>
      ) : null}

      {!isLastItem && <Divider mt={"s30"} />}
    </Box>
  );
};
