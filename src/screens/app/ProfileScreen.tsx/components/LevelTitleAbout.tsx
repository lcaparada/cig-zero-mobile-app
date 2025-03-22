import { StyleSheet } from "react-native";

import {
  Text,
  BoxProps,
  AnimatedBoxRNR,
  PressableBoxProps,
  AnimatedPressableBox,
} from "@components";
import { useAnimatedVisibility } from "@hooks";

import { ILevelTitlePosition } from "../ProfileScreen";

interface LevelTitleAboutProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  levelTitlePosition: ILevelTitlePosition;
}

export const LevelTitleAbout = ({
  setVisible,
  levelTitlePosition,
}: LevelTitleAboutProps) => {
  const { animatedBoxStyle, animatedPressableStyle, handleClose } =
    useAnimatedVisibility({ setVisibility: setVisible });

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
