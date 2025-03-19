import { Box } from "src/components/Box/Box";
import { Text } from "src/components/Text/Text";

import { DigitBox } from "./DigitBox";
import { Erase } from "./Erase";

interface PriceInputProps {
  fieldValue: string;
  erase(): void;
}

export const PriceInput = ({ fieldValue, erase }: PriceInputProps) => {
  return (
    <Box
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      columnGap="s12"
      mt="s24"
    >
      <Box position={"absolute"} left={20}>
        <Text weight="semiBold" preset="titleSmall" color="backgroundConstrast">
          R$
        </Text>
      </Box>

      <DigitBox value={fieldValue[0] || ""} />
      <DigitBox value={fieldValue[1] || ""} />
      <Text weight="semiBold" preset="titleSmall" color="backgroundConstrast">
        ,
      </Text>
      <DigitBox value={fieldValue[2] || ""} />
      <DigitBox value={fieldValue[3] || ""} />
      <Erase onPress={erase} right={15} />
    </Box>
  );
};
