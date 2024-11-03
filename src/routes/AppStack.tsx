import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  FaqScreen,
  ChatScreen,
  AdjustmentsScreen,
  ReportAnIssueScreen,
  PrivacyPolicyScreen,
  NotificationsScreen,
  TermsOfServiceScreen,
  HistoricalChartScreen,
  PastSmokingDataScreen,
  PersonalInformationScreen,
} from "@screens";

import { AppTabBottomTabParamList, AppTabNavigator } from "./AppTabNavigator";

export type AppStackParamList = {
  FaqScreen: undefined;
  ChatScreen: undefined;
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  AdjustmentsScreen: undefined;
  NotificationsScreen: undefined;
  PrivacyPolicyScreen: undefined;
  ReportAnIssueScreen: undefined;
  TermsOfServiceScreen: undefined;
  HistoricalChartScreen: undefined;
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
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
      />
      <Stack.Screen
        name="TermsOfServiceScreen"
        component={TermsOfServiceScreen}
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
        name="HistoricalChartScreen"
        component={HistoricalChartScreen}
      />
      <Stack.Screen
        name="ReportAnIssueScreen"
        component={ReportAnIssueScreen}
      />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="FaqScreen" component={FaqScreen} />
    </Stack.Navigator>
  );
};
