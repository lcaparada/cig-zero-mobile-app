import { useEffect } from "react";
import { Appearance } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { PostHogProvider } from "posthog-react-native";
import { CopilotProvider } from "react-native-copilot";

import { StepNumberCopilot, TooltipCopilot } from "@components";
import { FeaturesScreen } from "@screens";

import { ThemePreference, useAppColor, useAuth } from "@services";

import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import { OnboardingStack } from "./OnboardingStack";

export const Route = () => {
  const { session, loading } = useAuth();

  const { appearancePreference, setAppColorOnChange } = useAppColor();

  const Route = session?.user?.user_metadata.isNewUser
    ? OnboardingStack
    : AppStack;

  useEffect(() => {
    if (appearancePreference === "system") {
      Appearance.addChangeListener((event) => {
        setAppColorOnChange(
          event.colorScheme as Exclude<ThemePreference, "system">
        );
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return null;

  return (
    <NavigationContainer>
      <PostHogProvider
        apiKey={process.env.EXPO_PUBLIC_POSTHOG_API_KEY!}
        options={{
          host: "https://us.i.posthog.com",
          disabled: process.env.EXPO_PUBLIC_NODE_ENV === "DEV",
        }}
      >
        <CopilotProvider
          labels={{
            previous: "Anterior",
            next: "Próximo",
            skip: "Pular",
            finish: "Finalizar",
          }}
          tooltipStyle={{ borderRadius: 12 }}
          stepNumberComponent={StepNumberCopilot}
          tooltipComponent={TooltipCopilot}
        >
          <FeaturesScreen />
        </CopilotProvider>
      </PostHogProvider>
    </NavigationContainer>
  );
};
