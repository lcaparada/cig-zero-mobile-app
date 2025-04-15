import { Box, BoxProps, Icon, Screen, Text, TextInput } from "@components";

import { useAuth } from "@services";

export const AccountDetailsScreen = () => {
  const { session } = useAuth();

  const provider = session?.user.app_metadata.provider;

  return (
    <Screen canGoBack scrollable screenTitle="Detalhes da conta">
      <Box rowGap={"s20"}>
        <TextInput label="Email" editable={false} value={session?.user.email} />
      </Box>
      <Box {...$card} {...shadow}>
        <Text
          weight="semiBold"
          color={"backgroundConstrast"}
          preset="paragraphsBig"
        >
          Acessado com
        </Text>
        <Icon
          name={
            provider === "email"
              ? "email"
              : provider === "google"
                ? "google2"
                : "apple2"
          }
          size="s22"
        />
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

  elevation: 4,
};
