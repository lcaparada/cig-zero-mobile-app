import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Vibration } from "react-native";

import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

import { useAnimatedVisibility } from "@hooks";
import { shadow } from "@theme";

import {
  BoxProps,
  AnimatedBoxRNR,
  PressableBoxProps,
  AnimatedPressableBox,
} from "../Box/Box";
import { Text } from "../Text/Text";

interface CongratulationsPopupProps {
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CongratulationsPopup = ({
  setVisibility,
}: CongratulationsPopupProps) => {
  const { animatedBoxStyle, animatedPressableStyle, handleClose } =
    useAnimatedVisibility({
      setVisibility,
    });

  const navigation = useNavigation();

  function onPress() {
    handleClose();
    setTimeout(() => {
      navigation.goBack();
    }, 400);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      Vibration.vibrate([100, 100, 100]);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatedPressableBox
      {...$backdrop}
      onPress={onPress}
      style={[StyleSheet.absoluteFillObject, animatedPressableStyle]}
    >
      <AnimatedBoxRNR {...shadow} {...$card} style={[animatedBoxStyle]}>
        <Text textAlign={"center"} color={"primary"} weight="semiBold">
          Parabéns! Você completou o desafio diário com sucesso! 🎉
        </Text>
        <LottieView
          source={require("../../assets/animations/banners.json")}
          autoPlay
          loop
          style={{ width: 60, height: 60 }}
        />
      </AnimatedBoxRNR>
    </AnimatedPressableBox>
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
  rowGap: "s16",
  borderWidth: 1,
  borderColor: "buttonShadow",
  borderRadius: "s16",
  backgroundColor: "softWhite",
};
