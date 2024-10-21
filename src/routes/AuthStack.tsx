import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { OnboardingScreen, StartScreen, WelcomeScreen } from "@screens";

export type AuthStackParamList = {
  WelcomeScreen: undefined;
  OnboardingScreen: undefined;
  StartScreen: {
    name: string;
  };
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
    >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="StartScreen" component={StartScreen} />
    </Stack.Navigator>
  );
};
