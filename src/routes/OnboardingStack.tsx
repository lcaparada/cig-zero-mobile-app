import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  FeaturesScreen,
  OnboardingScreen,
  OnboardingScreenSchemaType,
  SubscriptionScreen,
} from "@screens";

type OnboardingProps = Pick<
  OnboardingScreenSchemaType,
  "likeToReceiveDailyReminders"
>;

export type OnboardingStackParamList = {
  FeaturesScreen: OnboardingProps;
  OnboardingScreen: undefined;
  SubscriptionScreen: OnboardingProps;
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
