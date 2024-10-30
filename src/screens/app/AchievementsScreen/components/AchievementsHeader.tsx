import { Box, Count, ScreenHeader } from "@components";

type AchievementsHeaderProps = {
  count: {
    target: number;
    current: number;
  };
};

export const AchievementsHeader = ({ count }: AchievementsHeaderProps) => {
  return (
    <Box paddingTop={"s48"} paddingHorizontal={"s24"}>
      <ScreenHeader
        title="Conquistas"
        description="Acompanhe as conquistas do progresso"
        rightComponent={
          <Count current={count?.current} target={count?.target} />
        }
      />
    </Box>
  );
};
