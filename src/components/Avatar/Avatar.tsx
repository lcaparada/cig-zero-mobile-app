import { Image } from "react-native";

import { ThemeBorderRadii, ThemeColors } from "@theme";

import { TouchableOpacityBox, TouchableOpacityBoxProps } from "../Box/Box";
import { Text, TextVariants } from "../Text/Text";

interface AvatarProps extends TouchableOpacityBoxProps {
  size?: number;
  textSize?: TextVariants;
  borderWidth?: number;
  borderColor?: ThemeColors;
  borderRadius?: ThemeBorderRadii;
  photo?: string | null;
  name: string;
  onPress?: () => void;
}

export const Avatar = ({
  size = 40,
  borderWidth = 2,
  borderRadius = "s25",
  textSize = "display",
  borderColor = "mutedAqua",
  photo,
  name,
  onPress,
  ...touchableOpacityBoxProps
}: AvatarProps) => {
  return (
    <TouchableOpacityBox
      width={size}
      height={size}
      backgroundColor={"primary"}
      activeOpacity={onPress ? 0 : 1}
      borderRadius={borderRadius}
      borderWidth={photo ? 0 : borderWidth}
      borderColor={"mutedAqua"}
      onPress={onPress}
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
        <Text preset={textSize} weight="semiBold" color={"neutralLighest"}>
          {name?.slice(0, 1)?.toUpperCase()}
        </Text>
      )}
    </TouchableOpacityBox>
  );
};

const $touchableWrapper: TouchableOpacityBoxProps = {
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};
