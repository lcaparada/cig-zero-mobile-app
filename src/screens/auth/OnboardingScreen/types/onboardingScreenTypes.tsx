import { UseControllerProps, UseFormReturn } from "react-hook-form";

import { OnboardingScreenSchemaType } from "../schema/onboardingScreenSchema";

export type OnboardingControlBase = Required<
  Pick<UseControllerProps<OnboardingScreenSchemaType>, "control"> &
    Partial<Pick<UseFormReturn<OnboardingScreenSchemaType>, "watch">>
>;
