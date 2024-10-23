import { useRef, useState } from "react";

import { useAddSmokingRecord } from "@domain";

import { ModalHandle } from "../Modal/Modal";

export const useAddSmokingHourModal = () => {
  const modalRef = useRef<ModalHandle>(null);

  const { handleAddSmokingRecord, isPending } = useAddSmokingRecord();

  const [date, setDate] = useState<Date | null>(null);

  return { date, modalRef, setDate, isPending, handleAddSmokingRecord };
};
