import { create } from "zustand";
import { persist } from "zustand/middleware";

import { secureStorage } from "../localStorage/implementations/secureStorage";

import { settingsService } from "./settingsService";
import { SettingsStore } from "./settingsType";
const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      appColor: "light",
      likeToReceiveDailyReminders: "NO",
      appearancePreference: "system",
      setLikeToReceiveDailyReminders: (val: string) =>
        set({ likeToReceiveDailyReminders: val }),
      setAppColor(appearancePreference) {
        const appeareance =
          settingsService.getAppAppearance(appearancePreference);
        set({ appColor: appeareance, appearancePreference });
      },
      setAppColorOnChange(appColor) {
        set({ appColor });
      },
    }),
    {
      name: "settings",
      storage: secureStorage,
    }
  )
);

export function useSettings() {
  const appTheme = useSettingsStore((state) => state.appColor);
  const setAppColor = useSettingsStore((state) => state.setAppColor);
  const likeToReceiveDailyReminders = useSettingsStore(
    (state) => state.likeToReceiveDailyReminders
  );
  const setLikeToReceiveDailyReminders = useSettingsStore(
    (state) => state.setLikeToReceiveDailyReminders
  );
  const setAppColorOnChange = useSettingsStore(
    (state) => state.setAppColorOnChange
  );
  const appearancePreference = useSettingsStore(
    (state) => state.appearancePreference
  );

  return {
    appTheme,
    setAppColor,
    setAppColorOnChange,
    appearancePreference,
    likeToReceiveDailyReminders,
    setLikeToReceiveDailyReminders,
  };
}
