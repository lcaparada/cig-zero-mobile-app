import { useState } from "react";

import { set } from "date-fns";

import { useAddSmokingRecord } from "@domain";

import { BottomSheetProps } from "../BottomSheet/BottomSheet";

export const useAddSmokingHourBottomSheet = ({
  setVisible,
}: Pick<BottomSheetProps, "setVisible">) => {
  const [date, setDate] = useState<Date | null>(null);

  const { handleAddSmokingRecord, isPending } = useAddSmokingRecord();

  const handleCreateSmokingRecord = (calendarDate: Date) => {
    if (date) {
      const smokingRecordDate = set(calendarDate, {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        milliseconds: date.getMilliseconds(),
      });
      handleAddSmokingRecord({ date: smokingRecordDate?.toISOString() });
      setVisible(false);
    }
  };

  return { date, isPending, setDate, handleCreateSmokingRecord };
};
