import { useEffect } from "react";

import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export const useChatWritingIndicator = () => {
  const dotScale = useSharedValue(1);
  const dotOpacity = useSharedValue(1);

  useEffect(() => {
    dotScale.value = withRepeat(withTiming(1.5, { duration: 500 }), -1, true);
    dotOpacity.value = withRepeat(withTiming(0.5, { duration: 500 }), -1, true);
  }, [dotScale, dotOpacity]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: dotScale.value }],
      opacity: dotOpacity.value,
    };
  });

  return { animatedStyle };
};
