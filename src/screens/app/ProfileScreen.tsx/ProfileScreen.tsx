import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";

import { Avatar, Box, BoxProps, Icon, Screen, Text } from "@components";
import { useTimeSinceLastSmokingRecord } from "@hooks";

import { useGetProfile } from "@domain";
import { useAuth, UserMetaData } from "@services";

import { AboutSection, TimeInformation } from "./components";

export const ProfileScreen = () => {
  const { session } = useAuth();

  const userMetaData = session?.user.user_metadata as UserMetaData;

  const { timeSinceLastSmokingRecord, latestSmokingRecord } =
    useTimeSinceLastSmokingRecord();

  const navigation = useNavigation();

  const { profile } = useGetProfile();

  return (
    <Screen
      canGoBack
      screenTitle="Perfil"
      scrollable
      rightComponent={
        <Icon
          name="edit2"
          size="s22"
          color="backgroundConstrast"
          onPress={() => navigation.navigate("EditProfileScreen")}
        />
      }
    >
      <Box alignItems={"center"} rowGap={"s12"}>
        <Avatar
          size={80}
          borderRadius="full"
          name={userMetaData.name}
          textSize="titleBig"
          photo={userMetaData.avatar_url}
        />
        <Text
          weight="medium"
          color={"backgroundConstrast"}
          preset="paragraphsXL"
        >
          {userMetaData.name}
        </Text>
      </Box>
      <AboutSection
        bio={profile?.bio ?? ""}
        location={profile?.location ?? ""}
      />
      <Box {...$card} {...shadow}>
        <Box flexDirection={"row"} alignItems={"center"} columnGap={"s8"}>
          <Icon name="clock2" />
          <Text
            weight="medium"
            color={"backgroundConstrast"}
            preset="paragraphsBig"
          >
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
          <Text
            weight="medium"
            color={"backgroundConstrast"}
            preset="paragraphsBig"
          >
            Conquistas
          </Text>
        </Box>
        <Text weight="bold" color={"backgroundConstrast"}>
          {profile?.totalAchievements ?? 0}
        </Text>
      </Box>
      <Box {...$card} rowGap={"s12"} {...shadow}>
        <Box flexDirection={"row"} alignItems={"center"} columnGap={"s8"}>
          <Icon name="calendar2" strokeWidth={2} />
          <Text
            weight="medium"
            color={"backgroundConstrast"}
            preset="paragraphsBig"
          >
            Último dia de fumo
          </Text>
        </Box>

        <Box
          flexDirection={"row"}
          alignItems={"center"}
          columnGap={"s12"}
          justifyContent={"center"}
        >
          <Text weight="medium" color={"backgroundConstrast"}>
            {format(latestSmokingRecord, "d 'de' MMMM 'de' yyyy 'às' HH:mm")}
          </Text>
        </Box>
      </Box>
    </Screen>
  );
};

export const $card: BoxProps = {
  mt: "s18",
  backgroundColor: "cardProfileBackground",
  borderRadius: "s8",
  paddingHorizontal: "s12",
  paddingVertical: "s10",
};

export const shadow: BoxProps = {
  shadowColor: "cardProfileShadow",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 1,
  shadowRadius: 0,

  elevation: 5,
};
