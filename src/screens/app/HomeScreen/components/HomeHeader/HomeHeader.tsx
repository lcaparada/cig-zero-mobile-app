import LottieView from "lottie-react-native";
import { CopilotStep, walkthroughable } from "react-native-copilot";

import {
  Box,
  Icon,
  TimeCard,
  ScreenHeader,
  TouchableOpacityBox,
} from "@components";
import { shadow } from "@theme";

import { useHomeHeader } from "./useHomeHeader";

const WalkthroughableBox = walkthroughable(Box);

export const HomeHeader = () => {
  const {
    navigation,
    isUserPremium,
    setPaywallVisible,
    timeSinceLastSmokingRecord,
  } = useHomeHeader();

  const timeItems = [
    { label: "dias", value: timeSinceLastSmokingRecord.days.toString() },
    { label: "horas", value: timeSinceLastSmokingRecord.hours.toString() },
    { label: "minutos", value: timeSinceLastSmokingRecord.minutes.toString() },
  ];

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
            <Box flexDirection={"row"} alignItems={"center"} columnGap={"s8"}>
              {!isUserPremium && (
                <TouchableOpacityBox onPress={() => setPaywallVisible(true)}>
                  <LottieView
                    source={require("../../../../../assets/animations/stopwatch.json")}
                    autoPlay
                    loop
                    style={{ width: 40, height: 40 }}
                  />
                </TouchableOpacityBox>
              )}

              <Icon
                name="settings"
                color="buttonConstrast"
                size="s24"
                strokeWidth={2}
                onPress={() => navigation.navigate("AdjustmentsScreen")}
              />
            </Box>
          }
        />
        <Box
          flexDirection={"row"}
          columnGap={"s10"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={"s30"}
        >
          {timeItems.map((item, index) => (
            <TimeCard
              key={`${item.label}_${index}`}
              label={item.label}
              thirdNumberInDays={timeSinceLastSmokingRecord.days >= 100}
              time={item.value}
            />
          ))}
        </Box>
      </WalkthroughableBox>
    </CopilotStep>
  );
};
