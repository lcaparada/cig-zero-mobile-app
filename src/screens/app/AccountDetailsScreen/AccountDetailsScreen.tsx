import { Box, BoxProps, Icon, Screen, Text, TextInput } from "@components";

export const AccountDetailsScreen = () => {
  return (
    <Screen canGoBack scrollable screenTitle="Detalhes da conta">
      <Box rowGap={"s20"}>
        <TextInput
          label="Nome de usuário"
          editable={false}
          value="LucasParada123"
        />
        <TextInput label="Email" editable={false} value="lcaparada@gmail.com" />
      </Box>
      <Box {...$card} {...shadow}>
        <Text
          weight="semiBold"
          color={"backgroundConstrast"}
          preset="paragraphsBig"
        >
          Acessado com
        </Text>
        <Icon name="google2" size="s22" />
      </Box>
    </Screen>
  );
};

const $card: BoxProps = {
  mt: "s20",
  backgroundColor: "cardProfileBackground",
  borderRadius: "s8",
  paddingHorizontal: "s12",
  paddingVertical: "s10",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
};

const shadow: BoxProps = {
  shadowColor: "cardProfileShadow",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 1,
  shadowRadius: 0,

  elevation: 5,
};
