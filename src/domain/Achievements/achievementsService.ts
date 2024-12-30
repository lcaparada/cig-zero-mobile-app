import { supabase, supabaseEdgeFunction } from "@api";

import { GetAchievement, GetAll } from "./achievementsTypes";

const getAll = async (): Promise<GetAll.Result> => {
  try {
    const { data } = await supabaseEdgeFunction.post(
      "get-achievements-progress"
    );
    return data as GetAll.Result;
  } catch (error) {
    throw error;
  }
};

const getAchievement = async (
  params: GetAchievement.Params
): Promise<GetAchievement.Result> => {
  const { data, error } = await supabase
    .from("achievements")
    .select("*")
    .eq("id", params.id)
    .single();
  if (error && error.code === "PGRST116") return null;
  if (error) throw error;
  return data;
};

export const achievementsService = {
  getAll,
  getAchievement,
};
