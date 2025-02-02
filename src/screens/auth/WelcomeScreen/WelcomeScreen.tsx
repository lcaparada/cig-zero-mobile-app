import { useNavigation } from "@react-navigation/native";
import { usePostHog } from "posthog-react-native";

import { Box, Button, Screen, Text } from "@components";

import { PostHogEventsName } from "@constraints";

export const WelcomeScreen = () => {
  const { navigate } = useNavigation();
  const posthog = usePostHog();

  return (
    <Screen centerItems>
      <Box alignItems={"center"} justifyContent={"center"} rowGap={"s20"}>
        <Text preset="titleBig" color={"backgroundConstrast"} weight="bold">
          Bem-vindo ao CigZero!
        </Text>
        <Text
          preset="paragraphsLarge"
          textAlign={"center"}
          color={"backgroundSecondConstrast"}
        >
          Estamos aqui para ajudar você a parar de fumar com dicas, suporte da
          comunidade e acompanhamento do seu progresso. Vamos juntos nessa
          jornada!
        </Text>
      </Box>
      <Box rowGap={"s16"}>
        <Button
          onPress={() => {
            posthog.capture(PostHogEventsName.PRESS_TO_START_ONBOARDING);
            navigate("AuthScreen");
          }}
          mt={"s40"}
          text="Começar agora"
          preset="primary"
        />
      </Box>
    </Screen>
  );
};
