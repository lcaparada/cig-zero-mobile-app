import { create } from "zustand";
import { persist } from "zustand/middleware";

import { secureStorage } from "../localStorage/implementations/secureStorage";

import { settingsService } from "./settingsService";
import { SettingsStore } from "./settingsType";
const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      appColor: "light",
      appearancePreference: "system",
      setAppColor: (appColor) => {
        const appeareance = settingsService.getAppAppearance(appColor);
        set({ appColor: appeareance, appearancePreference: appColor });
      },
    }),
    {
      name: "settings",
      storage: secureStorage,
    }
  )
);

export function useAppColor() {
  const appTheme = useSettingsStore((state) => state.appColor);
  const setAppColor = useSettingsStore((state) => state.setAppColor);
  const appearancePreference = useSettingsStore(
    (state) => state.appearancePreference
  );

  return {
    appTheme,
    setAppColor,
    appearancePreference,
  };
}
