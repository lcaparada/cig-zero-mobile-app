import {
  Pressable,
  TextInputProps as RNTextInputProps,
  TextInput as RNTextInput,
} from "react-native";

import { Box, BoxProps } from "../Box/Box";
import { Icon, IconName } from "../Icon/Icon";
import { $fontFamily, $fontSize, Text } from "../Text/Text";

import { useTextInput } from "./useTextInput";

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  icon?: IconName;
  height?: number;
  onPress?: () => void;
  alignItems?: BoxProps["alignItems"];
  boxProps?: BoxProps;
  errorMessage?: string;
  rightComponent?: JSX.Element;
}

export const TextInput = ({
  label,
  icon,
  style,
  height = 55,
  boxProps,
  alignItems = "center",
  errorMessage,
  rightComponent,
  onPress,
  ...rNTextInputProps
}: TextInputProps) => {
  const { colors, textInputRef, handleOnFocus } = useTextInput();

  return (
    <Box {...boxProps}>
      <Pressable onPress={onPress ? onPress : handleOnFocus}>
        {!!label && (
          <Text weight="medium" color={"backgroundConstrast"}>
            {label}
          </Text>
        )}
        <Box
          paddingVertical={alignItems !== "center" ? "s16" : "s0"}
          alignItems={alignItems}
          borderColor={"backgroundSecondConstrast"}
          borderWidth={!!errorMessage ? 3 : 2}
          {...$boxWrapper}
          onTouchStart={onPress && onPress}
        >
          {icon ? (
            <Box
              style={{ height }}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Icon name={icon} strokeWidth={2} color="backgroundConstrast" />
            </Box>
          ) : null}
          <RNTextInput
            ref={textInputRef}
            placeholderTextColor={colors.backgroundSecondConstrast}
            autoCapitalize="none"
            selectionColor={colors.primary}
            style={[
              $fontFamily.medium,
              $fontSize.default,
              {
                height,
                flex: 1,
                textAlign: "auto",
                lineHeight: undefined,
                color: colors.backgroundConstrast,
              },
              style,
            ]}
            {...rNTextInputProps}
          />
          {rightComponent && rightComponent}
        </Box>
      </Pressable>
      {errorMessage && (
        <Text weight="medium" color={"errorDark"} mt={"s4"}>
          {errorMessage}
        </Text>
      )}
    </Box>
  );
};

const $boxWrapper: BoxProps = {
  borderRadius: "s16",
  flexDirection: "row",
  bg: "background",
  paddingHorizontal: "s16",
  mt: "s8",
  columnGap: "s16",
};
