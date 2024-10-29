import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  AdjustmentsScreen,
  FaqScreen,
  NotificationsScreen,
  PastSmokingDataScreen,
  PersonalInformationScreen,
  ReportAnIssueScreen,
} from "@screens";

import { AppTabBottomTabParamList, AppTabNavigator } from "./AppTabNavigator";

export type AppStackParamList = {
  FaqScreen: undefined;
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  AdjustmentsScreen: undefined;
  NotificationsScreen: undefined;
  ReportAnIssueScreen: undefined;
  PastSmokingDataScreen: undefined;
  PersonalInformationScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
      initialRouteName={"AppTabNavigator"}
    >
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="AdjustmentsScreen" component={AdjustmentsScreen} />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
      <Stack.Screen
        name="PersonalInformationScreen"
        component={PersonalInformationScreen}
      />
      <Stack.Screen
        name="PastSmokingDataScreen"
        component={PastSmokingDataScreen}
      />
      <Stack.Screen
        name="ReportAnIssueScreen"
        component={ReportAnIssueScreen}
      />
      <Stack.Screen name="FaqScreen" component={FaqScreen} />
    </Stack.Navigator>
  );
};
