import { format, parseISO } from "date-fns";

import { Box, BoxProps, Icon, Text } from "@components";

import { Profile } from "@domain";

import { TimerContainer } from "./TimerContainer";

type ProfileDetailsProps = {
  userId: string;
  profile: Profile;
  latestSmokingRecord: string | null;
};

export const ProfileDetails = ({
  userId,
  profile,
  latestSmokingRecord,
}: ProfileDetailsProps) => (
  <>
    <TimerContainer userId={userId} />
    <AchievementsCard totalAchievements={profile?.totalAchievements ?? 0} />
    <LastSmokeCard latestSmokingRecord={latestSmokingRecord} />
  </>
);

type AchievementsCardProps = {
  totalAchievements: number;
};

const AchievementsCard = ({ totalAchievements }: AchievementsCardProps) => (
  <Box
    {...$card}
    {...shadow}
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
  >
    <Box flexDirection="row" alignItems="center" columnGap="s8">
      <Icon name="trophy" strokeWidth={2} />
      <Text weight="medium" color="primary" preset="paragraphsBig">
        Conquistas
      </Text>
    </Box>
    <Text weight="bold" color="primary">
      {totalAchievements}
    </Text>
  </Box>
);

type LastSmokeCardProps = {
  latestSmokingRecord: string | null;
};

const LastSmokeCard = ({ latestSmokingRecord }: LastSmokeCardProps) => (
  <Box {...$card} rowGap="s12" {...shadow}>
    <Box flexDirection="row" alignItems="center" columnGap="s8">
      <Icon name="calendar2" strokeWidth={2} />
      <Text weight="medium" color="primary" preset="paragraphsBig">
        Último dia de fumo
      </Text>
    </Box>
    <Box
      flexDirection="row"
      alignItems="center"
      columnGap="s12"
      justifyContent="center"
    >
      <Text weight="semiBold" color="primary">
        {format(
          parseISO(latestSmokingRecord ?? new Date().toISOString()),
          "d 'de' MMMM 'de' yyyy 'às' HH:mm"
        )}
      </Text>
    </Box>
  </Box>
);

const $card: BoxProps = {
  mt: "s18",
  backgroundColor: "background",
  borderRadius: "s8",
  paddingHorizontal: "s12",
  borderWidth: 1,
  borderColor: "primary",
  paddingVertical: "s10",
};

const shadow: BoxProps = {
  shadowColor: "primary",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 1,
  shadowRadius: 0,
  elevation: 5,
};