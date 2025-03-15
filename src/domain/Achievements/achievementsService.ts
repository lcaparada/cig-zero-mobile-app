import { supabaseEdgeFunction } from "@api";

import { GetAchievements } from "./achievementsTypes";

const getAchievements = async (): Promise<GetAchievements.Result> => {
  try {
    const result = await supabaseEdgeFunction.post("get-achievements");
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const achievementsService = {
  getAchievements,
};
