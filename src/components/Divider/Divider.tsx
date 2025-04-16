import { Box, BoxProps } from "../Box/Box";

export const Divider = ({ ...boxProps }: BoxProps) => {
  return (
    <Box
      testID="divider"
      height={2}
      backgroundColor={"dividerColor"}
      {...boxProps}
    />
  );
};
