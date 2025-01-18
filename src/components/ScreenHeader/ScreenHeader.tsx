import { ThemeColors } from "@theme";

import { Box, BoxProps } from "../Box/Box";
import { Text } from "../Text/Text";

interface ScreenHeaderProps extends BoxProps {
  title: string;
  description: string;
  titleColor?: ThemeColors;
  rightComponent?: JSX.Element;
  descriptionColor?: ThemeColors;
}

export const ScreenHeader = ({
  title,
  titleColor,
  description,
  rightComponent,
  descriptionColor,
}: ScreenHeaderProps) => {
  return (
    <Box
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      marginTop={"s12"}
    >
      <Box flex={1}>
        <Text
          weight="semiBold"
          preset="titleBig"
          color={titleColor ?? "backgroundConstrast"}
        >
          {title}
        </Text>
        <Text
          weight="medium"
          preset="paragraphsBig"
          color={descriptionColor ?? "backgroundSecondConstrast"}
        >
          {description}
        </Text>
      </Box>
      {rightComponent ?? rightComponent}
    </Box>
  );
};
