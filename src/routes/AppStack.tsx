import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppTabBottomTabParamList, AppTabNavigator } from "./AppTabNavigator";

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
      initialRouteName={"AppTabNavigator"}
    >
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
    </Stack.Navigator>
  );
};
