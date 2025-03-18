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
      queryClient.refetchQueries({
        queryKey: [QueryKeys.GetAllSmokingRecordsByMonth],
      });
      queryClient.refetchQueries({
        queryKey: [QueryKeys.GetLatestSmokingRecord],
      });
      queryClient.refetchQueries({
        queryKey: [QueryKeys.GetProgressData],
      });
      queryClient.refetchQueries({ queryKey: [QueryKeys.GetUserLastSmoke] });
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
