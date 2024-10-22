import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@infra";
import { useAuth, useToastService } from "@services";

import { smokeLogService } from "../smokeLogService";
import { GetLatestSmokingRecord } from "../smokeLogTypes";

export const useGetLatestSmokingRecord = () => {
  const { showToast } = useToastService();
  const { session } = useAuth();

  const {
    data: smokingRecord,
    isFetching,
    error,
  } = useQuery<unknown, Error, GetLatestSmokingRecord.Result>({
    queryKey: [QueryKeys.GetLatestSmokingRecord, session?.user?.id],
    queryFn: () =>
      smokeLogService.getLatestSmokingRecord({
        userId: session?.user?.id ?? "",
      }),
  });

  if (error) {
    showToast({ message: error.message, duration: 5000, type: "error" });
  }

  return {
    smokingRecord,
    isFetching,
  };
};
