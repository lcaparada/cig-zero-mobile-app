import * as Haptics from "expo-haptics";

import { Screen } from "@components";

import { useSettings } from "@services";

import { IOptionButton, OptionButton } from "./components";

export const AppearanceScreen = () => {
  const { appearancePreference, setAppColor } = useSettings();

  const options: Pick<
    IOptionButton,
    "isSelected" | "label" | "description" | "value"
  >[] = [
    {
      label: "Ativado",
      value: "dark",
      isSelected: appearancePreference === "dark",
      description: "A aparência do app ficará no modo escuro",
    },
    {
      label: "Desativado",
      value: "light",
      isSelected: appearancePreference === "light",
      description: "A aparência do app ficará no modo claro",
    },
    {
      label: "Padrão do sistema",
      value: "system",
      isSelected: appearancePreference === "system",
      description:
        "A aparência será a mesma que você configurou no seu dispostivo",
    },
  ];

  return (
    <Screen screenTitle="Modo Escuro" canGoBack scrollable>
      {options.map((opt, index) => (
        <OptionButton
          {...opt}
          key={index}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            setAppColor(opt.value);
          }}
          isLastIndex={options.length - 1 === index}
        />
      ))}
    </Screen>
  );
};
