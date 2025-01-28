import { useNavigation } from "@react-navigation/native";
import { usePostHog } from "posthog-react-native";

import { Box, Button, Screen, Text, TouchableOpacityBox } from "@components";

import { PostHogEventsName } from "@constraints";

export const WelcomeScreen = () => {
  const { navigate } = useNavigation();
  const posthog = usePostHog();

  return (
    <Screen centerItems>
      <Box alignItems={"center"} justifyContent={"center"} rowGap={"s20"}>
        <Text preset="titleBig" weight="bold">
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
      <Box rowGap={"s16"} alignItems={"center"}>
        <Button
          onPress={() => {
            posthog.capture(PostHogEventsName.PRESS_TO_START_ONBOARDING);
            navigate("RegisterScreen");
          }}
          mt={"s40"}
          text="Começar agora"
          preset="primary"
        />
        <TouchableOpacityBox
          hitSlop={10}
          onPress={() => navigate("LoginScreen")}
        >
          <Text color={"backgroundConstrast"}>
            Já possui conta?{" "}
            <Text color={"primary"} weight="bold">
              Toque aqui!
            </Text>
          </Text>
        </TouchableOpacityBox>
      </Box>
    </Screen>
  );
};
