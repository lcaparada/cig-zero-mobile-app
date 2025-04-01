import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QueryKeys } from "@infra";

import { challengeService } from "../challengeService";
import { CompleteDailyChallenge } from "../challengeTypes";

export const useCompleteDailyChallenge = () => {
  const queryClient = useQueryClient();

  const { isPending, mutateAsync } = useMutation<
    CompleteDailyChallenge.Result,
    Error,
    Pick<CompleteDailyChallenge.Params, "missionId">
  >({
    mutationFn: (params) =>
      challengeService.createMissionOnUser({
        missionId: params.missionId,
      }),
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [QueryKeys.GetDailyChallenges],
      });
      queryClient.refetchQueries({
        queryKey: [QueryKeys.GetProfile],
      });
    },
  });

  const handleCompleteDailyChallenge = async (
    params: Pick<CompleteDailyChallenge.Params, "missionId">
  ) => {
    try {
      const result = await mutateAsync(params);
      return result;
    } catch (error: any) {
      throw error;
    }
  };

  return {
    isPending,
    handleCompleteDailyChallenge,
  };
};
