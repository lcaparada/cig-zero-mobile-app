import { Box, Skeleton } from "@components";

export const ChatSkeleton = () => {
  return (
    <Box rowGap={"s24"}>
      <Box width={"100%"} justifyContent={"flex-start"}>
        <Skeleton width={"50%"} height={55} borderRadius={"s8"} />
      </Box>
      <Box width={"100%"} alignItems={"flex-end"}>
        <Skeleton width={"60%"} height={55} borderRadius={"s8"} />
      </Box>
      <Box width={"100%"} justifyContent={"flex-start"}>
        <Skeleton width={"70%"} height={55} borderRadius={"s8"} />
      </Box>
      <Box width={"100%"} justifyContent={"flex-start"}>
        <Skeleton width={"50%"} height={55} borderRadius={"s8"} />
      </Box>
      <Box width={"100%"} alignItems={"flex-end"}>
        <Skeleton width={"80%"} height={55} borderRadius={"s8"} />
      </Box>
    </Box>
  );
};
