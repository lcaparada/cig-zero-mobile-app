import { Text } from "src/components/Text/Text";

export const MissionsCardDescription = ({
  description,
}: {
  description: string;
}) => (
  <Text preset="paragraphsBig" weight="medium" color="buttonConstrast">
    {description}
  </Text>
);
