import { UseControllerProps, UseFormReturn } from "react-hook-form";

import { OnboardingModalSchemaType } from "../schema";

export type OnboardingControlBase = Required<
  Pick<UseControllerProps<OnboardingModalSchemaType>, "control"> &
    Partial<Pick<UseFormReturn<OnboardingModalSchemaType>, "watch">>
>;
