import { useState } from "react";

export const useCalendarScreen = () => {
  const [date, setDate] = useState(new Date());

  const [showAddSmokingHourModal, setShowAddSmokingHourModal] = useState(false);

  return {
    date,
    showAddSmokingHourModal,
    setDate,
    setShowAddSmokingHourModal,
  };
};
