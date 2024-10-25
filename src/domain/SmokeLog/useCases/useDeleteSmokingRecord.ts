import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QueryKeys } from "@infra";
import { useAuth, useToastService } from "@services";

import { smokeLogService } from "../smokeLogService";
import { DeleteSmokingRecord } from "../smokeLogTypes";

export const useDeleteSmokingRecord = () => {
  const { showToast } = useToastService();
  const { session } = useAuth();

  const queryClient = useQueryClient();

  const { isPending, mutateAsync } = useMutation<
    unknown,
    Error,
    Pick<DeleteSmokingRecord.Params, "id">
  >({
    mutationFn: (params) =>
      smokeLogService.deleteSmokingRecord({
        ...params,
        user_id: session?.user?.id ?? "",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.GetAllSmokingRecordsByMonth],
      });
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.GetLatestSmokingRecord],
      });
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.GetHistoricData],
      });
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.GetProgressData],
      });
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.GetAchievements],
      });
    },
  });

  const handleDeleteSmokingRecord = async (
    params: Pick<DeleteSmokingRecord.Params, "id">
  ) => {
    try {
      await mutateAsync(params);
    } catch (error: any) {
      showToast({ message: error.message, duration: 5000, type: "error" });
    }
  };

  return {
    isPending,
    handleDeleteSmokingRecord,
  };
};
