import { supabase } from "@api";

import { GetLatestSmokingRecord } from "./smokeLogTypes";

const getLatestSmokingRecord = async (
  params: GetLatestSmokingRecord.Params
): Promise<GetLatestSmokingRecord.Result> => {
  const { data, error } = await supabase
    .from("smoke_log")
    .select("date")
    .eq("user_id", params.userId)
    .order("date", { ascending: false })
    .limit(1);
  if (error) throw error;
  if (!data?.length) return null;
  return data?.[0] as GetLatestSmokingRecord.Result;
};

export const smokeLogService = {
  getLatestSmokingRecord,
};
