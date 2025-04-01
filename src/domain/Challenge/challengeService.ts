import { supabaseEdgeFunction } from "@api";

import { challengeAdapter } from "./challengeAdapter";
import { CompleteDailyChallenge, GetDailyChallenges } from "./challengeTypes";

const getDailyChallenges = async (
  params: GetDailyChallenges.Params
): Promise<GetDailyChallenges.Result> => {
  try {
    const { data } = await supabaseEdgeFunction.post("get-daily-missions", {
      p_user_id: params.userId,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

const createMissionOnUser = async (
  params: CompleteDailyChallenge.Params
): Promise<CompleteDailyChallenge.Result> => {
  try {
    const { data } = await supabaseEdgeFunction.post("create-mission-on-user", {
      mission_id: params.missionId,
    });
    return challengeAdapter.createMissionOnUserAdapter(data);
  } catch (error) {
    throw error;
  }
};

export const challengeService = {
  getDailyChallenges,
  createMissionOnUser,
};
