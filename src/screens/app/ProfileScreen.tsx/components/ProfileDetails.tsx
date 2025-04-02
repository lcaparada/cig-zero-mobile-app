import { format, parseISO } from "date-fns";

import { Box, BoxProps, Icon, IconName, Text } from "@components";
import { shadow } from "@theme";

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
}: ProfileDetailsProps) => {
  const cardsData: CardProps[] = [
    {
      title: "Nível atual",
      icon: "levelBadge",
      current: profile.level.number ?? 1,
    },
    {
      title: "Próximo nível",
      icon: "levelUp",
      current: profile.level.totalAccXp,
      target: profile.level.nextLevelXp,
    },
    {
      title: "Missões concluídas",
      icon: "goal",
      current: profile.totalMissionsConcluded ?? 0,
    },
    {
      title: "Conquistas",
      icon: "trophy",
      current: profile.totalAchievements ?? 0,
    },
  ];

  return (
    <>
      <TimerContainer userId={userId} />
      {cardsData.map((card) => (
        <Card key={card.title} {...card} />
      ))}
      <LastSmokeCard latestSmokingRecord={latestSmokingRecord} />
    </>
  );
};

type CardProps = {
  title: string;
  icon: IconName;
  current: number;
  target?: number;
};

const Card = ({ icon, current, title, target }: CardProps) => (
  <Box
    {...$card}
    {...shadow}
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
  >
    <Box flexDirection="row" alignItems="center" columnGap="s8">
      <Icon name={icon} />
      <Text weight="medium" color="neutralLighest" preset="paragraphsBig">
        {title}
      </Text>
    </Box>
    <Text weight="bold" color="neutralLighest">
      {target ? `${current}/${target}` : current}
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
      <Text weight="medium" color="neutralLighest" preset="paragraphsBig">
        Último dia de fumo
      </Text>
    </Box>
    <Box
      flexDirection="row"
      alignItems="center"
      columnGap="s12"
      justifyContent="center"
    >
      <Text weight="semiBold" color="neutralLighest">
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
  backgroundColor: "primary",
  borderRadius: "s8",
  paddingHorizontal: "s12",
  borderWidth: 1,
  borderColor: "primary",
  paddingVertical: "s10",
};
