import { Box, BoxProps } from "src/components/Box/Box";
import { ProgressBar } from "src/components/ProgressBar/ProgressBar";
import { Text } from "src/components/Text/Text";

import { ScreenProps, TitleAlign } from "../Screen";

import { ScreenGoBack } from "./ScreenGoBack";

interface ScreenHeaderProps
  extends Pick<
    ScreenProps,
    | "canGoBack"
    | "titleSize"
    | "titleAlign"
    | "rightComponent"
    | "progressBar"
    | "canGoBackSpecificyScreen"
  > {
  title?: string;
}

export const ScreenHeader = ({
  title,
  canGoBack,
  titleAlign,
  progressBar,
  rightComponent,
  titleSize = "titleSmall",
  canGoBackSpecificyScreen,
}: ScreenHeaderProps) => {
  const handleAdapterAlignItems = (
    align: TitleAlign
  ): BoxProps["justifyContent"] => {
    switch (align) {
      case "center":
        return "center";
      case "left":
        return "flex-start";
      case "right":
        return "flex-end";
      default:
        return "center";
    }
  };

  return (
    <Box
      mt={"s12"}
      mb={"s24"}
      alignItems={"center"}
      flexDirection={"row"}
      justifyContent={
        canGoBack ? "center" : handleAdapterAlignItems(titleAlign ?? "center")
      }
    >
      <Box flex={1}>
        {canGoBack || canGoBackSpecificyScreen ? (
          <ScreenGoBack action={canGoBackSpecificyScreen} />
        ) : null}
      </Box>
      <Box flex={7} height={16}>
        {!!progressBar && <ProgressBar percentage={progressBar.progress} />}
        {!!title ? (
          <Text
            weight="semiBold"
            preset={titleSize}
            color={"backgroundConstrast"}
          >
            {title}
          </Text>
        ) : null}
      </Box>
      <Box flex={1}>{rightComponent && rightComponent}</Box>
    </Box>
  );
};
