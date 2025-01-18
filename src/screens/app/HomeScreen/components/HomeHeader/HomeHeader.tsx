import { CopilotStep, walkthroughable } from "react-native-copilot";

import { Box, Icon, ScreenHeader, TimeCard } from "@components";
import { shadow } from "@theme";

import { useHomeHeader } from "./useHomeHeader";

const WalkthroughableBox = walkthroughable(Box);

export const HomeHeader = () => {
  const { navigation, timeSinceLastSmokingRecord } = useHomeHeader();

  return (
    <CopilotStep
      text="Este é um contador que registra o tempo, em dias, horas e minutos, desde que você parou de fumar. Agora é pra valer!!"
      order={1}
      name="counter"
    >
      <WalkthroughableBox
        backgroundColor={"primary"}
        paddingTop={"s48"}
        paddingHorizontal={"s24"}
        paddingBottom={"s30"}
        {...shadow}
      >
        <ScreenHeader
          title="Resumo"
          description="Acompanhe o progresso"
          titleColor="neutralLighest"
          descriptionColor="neutralLighest"
          rightComponent={
            <Icon
              name="settings"
              color="buttonConstrast"
              size="s24"
              strokeWidth={2}
              onPress={() => navigation.navigate("AdjustmentsScreen")}
            />
          }
        />

        <Box
          flexDirection={"row"}
          columnGap={"s10"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={"s30"}
        >
          <TimeCard
            label="dias"
            time={timeSinceLastSmokingRecord.days.toString()}
          />
          <TimeCard
            label="horas"
            time={timeSinceLastSmokingRecord.hours.toString()}
          />
          <TimeCard
            label="minutos"
            time={timeSinceLastSmokingRecord.minutes.toString()}
          />
        </Box>
      </WalkthroughableBox>
    </CopilotStep>
  );
};
