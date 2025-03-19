import { Appearance } from "react-native";

import { ThemePreference } from "./settingsType";

function getAppAppearance(appColor: ThemePreference) {
  if (appColor === "system") {
    return Appearance.getColorScheme() as Exclude<ThemePreference, "system">;
  }
  return appColor;
}

export const settingsService = {
  getAppAppearance,
};
