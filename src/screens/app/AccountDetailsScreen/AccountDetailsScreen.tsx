import {
  Text,
  Box,
  Icon,
  Screen,
  BoxProps,
  IconName,
  TextInput,
} from "@components";

import { useAuth } from "@services";

type Providers = "email" | "google" | "apple";

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
          name={providers[(provider as Providers) ?? "google"]}
          size="s22"
        />
      </Box>
    </Screen>
  );
};

const providers: Record<Providers, IconName> = {
  email: "email",
  google: "google2",
  apple: "apple2",
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
