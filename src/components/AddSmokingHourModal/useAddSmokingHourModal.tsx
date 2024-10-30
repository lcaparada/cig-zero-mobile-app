import { useRef, useState } from "react";

import { set } from "date-fns";

import { useAddSmokingRecord } from "@domain";

import { ModalHandle } from "../Modal/Modal";

export const useAddSmokingHourModal = () => {
  const [date, setDate] = useState<Date | null>(null);

  const modalRef = useRef<ModalHandle>(null);

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
      modalRef.current?.closeModal();
    }
  };

  return { date, modalRef, isPending, setDate, handleCreateSmokingRecord };
};
