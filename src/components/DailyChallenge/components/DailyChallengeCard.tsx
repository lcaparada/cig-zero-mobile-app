import { shadow } from "@theme";

import { useToastService } from "@services";
import { Box, BoxProps, TouchableOpacityBox } from "src/components/Box/Box";
import { Icon } from "src/components/Icon/Icon";
import { Text } from "src/components/Text/Text";
import { useCompleteDailyChallenge } from "src/domain/Challenge";

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

  const { handleCompleteDailyChallenge, isPending } =
    useCompleteDailyChallenge();

  async function completeDailyChallenge() {
    try {
      await handleCompleteDailyChallenge({ missionId: id });
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
