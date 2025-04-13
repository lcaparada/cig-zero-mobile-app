import { Box, Skeleton } from "@components";

export const AchievementsSkeleton = () => (
  <Box paddingHorizontal={"s24"} mt={"s24"}>
    <Skeleton width={"50%"} height={20} borderRadius={"s12"} />
    <Skeleton width={"30%"} mt={"s14"} height={20} borderRadius={"s12"} />
    <Box
      mt={"s24"}
      rowGap={"s12"}
      columnGap={"s12"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      flexDirection={"row"}
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton key={index} width={164} height={164} borderRadius={"s12"} />
      ))}
    </Box>
  </Box>
);
