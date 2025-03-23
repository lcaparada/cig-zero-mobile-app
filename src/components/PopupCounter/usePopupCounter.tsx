import { useCallback, useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";

import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { calculateTimeDifferenceFromNow } from "@helpers";
import { useAuth, UserMetaData } from "@services";

import { PopupCounterProps } from "./PopupCounter";

export const usePopupCounter = ({
  visible,
  setVisible,
}: Pick<PopupCounterProps, "visible" | "setVisible">) => {
  const { session } = useAuth();

  const userMetaData = session?.user.user_metadata as UserMetaData;

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  function getTimeLeft() {
    const endDate = new Date(userMetaData.firstAppLaunch);
    setTimeLeft(calculateTimeDifferenceFromNow(endDate.toISOString(), true));
  }

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

  useEffect(() => {
    if (visible) {
      showPopup();
      getTimeLeft();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  useEffect(() => {
    const interval = setInterval(() => {
      getTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    timeLeft,
    animatedStyles,
    showPopup,
    hidePopup,
  };
};
