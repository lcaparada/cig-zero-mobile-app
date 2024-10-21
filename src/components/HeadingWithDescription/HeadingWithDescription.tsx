import { Box } from "../Box/Box";
import { Text } from "../Text/Text";

interface TitleAndDescriptionProps {
  title: string;
  description: string;
}

export const HeadingWithDescription = ({
  title,
  description,
}: TitleAndDescriptionProps) => {
  return (
    <Box>
      <Text
        preset="paragraphsXL"
        weight="semiBold"
        color={"backgroundConstrast"}
      >
        {title}
      </Text>
      <Text
        preset="paragraphsBig"
        weight="medium"
        color={"backgroundSecondConstrast"}
      >
        {description}
      </Text>
    </Box>
  );
};
