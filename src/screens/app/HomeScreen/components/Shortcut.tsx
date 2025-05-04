import { useNavigation } from "@react-navigation/native";
import { usePostHog } from "posthog-react-native";

import { Box, Button } from "@components";

import { PostHogEventsName } from "@constraints";
import { TourGuideZone, useTourGuideController } from "rn-tourguide";

export const Shortcut = () => {
  const navigation = useNavigation();

  const posthog = usePostHog();

  const { stop } = useTourGuideController();

  return (
    <TourGuideZone
      text="Este botão serve como um atalho para você registrar se fumou ou não hoje. Assim, podemos contabilizar tudo de forma precisa, ajudando você a acompanhar diariamente os dias em que evitou fumar e aqueles em que fumou."
      zone={2}
    >
      <Box paddingHorizontal={"s24"} paddingTop={"s30"}>
        <Button
          text="Adicionar fumo"
          onPress={() => {
            stop();
            posthog.capture(PostHogEventsName.PRESS_TO_ADD_SMOKING_FROM_HOME);
            navigation.navigate("AppTabNavigator", {
              screen: "CalendarScreen",
              params: { comeFromHome: true },
            });
          }}
        />
      </Box>
    </TourGuideZone>
  );
};
