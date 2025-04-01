import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QueryKeys } from "@infra";
import { useAuth } from "@services";

import { challengeService } from "../challengeService";
import { CompleteDailyChallenge } from "../challengeTypes";

export const useCompleteDailyChallenge = () => {
  const { session } = useAuth();

  const queryClient = useQueryClient();

  const { isPending, mutateAsync } = useMutation<
    unknown,
    Error,
    Pick<CompleteDailyChallenge.Params, "missionId">
  >({
    mutationFn: (params) =>
      challengeService.createMissionOnUser({
        missionId: params.missionId,
        userId: session?.user?.id ?? "",
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
      await mutateAsync(params);
    } catch (error: any) {
      throw error;
    }
  };

  return {
    isPending,
    handleCompleteDailyChallenge,
  };
};
