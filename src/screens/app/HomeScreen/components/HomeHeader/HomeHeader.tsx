import { Box, Icon, ScreenHeader, TimeCard } from "@components";
import { shadow } from "@theme";

import { useHomeHeader } from "./useHomeHeader";

export const HomeHeader = () => {
  const { navigation, timeSinceLastSmokingRecord } = useHomeHeader();
  return (
    <Box
      backgroundColor={"primary"}
      paddingTop={"s48"}
      paddingHorizontal={"s24"}
      paddingBottom={"s30"}
      {...shadow}
    >
      <ScreenHeader
        title="Resumo"
        description="Acompanhe o progresso"
        titleAndDescriptionColor="neutralLighest"
        rightComponent={
          <Icon
            name="settings"
            color="neutralLighest"
            size="s24"
            strokeWidth={2}
            onPress={() => navigation.navigate("AdjustmentsScreen")}
          />
        }
      />
      <Box
        flexDirection={"row"}
        columnGap={"s10"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={"s30"}
      >
        <TimeCard
          label="dias"
          time={timeSinceLastSmokingRecord.days.toString()}
        />
        <TimeCard
          label="horas"
          time={timeSinceLastSmokingRecord.hours.toString()}
        />
        <TimeCard
          label="minutos"
          time={timeSinceLastSmokingRecord.minutes.toString()}
        />
      </Box>
    </Box>
  );
};
