import { useEffect } from "react";

import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { AnimatedBoxRNR, Box, BoxProps } from "src/components/Box/Box";
import { Icon } from "src/components/Icon/Icon";
import { Text } from "src/components/Text/Text";

interface MissionsProgressBarProps {
  current: number;
  target: number;
}

export const MissionsProgressBar = ({
  current,
  target,
}: MissionsProgressBarProps) => {
  const animatedPercentage = useSharedValue(0);

  const percentage = (current / target) * 100;

  useEffect(() => {
    animatedPercentage.value = withTiming(percentage, { duration: 500 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [percentage]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${animatedPercentage.value}%`,
    };
  });

  return (
    <Box flexDirection={"row"} columnGap={"s8"}>
      <Box flex={1} flexDirection={"row"}>
        <Box {...$progressWrapper}>
          <AnimatedBoxRNR style={animatedStyle} {...$progressInner} />
        </Box>
        <Box position={"absolute"} right={-5} top={2}>
          <Icon
            name="star"
            color="background"
            fill={percentage === 100 ? "neutralLighest" : "primary"}
          />
        </Box>
      </Box>
      <Text preset="paragraphs" weight="semiBold" color={"background"}>
        {current}/{target}
      </Text>
    </Box>
  );
};

const $progressWrapper: BoxProps = {
  mt: "s8",
  height: 8,
  flex: 1,
  borderWidth: 1.5,
  borderTopLeftRadius: "s16",
  borderBottomLeftRadius: "s16",
  borderColor: "background",
  backgroundColor: "primary",
};

const $progressInner: BoxProps = {
  height: "100%",
  borderRadius: "s16",
  backgroundColor: "background",
};
