import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { TabBar } from "@components";
import {
  AchievementsScreen,
  CalendarScreen,
  HomeScreen,
  OMSTipsScreen,
} from "@screens";

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  OMSTipsScreen: undefined;
  CalendarScreen:
    | {
        comeFromHome: boolean;
      }
    | undefined;

  AchievementsScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

const renderTabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

export const AppTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={renderTabBar}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ tabBarLabel: "Início" }}
      />
      <Tab.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{ tabBarLabel: "Calendário" }}
      />
      <Tab.Screen
        name="OMSTipsScreen"
        component={OMSTipsScreen}
        options={{ tabBarLabel: "OMS" }}
      />
      {/* <Tab.Screen
        name="AchievementsScreen"
        component={AchievementsScreen}
        options={{ tabBarLabel: "Conquistas" }}
      /> */}
    </Tab.Navigator>
  );
};
