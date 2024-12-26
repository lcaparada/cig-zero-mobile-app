import { Box, Icon, TouchableOpacityBox } from "@components";

interface DirectionControlsProps {
  onUpPress: () => void;
  onDownPress: () => void;
}

export const DirectionControls = ({
  onUpPress,
  onDownPress,
}: DirectionControlsProps) => {
  return (
    <Box alignItems={"center"} rowGap={"s20"}>
      <DirectionIndicator />
      <Box rowGap={"s16"}>
        <DirectionButton
          iconName="arrowUp"
          onPress={onUpPress}
          label="Increase value" // Descrição acessível
        />
        <DirectionButton
          iconName="arrowDown"
          onPress={onDownPress}
          label="Decrease value" // Descrição acessível
        />
      </Box>
    </Box>
  );
};

const DirectionButton = ({
  iconName,
  onPress,
  label,
}: {
  iconName: "arrowUp" | "arrowDown";
  onPress: () => void;
  label: string;
}) => (
  <TouchableOpacityBox
    width={45}
    height={45}
    alignItems={"center"}
    justifyContent={"center"}
    backgroundColor={"primary"}
    borderRadius={"s12"}
    onPress={onPress}
    accessibilityRole="button"
    accessibilityLabel={label}
    style={{ padding: 8 }}
  >
    <Icon name={iconName} color="background" strokeWidth={2} size="s24" />
  </TouchableOpacityBox>
);

const DirectionIndicator = () => {
  return (
    <Box rowGap={"s12"}>
      {Array.from({ length: 4 }).map((_, index) => (
        <Box
          key={index}
          width={12}
          height={12}
          borderRadius={"s12"}
          backgroundColor={"lightNeutralGray"}
        />
      ))}
    </Box>
  );
};
