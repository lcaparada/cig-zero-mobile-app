import { useEffect } from "react";
import { Modal, StyleSheet } from "react-native";
import { Vibration } from "react-native";

import LottieView from "lottie-react-native";

import { useAnimatedVisibility } from "@hooks";
import { shadow } from "@theme";

import { useChallenge } from "@services";

import {
  AnimatedBoxRNR,
  AnimatedPressableBox,
  Box,
  BoxProps,
  PressableBoxProps,
} from "../Box/Box";
import { Text } from "../Text/Text";

interface LevelUpPopupProps {
  visible: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LevelUpPopup = ({ setVisibility, visible }: LevelUpPopupProps) => {
  const { animatedBoxStyle, animatedPressableStyle, handleClose } =
    useAnimatedVisibility({
      setVisibility,
    });

  const { newLevel } = useChallenge();

  function onPress() {
    handleClose();
  }

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
            Parabéns! Você subiu de nível!🚀
          </Text>
          <Box flexDirection={"row"} columnGap={"s12"} alignItems={"center"}>
            <Text color={"neutralLighest"} weight="bold" preset="displayXL">
              {newLevel && newLevel - 1}
            </Text>
            <LottieView
              source={require("../../assets/animations/fast-forward.json")}
              autoPlay
              loop
              style={{ width: 60, height: 60 }}
            />
            <Text color={"neutralLighest"} weight="bold" preset="displayXL">
              {newLevel}
            </Text>
          </Box>
        </AnimatedBoxRNR>
        <Box style={[StyleSheet.absoluteFillObject]}>
          <LottieView
            source={require("../../assets/animations/rocket.json")}
            autoPlay
            loop={false}
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
