import { Fragment, useState } from "react";

import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Popup } from "@components";
import {
  FaqScreen,
  ChatScreen,
  AppearanceScreen,
  AdjustmentsScreen,
  SubscriptionScreen,
  ReportAnIssueScreen,
  PrivacyPolicyScreen,
  NotificationsScreen,
  TermsOfServiceScreen,
  HistoricalChartScreen,
  PastSmokingDataScreen,
  PersonalInformationScreen,
} from "@screens";

import { Achievement, AchievementOnUser, achievementsService } from "@domain";
import { useAchievementsListener } from "@infra";
import { useAuth } from "@services";

import { AppTabBottomTabParamList, AppTabNavigator } from "./AppTabNavigator";

export type AppStackParamList = {
  FaqScreen: undefined;
  ChatScreen: undefined;
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  AppearanceScreen: undefined;
  OnboardingScreen: undefined;
  AdjustmentsScreen: undefined;
  SubscriptionScreen: undefined;
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
  const { session } = useAuth();

  const [achievementsPopupData, setAchievementsPopupData] = useState<
    (AchievementOnUser & Pick<Achievement, "title" | "description">) | null
  >(null);

  useAchievementsListener<AchievementOnUser>({
    userId: session?.user.id,
    onInsert: async (data) => {
      if (data.achievement_id) {
        const achievement = await achievementsService.getAchievement({
          id: data.achievement_id,
        });
        if (achievement) {
          setAchievementsPopupData({
            ...data,
            title: achievement.title,
            description: achievement.description,
          });
        }
      }
    },
  });

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
          name="SubscriptionScreen"
          component={SubscriptionScreen}
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
      {achievementsPopupData && (
        <Popup
          visible={!!achievementsPopupData}
          title="Parabéns, Conquista Alcançada!"
          description={achievementsPopupData.description}
          setVisible={() => setAchievementsPopupData(null)}
          showTrophy
        />
      )}
    </Fragment>
  );
};
