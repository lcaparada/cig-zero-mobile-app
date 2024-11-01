import { useEffect, useState } from "react";

import { isBefore, isSameDay, startOfDay } from "date-fns";

import {
  SmokeLogWithDateAndCreatedAt,
  useGetAllSmokingRecordsByMonth,
} from "@domain";
import { useAuth } from "@services";

export type IndexedSmokingRecordsState = Record<
  string,
  SmokeLogWithDateAndCreatedAt[]
>;

export const useCalendarScreen = () => {
  const [date, setDate] = useState(new Date());
  const [indexedSmokingRecords, setIndexedSmokingRecords] =
    useState<IndexedSmokingRecordsState>({});
  const [showAddSmokingHourModal, setShowAddSmokingHourModal] = useState(false);

  const { smokingRecords, isFetching } = useGetAllSmokingRecordsByMonth({
    selectedDate: date.toISOString(),
  });

  const { session } = useAuth();

  const dateString = date.toISOString().split("T")[0];

  const userCreatedAt = session?.user?.created_at;

  const showAddSmokingRecordButton =
    userCreatedAt &&
    (isBefore(startOfDay(userCreatedAt), date) ||
      isSameDay(userCreatedAt, date));

  useEffect(() => {
    if (isFetching || !smokingRecords) return;

    const groupedByDay = smokingRecords.reduce<IndexedSmokingRecordsState>(
      (acc, item) => {
        const dateKey = item.date.split("T")[0];
        acc[dateKey] = acc[dateKey] || [];
        acc[dateKey].push(item);
        return acc;
      },
      {}
    );

    setIndexedSmokingRecords(groupedByDay);
  }, [isFetching, smokingRecords]);

  return {
    date,
    isFetching,
    dateString,
    indexedSmokingRecords,
    showAddSmokingHourModal,
    showAddSmokingRecordButton,
    setDate,
    setShowAddSmokingHourModal,
  };
};
