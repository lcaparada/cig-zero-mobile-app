import { useEffect, useState } from "react";

import { SmokeLog, useGetAllSmokingRecordsByMonth } from "@domain";

export type IndexedSmokingRecordsState = Record<
  string,
  Pick<SmokeLog, "date">[]
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

  return {
    date,
    setDate,
    indexedSmokingRecords,
    showAddSmokingHourModal,
    setShowAddSmokingHourModal,
  };
};
