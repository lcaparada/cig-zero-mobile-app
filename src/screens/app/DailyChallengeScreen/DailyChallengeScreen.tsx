import { useState } from "react";

import { Box, CongratulationsPopup, Icon, Screen, Text } from "@components";
import { AppScreenProps } from "@routes";

export const DailyChallengeScreen = ({
  route,
}: AppScreenProps<"DailyChallengeScreen">) => {
  const [isCongratulationsPopupVisible, setCongratulationsPopupVisibility] =
    useState(false);

  return (
    <>
      <Screen
        screenTitle="Desafio"
        canGoBack
        button={{
          text: "Marcar como completado",
          action: () => {
            setCongratulationsPopupVisibility(true);
          },
        }}
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
      {isCongratulationsPopupVisible && (
        <CongratulationsPopup
          setVisibility={setCongratulationsPopupVisibility}
        />
      )}
    </>
  );
};
