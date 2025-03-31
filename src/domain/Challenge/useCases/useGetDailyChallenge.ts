import { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@infra";
import { useAuth, useToastService } from "@services";

import { challengeService } from "../challengeService";
import { GetDailyChallenges } from "../challengeTypes";

export const useGetDailyChallenges = () => {
  const { showToast } = useToastService();
  const { session } = useAuth();

  const {
    data: dailyChallenges,
    isFetching,
    error,
  } = useQuery<unknown, Error, GetDailyChallenges.Result>({
    queryKey: [QueryKeys.GetDailyChallenges, session?.user?.id],
    queryFn: () =>
      challengeService.getDailyChallenges({
        userId: session?.user?.id ?? "",
      }),
  });

  useEffect(() => {
    if (error) {
      showToast({ message: error.message, duration: 5000, type: "error" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return {
    dailyChallenges,
    isFetching,
  };
};
