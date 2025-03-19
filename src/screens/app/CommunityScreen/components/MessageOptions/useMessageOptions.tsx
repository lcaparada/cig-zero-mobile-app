import { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";

import { usePostHog } from "posthog-react-native";
import {
  withDelay,
  withSpring,
  withTiming,
  useSharedValue,
} from "react-native-reanimated";

import { useKeyboard } from "@hooks";

import { useDeleteMessage } from "@domain";
import { useAppColor, useChat } from "@services";

export const useMessageOptions = () => {
  const { width } = useWindowDimensions();
  const { appTheme } = useAppColor();

  const posthog = usePostHog();

  const [showEditMessage, setShowEditMessage] = useState(false);

  const scaleValue = useSharedValue(0);
  const opacity = useSharedValue(0);

  const { handleDeleteMessage } = useDeleteMessage();

  const keyboardHeight = useKeyboard();

  const {
    messageToOptions,
    showOptionsMessage,
    setMessageToOptions,
    removeMessageFromUI,
    setShowOptionsMessage,
    selectedMessagePosition,
  } = useChat();

  function handleClose() {
    scaleValue.value = withTiming(0);
    opacity.value = withDelay(300, withTiming(0));
    setTimeout(() => {
      setMessageToOptions(null);
      setShowOptionsMessage(false);
    }, 400);
  }

  useEffect(() => {
    if (showOptionsMessage) {
      opacity.value = withTiming(1);
      scaleValue.value = withDelay(
        100,
        withSpring(1, { damping: 20, velocity: 20 })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showOptionsMessage]);

  useEffect(() => {
    if (showEditMessage) {
      scaleValue.value = withTiming(0);
    } else {
      scaleValue.value = withTiming(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showEditMessage]);
  return {
    width,
    opacity,
    posthog,
    appTheme,
    scaleValue,
    handleClose,
    keyboardHeight,
    showEditMessage,
    messageToOptions,
    setShowEditMessage,
    removeMessageFromUI,
    handleDeleteMessage,
    selectedMessagePosition,
  };
};
