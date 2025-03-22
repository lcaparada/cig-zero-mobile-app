import { useEffect } from "react";
import { StyleSheet } from "react-native";

import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import {
  Text,
  BoxProps,
  AnimatedBoxRNR,
  PressableBoxProps,
  AnimatedPressableBox,
} from "@components";

import { ILevelTitlePosition } from "../ProfileScreen";

interface LevelTitleAboutProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  levelTitlePosition: ILevelTitlePosition;
}

export const LevelTitleAbout = ({
  setVisible,
  levelTitlePosition,
}: LevelTitleAboutProps) => {
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

  function handleClose() {
    scaleValue.value = withTiming(0);
    opacity.value = withDelay(300, withTiming(0));
    setTimeout(() => {
      setVisible(false);
    }, 400);
  }

  const animatedBoxStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleValue.value }],
    };
  });

  const animatedPressableStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <>
      <AnimatedPressableBox
        {...$backdrop}
        style={[StyleSheet.absoluteFillObject, animatedPressableStyle]}
        onPress={handleClose}
      />

      <AnimatedBoxRNR
        style={[animatedBoxStyle]}
        left={levelTitlePosition.x}
        top={levelTitlePosition.y + levelTitlePosition.height}
        {...$card}
        {...shadow}
      >
        <Text weight="medium" preset="paragraphsBig" color={"primary"}>
          Parabéns! Você conquistou a liberdade e provou sua força!
        </Text>
      </AnimatedBoxRNR>
    </>
  );
};

const $card: BoxProps = {
  backgroundColor: "background",
  borderRadius: "s8",
  paddingHorizontal: "s12",
  borderWidth: 1,
  maxWidth: "60%",
  position: "absolute",
  borderColor: "primary",
  paddingVertical: "s10",
};

const shadow: BoxProps = {
  shadowColor: "primary",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 1,
  shadowRadius: 0,
  elevation: 5,
};

const $backdrop: PressableBoxProps = {
  backgroundColor: "backgroundModal",
};
