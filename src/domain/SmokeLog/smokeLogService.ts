import { supabase } from "@api";

import {
  GetAllSmokingRecordsByMonth,
  GetLatestSmokingRecord,
} from "./smokeLogTypes";

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

const getAllSmokingRecordsByMonth = async (
  params: GetAllSmokingRecordsByMonth.Params
): Promise<GetAllSmokingRecordsByMonth.Result> => {
  const { data, error } = await supabase
    .from("smoke_log")
    .select("date, created_at")
    .eq("user_id", params.userId)
    .gte("date", params.startDate)
    .lte("date", params.endDate);
  if (error) throw error;
  return data as GetAllSmokingRecordsByMonth.Result;
};

export const smokeLogService = {
  getLatestSmokingRecord,
  getAllSmokingRecordsByMonth,
};
