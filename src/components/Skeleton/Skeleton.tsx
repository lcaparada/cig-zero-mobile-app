import { useCallback, useEffect } from "react";
import { useWindowDimensions } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

import { Box, BoxProps } from "../Box/Box";

type SkeletonProps = BoxProps;

export const Skeleton = ({ width, ...skeletonProps }: SkeletonProps) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const translateX = useSharedValue(0);

  const calculateBoxWidth = useCallback(
    (width: BoxProps["width"]) => {
      if (width === "auto") {
        return SCREEN_WIDTH;
      }

      if (typeof width === "number") {
        return width;
      }

      if (typeof width === "string") {
        const percentage = width.replace("%", "");
        return (SCREEN_WIDTH * parseFloat(percentage)) / 100;
      }

      return 0;
    },
    [SCREEN_WIDTH]
  );

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(calculateBoxWidth(width), {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1,
      true
    );
  }, [calculateBoxWidth, translateX, width]);

  return (
    <Box
      style={{
        backgroundColor: "rgba(112, 110, 154, 0.08)",
      }}
      width={width}
      {...skeletonProps}
      overflow={"hidden"}
    >
      <Animated.View
        style={{
          width: "100%",
          height: "100%",
          transform: [
            {
              translateX: translateX,
            },
          ],
        }}
      >
        <LinearGradient
          style={{ width: "100%", height: "100%" }}
          colors={["transparent", "rgba(112, 110, 154, 0.08)", "transparent"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      </Animated.View>
    </Box>
  );
};
