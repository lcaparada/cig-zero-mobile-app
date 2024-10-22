import { Divider, Screen } from "@components";

import {
  ActionsButtons,
  GeneralProgress,
  Historic,
  HomeHeader,
} from "./components";
import { useHomeScreen } from "./useHomeScreen";

export const HomeScreen = () => {
  useHomeScreen();
  return (
    <Screen
      scrollable
      hasPaddingTop={false}
      insets={{ left: "s0", right: "s0", top: "s24" }}
    >
      <HomeHeader />
      <GeneralProgress />
      <Divider />
      <Historic />
      <Divider />
      <ActionsButtons />
    </Screen>
  );
};
