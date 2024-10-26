import { Text } from "src/components/Text/Text";

interface DailyMissionsCardBadgeProps {
  number: number;
}

export const DailyMissionCardBadge = ({
  number,
}: DailyMissionsCardBadgeProps) => {
  return (
    <Text preset="displayExtra" weight="semiBold" color="background">
      {number}.
    </Text>
  );
};
