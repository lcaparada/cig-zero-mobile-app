import { shadow } from "@theme";

import { Box, BoxProps } from "../Box/Box";
import { Icon, IconName } from "../Icon/Icon";
import { Text } from "../Text/Text";

export interface InformationCardProps {
  icon: IconName;
  number: string;
  label: string;
}

export const InformationCard = ({
  icon,
  label,
  number,
}: InformationCardProps) => {
  return (
    <Box {...$boxWrapper} {...shadow}>
      <Icon name={icon} color="neutralLighest" size="s20" strokeWidth={2} />
      <Text color="neutralLighest" weight="semiBold">
        {number}
      </Text>
      <Text
        preset="notes"
        textAlign={"center"}
        weight="medium"
        color="neutralLighest"
      >
        {label}
      </Text>
    </Box>
  );
};

const $boxWrapper: BoxProps = {
  backgroundColor: "primary",
  width: 78,
  height: 103,
  alignItems: "center",
  borderRadius: "s16",
  paddingVertical: "s10",
  rowGap: "s4",
};
