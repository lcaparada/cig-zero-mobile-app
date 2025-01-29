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
    | "titleColor"
    | "titleWeight"
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
  titleColor,
  titleWeight,
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
      <Box
        flex={!!progressBar ? 1 : undefined}
        position={!!progressBar ? undefined : "absolute"}
        left={!!progressBar ? undefined : 0}
      >
        {canGoBack || canGoBackSpecificyScreen ? (
          <ScreenGoBack action={canGoBackSpecificyScreen} />
        ) : null}
      </Box>
      {!!title ? (
        <Text
          weight={titleWeight ?? "semiBold"}
          preset={titleSize}
          color={titleColor ?? "backgroundConstrast"}
        >
          {title}
        </Text>
      ) : null}
      {!!progressBar && (
        <Box flex={7} height={22} justifyContent={"center"}>
          <ProgressBar percentage={progressBar.progress} />
        </Box>
      )}
      <Box flex={!!progressBar ? 1 : undefined}>
        {rightComponent && rightComponent}
      </Box>
    </Box>
  );
};
