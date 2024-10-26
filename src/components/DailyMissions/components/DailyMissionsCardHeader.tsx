import { Box } from "src/components/Box/Box";
import { Icon, IconName } from "src/components/Icon/Icon";
import { Text } from "src/components/Text/Text";

interface DailyMissionsCardHeaderProps {
  text: string;
  iconName: IconName;
}

export const DailyMissionsCardHeader = ({
  iconName,
  text,
}: DailyMissionsCardHeaderProps) => (
  <Box flexDirection="row" alignItems="center" columnGap="s8">
    <Icon name={iconName} size={"s18"} color="background" strokeWidth={2.5} />
    <Text preset={"paragraphsBig"} color="background" weight="medium">
      {text}
    </Text>
  </Box>
);
