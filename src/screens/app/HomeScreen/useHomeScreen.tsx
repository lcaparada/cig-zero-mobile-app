import { useEffect, useState } from "react";

import { useQueryClient } from "@tanstack/react-query";

import { QueryKeys } from "@infra";

export const useHomeScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const queryClient = useQueryClient();

  const handleRefresh = async () => {
    if (isRefreshing) return null;
    setIsRefreshing(true);
    const queryKeys = [
      QueryKeys.GetProgressData,
      QueryKeys.GetHistoricData,
      QueryKeys.GetMissions,
    ];
    try {
      await Promise.all(
        queryKeys.map((key) => queryClient.refetchQueries({ queryKey: [key] }))
      );
    } catch (error) {
      console.error("Error when try refresh data in Home Screen", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  return {
    isRefreshing,
    handleRefresh,
  };
};
