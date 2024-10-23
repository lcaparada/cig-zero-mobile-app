import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";

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

  const [shouldScrollToEnd, setShouldScrollToEnd] = useState(false);

  const scrollViewRef = useRef<ScrollView>(null);
  const firstRenderRef = useRef<boolean>(true);

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
      setShouldScrollToEnd(firstRenderRef.current === false);
    }
  }, [isFetching, smokingRecords]);

  useEffect(() => {
    if (shouldScrollToEnd && scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
      setShouldScrollToEnd(false);
    }
  }, [shouldScrollToEnd]);

  useEffect(() => {
    setTimeout(() => setShouldScrollToEnd(true), 500);
  }, [date]);

  const dateString = date.toISOString()?.split("T")[0];

  return {
    date,
    setDate,
    isFetching,
    dateString,
    scrollViewRef,
    indexedSmokingRecords,
    showAddSmokingHourModal,
    setShowAddSmokingHourModal,
  };
};
