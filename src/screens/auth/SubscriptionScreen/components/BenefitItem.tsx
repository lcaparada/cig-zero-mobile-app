import { Box } from "src/components/Box/Box";
import { Icon, IconName } from "src/components/Icon/Icon";
import { Text } from "src/components/Text/Text";

type BenefitItemProps = {
  text: string;
  iconName: IconName;
};

export const BenefitItem = ({ text, iconName }: BenefitItemProps) => {
  return (
    <Box columnGap={"s8"} flexDirection={"row"} alignItems={"center"}>
      <Icon name={iconName} strokeWidth={2.5} size={"s16"} color="primary" />
      <Text
        weight="medium"
        numberOfLines={1}
        preset="paragraphs"
        color="backgroundSecondConstrast"
        style={{ flexWrap: "wrap", flexShrink: 1 }}
      >
        {text}
      </Text>
    </Box>
  );
};
