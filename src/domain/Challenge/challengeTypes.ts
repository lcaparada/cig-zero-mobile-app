export namespace GetDailyChallenges {
  export type Params = {
    user_id: string;
  };

  export type Result = {
    id: string;
    goal: string;
    xp: number;
  }[];
}

export namespace CompleteDailyChallenge {
  export type Params = {
    mission_id: string;
    user_id: string;
  };

  export type Result = void;
}