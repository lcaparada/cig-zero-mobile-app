import { useEffect } from "react";

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

  useEffect(() => {
    if (error) {
      showToast({ message: error.message, duration: 5000, type: "error" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return {
    data,
    isFetching,
  };
};
