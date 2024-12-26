import { useWindowDimensions } from "react-native";

import { Box, Text } from "@components";

import { ImageComponent, ImageNameProps } from "./ImageComponent";

export type StepProps = {
  imageName: ImageNameProps;
  primaryTitle: string;
  description: string;
  secondaryTitle: string;
};

export const Step = ({
  imageName,
  description,
  primaryTitle,
  secondaryTitle,
}: StepProps) => {
  const { height: HEIGHT_SCREEN } = useWindowDimensions();

  return (
    <Box
      paddingVertical={"s40"}
      height={HEIGHT_SCREEN}
      justifyContent={"center"}
    >
      <Box flexDirection={"row"} columnGap={"s35"} alignItems={"center"}>
        <Box flex={1} rowGap={"s28"} alignItems={"center"}>
          <ImageComponent width={200} imageName={imageName} />
          <Box rowGap={"s18"}>
            <Text weight="medium" color="primary">
              {primaryTitle}
            </Text>
            <Text
              weight="bold"
              color={"backgroundConstrast"}
              preset="paragraphsXL"
            >
              {secondaryTitle}
            </Text>
            <Text
              color={"backgroundConstrast"}
              weight="medium"
              preset="default"
            >
              {description}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
