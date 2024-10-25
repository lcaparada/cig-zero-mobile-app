import { Box, Skeleton } from "@components";

export const AchievementsSkeleton = () => (
  <Box flex={1} rowGap={"s14"} paddingHorizontal={"s24"} mt={"s24"}>
    {Array.from({ length: 3 }).map((_, index) => (
      <Skeleton height={80} key={index} width={"100%"} borderRadius={"s8"} />
    ))}
  </Box>
);
