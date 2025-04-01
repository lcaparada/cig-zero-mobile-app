export namespace GetDailyChallenges {
  export type Params = {
    userId: string;
  };

  export type Result = {
    id: string;
    goal: string;
    xp: number;
  }[];
}

export namespace CompleteDailyChallenge {
  export type Params = {
    missionId: string;
  };

  export type Result = {
    newLevel: number;
  };
}
