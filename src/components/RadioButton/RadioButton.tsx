import { Box } from "../Box/Box";

interface RadioButtonProps {
  isSelected: boolean;
}

export const RadioButton = ({ isSelected }: RadioButtonProps) => {
  return (
    <Box
      width={18}
      height={18}
      borderRadius={"full"}
      borderColor={"primary"}
      borderWidth={2}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        width={10}
        height={10}
        borderRadius={"full"}
        backgroundColor={isSelected ? "radioButtonBackground" : "background"}
      />
    </Box>
  );
};
