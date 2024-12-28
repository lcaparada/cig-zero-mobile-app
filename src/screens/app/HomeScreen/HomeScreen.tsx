import { RefreshControl, ScrollView } from "react-native";

import { Missions, Divider } from "@components";

import {
  Historic,
  HomeHeader,
  ActionsButtons,
  GeneralProgress,
} from "./components";
import { useHomeScreen } from "./useHomeScreen";

export const HomeScreen = () => {
  const { isRefreshing, handleRefresh, scrollRef } = useHomeScreen();

  return (
    <ScrollView
      ref={scrollRef}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
      showsVerticalScrollIndicator={false}
    >
      <HomeHeader />
      <GeneralProgress />
      <Divider />
      <Missions />
      <Divider />
      <Historic />
      <Divider />
      <ActionsButtons />
    </ScrollView>
  );
};
