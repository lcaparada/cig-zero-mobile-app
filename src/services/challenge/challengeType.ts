export type ChallengeStore = {
  newLevel: number | null;
  xpEarned: number;
  setNewLevel: (level: number | null) => void;
  setXpEarned: (xp: number) => void;
};
