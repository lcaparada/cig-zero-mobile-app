import { supabaseEdgeFunction } from "@api";

import { GetAll } from "./achievementsTypes";

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

export const achievementsService = {
  getAll,
};
