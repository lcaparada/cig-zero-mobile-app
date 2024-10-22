import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@infra";
import { useToastService } from "@services";

import { userService } from "../userService";
import { GetProgressData } from "../userTypes";

export const useGetProgressData = () => {
  const { showToast } = useToastService();

  const {
    data: progressData,
    isFetching,
    error,
  } = useQuery<unknown, Error, GetProgressData.Result>({
    queryKey: [QueryKeys.GetProgressData],
    queryFn: () => userService.getProgressData(),
  });

  if (error) {
    showToast({ message: error.message, duration: 5000, type: "error" });
  }

  return {
    progressData,
    isFetching,
  };
};
