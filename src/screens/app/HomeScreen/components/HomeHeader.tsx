import { Box, Icon, ScreenHeader, TimeCard } from "@components";
import { shadow } from "@theme";

const timeUnits = ["dias", "horas", "minutos"];

export const HomeHeader = () => {
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
            strokeWidth={2}
            size="s24"
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
        {timeUnits.map((item, index) => (
          <TimeCard key={index} time="0" label={item} />
        ))}
      </Box>
    </Box>
  );
};
