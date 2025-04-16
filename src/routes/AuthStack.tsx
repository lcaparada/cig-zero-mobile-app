import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen, RegisterScreen, WelcomeScreen } from "@screens";
import { RedefinePasswordScreen } from "src/screens/auth/RedefinePasswordScreen/RedefinePasswordScreen";

export type AuthStackParamList = {
  LoginScreen: undefined;
  WelcomeScreen: undefined;
  RegisterScreen: undefined;
  RedefinePasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen
        name="RedefinePasswordScreen"
        component={RedefinePasswordScreen}
      />
    </Stack.Navigator>
  );
};
