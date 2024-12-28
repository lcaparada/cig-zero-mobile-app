import { create } from "zustand";

import { TSplash } from "./splashTypes";

export const useSplashStore = create<TSplash>((set, get) => ({
  splashComplete: false,
  setSplashComplete: (bool) => {
    set({ splashComplete: bool });
  },
}));

export const useSplash = () => {
  const splashComplete = useSplashStore((state) => state.splashComplete);
  const setSplashComplete = useSplashStore((state) => state.setSplashComplete);

  return {
    splashComplete,
    setSplashComplete,
  };
};
