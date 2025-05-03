import { useState } from "react";

import { useGetDailyChallenges } from "src/domain/Challenge";

import { TourGuideZone } from "rn-tourguide";
import {
  Box,
  CongratulationsPopup,
  HeadingWithDescription,
  LevelUpPopup,
  Skeleton,
  Text,
  XPInfoPopup,
} from "@components";
import { DailyChallengeCard } from "./DailyChallengeCard";

export const DailyChallenge = () => {
  const { dailyChallenges, isFetching } = useGetDailyChallenges();

  const [isCongratulationsPopupVisible, setCongratulationsPopupVisibility] =
    useState(false);
  const [isXPInfoPopupVisible, setXPInfoPopupVisibility] = useState(false);
  const [isLevelUpPopupVisible, setLevelUpPopupVisibility] = useState(false);

  return (
    <TourGuideZone
      text="Esta seção traz desafios diários: complete-os marcando o check e ganhe XP para subir de nível!"
      zone={4}
    >
      <Box paddingHorizontal={"s24"} paddingVertical={"s30"}>
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
                <DailyChallengeCard
                  setCongratulationsPopupVisibility={
                    setCongratulationsPopupVisibility
                  }
                  key={index}
                  {...challenge}
                />
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
        {isCongratulationsPopupVisible && (
          <CongratulationsPopup
            visible={isCongratulationsPopupVisible}
            openOtherPopup={setXPInfoPopupVisibility}
            setVisibility={setCongratulationsPopupVisibility}
          />
        )}
        {isXPInfoPopupVisible && (
          <XPInfoPopup
            visible={isXPInfoPopupVisible}
            openOtherPopup={setLevelUpPopupVisibility}
            setVisibility={setXPInfoPopupVisibility}
          />
        )}
        {isLevelUpPopupVisible && (
          <LevelUpPopup
            visible={isLevelUpPopupVisible}
            setVisibility={setLevelUpPopupVisibility}
          />
        )}
      </Box>
    </TourGuideZone>
  );
};
