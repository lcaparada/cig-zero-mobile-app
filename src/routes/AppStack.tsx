import { Fragment, useEffect } from "react";

import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as StoreReview from "expo-store-review";

import { IconName } from "@components";
import {
  FaqScreen,
  FriendsScreen,
  ProfileScreen,
  CommunityScreen,
  AppearanceScreen,
  ProvisionsScreen,
  EditProfileScreen,
  AdjustmentsScreen,
  ReportAnIssueScreen,
  PrivacyPolicyScreen,
  NotificationsScreen,
  TermsOfServiceScreen,
  AccountDetailsScreen,
  PastSmokingDataScreen,
  DailyChallengeScreen,
} from "@screens";

import { calculateDiffInDays } from "@helpers";
import { useAuth } from "@services";

import { AppTabBottomTabParamList, AppTabNavigator } from "./AppTabNavigator";

export type AppStackParamList = {
  FaqScreen: undefined;
  ProfileScreen: {
    userId: string;
  };
  FriendsScreen: undefined;
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  CommunityScreen: undefined;
  ProvisionsScreen: undefined;
  AppearanceScreen: undefined;
  AdjustmentsScreen: undefined;
  EditProfileScreen: undefined;
  NotificationsScreen: undefined;
  PrivacyPolicyScreen: undefined;
  ReportAnIssueScreen: undefined;
  TermsOfServiceScreen: undefined;
  DailyChallengeScreen: {
    xp: number;
    icon: IconName;
    text: string;
    description: string;
  };
  AccountDetailsScreen: undefined;
  PastSmokingDataScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
  const { session } = useAuth();

  const requestReview = async () => {
    if (await StoreReview.hasAction()) {
      StoreReview.requestReview();
    }
  };

  useEffect(() => {
    const diffInDays = calculateDiffInDays(
      session?.user?.user_metadata?.firstAppLaunch,
      new Date()
    );
    if (diffInDays > 0 && diffInDays % 3 === 0) {
      requestReview();
    }
  }, [session?.user?.user_metadata?.firstAppLaunch]);

  return (
    <Fragment>
      <Stack.Navigator
        screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
        initialRouteName={"AppTabNavigator"}
      >
        <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
        <Stack.Screen name="AppearanceScreen" component={AppearanceScreen} />
        <Stack.Screen name="AdjustmentsScreen" component={AdjustmentsScreen} />
        <Stack.Screen
          name="DailyChallengeScreen"
          component={DailyChallengeScreen}
        />
        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
        />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen
          name="PrivacyPolicyScreen"
          component={PrivacyPolicyScreen}
        />
        <Stack.Screen
          name="AccountDetailsScreen"
          component={AccountDetailsScreen}
        />
        <Stack.Screen name="ProvisionsScreen" component={ProvisionsScreen} />
        <Stack.Screen name="FriendsScreen" component={FriendsScreen} />
        <Stack.Screen
          name="TermsOfServiceScreen"
          component={TermsOfServiceScreen}
        />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen
          name="PastSmokingDataScreen"
          component={PastSmokingDataScreen}
        />
        <Stack.Screen
          name="ReportAnIssueScreen"
          component={ReportAnIssueScreen}
        />
        <Stack.Screen name="CommunityScreen" component={CommunityScreen} />
        <Stack.Screen name="FaqScreen" component={FaqScreen} />
      </Stack.Navigator>
    </Fragment>
  );
};
