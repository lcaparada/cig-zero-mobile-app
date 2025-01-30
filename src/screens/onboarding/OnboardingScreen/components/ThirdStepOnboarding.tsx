import {
  FormOnboardingInput,
  OnboardingInputItemData,
  AgeRange,
  Gender,
} from "@components";

import { OnboardingControlBase } from "../types/onboardingScreenTypes";

export const ThirdStepOnboarding = ({
  control,
  watch,
}: OnboardingControlBase) => {
  const genderEmojis: Record<Gender, string[]> = {
    MAS: ["👦", "👨", "‍🧔‍♂️", "👨‍🦳"],
    FEM: ["👧", "👱", "👩", "👵"],
    NDA: ["👦", "👨", "‍🧔‍♂️", "👨‍🦳"],
  };

  const ageRanges = ["18-24", "25-34", "35-44", "45+"];
  const ageValues: AgeRange[] = ["18_24", "25_34", "35_44", "45+"];

  const selectedGender = watch("gender") as Gender;

  const items: OnboardingInputItemData[] = ageRanges.map((ageRange, index) => ({
    emoji: genderEmojis[selectedGender][index],
    text: ageRange,
    value: ageValues[index],
  }));

  return (
    <FormOnboardingInput
      control={control}
      name="age"
      title="Qual a sua idade?"
      items={items}
    />
  );
};
