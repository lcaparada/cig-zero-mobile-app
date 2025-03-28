import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QueryKeys } from "@infra";
import { useAuth, useToastService } from "@services";

import { challengeService } from "../challengeService";
import { CompleteDailyChallenge } from "../challengeTypes";

export const useCompleteDailyChallenge = () => {
  const { showToast } = useToastService();
  const { session } = useAuth();

  const queryClient = useQueryClient();

  const { isPending, mutateAsync } = useMutation<
    unknown,
    Error,
    Pick<CompleteDailyChallenge.Params, "mission_id">
  >({
    mutationFn: (params) =>
      challengeService.createMissionOnUser({
        ...params,
        user_id: session?.user?.id ?? "",
      }),
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [QueryKeys.GetDailyChallenges],
      });
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.GetProfile],
      });
    },
  });

  const handleCompleteDailyChallenge = async (
    params: Pick<CompleteDailyChallenge.Params, "mission_id">
  ) => {
    try {
      await mutateAsync(params);
    } catch (error: any) {
      showToast({ message: error.message, duration: 5000, type: "error" });
    }
  };

  return {
    isPending,
    handleCompleteDailyChallenge,
  };
};
