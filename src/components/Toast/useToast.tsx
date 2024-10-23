import { useCallback, useEffect } from "react";
import { useWindowDimensions } from "react-native";

import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { useToastService } from "@services";

const SPRING_CONFIG = {
  damping: 12,
  stiffness: 90,
};

export const useToast = () => {
  const { width: MAX_WIDTH } = useWindowDimensions();

  const { toast, shouldHideToast } = useToastService();

  const translateY = useSharedValue<number>(-300);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(translateY.value, SPRING_CONFIG) }],
  }));

  const handleEnteringToast = useCallback(() => {
    translateY.value = withSpring(70, SPRING_CONFIG);
  }, [translateY]);

  const handleExitingToast = useCallback(() => {
    translateY.value = withSpring(-300, SPRING_CONFIG);
  }, [translateY]);

  useEffect(() => {
    handleEnteringToast();
    const timeoutId = setTimeout(() => {
      handleExitingToast();
    }, toast?.duration);
    return () => clearTimeout(timeoutId);
  }, [handleEnteringToast, handleExitingToast, toast?.duration, toast]);

  useEffect(() => {
    if (shouldHideToast) {
      handleExitingToast();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldHideToast]);

  return {
    toast,
    MAX_WIDTH,
    animatedStyles,
  };
};
