import {
  Box,
  Text,
  Icon,
  Count,
  Divider,
  BoxProps,
  IconName,
} from "@components";

import { Achievement } from "@domain";

import { AchievementCard } from "./AchievementCard";

export type AchievementHeadingProps = BoxProps & {
  icon: IconName;
  title: string;
  isLastItem: boolean;
  description: string;
  achievements: Achievement[];
};

export const AchievementHeading = ({
  icon,
  title,
  isLastItem,
  description,
  achievements,
  ...boxProps
}: AchievementHeadingProps) => {
  return (
    <Box>
      <Box
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        paddingHorizontal={"s24"}
        mt={"s24"}
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
        <Count target={8} current={0} />
      </Box>

      <Box {...$achievementsCardWrapper}>
        {achievements.map((achievement) => (
          <AchievementCard {...achievement} key={achievement.id} />
        ))}
      </Box>

      {!isLastItem && <Divider mt={"s30"} />}
    </Box>
  );
};

const $achievementsCardWrapper: BoxProps = {
  flexDirection: "row",
  paddingHorizontal: "s24",
  marginTop: "s24",
  columnGap: "s12",
  rowGap: "s12",
  flexWrap: "wrap",
};
