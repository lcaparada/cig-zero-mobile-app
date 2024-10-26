import { Box, Button, Screen, Text } from "@components";
import { AuthScreenProps } from "@routes";

import { useStartScreen } from "./useStartScreen";

export const StartScreen = ({ route }: AuthScreenProps<"StartScreen">) => {
  const { name } = route.params;
  const { authenticateSignInAnonymously, isPending } = useStartScreen();
  return (
    <Screen centerItems canGoBack>
      <Box alignItems={"center"} justifyContent={"center"} rowGap={"s20"}>
        <Text preset="titleBig" weight="bold">
          Pronto para Começar
        </Text>
        <Text
          preset="paragraphsLarge"
          textAlign={"center"}
          color={"backgroundSecondConstrast"}
        >
          Estamos animados para te ajudar a alcançar seus objetivos. Vamos
          juntos nessa jornada para parar de fumar, {name}!
        </Text>
      </Box>
      <Button
        mt={"s40"}
        text="Iniciar"
        preset="primary"
        isLoading={isPending}
        onPress={() => authenticateSignInAnonymously(route.params)}
      />
    </Screen>
  );
};
