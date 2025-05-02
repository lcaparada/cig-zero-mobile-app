export type ThemePreference = "light" | "dark" | "system";

export type SettingsStore = {
  appColor: Exclude<ThemePreference, "system">;
  appearancePreference: ThemePreference;
  likeToReceiveDailyReminders: string;
  setAppColor: (appTheme: ThemePreference) => void;
  setAppColorOnChange: (appColor: Exclude<ThemePreference, "system">) => void;
  setLikeToReceiveDailyReminders: (val: string) => void;
};
