import { supabase } from "@api";

import { CompleteDailyChallenge, GetDailyChallenges } from "./challengeTypes";

const getDailyChallenges = async (
  params: GetDailyChallenges.Params
): Promise<GetDailyChallenges.Result> => {
  const { data, error } = await supabase.rpc("get_daily_missions", {
    p_user_id: params.user_id,
  });
  if (error) {
    console.error("getDailyChallengesError", error);
    throw error;
  }
  return data;
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
