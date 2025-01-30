import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthScreen, WelcomeScreen } from "@screens";

export type AuthStackParamList = {
  AuthScreen: undefined;
  WelcomeScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
    >
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};
