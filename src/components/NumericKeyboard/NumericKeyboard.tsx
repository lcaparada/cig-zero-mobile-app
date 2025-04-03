import * as Haptics from "expo-haptics";

import { Box, BoxProps, TouchableOpacityBox } from "../Box/Box";
import { Text } from "../Text/Text";

const keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

interface NumericKeyboardProps {
  onPress: (value: number) => void;
}

export const NumericKeyboard = ({ onPress }: NumericKeyboardProps) => {
  return (
    <Box rowGap="s24" mt="s56">
      <KeyRow keys={keys.slice(0, 5)} onPress={onPress} />
      <KeyRow keys={keys.slice(-5)} onPress={onPress} />
    </Box>
  );
};

const KeyRow = ({
  keys,
  onPress,
}: {
  keys: number[];
  onPress: (value: number) => void;
}) => (
  <Box
    flexDirection="row"
    alignItems="center"
    justifyContent="center"
    columnGap="s24"
  >
    {keys.map((key) => (
      <TouchableOpacityBox
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          onPress(key);
        }}
        key={key}
        {...$keyBox}
        {...$buttonShadow}
      >
        <Text weight="medium" preset="titleSmall" color="neutralLighest">
          {key}
        </Text>
      </TouchableOpacityBox>
    ))}
  </Box>
);

const $buttonShadow: BoxProps = {
  shadowColor: "buttonShadow",
  shadowOffset: { width: 0, height: 5 },
  shadowOpacity: 1,
  shadowRadius: 0,
  elevation: 5,
};

const $keyBox: BoxProps = {
  height: 50,
  width: 40,
  backgroundColor: "primary",
  borderRadius: "s12",
  alignItems: "center",
  justifyContent: "center",
};
