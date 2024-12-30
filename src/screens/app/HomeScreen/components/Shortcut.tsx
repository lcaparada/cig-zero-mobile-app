import { useNavigation } from "@react-navigation/native";
import { usePostHog } from "posthog-react-native";
import { CopilotStep, walkthroughable } from "react-native-copilot";

import { Box, Button } from "@components";

import { PostHogEventsName } from "@constraints";

const WalkthroughableBox = walkthroughable(Box);

export const Shortcut = () => {
  const navigation = useNavigation();

  const posthog = usePostHog();

  return (
    <CopilotStep
      text="Este botão serve como um atalho para você registrar se fumou ou não hoje. Assim, podemos contabilizar tudo de forma precisa, ajudando você a acompanhar diariamente os dias em que evitou fumar e aqueles em que fumou."
      order={2}
      name="shortcut"
    >
      <WalkthroughableBox paddingHorizontal={"s24"} paddingTop={"s30"}>
        <Button
          text="Adicionar fumo"
          onPress={() => {
            posthog.capture(PostHogEventsName.PRESS_TO_ADD_SMOKING_FROM_HOME);
            navigation.navigate("AppTabNavigator", {
              screen: "CalendarScreen",
              params: { comeFromHome: true },
            });
          }}
        />
      </WalkthroughableBox>
    </CopilotStep>
  );
};
