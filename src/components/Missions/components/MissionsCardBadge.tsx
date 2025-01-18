import { Text } from "src/components/Text/Text";

interface MissionsCardBadgeProps {
  number: number;
}

export const MissionCardBadge = ({ number }: MissionsCardBadgeProps) => {
  return (
    <Text preset="displayExtra" weight="semiBold" color="buttonConstrast">
      {number}.
    </Text>
  );
};
