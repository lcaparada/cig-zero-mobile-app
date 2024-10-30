import { useGetMissions } from "@domain";

import { Box, BoxProps } from "../Box/Box";
import { HeadingWithDescription } from "../HeadingWithDescription/HeadingWithDescription";
import { Skeleton } from "../Skeleton/Skeleton";

import { MissionsCard } from "./components";
import { getMissionsCardIcon } from "./utils";

export const Missions = () => {
  const { missions, isLoading } = useGetMissions();

  return (
    <Box paddingHorizontal={"s24"} paddingVertical={"s30"}>
      <HeadingWithDescription
        title="Missões"
        description="Conclua as suas missões semanais"
      />
      <Box {...$boxWrapper}>
        {!isLoading
          ? missions?.length
            ? missions?.map((mission, index) => (
                <MissionsCard
                  key={index}
                  index={index + 1}
                  icon={getMissionsCardIcon(mission)}
                  {...mission}
                />
              ))
            : null
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
