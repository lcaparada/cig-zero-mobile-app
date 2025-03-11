import { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@infra";
import { useToastService } from "@services";

import { smokeLogService } from "../smokeLogService";
import { GetUserLastSmoke } from "../smokeLogTypes";

export const useGetUserLastSmoke = (userId: string) => {
  const { showToast } = useToastService();

  const {
    data: smokingRecord,
    error,
    isFetching,
    refetch,
  } = useQuery<unknown, Error, GetUserLastSmoke.Result>({
    queryKey: [QueryKeys.GetUserLastSmoke, userId],
    queryFn: () =>
      smokeLogService.getUserLastSmoke({
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
    refetch,
    isFetching,
    smokingRecord,
  };
};
