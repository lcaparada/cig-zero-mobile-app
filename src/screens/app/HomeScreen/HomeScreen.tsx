import { RefreshControl, ScrollView } from "react-native";

import { Missions, Divider, Button, Box } from "@components";

import {
  Historic,
  HomeHeader,
  ActionsButtons,
  GeneralProgress,
} from "./components";
import { useHomeScreen } from "./useHomeScreen";

export const HomeScreen = () => {
  const { isRefreshing, handleRefresh, scrollRef, navigation } =
    useHomeScreen();

  return (
    <ScrollView
      ref={scrollRef}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
      showsVerticalScrollIndicator={false}
    >
      <HomeHeader />
      <Box paddingHorizontal={"s24"} paddingTop={"s30"}>
        <Button
          text="Adicionar fumo"
          onPress={() =>
            navigation.navigate("AppTabNavigator", {
              screen: "CalendarScreen",
              params: { comeFromHome: true },
            })
          }
        />
      </Box>
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
