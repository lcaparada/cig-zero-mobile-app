import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@infra";

import { missionsService } from "../missionsService";
import { GetAllMissions } from "../missionsTypes";

export const useGetMissions = () => {
  const { data: missions, isLoading } = useQuery<
    unknown,
    Error,
    GetAllMissions.Result
  >({
    queryKey: [QueryKeys.GetMissions],
    queryFn: () => missionsService.getAllMissions(),
  });

  return { missions, isLoading };
};
