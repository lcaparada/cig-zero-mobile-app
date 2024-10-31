import { Missions, Divider, Screen } from "@components";

import {
  Historic,
  HomeHeader,
  ActionsButtons,
  GeneralProgress,
} from "./components";
import { useHomeScreen } from "./useHomeScreen";

export const HomeScreen = () => {
  const { isFetching, refreshHomeScreenData } = useHomeScreen();

  return (
    <Screen
      scrollable
      hasPaddingTop={false}
      insets={{ left: "s0", right: "s0", top: "s24" }}
      pullToRefresh={{
        refreshing: isFetching,
        onRefresh: refreshHomeScreenData,
      }}
    >
      <HomeHeader />
      <GeneralProgress />
      <Divider />
      <Missions />
      <Divider />
      <Historic />
      <Divider />
      <ActionsButtons />
    </Screen>
  );
};
