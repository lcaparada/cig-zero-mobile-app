export interface ChallengeAPI {
  id: string;
  goal: string;
  xp: number;
  new_level: number;
}

export interface Challenge {
  id: string;
  goal: string;
  xp: number;
  newLevel: number;
}
export namespace GetDailyChallenges {
  export type Params = {
    userId: string;
  };

  export type Result = Pick<Challenge, "goal" | "id" | "xp">[];
}

export namespace CompleteDailyChallenge {
  export type Params = {
    missionId: string;
  };

  export type Result = {
    newLevel: number;
  };
}
