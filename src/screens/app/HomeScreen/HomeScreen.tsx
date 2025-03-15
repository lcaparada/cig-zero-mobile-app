import { RefreshControl, ScrollView } from "react-native";

import { Divider, Popup } from "@components";

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
    colors,
    scrollRef,
    isRefreshing,
    handleRefresh,
    showStartTutorialPopup,
    setShowStartTutorialPopup,
  } = useHomeScreen();

  return (
    <ScrollView
      ref={scrollRef}
      contentContainerStyle={{
        backgroundColor: colors.background,
      }}
      style={{ backgroundColor: colors.background }}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
      showsVerticalScrollIndicator={false}
    >
      <HomeHeader />
      <Shortcut />
      <GeneralProgress />
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
