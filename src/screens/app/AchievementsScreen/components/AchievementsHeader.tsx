import { Box, Count, ScreenHeader } from "@components";

export const AchievementsHeader = () => {
  return (
    <Box paddingTop={"s48"} paddingHorizontal={"s24"}>
      <ScreenHeader
        title="Conquistas"
        description="Acompanhe as conquistas do progresso"
        rightComponent={<Count current={3} target={24} />}
      />
    </Box>
  );
};
