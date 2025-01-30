import { NavigationContainer } from "@react-navigation/native";
import { PostHogProvider } from "posthog-react-native";
import { CopilotProvider } from "react-native-copilot";

import { StepNumberCopilot, TooltipCopilot } from "@components";

import { useAuth } from "@services";

import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import { OnboardingStack } from "./OnboardingStack";

export const Route = () => {
  const { session, loading } = useAuth();

  const Route = session?.user?.user_metadata.isNewUser
    ? OnboardingStack
    : AppStack;

  console.log(session);

  console.log(session ? <Route /> : <AuthStack />);

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
          {session ? <Route /> : <AuthStack />}
        </CopilotProvider>
      </PostHogProvider>
    </NavigationContainer>
  );
};
