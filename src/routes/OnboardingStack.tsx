import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FeaturesScreen, OnboardingScreen, SubscriptionScreen } from "@screens";

export type OnboardingStackParamList = {
  FeaturesScreen: undefined;
  OnboardingScreen: undefined;
  SubscriptionScreen: undefined;
};

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnboardingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnboardingScreen"
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
    >
      <Stack.Screen name="FeaturesScreen" component={FeaturesScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} />
    </Stack.Navigator>
  );
};
