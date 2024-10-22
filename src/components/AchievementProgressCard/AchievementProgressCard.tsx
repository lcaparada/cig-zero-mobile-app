import { Box, BoxProps } from "../Box/Box";
import { Divider } from "../Divider/Divider";
import { HeadingWithDescription } from "../HeadingWithDescription/HeadingWithDescription";
import { ProgressBar } from "../ProgressBar/ProgressBar";

export interface AchievementProgressCardProps extends BoxProps {
  title: string;
  target: number;
  current: number;
  lastItem: boolean;
  percentage: number;
  description: string;
}

export const AchievementProgressCard = ({
  title,
  target,
  current,
  lastItem,
  percentage,
  description,
  ...boxProps
}: AchievementProgressCardProps) => {
  return (
    <Box mt={"s24"} {...boxProps}>
      <Box paddingHorizontal={"s24"}>
        <HeadingWithDescription
          title={title}
          description={description}
          count={{ current, target }}
        />
        <ProgressBar percentage={percentage} mt={"s14"} />
      </Box>
      {!lastItem && <Divider mt={"s30"} />}
    </Box>
  );
};
