import { AchievementProgressCardProps } from "../AchievementProgressCard/AchievementProgressCard";
import { Box } from "../Box/Box";
import { Count } from "../Count/Count";
import { Icon, IconName } from "../Icon/Icon";
import { Text } from "../Text/Text";

interface TitleAndDescriptionProps {
  title: string;
  data?: AchievementProgressCardProps["data"];
  description: string;
  button?: {
    onPress: () => void;
    iconName: IconName;
  };
}

export const HeadingWithDescription = ({
  data,
  title,
  button,
  description,
}: TitleAndDescriptionProps) => {
  return (
    <Box
      justifyContent={"space-between"}
      flexDirection={button ? "row" : "column"}
      alignItems={button ? "center" : "stretch"}
    >
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
            {!button &&
              !!data &&
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
      {button && !data && (
        <Icon
          size="s28"
          color="primary"
          strokeWidth={2}
          name={button.iconName}
          onPress={button.onPress}
        />
      )}
    </Box>
  );
};
