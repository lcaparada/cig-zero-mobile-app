import { Fragment, useEffect, useState } from "react";

import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as StoreReview from "expo-store-review";

import { Paywall, QuestionPopup } from "@components";
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
} from "@screens";

import { calculateDiffInDays } from "@helpers";
import {
  secureStorage,
  useAuth,
  useRevenueCatService,
  useSplash,
} from "@services";

import { AppTabBottomTabParamList, AppTabNavigator } from "./AppTabNavigator";

export type AppStackParamList = {
  FaqScreen: undefined;
  ProfileScreen: {
    userId: string;
  };
  FriendsScreen: undefined;
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  CommunityScreen: undefined;
  ProvisionsScreen: {
    totalCigarettesAvoided: number;
    totalMoneySaved: number;
    totalTimeSaved: number;
  };
  AppearanceScreen: undefined;
  AdjustmentsScreen: undefined;
  EditProfileScreen: undefined;
  NotificationsScreen: undefined;
  PrivacyPolicyScreen: undefined;
  ReportAnIssueScreen: undefined;
  TermsOfServiceScreen: undefined;
  AccountDetailsScreen: undefined;
  PastSmokingDataScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
  const { session } = useAuth();

  const { splashComplete } = useSplash();

  const [isQuestionPopupVisible, setIsQuestionPopupVisible] = useState(false);

  const {
    isUserPremium,
    paywallVisible,
    setPaywallVisible,
    checkIfUserIsPremium,
  } = useRevenueCatService();

  const requestReview = async () => {
    if (await StoreReview.hasAction()) {
      StoreReview.requestReview();
    }
  };

  useEffect(() => {
    (async () => {
      const createdAt = session?.user?.created_at;
      if (!createdAt) return;

      const userCreatedAt = new Date(createdAt);
      if (isNaN(userCreatedAt.getTime())) return;

      const diffInDays = calculateDiffInDays(new Date(), userCreatedAt);
      const isEveryThirdDay = diffInDays > 0 && diffInDays % 3 === 0;
      const isProd = process.env.EXPO_PUBLIC_NODE_ENV === "PROD";

      if (isEveryThirdDay && isUserPremium && splashComplete) {
        requestReview();
      }

      if (diffInDays >= 3 && isProd) {
        await checkIfUserIsPremium();
      } else {
        setPaywallVisible(false);
      }

      const feedbackAnswered = await secureStorage.getItem("feedbackAnswered");

      if (feedbackAnswered === "true") {
        setIsQuestionPopupVisible(false);
      } else if (isEveryThirdDay && splashComplete) {
        setIsQuestionPopupVisible(true);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.user?.user_metadata?.firstAppLaunch, splashComplete]);

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
      {paywallVisible && <Paywall />}
      {isQuestionPopupVisible && (
        <QuestionPopup
          visible={isQuestionPopupVisible}
          setVisible={setIsQuestionPopupVisible}
        />
      )}
    </Fragment>
  );
};
