import { Image, ImageSourcePropType, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { Box } from "@components";
import { useAppTheme } from "@hooks";

export type ImageNameProps =
  | "OMS"
  | "SUPPORT"
  | "CALENDAR"
  | "ACHIEVEMENTS"
  | "NOTIFICATION";

interface ImageComponentProps {
  width: number;
  imageName: ImageNameProps;
}

const imageMap: Record<ImageNameProps, ImageSourcePropType> = {
  OMS: require("../../../../assets/startImages/OMS.png"),
  SUPPORT: require("../../../../assets/startImages/SUPPORT.png"),
  CALENDAR: require("../../../../assets/startImages/CALENDAR.png"),
  ACHIEVEMENTS: require("../../../../assets/startImages/ACHIEVEMENTS.png"),
  NOTIFICATION: require("../../../../assets/startImages/NOTIFICATION.png"),
};

export const ImageComponent = ({ width, imageName }: ImageComponentProps) => {
  const originalWidth = 1117;
  const originalHeight = 1565;

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
