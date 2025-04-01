import { useEffect } from "react";
import { Modal, StyleSheet } from "react-native";
import { Vibration } from "react-native";

import LottieView from "lottie-react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

import { useAnimatedVisibility } from "@hooks";
import { shadow } from "@theme";

import {
  AnimatedBoxRNR,
  AnimatedPressableBox,
  Box,
  BoxProps,
  PressableBoxProps,
} from "../Box/Box";
import { Text } from "../Text/Text";

interface XPInfoPopupProps {
  visible: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export const XPInfoPopup = ({ setVisibility, visible }: XPInfoPopupProps) => {
  const { animatedBoxStyle, animatedPressableStyle, handleClose } =
    useAnimatedVisibility({
      setVisibility,
    });

  function onPress() {
    handleClose();
  }

  const scaleText = useSharedValue(1);

  const textAnimated = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleText.value }],
    };
  });

  useEffect(() => {
    scaleText.value = withRepeat(
      withSequence(
        withTiming(0.8, { duration: 1000 }),
        withTiming(1, { duration: 1000 })
      ),
      -1,
      true
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      Vibration.vibrate([100, 100, 100, 100, 100]);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Modal visible={visible} transparent animationType="none">
      <AnimatedPressableBox
        {...$backdrop}
        onPress={onPress}
        style={[StyleSheet.absoluteFillObject, animatedPressableStyle]}
      >
        <AnimatedBoxRNR {...shadow} {...$card} style={[animatedBoxStyle]}>
          <Text weight="semiBold" color={"neutralLighest"}>
            Você acaba de ganhar:
          </Text>
          <AnimatedBoxRNR style={[textAnimated]}>
            <Text weight="bold" color={"neutralLighest"} preset="display">
              40 XP
            </Text>
          </AnimatedBoxRNR>
        </AnimatedBoxRNR>
        <Box style={[StyleSheet.absoluteFillObject]}>
          <LottieView
            source={require("../../assets/animations/confetti.json")}
            autoPlay
            loop
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </AnimatedPressableBox>
    </Modal>
  );
};

const $backdrop: PressableBoxProps = {
  backgroundColor: "backgroundModal",
  alignItems: "center",
  justifyContent: "center",
};

const $card: BoxProps = {
  width: "80%",
  alignItems: "center",
  padding: "s16",
  borderRadius: "s16",
  backgroundColor: "primary",
};
