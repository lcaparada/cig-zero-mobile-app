import { Appearance } from "react-native";

import { ThemePreference } from "./settingsType";

function getAppColor(appearance: ThemePreference) {
  if (appearance === "default") {
    const colorScheme = Appearance.getColorScheme();
    return colorScheme as ThemePreference;
  }

  return appearance;
}

export const settingsService = {
  getAppColor,
};
