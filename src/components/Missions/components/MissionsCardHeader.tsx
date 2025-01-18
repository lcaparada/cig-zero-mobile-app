import { Box } from "src/components/Box/Box";
import { Icon, IconName } from "src/components/Icon/Icon";
import { Text } from "src/components/Text/Text";

interface MissionsCardHeaderProps {
  text: string;
  iconName: IconName;
}

export const MissionsCardHeader = ({
  iconName,
  text,
}: MissionsCardHeaderProps) => (
  <Box
    flexDirection="row"
    alignItems="center"
    columnGap={iconName === "dollarSign" ? "s4" : "s8"}
  >
    <Icon
      name={iconName}
      size={"s18"}
      color="buttonConstrast"
      strokeWidth={2.5}
    />
    <Box flex={1}>
      <Text preset={"default"} color="buttonConstrast" weight="medium">
        {text}
      </Text>
    </Box>
  </Box>
);
