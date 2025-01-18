import { Appearance } from "react-native";

import { ThemePreference } from "./settingsType";

function setAppColor(appearance: ThemePreference) {
  if (appearance === "default") {
    const colorScheme = Appearance.getColorScheme();
    return colorScheme;
  }

  return appearance;
}

export const settingsService = {
  setAppColor,
};
