import { Text } from "src/components/Text/Text";

export const DailyMissionsCardDescription = ({
  description,
}: {
  description: string;
}) => (
  <Text preset="paragraphsBig" weight="medium" color="background">
    {description}
  </Text>
);
