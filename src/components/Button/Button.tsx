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
}

export const Button = ({
  text,
  preset = "primary",
  disabled = false,
  isLoading = false,
  iconName = undefined,
  onPress,
  ...touchableOpacityBoxProps
}: ButtonProps) => {
  const buttonPreset = buttonPresets[preset][disabled ? "disabled" : "default"];

  return (
    <TouchableOpacityBox
      height={55}
      borderRadius={"s16"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"row"}
      disabled={disabled}
      columnGap={"s8"}
      onPress={onPress}
      {...$buttonShadow}
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}
    >
      {isLoading ? (
        <ActivityIndicator color={buttonPreset.loading} />
      ) : (
        <Box
          columnGap={"s10"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
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
            <Text weight="semiBold" color={buttonPreset.content}>
              {text}
            </Text>
          )}
        </Box>
      )}
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

  elevation: 14,
};
