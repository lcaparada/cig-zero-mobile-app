import { useState } from "react";

import { useAppTheme } from "@hooks";

import { useSettings } from "@services";

export const useSetTimeInput = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [warningPopupVisible, setWarningPopupVisibility] = useState(false);

  const { colors } = useAppTheme();

  const { appTheme } = useSettings();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  return {
    colors,
    appTheme,
    warningPopupVisible,
    isDatePickerVisible,
    hideDatePicker,
    showDatePicker,
    setWarningPopupVisibility,
  };
};
