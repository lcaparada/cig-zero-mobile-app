import { Divider, Screen } from "@components";

import {
  ActionsButtons,
  GeneralProgress,
  Historic,
  HomeHeader,
} from "./components";

export const HomeScreen = () => {
  return (
    <Screen
      hasPaddingTop={false}
      insets={{ left: "s0", right: "s0", top: "s24" }}
      scrollable
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
