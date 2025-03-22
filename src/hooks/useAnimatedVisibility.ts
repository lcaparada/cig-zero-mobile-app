import { useEffect, useCallback } from "react";

import {
  useSharedValue,
  withTiming,
  withSpring,
  withDelay,
  useAnimatedStyle,
} from "react-native-reanimated";

interface UseAnimatedVisibility {
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useAnimatedVisibility({
  setVisibility,
}: UseAnimatedVisibility) {
  const scaleValue = useSharedValue(0);
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1);
    scaleValue.value = withDelay(
      100,
      withSpring(1, { damping: 20, velocity: 20 })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = useCallback(() => {
    scaleValue.value = withTiming(0);
    opacity.value = withDelay(300, withTiming(0));
    setTimeout(() => setVisibility(false), 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedBoxStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scaleValue.value }],
  }));

  const animatedPressableStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return {
    handleClose,
    animatedBoxStyle,
    animatedPressableStyle,
  };
}
