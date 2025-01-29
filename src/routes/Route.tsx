import { NavigationContainer } from "@react-navigation/native";
import { PostHogProvider } from "posthog-react-native";
import { CopilotProvider } from "react-native-copilot";

import { StepNumberCopilot, TooltipCopilot } from "@components";

import { useAuth, useRevenueCatStore } from "@services";

import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";

export const Route = () => {
  const { session, loading } = useAuth();

  const { paywallVisible } = useRevenueCatStore();

  console.log(paywallVisible);

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
          {session ? <AppStack /> : <AuthStack />}
        </CopilotProvider>
      </PostHogProvider>
    </NavigationContainer>
  );
};
