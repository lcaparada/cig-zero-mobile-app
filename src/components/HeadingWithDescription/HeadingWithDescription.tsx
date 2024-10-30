import { AchievementProgressCardProps } from "../AchievementProgressCard/AchievementProgressCard";
import { Box } from "../Box/Box";
import { Count } from "../Count/Count";
import { Text } from "../Text/Text";

interface TitleAndDescriptionProps {
  title: string;
  count?: Pick<AchievementProgressCardProps, "current" | "target" | "type">;
  description: string;
}

export const HeadingWithDescription = ({
  title,
  count,
  description,
}: TitleAndDescriptionProps) => {
  return (
    <Box>
      <Box
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box flex={1}>
          <Text
            preset="paragraphsXL"
            weight="semiBold"
            color={"backgroundConstrast"}
          >
            {title}
          </Text>
        </Box>
        {!!count && <Count {...count} />}
      </Box>
      <Text
        preset="paragraphsBig"
        weight="medium"
        textAlign={"left"}
        color={"backgroundSecondConstrast"}
      >
        {description}
      </Text>
    </Box>
  );
};
