import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useAppTheme } from "./useAppTheme";

export const useAppSafeAreaContext = () => {
  const { top, bottom } = useSafeAreaInsets();
  const { spacing } = useAppTheme();

  return {
    top: Math.max(top, spacing.s32),
    bottom: Math.max(bottom, spacing.s24),
  };
};
