import { supabaseEdgeFunction } from "@api";

import { missionsAdapter } from "./missionsAdapter";
import { GetAllMissions, MissionsAPI } from "./missionsTypes";

const getAllMissions = async (): Promise<GetAllMissions.Result> => {
  try {
    const { data } = await supabaseEdgeFunction.get("generate-weekly-missions");
    return missionsAdapter.getAllMissionsAdapter(data as MissionsAPI[]);
  } catch (error) {
    throw error;
  }
};

export const missionsService = {
  getAllMissions,
};
