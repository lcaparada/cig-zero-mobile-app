import { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@infra";
import { useToastService } from "@services";

import { userService } from "../userService";
import { GetHistoricData } from "../userTypes";

export const useGetHistoricData = () => {
  const { showToast } = useToastService();

  const {
    data: historicData,
    isFetching,
    error,
  } = useQuery<unknown, Error, GetHistoricData.Result>({
    queryKey: [QueryKeys.GetHistoricData],
    queryFn: () => userService.getHistoricData(),
  });

  useEffect(() => {
    if (error) {
      showToast({ message: error.message, duration: 5000, type: "error" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return {
    historicData,
    isFetching,
  };
};
