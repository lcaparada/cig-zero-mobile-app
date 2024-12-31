import { useCallback, useEffect, useState } from "react";

import { useFocusEffect } from "@react-navigation/native";
import { isBefore, isSameDay, startOfDay } from "date-fns";
import { format, toZonedTime } from "date-fns-tz";
import { useCalendars } from "expo-localization";

import {
  SmokeLogWithDateAndCreatedAt,
  useGetAllSmokingRecordsByMonth,
} from "@domain";
import { useAuth } from "@services";

export type IndexedSmokingRecordsState = Record<
  string,
  SmokeLogWithDateAndCreatedAt[]
>;

type useCalendarScreenProps = {
  showAddSmokingHourModalParam?: boolean;
};

export const useCalendarScreen = ({
  showAddSmokingHourModalParam,
}: useCalendarScreenProps) => {
  const [date, setDate] = useState(new Date());
  const [indexedSmokingRecords, setIndexedSmokingRecords] =
    useState<IndexedSmokingRecordsState>({});
  const [showAddSmokingHourModal, setShowAddSmokingHourModal] = useState(
    showAddSmokingHourModalParam ?? false
  );
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

  const calendars = useCalendars();
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
    const timeZone = calendars[0].timeZone ?? "America/Sao_Paulo";
    const groupedByDay = smokingRecords
      .map((sr) => ({
        ...sr,
        date: format(
          toZonedTime(sr.date, timeZone),
          "yyyy-MM-dd'T'HH:mm:ssXXX",
          { timeZone }
        ),
      }))
      .reduce<IndexedSmokingRecordsState>((acc, item) => {
        const dateKey = item.date.split("T")[0];
        acc[dateKey] = acc[dateKey] || [];
        acc[dateKey].push(item);
        return acc;
      }, {});

    setIndexedSmokingRecords(groupedByDay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching, smokingRecords]);

  useEffect(() => {
    if (!showSmokingDetailsModal) {
      setSmokingRecordDetails({ created_at: "", date: "", id: "" });
    }
  }, [showSmokingDetailsModal]);

  useFocusEffect(
    useCallback(() => {
      if (showAddSmokingHourModalParam) {
        setShowAddSmokingHourModal(true);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showAddSmokingHourModalParam])
  );

  useEffect(() => {}, []);

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
