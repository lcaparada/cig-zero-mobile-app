import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@infra";
import { useToastService } from "@services";

import { smokeLogService } from "../smokeLogService";
import { GetChartData } from "../smokeLogTypes";

export const useGetChartData = () => {
  const { showToast } = useToastService();

  const { data, isFetching, error } = useQuery<
    unknown,
    Error,
    GetChartData.Result
  >({
    queryKey: [QueryKeys.GetChartData],
    queryFn: () => smokeLogService.getChartData(),
  });

  if (error) {
    showToast({ message: error.message, duration: 5000, type: "error" });
  }

  return {
    data,
    isFetching,
  };
};
