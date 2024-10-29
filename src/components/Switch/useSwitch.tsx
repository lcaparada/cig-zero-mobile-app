import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { useAppTheme } from "@hooks";
import { ThemeColors } from "@theme";

import { SwitchProps } from "./Switch";

export const useSwitch = ({ isActive, setIsActive }: SwitchProps) => {
  const { colors } = useAppTheme();

  const switchTranslate = useSharedValue(isActive ? 16 : 0);
  const switchColor = useSharedValue<ThemeColors>(
    isActive ? "primary" : "switchBackground"
  );

  const handleOnPress = () => {
    switchTranslate.value = withTiming(!isActive ? 16 : 0);
    switchColor.value = !isActive ? "primary" : "switchBackground";
    setIsActive(!isActive);
  };

  const animatedTouchableBoxStyle = useAnimatedStyle(() => ({
    backgroundColor: withTiming(colors[switchColor.value], { duration: 200 }),
  }));

  const switchAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: switchTranslate.value }],
  }));

  return {
    switchAnimatedStyle,
    animatedTouchableBoxStyle,
    handleOnPress,
  };
};
