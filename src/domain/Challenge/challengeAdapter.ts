import { Challenge, ChallengeAPI } from "./challengeTypes";

const createMissionOnUserAdapter = ({
  new_level,
}: Pick<ChallengeAPI, "new_level">): Pick<Challenge, "newLevel"> => {
  return {
    newLevel: new_level,
  };
};

const getDailyChallengesAdapter = (
  params: Pick<ChallengeAPI, "goal" | "id" | "xp">[]
): Pick<Challenge, "id" | "goal" | "xp">[] => {
  return params.map(({ id, goal, xp }) => ({
    id,
    goal,
    xp,
  }));
};

export const challengeAdapter = {
  getDailyChallengesAdapter,
  createMissionOnUserAdapter,
};
