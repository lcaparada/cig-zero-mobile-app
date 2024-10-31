import { useCallback } from "react";

import { useQueryClient, useIsFetching } from "@tanstack/react-query";

import { QueryKeys } from "@infra";

export const useHomeScreen = () => {
  const queryClient = useQueryClient();

  const fetchingProgressData = useIsFetching({
    queryKey: [QueryKeys.GetProgressData],
  });
  const fetchingHistoricData = useIsFetching({
    queryKey: [QueryKeys.GetHistoricData],
  });
  const fetchingMissions = useIsFetching({ queryKey: [QueryKeys.GetMissions] });

  const isFetching =
    fetchingProgressData > 0 ||
    fetchingHistoricData > 0 ||
    fetchingMissions > 0;

  const refreshHomeScreenData = useCallback(async () => {
    const queryKeys = [
      QueryKeys.GetProgressData,
      QueryKeys.GetHistoricData,
      QueryKeys.GetMissions,
    ];

    await Promise.all(
      queryKeys.map((key) => queryClient.refetchQueries({ queryKey: [key] }))
    );
  }, [queryClient]);

  return {
    refreshHomeScreenData,
    isFetching,
  };
};
