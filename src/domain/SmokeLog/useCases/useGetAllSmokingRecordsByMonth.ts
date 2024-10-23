import { useQuery } from "@tanstack/react-query";
import { endOfMonth, startOfMonth } from "date-fns";

import { QueryKeys } from "@infra";
import { useAuth, useToastService } from "@services";

import { smokeLogService } from "../smokeLogService";
import {
  GetAllSmokingRecordsByMonth,
  GetAllSmokingRecordsByMonthProps,
} from "../smokeLogTypes";

export const useGetAllSmokingRecordsByMonth = ({
  selectedDate,
}: GetAllSmokingRecordsByMonthProps) => {
  const { showToast } = useToastService();
  const { session } = useAuth();

  const {
    data: smokingRecords,
    isFetching,
    error,
  } = useQuery<unknown, Error, GetAllSmokingRecordsByMonth.Result>({
    queryKey: [
      QueryKeys.GetAllSmokingRecordsByMonth,
      session?.user?.id,
      selectedDate,
    ],
    queryFn: () =>
      smokeLogService.getAllSmokingRecordsByMonth({
        userId: session?.user?.id ?? "",
        startDate: startOfMonth(selectedDate).toISOString(),
        endDate: endOfMonth(selectedDate).toISOString(),
      }),
  });

  if (error) {
    showToast({ message: error.message, duration: 5000, type: "error" });
  }

  return {
    smokingRecords,
    isFetching,
  };
};
