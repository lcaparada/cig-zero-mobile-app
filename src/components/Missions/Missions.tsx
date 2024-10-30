import { useEffect, useState } from "react";

import { Box, BoxProps } from "../Box/Box";
import { HeadingWithDescription } from "../HeadingWithDescription/HeadingWithDescription";
import { IconName } from "../Icon/Icon";
import { Skeleton } from "../Skeleton/Skeleton";

import { MissionsCard } from "./components";

interface MissionsData {
  icon: IconName;
  title: string;
  description: string;
  isCompleted: boolean;
}

export const Missions = () => {
  const [showMissions, setShowMissions] = useState(false);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMissions(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box paddingHorizontal={"s24"} paddingVertical={"s30"}>
      <HeadingWithDescription
        title="Missões"
        description="Conclua as suas missões semanais"
      />
      <Box {...$boxWrapper}>
        {showMissions
          ? missionsData.map((mission, index) => (
              <MissionsCard key={index} index={index + 1} {...mission} />
            ))
          : Array.from({ length: 3 }).map((_, index) => (
              <Skeleton
                width={"100%"}
                height={95}
                key={index}
                borderRadius={"s16"}
              />
            ))}
      </Box>
    </Box>
  );
};

const $boxWrapper: BoxProps = {
  mt: "s20",
  width: "100%",
  rowGap: "s10",
  alignItems: "center",
  justifyContent: "center",
};
