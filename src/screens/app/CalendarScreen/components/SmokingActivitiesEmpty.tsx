import { Box, Icon, Text } from "@components";

export const SmokingActivitiesEmpty = () => {
  return (
    <Box
      alignItems={"center"}
      justifyContent={"center"}
      columnGap={"s6"}
      opacity={0.5}
    >
      <Icon name="wind" size="s30" color="backgroundSecondConstrast" />
      <Text
        preset="paragraphsBig"
        weight="medium"
        color="backgroundSecondConstrast"
      >
        Você não fumou nesse dia.
      </Text>
    </Box>
  );
};
