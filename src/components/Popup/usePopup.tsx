import { useCallback, useEffect } from "react";
import { useWindowDimensions } from "react-native";

import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { PopupProps } from "./Popup";

export const usePopup = ({
  visible,
  setVisible,
}: Pick<PopupProps, "visible" | "setVisible">) => {
  const { height: SCREEN_HEIGHT } = useWindowDimensions();
  const translateY = useSharedValue(SCREEN_HEIGHT);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(translateY.value) }],
  }));

  const hidePopup = () => {
    translateY.value = SCREEN_HEIGHT;
    setTimeout(() => setVisible(false), 300);
  };

  const showPopup = useCallback(() => {
    translateY.value = 0;
  }, [translateY]);

  useEffect(() => {
    if (visible) {
      showPopup();
    }
  }, [showPopup, visible]);

  return {
    animatedStyles,
    showPopup,
    hidePopup,
  };
};
