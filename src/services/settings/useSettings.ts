import { create } from "zustand";
import { persist } from "zustand/middleware";

import { secureStorage } from "../localStorage/implementations/secureStorage";

import { settingsService } from "./settingsService";
import { SettingsStore } from "./settingsType";
const useSettingsStore = create<SettingsStore>()(
  persist(
    (set, get) => ({
      appColor: "default",
      setAppColor: (appColor) => set({ appColor }),
      getAppColor: () => {
        const { appColor } = get();
        const currentTheme = settingsService.getAppColor(appColor);
        return currentTheme;
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
  const getAppColor = useSettingsStore((state) => state.getAppColor);

  return {
    appTheme,
    setAppColor,
    getAppColor,
  };
}
