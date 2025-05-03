import { useEffect } from "react";
import { Appearance } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { PostHogProvider } from "posthog-react-native";
import { TourGuideProvider } from "rn-tourguide";

import { Tooltip } from "@components";

import { ThemePreference, useSettings, useAuth } from "@services";

import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import { OnboardingStack } from "./OnboardingStack";

export const Route = () => {
  const { session, loading } = useAuth();

  const { appearancePreference, setAppColorOnChange } = useSettings();

  const Route = session?.user?.user_metadata.isNewUser
    ? OnboardingStack
    : AppStack;

  useEffect(() => {
    if (appearancePreference === "system") {
      const color = Appearance.getColorScheme();
      setAppColorOnChange(color as Exclude<ThemePreference, "system">);
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
        <TourGuideProvider
          labels={{
            previous: "Anterior",
            next: "Próximo",
            skip: "Pular",
            finish: "Finalizar",
          }}
          tooltipComponent={Tooltip}
          borderRadius={12}
        >
          {session ? <Route /> : <AuthStack />}
        </TourGuideProvider>
      </PostHogProvider>
    </NavigationContainer>
  );
};
