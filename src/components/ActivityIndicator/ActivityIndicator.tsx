import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from "react-native";

import { useAppTheme } from "@hooks";
import { ThemeColors, ThemeSpacing } from "@theme";

interface ActivityIndicatorProps
  extends Omit<RNActivityIndicatorProps, "color" | "size"> {
  color?: ThemeColors;
  size?: ThemeSpacing;
}

export const ActivityIndicator = ({
  color = "neutralLighest",
  size = "s32",
  ...rNActivityIndicatorProps
}: ActivityIndicatorProps) => {
  const { colors, spacing } = useAppTheme();
  return (
    <RNActivityIndicator
      testID="activity-indicator"
      color={colors[color]}
      size={spacing[size]}
      {...rNActivityIndicatorProps}
    />
  );
};
