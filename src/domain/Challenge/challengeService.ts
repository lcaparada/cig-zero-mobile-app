import { supabase, supabaseEdgeFunction } from "@api";

import { CompleteDailyChallenge, GetDailyChallenges } from "./challengeTypes";

const getDailyChallenges = async (
  params: GetDailyChallenges.Params
): Promise<GetDailyChallenges.Result> => {
  try {
    const { data } = await supabaseEdgeFunction.post("get-daily-missions", {
      p_user_id: params.user_id,
    });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

const createMissionOnUser = async (
  params: CompleteDailyChallenge.Params
): Promise<void> => {
  const { error } = await supabase.from("missions_on_users").insert(params);
  if (error) {
    console.error("createMissionOnUserError", error);
    throw error;
  }
};

export const challengeService = {
  getDailyChallenges,
  createMissionOnUser,
};
