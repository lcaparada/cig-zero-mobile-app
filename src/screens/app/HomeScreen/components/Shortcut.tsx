import { useNavigation } from "@react-navigation/native";
import { CopilotStep, walkthroughable } from "react-native-copilot";

import { Box, Button } from "@components";

const WalkthroughableBox = walkthroughable(Box);

export const Shortcut = () => {
  const navigation = useNavigation();

  return (
    <CopilotStep
      text="Este botão serve como um atalho para você registrar se fumou ou não hoje. Assim, podemos contabilizar tudo de forma precisa, ajudando você a acompanhar diariamente os dias em que evitou fumar e aqueles em que fumou."
      order={2}
      name="shortcut"
    >
      <WalkthroughableBox paddingHorizontal={"s24"} paddingTop={"s30"}>
        <Button
          text="Adicionar fumo"
          onPress={() =>
            navigation.navigate("AppTabNavigator", {
              screen: "CalendarScreen",
              params: { comeFromHome: true },
            })
          }
        />
      </WalkthroughableBox>
    </CopilotStep>
  );
};
