import { Box, BoxProps, Skeleton } from "@components";

interface ISkeletonMessages {
  width: BoxProps["width"];
  align: BoxProps["alignItems"];
}

const skeletonMessages: ISkeletonMessages[] = [
  { width: "50%", align: "flex-start" },
  { width: "60%", align: "flex-end" },
  { width: "70%", align: "flex-start" },
  { width: "50%", align: "flex-start" },
  { width: "80%", align: "flex-end" },
];

export const ChatSkeleton = () => {
  return (
    <Box rowGap="s24" marginTop={"s24"}>
      {skeletonMessages.map(({ width, align }, index) => (
        <Box key={index} width={"100%"} alignItems={align}>
          <Skeleton width={width} height={55} borderRadius="s8" />
        </Box>
      ))}
    </Box>
  );
};
