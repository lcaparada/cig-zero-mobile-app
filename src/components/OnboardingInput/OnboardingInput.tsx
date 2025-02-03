import { Easing, FadeIn } from "react-native-reanimated";

import {
  AnimatedBoxRNR,
  Box,
  BoxProps,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from "../Box/Box";
import { RadioButton } from "../RadioButton/RadioButton";
import { Text } from "../Text/Text";

import { OnboardingInputItemData } from "./onboardingTypes";

export interface OnboardingInputProps {
  title: string;
  fieldValue: string;
  items: OnboardingInputItemData[];
  onChange: (text: string) => void;
}

export const OnboardingInput = ({
  title,
  items,
  fieldValue,
  onChange,
}: OnboardingInputProps) => {
  const setBorderAppearance = (
    index: number,
    length: number
  ): TouchableOpacityBoxProps => {
    let nextItemIsSelected = false;
    let previousItemIsSelected = false;

    if (index < length - 1) {
      nextItemIsSelected = items[index + 1].value === fieldValue;
    }

    if (index > 0) {
      previousItemIsSelected = items[index - 1].value === fieldValue;
    }

    const isSelected = items[index].value === fieldValue;

    return {
      borderTopLeftRadius: index === 0 ? "s16" : "s0",
      borderTopRightRadius: index === 0 ? "s16" : "s0",
      borderBottomLeftRadius: index === length - 1 ? "s16" : "s0",
      borderBottomRightRadius: index === length - 1 ? "s16" : "s0",
      borderTopWidth: index === 0 ? 2 : 1,
      borderBottomWidth: index === length - 1 ? 2 : 1,
      borderColor: isSelected ? "primary" : "backgroundSecondConstrast",
      borderBottomColor:
        nextItemIsSelected || isSelected
          ? "primary"
          : "backgroundSecondConstrast",
      borderTopColor:
        previousItemIsSelected || isSelected
          ? "primary"
          : "backgroundSecondConstrast",
    };
  };

  const renderItems = () => (
    <Box>
      {items.map(({ emoji, text, value }, index) => {
        const isSelected = fieldValue === value;

        return (
          <TouchableOpacityBox
            {...setBorderAppearance(index, items.length)}
            {...$boxWrapper}
            key={text}
            backgroundColor={
              isSelected ? "bluePrimaryWith25PercentOpacity" : "background"
            }
            onPress={() => {
              onChange(value);
            }}
          >
            {!!emoji ? (
              <Text>{emoji}</Text>
            ) : (
              <RadioButton isSelected={isSelected} />
            )}

            <Text
              weight="medium"
              color={isSelected ? "primary" : "backgroundConstrast"}
            >
              {text}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );

  return (
    <AnimatedBoxRNR
      entering={FadeIn.delay(100)
        .duration(500)
        .easing(Easing.inOut(Easing.ease))}
    >
      <Box rowGap={"s30"}>
        <Text
          weight="semiBold"
          preset="titleSmall"
          color={"backgroundConstrast"}
          textAlign={"center"}
        >
          {title}
        </Text>
        {renderItems()}
      </Box>
    </AnimatedBoxRNR>
  );
};

const $boxWrapper: BoxProps = {
  padding: "s16",
  borderLeftWidth: 2,
  borderRightWidth: 2,
  columnGap: "s16",
  flexDirection: "row",
  alignItems: "center",
};
