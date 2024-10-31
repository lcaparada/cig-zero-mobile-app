import { supabase, supabaseEdgeFunction } from "@api";

import {
  AddSmokingRecord,
  DeleteSmokingRecord,
  GetAllSmokingRecordsByMonth,
  GetChartData,
  GetLatestSmokingRecord,
} from "./smokeLogTypes";

const getLatestSmokingRecord = async (
  params: GetLatestSmokingRecord.Params
): Promise<GetLatestSmokingRecord.Result> => {
  const { data, error } = await supabase
    .from("smoke_logs")
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
    .from("smoke_logs")
    .select("date, created_at, id")
    .eq("user_id", params.userId)
    .gte("date", params.startDate)
    .lte("date", params.endDate);
  if (error) throw error;
  return data as GetAllSmokingRecordsByMonth.Result;
};

const addSmokingRecord = async (
  params: AddSmokingRecord.Params
): Promise<AddSmokingRecord.Result> => {
  const { error } = await supabase.from("smoke_logs").insert(params);
  if (error) throw error;
};

const deleteSmokingRecord = async (
  params: DeleteSmokingRecord.Params
): Promise<DeleteSmokingRecord.Result> => {
  const { error } = await supabase
    .from("smoke_logs")
    .delete()
    .eq("id", params.id)
    .eq("user_id", params.user_id);
  if (error) throw error;
};

const getChartData = async (): Promise<GetChartData.Result> => {
  const { data } = await supabaseEdgeFunction.get("get-chart-data");
  return data;
};

export const smokeLogService = {
  getChartData,
  addSmokingRecord,
  deleteSmokingRecord,
  getLatestSmokingRecord,
  getAllSmokingRecordsByMonth,
};
