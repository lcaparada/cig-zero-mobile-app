import { supabaseEdgeFunction } from "@api";

import { GetProgressData, GetHistoricData } from "./userTypes";

const getProgressData = async (): Promise<GetProgressData.Result> => {
  try {
    const { data } = await supabaseEdgeFunction.post("get-progress-data");
    return data;
  } catch (error) {
    throw error;
  }
};

const getHistoricData = async (): Promise<GetHistoricData.Result> => {
  try {
    const { data } = await supabaseEdgeFunction.post("get-historical-data");
    return data;
  } catch (error) {
    throw error;
  }
};

export const userService = {
  getProgressData,
  getHistoricData,
};
