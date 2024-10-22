import { useEffect } from "react";

import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { AnimatedBoxRNR, Box, BoxProps } from "../Box/Box";

interface ProgressBarProps extends BoxProps {
  percentage: number;
}

export const ProgressBar = ({ percentage, ...boxProps }: ProgressBarProps) => {
  const animatedPercentage = useSharedValue(0);

  useEffect(() => {
    animatedPercentage.value = withTiming(percentage, { duration: 500 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [percentage]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      paddingTop: percentage > 0 ? 4 : 0,
      paddingLeft: percentage > 0 ? 8 : 0,
      width: `${animatedPercentage.value}%`,
    };
  });

  const animatedStyleCartoon = useAnimatedStyle(() => {
    return {
      width: `${animatedPercentage.value - 10}%`,
    };
  });

  return (
    <Box {...$progressBarBackground} {...boxProps}>
      <AnimatedBoxRNR style={animatedStyle} {...$progressBarInner}>
        <AnimatedBoxRNR
          height={3}
          style={animatedStyleCartoon}
          backgroundColor={"progressBarCartoon"}
          borderRadius={"s16"}
        />
      </AnimatedBoxRNR>
    </Box>
  );
};

const $progressBarBackground: BoxProps = {
  flex: 1,
  height: 16,
  overflow: "hidden",
  borderRadius: "s16",
  backgroundColor: "progressBarBackground",
};

const $progressBarInner: BoxProps = {
  height: "100%",
  backgroundColor: "primary",
  borderRadius: "s16",
};
