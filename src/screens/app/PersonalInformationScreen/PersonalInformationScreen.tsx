import { Avatar, Box, FormTextInput, Screen, TextInput } from "@components";

import { usePersonalInformation } from "./usePersonalInformation";

export const PersonalInformationScreen = () => {
  const { control } = usePersonalInformation();

  return (
    <Screen
      canGoBack
      screenTitle="Informações Pessoais"
      button={{ action: () => {}, text: "Salvar" }}
    >
      <Box alignItems={"center"}>
        <Avatar size={120} name="Lucas" borderWidth={4} textSize="display2XL" />
      </Box>
      <FormTextInput
        name="name"
        control={control}
        boxProps={{ mt: "s30" }}
        icon="user"
        label="Nome"
        placeholder="Digite o seu nome"
      />
      <Box flexDirection={"row"} mt={"s20"} columnGap={"s20"}>
        <TextInput
          boxProps={{ flex: 1 }}
          icon="user"
          label="Idade"
          editable={false}
          placeholder="Digite a idade"
        />
        <TextInput
          boxProps={{ flex: 1 }}
          icon="user"
          label="Gênero"
          editable={false}
          placeholder="Digite o gênero"
        />
      </Box>
    </Screen>
  );
};
