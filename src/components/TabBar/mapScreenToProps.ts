import { AppTabBottomTabParamList } from "src/routes/AppTabNavigator";

import { IconProps } from "../Icon/Icon";

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  { icon: IconProps["name"] }
> = {
  HomeScreen: {
    icon: "home",
  },
  CalendarScreen: {
    icon: "calendar",
  },
  OMSTipsScreen: {
    icon: "activity",
  },
  AchievementsScreen: {
    icon: "star",
  },
};
