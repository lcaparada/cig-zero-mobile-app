import { GestureResponderEvent } from "react-native";

import * as Haptics from "expo-haptics";

import { ActivityIndicator } from "../ActivityIndicator/ActivityIndicator";
import {
  Box,
  BoxProps,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from "../Box/Box";
import { Icon, IconName } from "../Icon/Icon";
import { Text } from "../Text/Text";

import { buttonPresets, ButtonPresetType } from "./buttonPreset";

export interface ButtonProps extends TouchableOpacityBoxProps {
  text?: string;
  iconName?: IconName;
  preset?: ButtonPresetType;
  disabled?: boolean;
  isLoading?: boolean;
  hasArrowRight?: boolean;
  rightComponent?: JSX.Element;
  disabledWithPrimaryPreset?: boolean;
}

export const Button = ({
  text,
  preset = "primary",
  disabled = false,
  isLoading = false,
  iconName = undefined,
  hasArrowRight = false,
  rightComponent,
  disabledWithPrimaryPreset = false,
  onPress,
  ...touchableOpacityBoxProps
}: ButtonProps) => {
  const buttonPreset = buttonPresets[preset][disabled ? "disabled" : "default"];

  function handleOnPress(event: GestureResponderEvent) {
    if (onPress) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      onPress(event);
    }
  }

  return (
    <TouchableOpacityBox
      height={55}
      borderRadius={"s16"}
      paddingHorizontal={"s20"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"row"}
      disabled={disabled || disabledWithPrimaryPreset}
      columnGap={"s8"}
      onPress={handleOnPress}
      {...$buttonShadow}
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}
    >
      {isLoading ? (
        <ActivityIndicator color={buttonPreset.loading} />
      ) : (
        <Box
          columnGap={"s8"}
          flexDirection={"row"}
          flex={!!rightComponent ? 1 : undefined}
          justifyContent={!!rightComponent ? undefined : "center"}
          alignItems={"center"}
        >
          {iconName && (
            <Icon
              size="s20"
              name={iconName}
              strokeWidth={2}
              color={buttonPreset.content}
            />
          )}
          {text && (
            <Text
              weight="semiBold"
              numberOfLines={1}
              color={buttonPreset.content}
            >
              {text}
            </Text>
          )}
        </Box>
      )}
      {hasArrowRight && (
        <Box position={"absolute"} right={20}>
          <Icon
            name="arrowRight"
            size="s20"
            color="buttonConstrast"
            strokeWidth={2}
          />
        </Box>
      )}
      {rightComponent && <Box>{rightComponent}</Box>}
    </TouchableOpacityBox>
  );
};

const $buttonShadow: BoxProps = {
  shadowColor: "buttonShadow",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 1,
  shadowRadius: 0,
  elevation: 1,
};
