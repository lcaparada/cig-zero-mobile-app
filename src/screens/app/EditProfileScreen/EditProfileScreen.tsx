import {
  Box,
  Text,
  Screen,
  Avatar,
  RadioButton,
  FormTextInput,
  TouchableOpacityBox,
} from "@components";

import { VisibilityStatus } from "@domain";

import { useEditProfileScreen } from "./useEditProfileScreen";

interface OptionButtonProps {
  value: VisibilityStatus;
  label: string;
  description: string;
  isSelected: boolean;
  onPress: () => void;
}

const optionButtons: Pick<
  OptionButtonProps,
  "value" | "label" | "description"
>[] = [
  {
    value: "ONLY_ME",
    label: "Somente eu",
    description: "Visível apenas para você",
  },
  {
    value: "ONLY_FRIENDS",
    label: "Meus amigos",
    description: "Visível apenas para você e seus amigos",
  },
  {
    value: "ALL",
    label: "Todos",
    description: "Visível ao público",
  },
];

export const EditProfileScreen = () => {
  const {
    control,
    canSave,
    isUpdating,
    userMetaData,
    updateProfile,
    profileVisibility,
    setProfileVisibility,
  } = useEditProfileScreen();

  return (
    <Screen
      screenTitle="Editar Perfil"
      canGoBack
      scrollViewPaddingBottom={160}
      scrollable
      button={{
        text: "Salvar",
        action: updateProfile,
        disabled: !canSave || isUpdating,
      }}
    >
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
        <FormTextInput
          control={control}
          name="location"
          label="Local"
          placeholder="Sua cidade"
        />
        <FormTextInput
          label="Sobre mim"
          height={120}
          control={control}
          name="bio"
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
            <OptionButton
              key={ind}
              {...opt}
              onPress={() => setProfileVisibility(opt.value)}
              isSelected={profileVisibility === opt.value}
            />
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
  onPress,
}: OptionButtonProps) => {
  return (
    <TouchableOpacityBox
      flexDirection={"row"}
      alignItems={"center"}
      columnGap={"s12"}
      onPress={onPress}
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
