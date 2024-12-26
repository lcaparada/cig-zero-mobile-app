import { NavigationContainer } from "@react-navigation/native";
import { PostHogProvider } from "posthog-react-native";

import { useAuth } from "@services";

import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";

export const Route = () => {
  const { session, loading } = useAuth();
  if (loading) return null;
  return (
    <NavigationContainer>
      <PostHogProvider
        apiKey="<ph_project_api_key>"
        options={{
          host: "https://us.i.posthog.com",
        }}
      >
        {session ? <AppStack /> : <AuthStack />}
      </PostHogProvider>
    </NavigationContainer>
  );
};
