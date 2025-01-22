export type ThemePreference = "light" | "dark";

export type SettingsStore = {
  appColor: ThemePreference;
  setAppColor: (appTheme: ThemePreference) => void;
};
