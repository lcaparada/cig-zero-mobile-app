import React from "react";

import { CopilotStep, walkthroughable } from "react-native-copilot";

import {
  HeadingWithDescription,
  Box,
  BoxProps,
  Text,
  TouchableOpacityBox,
  Icon,
  Skeleton,
} from "@components";
import { shadow, whiteShadow } from "@theme";

import { useCompleteDailyChallenge } from "src/domain/Challenge";

import { useDailyChallenge } from "./useDailyChallenge";

const WalkthroughableBox = walkthroughable(Box);

type DailyChallengeCardProps = {
  id: string;
  goal: string;
  xp: number;
};

const DailyChallengeCard = (params: DailyChallengeCardProps) => {
  const { handleCompleteDailyChallenge, isPending } =
    useCompleteDailyChallenge();
  return (
    <Box {...shadow} {...$dailyChallengeCardBox}>
      <Box flex={1}>
        <Text preset="paragraphsBig" weight="semiBold" color={"neutralLighest"}>
          {params.goal}
        </Text>
      </Box>
      <Box>
        <TouchableOpacityBox
          rowGap={"s6"}
          alignItems={"center"}
          justifyContent={"center"}
          disabled={isPending}
          onPress={() =>
            handleCompleteDailyChallenge({ mission_id: params.id })
          }
        >
          <Box
            width={36}
            height={36}
            borderRadius={"s16"}
            alignItems={"center"}
            justifyContent={"center"}
            backgroundColor={"neutralLighest"}
            borderColor={"neutralLighest"}
            {...whiteShadow}
          >
            <Icon name="check" size="s22" strokeWidth={2.5} color="primary" />
          </Box>
          <Text preset="notesSmall" weight="semiBold" color={"neutralLighest"}>
            +{params.xp} XP
          </Text>
        </TouchableOpacityBox>
      </Box>
    </Box>
  );
};

const $dailyChallengeCardBox: BoxProps = {
  width: "100%",
  borderRadius: "s16",
  alignItems: "center",
  paddingHorizontal: "s16",
  paddingVertical: "s12",
  flexDirection: "row",
  columnGap: "s12",
  backgroundColor: "primary",
};

export const DailyChallenge = () => {
  const { dailyChallenges, isFetching } = useDailyChallenge();
  return (
    <CopilotStep
      text="Esta seção traz desafios diários: complete-os marcando o check e ganhe XP para subir de nível!"
      order={4}
      name="dailyMissions"
    >
      <WalkthroughableBox paddingHorizontal={"s24"} paddingVertical={"s30"}>
        <HeadingWithDescription
          title="Desafios diários"
          description="Conclua os desafios para ganhar experiência"
        />
        <Box
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          rowGap={"s12"}
          mt={"s20"}
        >
          {dailyChallenges && !dailyChallenges.length ? (
            <Text
              preset="paragraphs"
              color={"backgroundSecondConstrast"}
              weight="semiBold"
              opacity={0.75}
            >
              🎉 Parabéns! Você completou todos os desafios! 🚀
            </Text>
          ) : null}
          {!isFetching && dailyChallenges
            ? dailyChallenges.map((challenge, index) => (
                <DailyChallengeCard key={index} {...challenge} />
              ))
            : Array.from({ length: 3 }, (_, index) => (
                <Skeleton
                  width={"100%"}
                  height={90}
                  borderRadius={"s16"}
                  key={index}
                />
              ))}
        </Box>
      </WalkthroughableBox>
    </CopilotStep>
  );
};
