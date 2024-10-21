import { useState } from "react";

import { useAppTheme } from "@hooks";

export const useSetTimeInput = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const { colors } = useAppTheme();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  return {
    colors,
    isDatePickerVisible,
    hideDatePicker,
    showDatePicker,
  };
};
