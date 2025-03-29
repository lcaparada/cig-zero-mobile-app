import { Box, Skeleton } from "@components";

export const LoadingSkeleton = () => (
  <Box alignItems="center" rowGap="s30">
    <Skeleton width={80} height={80} borderRadius="full" />
    <Skeleton width={140} height={30} borderRadius="s8" />
    <Box rowGap="s12" width="100%">
      <Skeleton width="100%" height={70} borderRadius="s8" />
      <Skeleton width="100%" height={70} borderRadius="s8" />
      <Skeleton width="100%" height={70} borderRadius="s8" />
    </Box>
  </Box>
);