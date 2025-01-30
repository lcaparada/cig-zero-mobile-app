import { Image, ImageSourcePropType } from "react-native";

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

  return (
    <Image
      style={{
        width: width,
        height: width * aspectRatio,
      }}
      source={imageMap[imageName]}
    />
  );
};
