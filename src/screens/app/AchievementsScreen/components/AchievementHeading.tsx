import {
  Box,
  BoxProps,
  Count,
  Divider,
  Icon,
  IconName,
  Text,
  TouchableOpacityBox,
} from "@components";

export interface AchievementHeadingProps extends BoxProps {
  title: string;
  target: number;
  icon: IconName;
  current: number;
  isLastItem: boolean;
  description: string;
}

export const AchievementHeading = ({
  icon,
  title,
  target,
  current,
  isLastItem,
  description,
  ...boxProps
}: AchievementHeadingProps) => {
  return (
    <>
      <TouchableOpacityBox
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        paddingHorizontal={"s24"}
        mt={"s24"}
        {...boxProps}
      >
        <Box rowGap={"s6"}>
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
      {!isLastItem && <Divider mt={"s30"} />}
    </>
  );
};
