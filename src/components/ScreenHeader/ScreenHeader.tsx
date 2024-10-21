import { ThemeColors } from "@theme";

import { Box, BoxProps } from "../Box/Box";
import { Text } from "../Text/Text";

interface ScreenHeaderProps extends BoxProps {
  title: string;
  description: string;
  titleAndDescriptionColor?: ThemeColors;

  rightComponent?: JSX.Element;
}

export const ScreenHeader = ({
  title,
  description,
  rightComponent,
  titleAndDescriptionColor = "backgroundConstrast",
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
          color={titleAndDescriptionColor}
        >
          {title}
        </Text>
        <Text
          weight="medium"
          preset="paragraphsBig"
          color={titleAndDescriptionColor}
        >
          {description}
        </Text>
      </Box>
      {rightComponent ?? rightComponent}
    </Box>
  );
};
