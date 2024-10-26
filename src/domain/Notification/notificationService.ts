import { supabase } from "@api";

import {
  GetNotificationSettings,
  UpdateNotificationSetting,
} from "./notificationTypes";

const getNotificationSettings = async ({ userId }: GetNotificationSettings) => {
  const { data, error } = await supabase
    .from("notification_settings")
    .select("*")
    .eq("user_id", userId)
    .single();
  if (error && error.code === "PGRST116") return null;
  if (error) throw error;
  return data;
};

const upsertNotificationSetting = async ({
  key,
  state,
  userId,
}: UpdateNotificationSetting) => {
  const { error } = await supabase
    .from("notification_settings")
    .upsert({ [key]: state, user_id: userId }, { onConflict: "user_id" });
  if (error) throw error;
};

export const notificationService = {
  getNotificationSettings,
  upsertNotificationSetting,
};
