import * as Haptics from "expo-haptics";
import { CopilotStep, walkthroughable } from "react-native-copilot";

import { Box, Button, IconName } from "@components";
import { useAppTabNavigator } from "@hooks";

interface ActionsButtonsData {
  text: string;
  icon: IconName;
  action: () => void;
}

const WalkthroughableBox = walkthroughable(Box);

export const ActionsButtons = () => {
  const { navigate } = useAppTabNavigator();

  const actionsButtons: ActionsButtonsData[] = [
    {
      text: "Acesse as dicas da OMS",
      icon: "healthcare",
      action: () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        navigate("OMSTipsScreen");
      },
    },
    {
      text: "Explorar suas conquistas",
      icon: "star2",
      action: () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        navigate("AchievementsScreen");
      },
    },
  ];

  return (
    <CopilotStep
      text="Esta seção apresenta o assistente do CigZero, onde você pode enviar dúvidas. Também há um atalho para as telas de dicas da OMS e conquistas."
      order={8}
      name="shortcuts"
    >
      <WalkthroughableBox
        paddingHorizontal={"s24"}
        paddingVertical={"s30"}
        rowGap={"s10"}
      >
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
      </WalkthroughableBox>
    </CopilotStep>
  );
};
