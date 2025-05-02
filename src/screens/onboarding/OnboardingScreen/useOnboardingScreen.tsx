import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { usePostHog } from "posthog-react-native";
import { useForm } from "react-hook-form";

import { PostHogEventsName } from "@constraints";
import { registerForPushNotificationsAsync } from "@helpers";
import { useAuth, useSettings } from "@services";

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
import { NinthStepOnboarding } from "./components/NinthStepOnboarding";
import { TenthStepOnboarding } from "./components/TenthStepOnboarding";
import {
  onboardingScreenSchema,
  OnboardingScreenSchemaType,
} from "./schema/onboardingScreenSchema";

export const useOnboardingScreen = () => {
  const [step, setStep] = useState(1);

  const navigation = useNavigation();

  const posthog = usePostHog();

  const { updateUserFromOnboarding, session } = useAuth();

  const { setLikeToReceiveDailyReminders } = useSettings();

  const { control, watch, setValue } = useForm<OnboardingScreenSchemaType>({
    resolver: zodResolver(onboardingScreenSchema),
    defaultValues: {
      name: "",
      age: "",
      gender: "",
      howManyCigarettesPerDay: "",
      howManyYearsSmoke: "",
      pricePackCigarrete: "",
      lastSmoking: "",
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
      6: "pricePackCigarrete",
      7: "lastSmoking",
      8: "quitImmediatelyOrReduceGradually",
      9: "mainReasonForQuitting",
      10: "likeToReceiveDailyReminders",
    };

    const currentField = fieldMap[step];
    const value = watch(currentField);

    const isInvalidValue = (value: string | undefined) =>
      value === "0" || value === "00" || value === "" || value === "0000";

    if (
      currentField === "howManyCigarettesPerDay" ||
      currentField === "howManyYearsSmoke"
    ) {
      return !isInvalidValue(value);
    }

    if (currentField === "pricePackCigarrete") {
      return value?.length === 4 && !isInvalidValue(value);
    }

    return currentField && !isInvalidValue(value);
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
      9: <NinthStepOnboarding control={control} />,
      10: <TenthStepOnboarding control={control} />,
    };

    return stepComponents[step] || null;
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleToPreviousStep = () => {
    posthog.capture(PostHogEventsName.PRESS_TO_PREVIOUS_STEP, { step });
    setStep((prevStep) => prevStep - 1);
  };

  const handleNavigateToFeaturesScreen = () => {
    if (watch().likeToReceiveDailyReminders === "YES") {
      registerForPushNotificationsAsync().then((token) => {
        setLikeToReceiveDailyReminders("YES");
        if (!token) {
          setValue("likeToReceiveDailyReminders", "NO");
          setLikeToReceiveDailyReminders("NO");
        }
      });
    }
    if (session) {
      updateUserFromOnboarding(session, {
        ...watch(),
        pricePackCigarrete: `${watch("pricePackCigarrete").slice(0, 2)}.${watch("pricePackCigarrete").slice(2, 4)}`,
      });
    }
    navigation.navigate("FeaturesScreen");
  };

  return {
    step,
    posthog,
    handleNextStep,
    handleRenderSteps,
    handleCanGoNextPage,
    handleToPreviousStep,
    handleNavigateToFeaturesScreen,
  };
};
