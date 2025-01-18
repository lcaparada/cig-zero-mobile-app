import { useNavigation } from "@react-navigation/native";
import { usePostHog } from "posthog-react-native";

import { Box, Popup, Screen } from "@components";

import { PostHogEventsName } from "@constraints";

import { AdjusmentsHeader, Section, SectionItemData } from "./components";
import { useAdjustmentsScreen } from "./useAdjustmentsScreen";

export const AdjustmentsScreen = () => {
  const navigation = useNavigation();
  const posthog = usePostHog();

  const {
    handleDeleteAccount,
    isDeleteAccountPending,
    confirmDeleteAccountModal,
    setConfirmDeleteAccountModal,
  } = useAdjustmentsScreen();

  const generalItems: SectionItemData[] = [
    {
      icon: "user",
      label: "Informações Pessoais",
      action: () => navigation.navigate("PersonalInformationScreen"),
    },
    {
      icon: "fileText",
      label: "Dados de Fumo Passado",
      action: () => navigation.navigate("PastSmokingDataScreen"),
    },
    {
      icon: "bell",
      label: "Notificações",
      action: () => navigation.navigate("NotificationsScreen"),
    },
    {
      icon: "shield",
      label: "Termos de Privacidade",
      action: () => navigation.navigate("TermsOfServiceScreen"),
    },
    {
      icon: "moon",
      label: "Modo Escuro",
      action: () => navigation.navigate("AppearanceScreen"),
    },
    {
      icon: "fileText",
      label: "Política de Privacidade",
      action: () => navigation.navigate("PrivacyPolicyScreen"),
    },
    {
      icon: "userX",
      label: "Deletar conta",
      action: () => {
        posthog.capture(
          PostHogEventsName.PRESS_TO_SHOW_CONFIRM_DELETE_MODAL_ACCOUNT
        );
        setConfirmDeleteAccountModal(true);
      },
    },
  ];

  const supportItems: SectionItemData[] = [
    {
      icon: "alertTriangle",
      label: "Reportar um problema",
      action: () => navigation.navigate("ReportAnIssueScreen"),
    },
    {
      icon: "helpCircle",
      label: "FAQ",
      action: () => navigation.navigate("FaqScreen"),
    },
  ];

  return (
    <Screen canGoBack titleAlign="center" screenTitle="Ajustes" scrollable>
      <AdjusmentsHeader />
      <Box mt={"s30"} rowGap={"s30"}>
        <Section title={"GERAL"} items={generalItems} />
        <Section title={"SUPORTE"} items={supportItems} />
      </Box>
      {confirmDeleteAccountModal && (
        <Popup
          visible={confirmDeleteAccountModal}
          title={"Confirmar exclusão de conta"}
          setVisible={setConfirmDeleteAccountModal}
          description={
            "Tem certeza de que deseja excluir sua conta? Todos os dados salvos serão removidos permanentemente. Por favor, confirme sua escolha."
          }
          button={{
            text: "Confirmar",
            preset: "outline",
            isLoading: isDeleteAccountPending,
            onPress: () => {
              posthog.capture(
                PostHogEventsName.PRESS_TO_CONFIRM_DELETE_ACCOUNT
              );
              handleDeleteAccount().then(() => {
                setConfirmDeleteAccountModal(false);
              });
            },
          }}
        />
      )}
    </Screen>
  );
};
