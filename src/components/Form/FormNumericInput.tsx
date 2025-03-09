import { Controller, FieldValues, UseControllerProps } from "react-hook-form";

import { NumericInput, NumericInputProps } from "../NumericInput/NumericInput";

export const FormNumericInput = <FormType extends FieldValues>({
  name,
  rules,
  title,
  control,
  isPrice,
  valueDescription,
}: Pick<NumericInputProps, "title" | "valueDescription" | "isPrice"> &
  UseControllerProps<FormType>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <NumericInput
          title={title}
          isPrice={isPrice}
          onChange={field.onChange}
          fieldValue={field.value}
          valueDescription={valueDescription}
        />
      )}
    />
  );
};
