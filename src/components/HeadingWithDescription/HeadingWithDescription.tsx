import { AchievementProgressCardProps } from "../AchievementProgressCard/AchievementProgressCard";
import { Box } from "../Box/Box";
import { Count } from "../Count/Count";
import { Text } from "../Text/Text";

interface TitleAndDescriptionProps {
  title: string;
  description: string;
  count?: Pick<AchievementProgressCardProps, "current" | "target" | "type">;
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
        flex={1}
        justifyContent={"space-between"}
      >
        <Text
          preset="paragraphsXL"
          weight="semiBold"
          color={"backgroundConstrast"}
        >
          {title}
        </Text>
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
