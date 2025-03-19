import { Easing, FadeIn } from "react-native-reanimated";

import { AnimatedBoxRNR } from "../Box/Box";
import { NumericKeyboard } from "../NumericKeyboard/NumericKeyboard";
import { Text } from "../Text/Text";

import { AmountInput, PriceInput } from "./components";

export interface NumericInputProps {
  title: string;
  isPrice?: boolean;
  fieldValue: string;
  valueDescription?: string;
  onChange: (text: string) => void;
}

export const NumericInput = ({
  title,
  isPrice,
  onChange,
  fieldValue,
  valueDescription,
}: NumericInputProps) => {
  const handlePress = (num: number) => {
    if (fieldValue.length < (isPrice ? 4 : 2)) {
      onChange(fieldValue + num.toString());
    }
  };

  function erase() {
    onChange(fieldValue.slice(0, -1));
  }

  return (
    <AnimatedBoxRNR
      entering={FadeIn.delay(100)
        .duration(500)
        .easing(Easing.inOut(Easing.ease))}
    >
      <Text
        weight="semiBold"
        preset="titleSmall"
        color="backgroundConstrast"
        textAlign="center"
      >
        {title}
      </Text>
      {isPrice ? (
        <PriceInput fieldValue={fieldValue} erase={erase} />
      ) : (
        <AmountInput fieldValue={fieldValue} erase={erase} />
      )}
      {!!valueDescription && (
        <Text
          weight="semiBold"
          preset="titleSmall"
          color="backgroundConstrast"
          textAlign="center"
          mt="s24"
        >
          {valueDescription}
        </Text>
      )}

      <NumericKeyboard onPress={handlePress} />
    </AnimatedBoxRNR>
  );
};
