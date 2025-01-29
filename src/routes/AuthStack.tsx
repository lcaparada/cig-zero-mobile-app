import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  LoginScreen,
  WelcomeScreen,
  RegisterScreen,
  OnboardingScreenSchemaType,
} from "@screens";

export type AuthStackParamList = {
  StartScreen: OnboardingScreenSchemaType;
  LoginScreen: undefined;
  WelcomeScreen: undefined;
  RegisterScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};
