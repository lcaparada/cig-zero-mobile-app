import { Missions, Divider, Screen } from "@components";

import {
  Historic,
  HomeHeader,
  ActionsButtons,
  GeneralProgress,
} from "./components";
import { useHomeScreen } from "./useHomeScreen";

export const HomeScreen = () => {
  const { isRefreshing, handleRefresh } = useHomeScreen();

  return (
    <Screen
      scrollable
      hasPaddingTop={false}
      insets={{ left: "s0", right: "s0", top: "s24" }}
      pullToRefresh={{
        refreshing: isRefreshing,
        onRefresh: handleRefresh,
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
