import { Box } from "../Box/Box";

interface RadioButtonProps {
  isSelected: boolean;
}

export const RadioButton = ({ isSelected }: RadioButtonProps) => {
  return (
    <Box
      width={16}
      height={16}
      borderRadius={"s16"}
      borderColor={isSelected ? "primary" : "radioButtonBorder"}
      backgroundColor={isSelected ? "radioButtonBackground" : "background"}
      borderWidth={2}
    />
  );
};
