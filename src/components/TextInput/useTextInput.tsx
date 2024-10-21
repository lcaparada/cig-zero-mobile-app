import { useRef } from "react";
import { TextInput } from "react-native";

import { useAppTheme } from "@hooks";

export const useTextInput = () => {
  const textInputRef = useRef<TextInput>(null);

  const { colors } = useAppTheme();

  const handleOnFocus = () => {
    textInputRef?.current?.focus();
  };

  return {
    colors,
    textInputRef,
    handleOnFocus,
  };
};
