import { Box, BoxProps, Skeleton } from "@components";

const SKELETON_AMOUNT = 5;

export const NotificationSkeleton = () => {
  return (
    <Box rowGap={"s4"}>
      {Array.from({ length: SKELETON_AMOUNT }).map((_, index) => {
        const borderRadiusStyles: BoxProps = {
          borderTopLeftRadius: index === 0 ? "s10" : undefined,
          borderTopRightRadius: index === 0 ? "s10" : undefined,
          borderBottomLeftRadius:
            index === SKELETON_AMOUNT - 1 ? "s10" : undefined,
          borderBottomRightRadius:
            index === SKELETON_AMOUNT - 1 ? "s10" : undefined,
        };
        return (
          <Skeleton
            {...borderRadiusStyles}
            key={index}
            height={83}
            width={"100%"}
          />
        );
      })}
    </Box>
  );
};
