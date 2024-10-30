import { AchievementProgressCardProps } from "../AchievementProgressCard/AchievementProgressCard";
import { Box } from "../Box/Box";
import { Count } from "../Count/Count";
import { Text } from "../Text/Text";

interface TitleAndDescriptionProps {
  title: string;
  data?: AchievementProgressCardProps["data"];
  description: string;
}

export const HeadingWithDescription = ({
  data,
  title,
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
        <Box flexDirection={"row"} columnGap={"s8"}>
          {!!data &&
            data.length &&
            data.map((item, index) => <Count key={index} {...item} />)}
        </Box>
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
