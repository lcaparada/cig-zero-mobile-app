import { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@infra";
import { useToastService } from "@services";

import { smokeLogService } from "../smokeLogService";
import { GetLatestSmokingRecord } from "../smokeLogTypes";

export const useGetLatestSmokingRecord = (userId: string) => {
  const { showToast } = useToastService();

  const {
    data: smokingRecord,
    isFetching,
    error,
    isRefetching,
    refetch,
  } = useQuery<unknown, Error, GetLatestSmokingRecord.Result>({
    queryKey: [QueryKeys.GetLatestSmokingRecord, userId],
    queryFn: () =>
      smokeLogService.getLatestSmokingRecord({
        userId,
      }),
  });

  useEffect(() => {
    if (error) {
      showToast({ message: error.message, duration: 5000, type: "error" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return {
    isFetching,
    isRefetching,
    smokingRecord,
    refetch,
  };
};
