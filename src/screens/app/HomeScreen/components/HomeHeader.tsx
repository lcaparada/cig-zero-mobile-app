import { Box, Icon, Counter, ScreenHeader, Avatar } from "@components";
import { shadow } from "@theme";

import * as Haptics from "expo-haptics";

import { useAuth, UserMetadata } from "@services";
import { useNavigation } from "@react-navigation/native";
import { useTimeSinceLastSmokingRecord } from "@hooks";
import { TourGuideZone } from "rn-tourguide";

export const HomeHeader = () => {
  const { session } = useAuth();

  const navigation = useNavigation();

  const { timeSinceLastSmokingRecord } = useTimeSinceLastSmokingRecord(
    session?.user.id ?? ""
  );

  const userMetadata = session?.user.user_metadata as UserMetadata;

  return (
    <TourGuideZone
      text="Este é um contador que registra o tempo, em dias, horas e minutos, desde que você parou de fumar. Agora é pra valer!!"
      zone={1}
    >
      <Box
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
                <Avatar
                  size={28}
                  textSize="paragraphsBig"
                  bgColor="neutralLighest"
                  textColor="primary"
                  onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                    navigation.navigate("ProfileScreen", {
                      userId: session?.user?.id ?? "",
                    });
                  }}
                  name={userMetadata.name}
                  photo={userMetadata.avatar_url}
                />
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
      </Box>
    </TourGuideZone>
  );
};
