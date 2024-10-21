import { useCallback, useEffect, useRef } from "react";
import { Animated, Dimensions, Easing } from "react-native";

import { useAppTheme } from "./useAppTheme";

interface UseAnimationModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useAnimationModal = ({
  visible,
  setVisible,
}: UseAnimationModalProps) => {
  const { height } = Dimensions.get("window");
  const position = useRef(new Animated.Value(height)).current;
  const animationDuration = 400;
  const { colors } = useAppTheme();

  const animateModal = useCallback(
    (toValue: number, onComplete?: () => void) => {
      Animated.timing(position, {
        toValue,
        delay: 200,
        useNativeDriver: false,
        duration: animationDuration,
        easing: Easing.out(Easing.exp),
      }).start(onComplete);
    },
    [position]
  );

  const closeModal = useCallback(
    (onComplete?: () => void) => {
      animateModal(height, () => {
        setVisible(false);
        if (onComplete) {
          onComplete();
        }
      });
    },
    [animateModal, height, setVisible]
  );

  useEffect(() => {
    if (visible) {
      animateModal(0);
    } else {
      closeModal();
    }
  }, [visible, animateModal, closeModal]);

  return { position, colors, closeModal };
};
