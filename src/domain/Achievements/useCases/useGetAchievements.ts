import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@infra";

import { achievementsService } from "../achievementsService";
import { GetAll } from "../achievementsTypes";

export const useGetAchievements = () => {
  const { data: achievements, isLoading } = useQuery<
    unknown,
    Error,
    GetAll.Result
  >({
    queryKey: [QueryKeys.GetAchievements],
    queryFn: () => achievementsService.getAll(),
  });

  return { achievements, isLoading };
};
