import { supabase, supabaseEdgeFunction } from "@api";

import {
  GetProgressData,
  GetHistoricData,
  UpdateUserInformation,
  UpdateNotificationToken,
} from "./userTypes";

const updateUserInformation = async (
  params: UpdateUserInformation.Params
): Promise<UpdateUserInformation.Result> => {
  const { data, error } = await supabase.auth.updateUser({ data: params });
  if (error) {
    console.error("updateUserInformationError", error);
    throw error;
  }
  return data.user;
};

const getProgressData = async (): Promise<GetProgressData.Result> => {
  try {
    const { data } = await supabaseEdgeFunction.post("get-progress-data");
    return data;
  } catch (error) {
    throw error;
  }
};

const updateNotificationToken = async (
  params: UpdateNotificationToken.Params
): Promise<UpdateNotificationToken.Result> => {
  try {
    await supabaseEdgeFunction.post("update-notification-token", {
      notification_token: params.notificationToken,
    });
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
  updateUserInformation,
  updateNotificationToken,
};
