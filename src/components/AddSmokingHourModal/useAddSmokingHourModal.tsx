import { useRef, useState } from "react";

import { ModalHandle } from "../Modal/Modal";

export const useAddSmokingHourModal = () => {
  const modalRef = useRef<ModalHandle>(null);

  const [date, setDate] = useState<Date | null>(null);

  return { date, modalRef, setDate };
};
