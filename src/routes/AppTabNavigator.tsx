import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { TabBar } from "@components";
import { CalendarScreen, HomeScreen } from "@screens";

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  CalendarScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

const renderTabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

export const AppTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={renderTabBar}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="CalendarScreen" component={CalendarScreen} />
    </Tab.Navigator>
  );
};
