import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  StartScreen,
  WelcomeScreen,
  OnboardingScreen,
  SubscriptionScreen,
  OnboardingScreenSchemaType,
} from "@screens";

export type AuthStackParamList = {
  StartScreen: OnboardingScreenSchemaType;
  WelcomeScreen: undefined;
  OnboardingScreen: undefined;
  SubscriptionScreen: OnboardingScreenSchemaType;
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
      <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} />
    </Stack.Navigator>
  );
};
