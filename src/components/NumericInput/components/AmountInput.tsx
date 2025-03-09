import { Box } from "src/components/Box/Box";

import { DigitBox } from "./DigitBox";
import { Erase } from "./Erase";

interface AmountInputProps {
  erase(): void;
  fieldValue: string;
}

export const AmountInput = ({ erase, fieldValue }: AmountInputProps) => {
  return (
    <Box
      mt="s24"
      columnGap="s12"
      alignItems="center"
      flexDirection="row"
      justifyContent="center"
    >
      <DigitBox value={fieldValue[0] || ""} />
      <DigitBox value={fieldValue[1] || ""} />
      <Erase onPress={erase} />
    </Box>
  );
};
