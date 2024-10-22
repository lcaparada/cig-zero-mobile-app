import { Box } from "../Box/Box";
import { Count } from "../Count/Count";
import { Text } from "../Text/Text";

interface TitleAndDescriptionProps {
  title: string;
  description: string;
  count?: {
    current: number;
    target: number;
  };
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
        {!!count && <Count current={count.current} target={count.target} />}
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
