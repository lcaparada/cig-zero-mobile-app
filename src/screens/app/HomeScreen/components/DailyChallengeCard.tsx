import * as Haptics from "expo-haptics";

import { shadow } from "@theme";

import { useChallenge, useToastService } from "@services";
import { useCompleteDailyChallenge } from "src/domain/Challenge";
import { Box, BoxProps, Icon, Text, TouchableOpacityBox } from "@components";

type DailyChallengeCardProps = {
  id: string;
  goal: string;
  xp: number;
  setCongratulationsPopupVisibility: React.Dispatch<
    React.SetStateAction<boolean>
  >;
};

export const DailyChallengeCard = ({
  id,
  goal,
  xp,
  setCongratulationsPopupVisibility,
}: DailyChallengeCardProps) => {
  const { showToast } = useToastService();

  const { setNewLevel, setXpEarned } = useChallenge();

  const { handleCompleteDailyChallenge, isPending } =
    useCompleteDailyChallenge();

  async function completeDailyChallenge() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    try {
      const result = await handleCompleteDailyChallenge({ missionId: id });
      if (result.newLevel !== undefined) {
        setNewLevel(result.newLevel);
      }
      setXpEarned(xp);
      setCongratulationsPopupVisibility(true);
    } catch (error: any) {
      showToast({ message: error.message, duration: 5000, type: "error" });
    }
  }

  return (
    <Box {...shadow} {...$dailyChallengeCardBox}>
      <Box flex={1}>
        <Text preset="paragraphsBig" weight="semiBold" color={"neutralLighest"}>
          {goal}
        </Text>
      </Box>
      <Box>
        <TouchableOpacityBox
          rowGap={"s6"}
          alignItems={"center"}
          justifyContent={"center"}
          disabled={isPending}
          onPress={completeDailyChallenge}
        >
          <Box {...$checkButton} {...whiteShadow}>
            <Icon name="check" size="s22" strokeWidth={2.5} color="primary" />
          </Box>
          <Text preset="notesSmall" weight="semiBold" color={"neutralLighest"}>
            +{xp} XP
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

const $checkButton: BoxProps = {
  width: 36,
  height: 36,
  borderRadius: "s16",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "neutralLighest",
  borderColor: "neutralLighest",
};

const whiteShadow: BoxProps = {
  shadowColor: "lightNeutralGray",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 1,
  shadowRadius: 0,

  elevation: 5,
};
