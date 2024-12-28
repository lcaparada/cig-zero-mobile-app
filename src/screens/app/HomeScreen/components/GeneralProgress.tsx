import { CopilotStep, walkthroughable } from "react-native-copilot";

import {
  Box,
  InformationCard,
  InformationCardProps,
  HeadingWithDescription,
} from "@components";

import { useGetProgressData } from "@domain";
import { formatToCurrency } from "@helpers";

const WalkthroughableBox = walkthroughable(Box);

export const GeneralProgress = () => {
  const { progressData } = useGetProgressData();

  const items: InformationCardProps[] = [
    {
      icon: "calendar",
      number: progressData?.daysWithoutSmoking ?? 0,
      label: "dias sem fumar",
    },
    {
      icon: "wind",
      number: progressData?.avoidedCigarettes ?? 0,
      label: "cigarros evitados",
    },
    {
      icon: "dollarSign",
      number: formatToCurrency(progressData?.moneySaved ?? 0),
      label: "reais poupados",
    },
    {
      icon: "clock",
      number: progressData?.timeSaved ?? 0,
      label: "dias recuperados",
    },
  ];

  return (
    <CopilotStep
      text="Esta seção exibe seu progresso geral: dias sem fumar, cigarros evitados, dinheiro economizado e dias de vida recuperados."
      order={2}
      name="generalProgress"
    >
      <WalkthroughableBox paddingHorizontal={"s24"} paddingVertical={"s30"}>
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
      </WalkthroughableBox>
    </CopilotStep>
  );
};
