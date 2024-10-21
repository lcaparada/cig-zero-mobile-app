import { NavigationContainer } from "@react-navigation/native";

import { AppStack } from "./AppStack";

export const Route = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};
