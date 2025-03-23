import { useNavigation } from "@react-navigation/native";
import { format, parseISO } from "date-fns";

import {
  Avatar,
  Box,
  BoxProps,
  Icon,
  Screen,
  Skeleton,
  Text,
  TimeInformation,
} from "@components";
import { useTimeSinceLastSmokingRecord } from "@hooks";
import { AppScreenProps } from "@routes";

import { useGetProfile } from "@domain";
import { useAuth } from "@services";

import { AboutSection } from "./components";

export const ProfileScreen = ({ route }: AppScreenProps<"ProfileScreen">) => {
  const { session } = useAuth();

  const { timeSinceLastSmokingRecord, latestSmokingRecord } =
    useTimeSinceLastSmokingRecord(route.params.userId);

  const navigation = useNavigation();

  const isMineProfile = route.params.userId === session?.user.id;

  const { profile, isLoading } = useGetProfile(route.params.userId);

  const showProfileForOtherPeople = profile?.visibilityStatus === "ALL";

  return (
    <Screen
      canGoBack
      screenTitle="Perfil"
      scrollable
      rightComponent={
        isMineProfile ? (
          <Icon
            name="edit2"
            size="s22"
            color="primary"
            onPress={() => navigation.navigate("EditProfileScreen")}
          />
        ) : undefined
      }
    >
      <Box alignItems={"center"} rowGap={"s12"}>
        {isLoading ? (
          <Skeleton width={80} height={80} borderRadius={"full"} />
        ) : (
          <Avatar
            size={80}
            borderRadius="full"
            name={profile?.name ?? ""}
            textSize="titleBig"
            photo={profile?.photo ?? ""}
          />
        )}

        <Text weight="medium" color={"primary"} preset="paragraphsXL">
          {profile?.name ?? ""}
        </Text>
      </Box>
      <AboutSection
        bio={profile?.bio ?? ""}
        isMineProfile={isMineProfile}
        location={profile?.location ?? ""}
        showProfileForOtherPeople={showProfileForOtherPeople}
      />
      {showProfileForOtherPeople || isMineProfile ? (
        <>
          <Box {...$card} {...shadow}>
            <Box flexDirection={"row"} alignItems={"center"} columnGap={"s8"}>
              <Icon name="clock2" />
              <Text weight="medium" color={"primary"} preset="paragraphsBig">
                Tempo sem fumar
              </Text>
            </Box>
            <Box
              flexDirection={"row"}
              alignItems={"center"}
              columnGap={"s12"}
              justifyContent={"center"}
            >
              <TimeInformation
                label="dias"
                value={timeSinceLastSmokingRecord.days}
              />
              <TimeInformation
                label="horas"
                value={timeSinceLastSmokingRecord.hours}
              />
              <TimeInformation
                label="minutos"
                value={timeSinceLastSmokingRecord.minutes}
              />
            </Box>
          </Box>
          <Box
            {...{ ...$card }}
            {...shadow}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box flexDirection={"row"} alignItems={"center"} columnGap={"s8"}>
              <Icon name="trophy" strokeWidth={2} />
              <Text weight="medium" color={"primary"} preset="paragraphsBig">
                Conquistas
              </Text>
            </Box>
            <Text weight="bold" color={"primary"}>
              {profile?.totalAchievements ?? 0}
            </Text>
          </Box>
          <Box {...$card} rowGap={"s12"} {...shadow}>
            <Box flexDirection={"row"} alignItems={"center"} columnGap={"s8"}>
              <Icon name="calendar2" strokeWidth={2} />
              <Text weight="medium" color={"primary"} preset="paragraphsBig">
                Último dia de fumo
              </Text>
            </Box>

            <Box
              flexDirection={"row"}
              alignItems={"center"}
              columnGap={"s12"}
              justifyContent={"center"}
            >
              <Text weight="semiBold" color={"primary"}>
                {format(
                  parseISO(latestSmokingRecord),
                  "d 'de' MMMM 'de' yyyy 'às' HH:mm"
                )}
              </Text>
            </Box>
          </Box>
        </>
      ) : (
        <Box
          height={"100%"}
          rowGap={"s8"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text
            weight="semiBold"
            preset="paragraphsXL"
            textAlign={"center"}
            color={"primary"}
          >
            O perfil desse usuario é privado!
          </Text>
          <Icon name="lock" size="s32" />
        </Box>
      )}
    </Screen>
  );
};

export const $card: BoxProps = {
  mt: "s18",
  backgroundColor: "background",
  borderRadius: "s8",
  paddingHorizontal: "s12",
  borderWidth: 1,
  borderColor: "primary",
  paddingVertical: "s10",
};

export const shadow: BoxProps = {
  shadowColor: "primary",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 1,
  shadowRadius: 0,

  elevation: 5,
};
