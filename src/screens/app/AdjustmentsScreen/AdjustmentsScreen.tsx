import { useNavigation } from "@react-navigation/native";

import { Box, Screen } from "@components";

import { AdjusmentsHeader, Section, SectionItemData } from "./components";

export const AdjustmentsScreen = () => {
  const navigation = useNavigation();

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
    // {
    //   icon: "star",
    //   label: "Objetivos e Missões Semanais",
    //   action: () => {},
    // },
    {
      icon: "bell",
      label: "Notificações",
      action: () => navigation.navigate("NotificationsScreen"),
    },
  ];

  const supportItems: SectionItemData[] = [
    {
      icon: "alertTriangle",
      label: "Reportar um problema",
      action: () => {},
    },
    {
      icon: "helpCircle",
      label: "FAQ",
      action: () => {},
    },
  ];

  return (
    <Screen canGoBack titleAlign="center" screenTitle="Ajustes" scrollable>
      <AdjusmentsHeader />
      <Box mt={"s30"} rowGap={"s30"}>
        <Section title={"GERAL"} items={generalItems} />
        <Section title={"SUPORTE"} items={supportItems} />
      </Box>
    </Screen>
  );
};
