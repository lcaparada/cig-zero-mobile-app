import * as Haptics from "expo-haptics";

import {
  BoxProps,
  AnimatedBoxRNR,
  TouchableOpacityBoxProps,
  AnimatedTouchableOpacityBoxRNR,
} from "../Box/Box";

import { useSwitch } from "./useSwitch";

export interface SwitchProps {
  isActive: boolean;
  disabled?: boolean;
  onPress?: () => Promise<void>;
  setIsActive: (value: boolean) => void;
}

export const Switch = ({
  isActive,
  disabled = false,
  onPress,
  setIsActive,
}: SwitchProps) => {
  const { switchAnimatedStyle, animatedTouchableBoxStyle, handleOnPress } =
    useSwitch({ isActive, setIsActive });

  const action = async () => {
    try {
      if (onPress) {
        await onPress();
      }
      handleOnPress();
    } catch (error) {
      throw error;
    }
  };

  return (
    <AnimatedTouchableOpacityBoxRNR
      {...$touchableWrapper}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        action();
      }}
      disabled={disabled}
      style={[animatedTouchableBoxStyle]}
    >
      <AnimatedBoxRNR {...$boxWrapper} style={switchAnimatedStyle} />
    </AnimatedTouchableOpacityBoxRNR>
  );
};

const $touchableWrapper: TouchableOpacityBoxProps = {
  width: 40,
  height: 24,
  borderRadius: "s16",
  padding: "s2",
};

const $boxWrapper: BoxProps = {
  width: 20,
  height: 20,
  borderRadius: "s20",
  backgroundColor: "background",
};
