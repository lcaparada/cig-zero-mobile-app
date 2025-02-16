import {
  Avatar,
  Box,
  RadioButton,
  Screen,
  Text,
  TextInput,
  TouchableOpacityBox,
} from "@components";

import { useAuth, UserMetaData } from "@services";

interface OptionButtonProps {
  value: string;
  label: string;
  description: string;
  isSelected: boolean;
}

const optionButtons: OptionButtonProps[] = [
  {
    value: "ONLY_ME",
    label: "Somente eu",
    description: "Visível apenas para você",
    isSelected: true,
  },
  {
    value: "ONLY_FRIENDS",
    label: "Meus amigos",
    description: "Visível apenas para você e seus amigos",
    isSelected: false,
  },
  {
    value: "ALL",
    label: "Todos",
    description: "Visível ao público",
    isSelected: false,
  },
];

export const EditProfileScreen = () => {
  const { session } = useAuth();

  const userMetaData = session?.user.user_metadata as UserMetaData;

  return (
    <Screen screenTitle="Editar Perfil" canGoBack scrollable>
      <Box alignItems={"center"} rowGap={"s12"}>
        <Avatar
          name={userMetaData.full_name}
          size={80}
          borderRadius="full"
          photo={userMetaData.avatar_url}
        />
        <Text
          weight="medium"
          color={"backgroundConstrast"}
          preset="paragraphsXL"
        >
          {userMetaData.name}
        </Text>
      </Box>
      <Box marginTop={"s20"} rowGap={"s20"}>
        <TextInput label="Local" value="" placeholder="Sua cidade" />
        <TextInput
          label="Sobre mim"
          height={120}
          multiline
          placeholder="Conte um pouco sobre você"
        />
      </Box>
      <Box marginTop={"s20"} paddingLeft={"s16"}>
        <Text
          preset="paragraphsLarge"
          color={"backgroundConstrast"}
          weight="medium"
        >
          Visibilidade do seu perfil
        </Text>
        <Text color={"backgroundSecondConstrast"} preset="paragraphs">
          Quem pode ver o seu progresso no perfil?
        </Text>
        <Box marginTop={"s12"} rowGap={"s12"}>
          {optionButtons.map((opt, ind) => (
            <OptionButton key={ind} {...opt} />
          ))}
        </Box>
      </Box>
    </Screen>
  );
};

const OptionButton = ({
  label,
  description,
  isSelected,
}: OptionButtonProps) => {
  return (
    <TouchableOpacityBox
      flexDirection={"row"}
      alignItems={"center"}
      columnGap={"s12"}
    >
      <RadioButton isSelected={isSelected} />
      <Box>
        <Text preset="paragraphsBig" color={"backgroundConstrast"}>
          {label}
        </Text>
        <Text preset="paragraphsBig" color={"backgroundSecondConstrast"}>
          {description}
        </Text>
      </Box>
    </TouchableOpacityBox>
  );
};
