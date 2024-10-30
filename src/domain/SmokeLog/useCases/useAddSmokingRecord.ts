import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QueryKeys } from "@infra";
import { useAuth, useToastService } from "@services";

import { smokeLogService } from "../smokeLogService";
import { AddSmokingRecord } from "../smokeLogTypes";

export const useAddSmokingRecord = () => {
  const { showToast } = useToastService();
  const { session } = useAuth();

  const queryClient = useQueryClient();

  const { isPending, mutateAsync } = useMutation<
    unknown,
    Error,
    Pick<AddSmokingRecord.Params, "date">
  >({
    mutationFn: (params) =>
      smokeLogService.addSmokingRecord({
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

  const handleAddSmokingRecord = async (
    params: Pick<AddSmokingRecord.Params, "date">
  ) => {
    try {
      await mutateAsync(params);
    } catch (error: any) {
      showToast({ message: error.message, duration: 5000, type: "error" });
    }
  };

  return {
    isPending,
    handleAddSmokingRecord,
  };
};
