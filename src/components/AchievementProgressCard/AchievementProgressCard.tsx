import { Achievement } from "@domain";

import { Box, BoxProps } from "../Box/Box";
import { Divider } from "../Divider/Divider";
import { HeadingWithDescription } from "../HeadingWithDescription/HeadingWithDescription";
import { ProgressBar } from "../ProgressBar/ProgressBar";

export type AchievementProgressCardProps = BoxProps &
  Pick<Achievement, "description" | "title" | "is_completed"> & {
    target: number;
    current: number;
    lastItem: boolean;
    percentage: number;
    type: "hours" | "weeks" | "months" | "years";
  };

export const AchievementProgressCard = ({
  title,
  type,
  target,
  current,
  lastItem,
  percentage,
  description,
  is_completed,
  ...boxProps
}: AchievementProgressCardProps) => {
  return (
    <Box mt={"s24"} {...boxProps}>
      <Box paddingHorizontal={"s24"} opacity={is_completed ? 0.5 : 1}>
        <HeadingWithDescription
          title={title}
          description={description}
          count={{ current, target, type }}
        />
        <ProgressBar percentage={percentage} mt={"s14"} />
      </Box>
      {!lastItem && <Divider mt={"s30"} />}
    </Box>
  );
};
