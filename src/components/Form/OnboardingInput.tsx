import { Controller, FieldValues, UseControllerProps } from "react-hook-form";

import {
  OnboardingInput,
  OnboardingInputProps,
} from "../OnboardingInput/OnboardingInput";

export const FormOnboardingInput = <FormType extends FieldValues>({
  name,
  control,
  rules,
  items,
  title,
}: Pick<OnboardingInputProps, "items" | "title"> &
  UseControllerProps<FormType>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <OnboardingInput
          onChange={field.onChange}
          fieldValue={field.value}
          items={items}
          title={title}
        />
      )}
    />
  );
};
