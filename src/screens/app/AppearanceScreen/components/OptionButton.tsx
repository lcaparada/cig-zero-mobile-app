import { Text, RadioButton, TouchableOpacityBox, Box } from "@components";

import { ThemePreference } from "@services";

export interface IOptionButton {
  label: string;
  description: string;
  onPress: () => void;
  value: ThemePreference;
  isSelected: boolean;
  isLastIndex: boolean;
}

export const OptionButton = ({
  label,
  onPress,
  isSelected,
  description,
  isLastIndex,
}: IOptionButton) => {
  return (
    <TouchableOpacityBox
      paddingVertical={"s16"}
      borderBottomWidth={isLastIndex ? 0 : 1}
      onPress={onPress}
      borderColor={"dividerColor"}
    >
      <Box
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text
          weight="medium"
          preset="paragraphsLarge"
          color={"backgroundConstrast"}
        >
          {label}
        </Text>
        <RadioButton isSelected={isSelected} />
      </Box>
      <Box>
        {isSelected && (
          <Text preset="paragraphsBig" color={"backgroundSecondConstrast"}>
            {description}
          </Text>
        )}
      </Box>
    </TouchableOpacityBox>
  );
};
