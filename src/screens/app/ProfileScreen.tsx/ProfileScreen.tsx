import { useEffect, useRef, useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { format, parseISO } from "date-fns";

import {
  Avatar,
  Box,
  Icon,
  Screen,
  Skeleton,
  Text,
  TouchableOpacityBox,
} from "@components";
import { useTimeSinceLastSmokingRecord } from "@hooks";
import { AppScreenProps } from "@routes";

import { useGetProfile } from "@domain";
import { useAuth } from "@services";

import {
  AboutSection,
  InfoCard,
  InfoRow,
  LevelTitleAbout,
  TimeInformation,
} from "./components";

export interface ILevelTitlePosition {
  y: number;
  x: number;
  height: number;
}

export const ProfileScreen = ({ route }: AppScreenProps<"ProfileScreen">) => {
  const { session } = useAuth();

  const { timeSinceLastSmokingRecord, latestSmokingRecord } =
    useTimeSinceLastSmokingRecord(route.params.userId);

  const navigation = useNavigation();

  const isMineProfile = route.params.userId === session?.user.id;

  const { profile, isLoading } = useGetProfile(route.params.userId);

  const levelTitleAboutRef = useRef<TouchableOpacity>(null);

  const [isLevelTitleAboutVisible, setLevelTitleAboutVisibility] =
    useState(false);
  const [levelTitlePosition, setLevelTitlePosition] =
    useState<ILevelTitlePosition>({
      y: 0,
      x: 0,
      height: 0,
    });

  const showProfileForOtherPeople = profile?.visibilityStatus === "ALL";

  function measure() {
    levelTitleAboutRef.current?.measureInWindow((x, y, width, height) =>
      setLevelTitlePosition({ height, x, y })
    );
  }

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    measure();
  };

  useEffect(() => {
    measure();
  }, []);

  return (
    <>
      <Screen
        canGoBack
        screenTitle="Perfil"
        scrollable
        onScroll={onScroll}
        scrollViewPaddingBottom={100}
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
          <Box alignItems={"center"}>
            <Text weight="semiBold" color={"primary"} preset="paragraphsXL">
              {profile?.name ?? ""}
            </Text>
            <AboutSection
              bio={profile?.bio ?? ""}
              isMineProfile={isMineProfile}
              location={profile?.location ?? ""}
              showProfileForOtherPeople={showProfileForOtherPeople}
            />
            <TouchableOpacityBox
              flexDirection={"row"}
              columnGap={"s8"}
              mt={"s8"}
              ref={levelTitleAboutRef}
              alignItems={"center"}
              onPress={() => setLevelTitleAboutVisibility(true)}
            >
              <Text weight="bold" preset="paragraphsXL" color={"primary"}>
                Aprendiz da Mudança
              </Text>
              <Icon name="infoCircle" color="primary" strokeWidth={2.5} />
            </TouchableOpacityBox>
            <Icon name="egg" size="s40" />
          </Box>
        </Box>

        {showProfileForOtherPeople || isMineProfile ? (
          <>
            <InfoCard icon="clock2" title="Tempo sem fumar">
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
            </InfoCard>

            <InfoRow icon="levelBadgde" text="Nível atual" value="1" />
            <InfoRow icon="levelUp" text="Próximo nível" value="0/499" />
            <InfoRow icon="goal" text="Missões concluídas" value="12" />
            <InfoRow
              icon="trophy"
              text="Conquistas"
              value={profile?.totalAchievements ?? 0}
            />

            <InfoCard icon="calendar2" title="Último dia de fumo">
              <Text weight="semiBold" color="primary">
                {format(
                  parseISO(latestSmokingRecord),
                  "d 'de' MMMM 'de' yyyy 'às' HH:mm"
                )}
              </Text>
            </InfoCard>
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
      {isLevelTitleAboutVisible && (
        <LevelTitleAbout
          levelTitlePosition={levelTitlePosition}
          setVisible={setLevelTitleAboutVisibility}
        />
      )}
    </>
  );
};
