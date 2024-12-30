import { RefreshControl, ScrollView } from "react-native";

import { Missions, Divider, Popup } from "@components";

import {
  Historic,
  Shortcut,
  HomeHeader,
  ActionsButtons,
  GeneralProgress,
} from "./components";
import { useHomeScreen } from "./useHomeScreen";

export const HomeScreen = () => {
  const {
    start,
    scrollRef,
    isRefreshing,
    handleRefresh,
    showStartTutorialPopup,
    setShowStartTutorialPopup,
  } = useHomeScreen();

  return (
    <ScrollView
      ref={scrollRef}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
      showsVerticalScrollIndicator={false}
    >
      <HomeHeader />
      <Shortcut />
      <GeneralProgress />
      <Divider />
      <Missions />
      <Divider />
      <Historic />
      <Divider />
      <ActionsButtons />
      {showStartTutorialPopup && (
        <Popup
          visible={showStartTutorialPopup}
          setVisible={setShowStartTutorialPopup}
          hideCloseButton
          button={{
            text: "Iniciar tutorial",
            onPress: () => {
              start("counter", scrollRef.current);
              setShowStartTutorialPopup(false);
            },
          }}
          title="Seja bem vindo ao CigZero!"
          description="Aqui começa um breve tutorial que apresentará as principais ferramentas para ajudá-lo a superar o vício do cigarro de forma eficaz."
        />
      )}
    </ScrollView>
  );
};
