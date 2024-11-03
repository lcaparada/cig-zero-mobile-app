import { endOfWeek, startOfWeek } from "date-fns";

import { supabaseEdgeFunction } from "@api";

import { missionsAdapter } from "./missionsAdapter";
import { GetAllMissions, MissionsAPI } from "./missionsTypes";

const getAllMissions = async (): Promise<GetAllMissions.Result> => {
  try {
    const { data } = await supabaseEdgeFunction.post(
      "generate-weekly-missions",
      { startDate: startOfWeek(new Date()), endDate: endOfWeek(new Date()) }
    );
    return missionsAdapter.getAllMissionsAdapter(data as MissionsAPI[]);
  } catch (error) {
    throw error;
  }
};

export const missionsService = {
  getAllMissions,
};
