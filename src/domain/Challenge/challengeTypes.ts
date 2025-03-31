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
    userId: string;
  };

  export type Result = void;
}
