import { shadow } from "@theme";

import { Box, BoxProps } from "../Box/Box";
import { Icon, IconName } from "../Icon/Icon";
import { Text, TextVariants } from "../Text/Text";

export interface InformationCardProps {
  icon: IconName;
  number: string | number;
  label: string;
}

export const InformationCard = ({
  icon,
  label,
  number,
}: InformationCardProps) => {
  const getFontPresent = (length: number): TextVariants => {
    switch (length) {
      case 9:
        return "notesSmall";
      case 8:
        return "notes";
      case 7:
        return "paragraphs";
      case 6:
        return "paragraphsBig";
      default:
        return "default";
    }
  };
  return (
    <Box {...$boxWrapper} {...shadow}>
      <Icon name={icon} color="buttonConstrast" size="s20" strokeWidth={2} />
      <Box flex={1} alignItems={"center"} justifyContent={"center"}>
        <Text
          weight="semiBold"
          numberOfLines={1}
          color="buttonConstrast"
          preset={getFontPresent(number?.toString()?.length)}
        >
          {number}
        </Text>
      </Box>
      <Text
        preset="notes"
        textAlign={"center"}
        weight="medium"
        color="buttonConstrast"
        numberOfLines={2}
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
  paddingHorizontal: "s10",
  paddingVertical: "s10",
  rowGap: "s4",
};
