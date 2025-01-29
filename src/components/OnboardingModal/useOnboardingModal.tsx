import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePostHog } from "posthog-react-native";
import { useForm } from "react-hook-form";

import { PostHogEventsName } from "@constraints";
import { registerForPushNotificationsAsync } from "@helpers";

import {
  SixthStepOnboarding,
  FifthStepOnboarding,
  FirstStepOnboarding,
  ThirdStepOnboarding,
  FourthStepOnboarding,
  EighthStepOnboarding,
  SecondStepOnboarding,
  SeventhStepOnboarding,
} from "./components";
import { onboardingModalSchema, OnboardingModalSchemaType } from "./schema";

export const useOnboardingModal = () => {
  const [step, setStep] = useState(1);

  const posthog = usePostHog();

  const { control, watch, setValue } = useForm<OnboardingModalSchemaType>({
    resolver: zodResolver(onboardingModalSchema),
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
    const fieldMap: Record<number, keyof OnboardingModalSchemaType> = {
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

  const handleRequestForNotification = () => {
    if (watch().likeToReceiveDailyReminders === "YES") {
      registerForPushNotificationsAsync().then((token) => {
        if (!token) {
          setValue("likeToReceiveDailyReminders", "NO");
        }
      });
    }
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleToPreviousStep = () => {
    posthog.capture(PostHogEventsName.PRESS_TO_PREVIOUS_STEP, { step });
    setStep((prevStep) => prevStep - 1);
  };

  return {
    step,
    posthog,
    handleNextStep,
    handleRenderSteps,
    handleCanGoNextPage,
    handleToPreviousStep,
    handleRequestForNotification,
  };
};
