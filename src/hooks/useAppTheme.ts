import { useTheme } from "@shopify/restyle";

import { Theme } from "@theme";

export const useAppTheme = () => {
  const { colors, spacing, borderRadii } = useTheme<Theme>();

  return { colors, spacing, borderRadii };
};
