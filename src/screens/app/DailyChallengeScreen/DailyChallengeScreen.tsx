import { Box, Icon, Screen, Text } from "@components";
import { AppScreenProps } from "@routes";

export const DailyChallengeScreen = ({
  route,
}: AppScreenProps<"DailyChallengeScreen">) => {
  return (
    <Screen
      screenTitle="Desafio"
      canGoBack
      button={{ text: "Marcar como completado", action: () => {} }}
    >
      <Box mt={"s85"} paddingHorizontal={"s40"} alignItems={"center"}>
        <Icon name={route.params.icon} size="s90" />
        <Text mt={"s16"} color={"primary"} weight="semiBold">
          +{route.params.xp} XP
        </Text>
        <Text
          mt={"s16"}
          color={"primary"}
          preset="paragraphsLarge"
          textAlign={"center"}
          weight="bold"
        >
          {route.params.text}
        </Text>
        <Text
          mt={"s16"}
          color={"primary"}
          preset="paragraphs"
          textAlign={"center"}
          weight="medium"
        >
          {route.params.description}
        </Text>
      </Box>
    </Screen>
  );
};
