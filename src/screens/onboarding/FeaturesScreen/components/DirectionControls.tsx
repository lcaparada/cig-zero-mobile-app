import * as Haptics from "expo-haptics";

import { Box, BoxProps, Icon, TouchableOpacityBox } from "@components";

interface DirectionControlsProps {
  length: number;
  currentPage: number;
  onUpPress: () => void;
  onDownPress: () => void;
}

interface DirectionButtonProps {
  iconName: "arrowUp" | "arrowDown";
  disabled?: boolean;
  onPress: () => void;
}

export const DirectionControls = ({
  onUpPress,
  onDownPress,
  length,
  currentPage,
}: DirectionControlsProps) => {
  return (
    <Box alignItems={"center"} rowGap={"s20"} backgroundColor={"background"}>
      <DirectionIndicator length={length} currentPage={currentPage} />
      <Box rowGap={"s16"}>
        <DirectionButton
          iconName="arrowUp"
          onPress={onUpPress}
          disabled={currentPage === 0}
        />
        <DirectionButton
          iconName="arrowDown"
          onPress={onDownPress}
          disabled={currentPage === length - 1}
        />
      </Box>
    </Box>
  );
};

const DirectionButton = ({
  onPress,
  iconName,
  disabled = false,
}: DirectionButtonProps) => (
  <TouchableOpacityBox
    {...$directionButtonWrapper}
    onPress={() => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      onPress();
    }}
    disabled={disabled}
    backgroundColor={disabled ? "lightNeutralGray" : "primary"}
  >
    <Icon name={iconName} color="neutralLighest" strokeWidth={2} size="s24" />
  </TouchableOpacityBox>
);

const DirectionIndicator = ({
  currentPage,
  length,
}: {
  currentPage: number;
  length: number;
}) => {
  return (
    <Box rowGap={"s12"}>
      {Array.from({ length }).map((_, index) => (
        <Box
          key={index}
          width={12}
          height={12}
          borderRadius={"s12"}
          backgroundColor={
            currentPage === index ? "primary" : "lightNeutralGray"
          }
        />
      ))}
    </Box>
  );
};

const $directionButtonWrapper: BoxProps = {
  width: 45,
  height: 45,
  borderRadius: "s12",
  alignItems: "center",
  justifyContent: "center",
};
