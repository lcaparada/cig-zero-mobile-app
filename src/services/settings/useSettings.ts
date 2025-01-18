import { create } from "zustand";
import { persist } from "zustand/middleware";

import { secureStorage } from "../localStorage/implementations/secureStorage";

import { SettingsStore } from "./settingsType";

const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      appColor: "default",
      setAppColor: (appColor) => set({ appColor: appColor }),
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

  return {
    appTheme,
    setAppColor,
  };
}
