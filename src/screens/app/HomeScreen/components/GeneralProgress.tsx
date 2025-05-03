import { useNavigation } from "@react-navigation/native";
import * as Haptics from "expo-haptics";

import {
  Box,
  InformationCard,
  InformationCardProps,
  HeadingWithDescription,
  TouchableOpacityBox,
} from "@components";

import { useGetProgressData } from "@domain";
import { formatToCurrency } from "@helpers";
import { TourGuideZone } from "rn-tourguide";

export const GeneralProgress = () => {
  const { progressData } = useGetProgressData();

  const navigation = useNavigation();

  const items: InformationCardProps[] = [
    {
      icon: "calendar2",
      number: progressData?.daysWithoutSmoking ?? 0,
      label: "dias sem fumar",
    },
    {
      icon: "cigarette",
      number: progressData?.avoidedCigarettes ?? 0,
      label: "cigarros evitados",
    },
    {
      icon: "money",
      number: formatToCurrency(progressData?.moneySaved ?? 0),
      label: "reais poupados",
    },
    {
      icon: "clock2",
      number: progressData?.timeSaved ?? 0,
      label: "dias recuperados",
    },
  ];

  return (
    <TourGuideZone
      text="Esta seção exibe seu progresso geral: dias sem fumar, cigarros evitados, dinheiro economizado e dias de vida recuperados."
      zone={3}
    >
      <TouchableOpacityBox
        paddingHorizontal={"s24"}
        paddingVertical={"s30"}
        activeOpacity={1}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          navigation.navigate("ProvisionsScreen", {
            totalCigarettesAvoided: progressData?.avoidedCigarettes ?? 0,
            totalMoneySaved: progressData?.moneySaved ?? 0,
            totalTimeSaved: progressData?.timeSaved ?? 0,
          });
        }}
      >
        <HeadingWithDescription
          title="Progresso Geral"
          description="Sua evolução desde o início"
        />
        <Box
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"row"}
          columnGap={"s10"}
          mt={"s20"}
        >
          {items.map((item, index) => (
            <InformationCard key={index} {...item} />
          ))}
        </Box>
      </TouchableOpacityBox>
    </TourGuideZone>
  );
};
