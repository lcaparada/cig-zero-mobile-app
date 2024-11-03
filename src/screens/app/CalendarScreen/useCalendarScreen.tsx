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
  const [showSmokingDetailsModal, setShowSmokingDetailsModal] = useState(false);
  const [smokingRecordDetails, setSmokingRecordDetails] =
    useState<SmokeLogWithDateAndCreatedAt>({
      created_at: "",
      date: "",
      id: "",
    });

  const { smokingRecords, isFetching } = useGetAllSmokingRecordsByMonth({
    selectedDate: date.toISOString(),
  });

  const { session } = useAuth();

  const dateString = date.toISOString().split("T")[0];

  const userCreatedAt = session?.user?.created_at;

  const handleAddSmokeRecord = (record: SmokeLogWithDateAndCreatedAt) => {
    setSmokingRecordDetails(record);
    setShowSmokingDetailsModal(true);
  };

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

  useEffect(() => {
    if (!showSmokingDetailsModal) {
      setSmokingRecordDetails({ created_at: "", date: "", id: "" });
    }
  }, [showSmokingDetailsModal]);

  return {
    date,
    isFetching,
    dateString,
    smokingRecordDetails,
    indexedSmokingRecords,
    showAddSmokingHourModal,
    showSmokingDetailsModal,
    showAddSmokingRecordButton,
    setDate,
    handleAddSmokeRecord,
    setShowAddSmokingHourModal,
    setShowSmokingDetailsModal,
  };
};
