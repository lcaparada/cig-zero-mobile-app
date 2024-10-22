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
  CalendarScreen: undefined;
  AchievementsScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

const renderTabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

export const AppTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={renderTabBar}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="CalendarScreen" component={CalendarScreen} />
      <Tab.Screen name="OMSTipsScreen" component={OMSTipsScreen} />
      <Tab.Screen name="AchievementsScreen" component={AchievementsScreen} />
    </Tab.Navigator>
  );
};
