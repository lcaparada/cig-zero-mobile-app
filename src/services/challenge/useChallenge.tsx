import { create } from "zustand";

import { ChallengeStore } from "./challengeType";

const useChallengeStore = create<ChallengeStore>((set) => ({
  newLevel: null,
  xpEarned: 0,

  setNewLevel: (lvl) => {
    set({ newLevel: lvl });
  },

  setXpEarned: (xp) => {
    set({ xpEarned: xp });
  },
}));

export const useChallenge = () => {
  const newLevel = useChallengeStore((state) => state.newLevel);
  const xpEarned = useChallengeStore((state) => state.xpEarned);
  const setXpEarned = useChallengeStore((state) => state.setXpEarned);
  const setNewLevel = useChallengeStore((state) => state.setNewLevel);

  return {
    xpEarned,
    newLevel,
    setXpEarned,
    setNewLevel,
  };
};
