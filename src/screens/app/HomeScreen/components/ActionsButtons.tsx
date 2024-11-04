import { useNavigation } from "@react-navigation/native";

import { Box, Button, IconName } from "@components";
import { useAppTabNavigator } from "@hooks";

interface ActionsButtonsData {
  text: string;
  icon: IconName;
  action: () => void;
}

export const ActionsButtons = () => {
  const { navigate } = useAppTabNavigator();
  const navigation = useNavigation();

  const actionsButtons: ActionsButtonsData[] = [
    {
      text: "Assistente Cigzero",
      icon: "messageCircle",
      action: () => navigation.navigate("ChatScreen"),
    },
    {
      text: "Acesse as dicas da OMS",
      icon: "activity",
      action: () => navigate("OMSTipsScreen"),
    },
    {
      text: "Explorar suas conquistas",
      icon: "star",
      action: () => navigate("AchievementsScreen"),
    },
  ];

  return (
    <Box paddingHorizontal={"s24"} paddingVertical={"s30"} rowGap={"s10"}>
      {actionsButtons.map((item, index) => (
        <Button
          key={index}
          iconName={item.icon}
          text={item.text}
          onPress={item.action}
          hasArrowRight
          justifyContent={"flex-start"}
        />
      ))}
    </Box>
  );
};
