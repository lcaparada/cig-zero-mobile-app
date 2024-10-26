import { DailyMissions, Divider, Screen } from "@components";

import {
  Historic,
  HomeHeader,
  ActionsButtons,
  GeneralProgress,
} from "./components";

export const HomeScreen = () => {
  return (
    <Screen
      scrollable
      hasPaddingTop={false}
      insets={{ left: "s0", right: "s0", top: "s24" }}
    >
      <HomeHeader />
      <GeneralProgress />
      <Divider />
      <DailyMissions />
      <Divider />
      <Historic />
      <Divider />
      <ActionsButtons />
    </Screen>
  );
};
