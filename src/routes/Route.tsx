import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "@services";

import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";

export const Route = () => {
  const { session, loading } = useAuth();
  if (loading) return null;
  return (
    <NavigationContainer>
      {session ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
