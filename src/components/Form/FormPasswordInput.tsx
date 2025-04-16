import { Controller, FieldValues, UseControllerProps } from "react-hook-form";

import {
  InputPassword,
  InputPasswordProps,
} from "../InputPassword/InputPassword";

export function FormPasswordInput<FormType extends FieldValues>({
  control,
  name,
  ...inputPasswordProps
}: UseControllerProps<FormType> & InputPasswordProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <InputPassword
          icon="lock"
          label={"Senha"}
          value={field.value}
          errorMessage={fieldState.error?.message}
          placeholder={"Digite sua senha"}
          onChangeText={field.onChange}
          {...inputPasswordProps}
        />
      )}
    />
  );
}
