import { Controller, FieldValues, UseControllerProps } from "react-hook-form";

import { TextInput, TextInputProps } from "../TextInput/TextInput";

export const FormTextInput = <FormType extends FieldValues>({
  name,
  control,
  rules,
  ...textInputProps
}: TextInputProps & UseControllerProps<FormType>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextInput
          value={field.value}
          errorMessage={fieldState?.error?.message}
          onChangeText={field.onChange}
          {...textInputProps}
        />
      )}
    />
  );
};
