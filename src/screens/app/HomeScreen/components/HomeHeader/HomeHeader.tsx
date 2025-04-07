import * as Haptics from "expo-haptics";
import LottieView from "lottie-react-native";
import { CopilotStep, walkthroughable } from "react-native-copilot";

import {
  Box,
  Icon,
  Counter,
  ScreenHeader,
  ProfileButton,
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
                <TouchableOpacityBox
                  onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                    setPaywallVisible(true);
                  }}
                >
                  <LottieView
                    source={require("../../../../../assets/animations/stopwatch.json")}
                    autoPlay
                    loop
                    style={{ width: 40, height: 40 }}
                  />
                </TouchableOpacityBox>
              )}
              <Box
                flexDirection={"row"}
                alignItems={"center"}
                columnGap={"s12"}
              >
                <Icon
                  name="settings"
                  color="buttonConstrast"
                  size="s24"
                  strokeWidth={2}
                  onPress={() => navigation.navigate("AdjustmentsScreen")}
                />
                <ProfileButton />
              </Box>
            </Box>
          }
        />
        <Counter
          counter={{
            days: timeSinceLastSmokingRecord.days,
            hours: timeSinceLastSmokingRecord.hours,
            minutes: timeSinceLastSmokingRecord.minutes,
          }}
        />
      </WalkthroughableBox>
    </CopilotStep>
  );
};
