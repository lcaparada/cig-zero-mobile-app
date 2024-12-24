import { Box, BoxProps } from "../Box/Box";
import { Icon } from "../Icon/Icon";

type CheckBoxProps = Pick<BoxProps, "borderColor"> & {
  isSelected: boolean;
};

export const Checkbox = ({
  isSelected,
  borderColor = "primary",
}: CheckBoxProps) => {
  return (
    <Box
      {...$boxWrapper}
      borderColor={borderColor}
      backgroundColor={isSelected ? "primary" : "background"}
    >
      {isSelected && (
        <Icon name="check" strokeWidth={2} size="s20" color="neutralLighest" />
      )}
    </Box>
  );
};

const $boxWrapper: BoxProps = {
  width: 30,
  height: 30,
  borderWidth: 2,
  borderRadius: "s10",
  alignItems: "center",
  justifyContent: "center",
};
