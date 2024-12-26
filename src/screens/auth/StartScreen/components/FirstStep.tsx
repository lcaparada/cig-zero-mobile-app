import { useWindowDimensions } from "react-native";

import { Box, Text } from "@components";

type StepProps = {
  primaryTitle: string;
  secondaryTitle: string;
  description: string;
};

export const Step = ({
  primaryTitle,
  secondaryTitle,
  description,
}: StepProps) => {
  const { height: HEIGHT_SCREEN } = useWindowDimensions();

  return (
    <Box
      paddingVertical={"s40"}
      height={HEIGHT_SCREEN}
      justifyContent={"center"}
    >
      <Box flexDirection={"row"} columnGap={"s35"} alignItems={"center"}>
        <Box flex={1} rowGap={"s18"}>
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
          <Text color={"backgroundConstrast"} weight="medium" preset="default">
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
