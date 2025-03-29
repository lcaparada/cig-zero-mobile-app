import { Box, Icon, Text } from "@components";

export const PrivateProfileMessage = () => (
  <Box height="100%" rowGap="s8" alignItems="center" justifyContent="center">
    <Text
      weight="semiBold"
      preset="paragraphsXL"
      textAlign="center"
      color="primary"
    >
      O perfil desse usuario é privado!
    </Text>
    <Icon name="lock" size="s32" />
  </Box>
);
