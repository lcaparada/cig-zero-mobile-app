import { useEffect, useState } from "react";

import {
  SmokeLogWithDateAndCreatedAt,
  useGetAllSmokingRecordsByMonth,
} from "@domain";

export type IndexedSmokingRecordsState = Record<
  string,
  SmokeLogWithDateAndCreatedAt[]
>;

export const useCalendarScreen = () => {
  const [date, setDate] = useState(new Date());

  const [indexedSmokingRecords, setIndexedSmokingRecords] =
    useState<IndexedSmokingRecordsState>({});

  const { smokingRecords, isFetching } = useGetAllSmokingRecordsByMonth({
    selectedDate: date.toISOString(),
  });

  const [showAddSmokingHourModal, setShowAddSmokingHourModal] = useState(false);

  useEffect(() => {
    if (!isFetching && smokingRecords) {
      const groupedByDay = smokingRecords.reduce<IndexedSmokingRecordsState>(
        (acc, item) => {
          const dateKey = item.date.split("T")[0];
          if (!acc[dateKey]) {
            acc[dateKey] = [];
          }
          acc[dateKey].push(item);
          return acc;
        },
        {}
      );
      setIndexedSmokingRecords(groupedByDay);
    }
  }, [isFetching, smokingRecords]);

  const dateString = date.toISOString()?.split("T")[0];

  return {
    date,
    setDate,
    isFetching,
    dateString,
    indexedSmokingRecords,
    showAddSmokingHourModal,
    setShowAddSmokingHourModal,
  };
};
