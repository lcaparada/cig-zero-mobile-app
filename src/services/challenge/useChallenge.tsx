import { create } from "zustand";

import { ChallengeStore } from "./challengeType";

const useChallengeStore = create<ChallengeStore>((set) => ({
  newLevel: null,

  setNewLevel: (lvl) => {
    set({ newLevel: lvl });
  },
}));

export const useChallenge = () => {
  const newLevel = useChallengeStore((state) => state.newLevel);
  const setNewLevel = useChallengeStore((state) => state.setNewLevel);

  return {
    newLevel,
    setNewLevel,
  };
};
