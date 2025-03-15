import { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@infra";
import { useToastService } from "@services";

import { achievementsService } from "../achievementsService";
import { GetAchievements } from "../achievementsTypes";

export const useGetAchievements = () => {
  const { showToast } = useToastService();

  const {
    data: achievements,
    isLoading,
    error,
  } = useQuery<unknown, Error, GetAchievements.Result>({
    queryKey: [QueryKeys.GetAchievements],
    queryFn: () => achievementsService.getAchievements(),
  });

  useEffect(() => {
    if (error) {
      showToast({ duration: 7000, type: "error", message: error.message });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return { achievements, isLoading };
};
