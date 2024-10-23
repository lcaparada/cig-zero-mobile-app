import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";

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
  const { session } = useAuth();
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
    setShouldScrollToEnd(!firstRenderRef.current);
  }, [isFetching, smokingRecords]);

  useEffect(() => {
    if (shouldScrollToEnd && scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
      setShouldScrollToEnd(false);
    }
  }, [shouldScrollToEnd]);

  useEffect(() => {
    const timeoutId = setTimeout(() => setShouldScrollToEnd(true), 500);
    return () => clearTimeout(timeoutId);
  }, [date]);

  const dateString = date.toISOString().split("T")[0];

  const userCreatedAt = session?.user?.created_at;

  const showAddSmokingRecordButton =
    userCreatedAt &&
    (isBefore(startOfDay(userCreatedAt), date) ||
      isSameDay(userCreatedAt, date));

  return {
    date,
    setDate,
    isFetching,
    dateString,
    scrollViewRef,
    indexedSmokingRecords,
    showAddSmokingHourModal,
    setShowAddSmokingHourModal,
    showAddSmokingRecordButton,
  };
};
