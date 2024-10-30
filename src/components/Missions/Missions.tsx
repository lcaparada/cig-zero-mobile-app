import { Box, BoxProps } from "../Box/Box";
import { HeadingWithDescription } from "../HeadingWithDescription/HeadingWithDescription";
import { IconName } from "../Icon/Icon";

import { MissionsCard } from "./components";

interface MissionsData {
  icon: IconName;
  title: string;
  description: string;
  isCompleted: boolean;
}

export const Missions = () => {
  const missionsData: MissionsData[] = [
    {
      title: "Tempo",
      icon: "clock",
      description: "Passe 3 dias consecutivos sem fumar",
      isCompleted: false,
    },
    {
      title: "Redução",
      icon: "trendingDown",
      description: "Fume 1 cigarro a menos do que o habitual",
      isCompleted: false,
    },
    {
      title: "Redução",
      icon: "trendingDown",
      description: "Passe o final de semana sem fumar",
      isCompleted: true,
    },
  ];

  return (
    <Box paddingHorizontal={"s24"} paddingVertical={"s30"}>
      <HeadingWithDescription
        title="Missões"
        description="Conclua as suas missões semanais"
      />
      <Box {...$boxWrapper}>
        {missionsData.map((mission, index) => (
          <MissionsCard key={index} index={index + 1} {...mission} />
        ))}
      </Box>
    </Box>
  );
};

const $boxWrapper: BoxProps = {
  mt: "s20",
  rowGap: "s10",
  alignItems: "center",
  justifyContent: "center",
};
