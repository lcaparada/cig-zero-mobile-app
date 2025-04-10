import { useState } from "react";
import { BottomSheet, BottomSheetProps } from "../BottomSheet/BottomSheet";
import { SetTimeInput } from "../SetTimeInput/SetTimeInput";

import { useAddSmokingRecord } from "@domain";
import { set } from "date-fns";

type AddSmokingHourBottomSheetModalProps = Pick<
  BottomSheetProps,
  "setVisible"
> & {
  calendarDate: Date;
};

export const AddSmokingHourBottomSheet = ({
  calendarDate,
  setVisible,
}: AddSmokingHourBottomSheetModalProps) => {
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

  return (
    <BottomSheet
      setVisible={setVisible}
      title={"Insira o horário"}
      height={"30%"}
      scrollable={false}
      button={{
        text: "Adicionar",
        preset: "primary",
        isLoading: isPending,
        action: () => handleCreateSmokingRecord(calendarDate),
      }}
    >
      <SetTimeInput date={date} setDate={setDate} />
    </BottomSheet>
  );
};
