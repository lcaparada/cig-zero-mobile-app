import { Box, BoxProps } from "../Box/Box";
import { Divider } from "../Divider/Divider";
import { HeadingWithDescription } from "../HeadingWithDescription/HeadingWithDescription";
import { ProgressBar } from "../ProgressBar/ProgressBar";

export type AchievementProgressCardProps = BoxProps & {
  title: string;
  lastItem: boolean;
  is_completed: boolean;
  data: {
    target: number;
    current: number;
    type?: "hours" | "weeks" | "months" | "years";
  }[];
  description: string;
  percentage: number;
};

export const AchievementProgressCard = ({
  data,
  title,
  lastItem,
  percentage,
  description,
  is_completed,
  ...boxProps
}: AchievementProgressCardProps) => {
  return (
    <Box mt={"s24"} {...boxProps}>
      <Box
        testID="progress-box"
        paddingHorizontal={"s24"}
        opacity={is_completed ? 0.5 : 1}
      >
        <HeadingWithDescription
          title={title}
          description={description}
          data={data}
        />
        <ProgressBar percentage={percentage} mt={"s14"} />
      </Box>
      {!lastItem && <Divider mt={"s30"} />}
    </Box>
  );
};
