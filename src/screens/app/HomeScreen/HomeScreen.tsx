import { RefreshControl, ScrollView } from "react-native";

import {
  Missions,
  Divider,
  Popup,
  OnboardingModal,
  StartModal,
} from "@components";

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
    startModalVisible,
    setStartModalVisible,
    onboardingModalVisible,
    showStartTutorialPopup,
    setOnboardingModalVisible,
    setShowStartTutorialPopup,
  } = useHomeScreen();

  return (
    <ScrollView
      ref={scrollRef}
      contentContainerStyle={{
        backgroundColor: colors.background,
      }}
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
      {onboardingModalVisible && (
        <OnboardingModal
          visible={onboardingModalVisible}
          setVisible={setOnboardingModalVisible}
          setStartModalVisible={setStartModalVisible}
        />
      )}
      {startModalVisible && (
        <StartModal
          visible={startModalVisible}
          setVisible={setStartModalVisible}
        />
      )}
    </ScrollView>
  );
};
