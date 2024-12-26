import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import { registerForPushNotificationsAsync } from "@helpers";

import {
  EighthStepOnboarding,
  FifthStepOnboarding,
  FirstStepOnboarding,
  FourthStepOnboarding,
  SecondStepOnboarding,
  SeventhStepOnboarding,
  SixthStepOnboarding,
  ThirdStepOnboarding,
} from "./components";
import {
  onboardingScreenSchema,
  OnboardingScreenSchemaType,
} from "./schema/onboardingScreenSchema";

export const useOnboardingScreen = () => {
  const [step, setStep] = useState(1);

  const navigation = useNavigation();

  const { control, watch, setValue } = useForm<OnboardingScreenSchemaType>({
    resolver: zodResolver(onboardingScreenSchema),
    defaultValues: {
      name: "",
      age: "",
      gender: "",
      howManyCigarettesPerDay: "",
      howManyYearsSmoke: "",
      likeToReceiveDailyReminders: "",
      mainReasonForQuitting: "",
      quitImmediatelyOrReduceGradually: "",
    },
  });

  const handleCanGoNextPage = () => {
    const fieldMap: Record<number, keyof OnboardingScreenSchemaType> = {
      1: "name",
      2: "gender",
      3: "age",
      4: "howManyYearsSmoke",
      5: "howManyCigarettesPerDay",
      6: "quitImmediatelyOrReduceGradually",
      7: "mainReasonForQuitting",
      8: "likeToReceiveDailyReminders",
    };

    return step in fieldMap ? watch(fieldMap[step]) !== "" : false;
  };

  const handleRenderSteps = () => {
    const stepComponents: Record<number, JSX.Element> = {
      1: <FirstStepOnboarding control={control} />,
      2: <SecondStepOnboarding control={control} />,
      3: <ThirdStepOnboarding control={control} watch={watch} />,
      4: <FourthStepOnboarding control={control} />,
      5: <FifthStepOnboarding control={control} />,
      6: <SixthStepOnboarding control={control} />,
      7: <SeventhStepOnboarding control={control} />,
      8: <EighthStepOnboarding control={control} />,
    };

    return stepComponents[step] || null;
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleToPreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleNavigateToStartScreen = () => {
    if (watch().likeToReceiveDailyReminders === "YES") {
      registerForPushNotificationsAsync().then((token) => {
        if (!token) {
          setValue("likeToReceiveDailyReminders", "NO");
        }
      });
    }
    navigation.reset({ index: 0, routes: [{ name: "StartScreen" }] });
  };

  return {
    step,
    navigation,
    handleNextStep,
    handleRenderSteps,
    handleCanGoNextPage,
    handleToPreviousStep,
    handleNavigateToStartScreen,
  };
};
