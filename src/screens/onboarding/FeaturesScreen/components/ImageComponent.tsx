import { Image, ImageSourcePropType, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { Box } from "@components";
import { useAppTheme } from "@hooks";

export type ImageNameProps =
  | "OMS_IOS"
  | "SUPPORT_IOS"
  | "CALENDAR_IOS"
  | "ACHIEVEMENTS_IOS"
  | "NOTIFICATION_IOS"
  | "OMS_ANDROID"
  | "SUPPORT_ANDROID"
  | "CALENDAR_ANDROID"
  | "ACHIEVEMENTS_ANDROID";
interface ImageComponentProps {
  width: number;
  imageName: ImageNameProps;
}

const imageMap: Record<ImageNameProps, ImageSourcePropType> = {
  OMS_IOS: require("../../../../assets/startImages/OMS_IOS.png"),
  SUPPORT_IOS: require("../../../../assets/startImages/SUPPORT_IOS.png"),
  CALENDAR_IOS: require("../../../../assets/startImages/CALENDAR_IOS.png"),
  ACHIEVEMENTS_IOS: require("../../../../assets/startImages/ACHIEVEMENTS_IOS.png"),
  NOTIFICATION_IOS: require("../../../../assets/startImages/NOTIFICATION_IOS.png"),
  ACHIEVEMENTS_ANDROID: require("../../../../assets/startImages/ACHIEVEMENTS_ANDROID.png"),
  CALENDAR_ANDROID: require("../../../../assets/startImages/CALENDAR_ANDROID.png"),
  OMS_ANDROID: require("../../../../assets/startImages/OMS_ANDROID.png"),
  SUPPORT_ANDROID: require("../../../../assets/startImages/SUPPORT_ANDROID.png"),
};

export const ImageComponent = ({ width, imageName }: ImageComponentProps) => {
  const originalWidth = 1140;
  const originalHeight = 1575;

  const aspectRatio = originalHeight / originalWidth;

  const { colors } = useAppTheme();

  return (
    <Box>
      <Image
        style={{
          width: width,
          height: width * aspectRatio,
        }}
        source={imageMap[imageName]}
      />
      <LinearGradient
        pointerEvents="none"
        colors={[
          colors.firstLinearGradientColor,
          colors.secondLinearGradientColor,
          colors.thirdLinearGradientColor,
        ]}
        style={styles.background}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -12,
    height: 150,
  },
});
