import { useEffect, useRef } from "react";

import { useQuery } from "@tanstack/react-query";
import { endOfMonth, isSameMonth, startOfMonth } from "date-fns";

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

  const previousDateRef = useRef<Date | null>(null);

  const {
    data: smokingRecords,
    isFetching,
    error,
    refetch,
  } = useQuery<unknown, Error, GetAllSmokingRecordsByMonth.Result>({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: [QueryKeys.GetAllSmokingRecordsByMonth, session?.user?.id],
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

  useEffect(() => {
    if (
      previousDateRef.current &&
      !isSameMonth(previousDateRef.current, selectedDate)
    ) {
      refetch();
    }
    previousDateRef.current = new Date(selectedDate);
  }, [selectedDate, refetch]);

  return {
    smokingRecords,
    isFetching,
  };
};
