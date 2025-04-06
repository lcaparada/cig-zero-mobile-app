import { useCallback } from "react";
import { useWindowDimensions } from "react-native";

import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

interface UsePopupAnimatedProps {
  setVisible: (value: React.SetStateAction<boolean>) => void;
}

export const usePopupAnimated = ({ setVisible }: UsePopupAnimatedProps) => {
  const { height: SCREEN_HEIGHT } = useWindowDimensions();
  const translateY = useSharedValue(SCREEN_HEIGHT);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(translateY.value, { damping: 17 }) }],
  }));

  const hidePopup = () => {
    translateY.value = SCREEN_HEIGHT;
    setTimeout(() => setVisible(false), 300);
  };

  const showPopup = useCallback(() => {
    translateY.value = 0;
  }, [translateY]);

  return {
    showPopup,
    hidePopup,
    animatedStyles,
  };
};
