import { useState } from "react";

import { Icon } from "../Icon/Icon";
import { TextInput, TextInputProps } from "../TextInput/TextInput";

export type InputPasswordProps = Omit<
  TextInputProps,
  "securyTextEntry" | "rightComponent"
>;

export const InputPassword = ({
  label,
  placeholder,
  ...inputPasswordProps
}: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      secureTextEntry={!showPassword}
      {...inputPasswordProps}
      rightComponent={
        <Icon
          name={showPassword ? "eye" : "eyeOff"}
          size="s20"
          color="backgroundSecondConstrast"
          strokeWidth={2}
          onPress={handleToggleShowPassword}
        />
      }
    />
  );
};
