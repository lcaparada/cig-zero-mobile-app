import { useState } from "react";

export const useCalendarScreen = () => {
  const [date, setDate] = useState(new Date());

  return {
    date,
    setDate,
  };
};
