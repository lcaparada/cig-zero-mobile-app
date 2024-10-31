import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@infra";

import { achievementsService } from "../achievementsService";
import { GetAll } from "../achievementsTypes";

export const useGetAchievements = () => {
  const {
    data: achievements,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery<unknown, Error, GetAll.Result>({
    queryKey: [QueryKeys.GetAchievements],
    queryFn: () => achievementsService.getAll(),
  });

  return { achievements, isLoading, isRefetching, refetch };
};
