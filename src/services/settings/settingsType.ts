export type ThemePreference = "light" | "dark" | "default";

export type SettingsStore = {
  appColor: ThemePreference;
  setAppColor: (appTheme: ThemePreference) => void;
  getAppColor: () => Omit<ThemePreference, "default">;
};
