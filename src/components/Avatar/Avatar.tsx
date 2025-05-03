import { Image } from "react-native";

import * as Haptics from "expo-haptics";

import { ThemeBorderRadii, ThemeColors } from "@theme";

import { Box, TouchableOpacityBox, TouchableOpacityBoxProps } from "../Box/Box";
import { Icon } from "../Icon/Icon";
import { Text, TextVariants } from "../Text/Text";

interface AvatarProps extends TouchableOpacityBoxProps {
  size?: number;
  textSize?: TextVariants;
  borderWidth?: number;
  bgColor?: ThemeColors;
  textColor?: ThemeColors;
  borderColor?: ThemeColors;
  borderRadius?: ThemeBorderRadii;
  canEditPhoto?: boolean;
  photo?: string | null;
  name: string;
  onPress?: () => void;
}

export const Avatar = ({
  size = 40,
  borderWidth = 2,
  borderRadius = "s25",
  textSize = "display",
  bgColor = "primary",
  textColor = "neutralLighest",
  borderColor = "mutedAqua",
  canEditPhoto,
  photo,
  name,
  onPress,
  ...touchableOpacityBoxProps
}: AvatarProps) => {
  return (
    <>
      {canEditPhoto && (
        <Box {...$iconBox}>
          <Icon name="edit" strokeWidth={2} color="neutralLighest" size="s22" />
        </Box>
      )}
      <TouchableOpacityBox
        width={size}
        height={size}
        backgroundColor={bgColor}
        activeOpacity={onPress ? 0 : 1}
        borderRadius={borderRadius}
        borderWidth={photo ? 0 : borderWidth}
        borderColor={"mutedAqua"}
        onPress={
          onPress
            ? () => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                onPress();
              }
            : undefined
        }
        {...$touchableWrapper}
        {...touchableOpacityBoxProps}
      >
        {photo ? (
          <Image
            source={{ uri: photo }}
            style={{
              width: "100%",
              height: undefined,
              aspectRatio: 1,
            }}
          />
        ) : (
          <Text preset={textSize} weight="semiBold" color={textColor}>
            {name?.slice(0, 1)?.toUpperCase()}
          </Text>
        )}
      </TouchableOpacityBox>
    </>
  );
};

const $touchableWrapper: TouchableOpacityBoxProps = {
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};

const $iconBox: TouchableOpacityBoxProps = {
  width: 35,
  backgroundColor: "primary",
  height: 35,
  position: "absolute",
  top: 0,
  right: -4,
  zIndex: 1,
  borderRadius: "full",
  alignItems: "center",
  justifyContent: "center",
};
