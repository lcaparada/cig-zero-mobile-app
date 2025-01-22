import { Screen } from "@components";

import { useAppColor } from "@services";

import { IOptionButton, OptionButton } from "./components";

export const AppearanceScreen = () => {
  const { appTheme, setAppColor } = useAppColor();

  const options: Pick<
    IOptionButton,
    "isSelected" | "label" | "description" | "value"
  >[] = [
    {
      label: "Ativado",
      value: "dark",
      isSelected: appTheme === "dark",
      description: "A aparência do app ficará no modo escuro",
    },
    {
      label: "Desativado",
      value: "light",
      isSelected: appTheme === "light",
      description: "A aparência do app ficará no modo claro",
    },
  ];

  return (
    <Screen screenTitle="Modo Escuro" canGoBack scrollable>
      {options.map((opt, index) => (
        <OptionButton
          {...opt}
          key={index}
          onPress={() => setAppColor(opt.value)}
          isLastIndex={options.length - 1 === index}
        />
      ))}
    </Screen>
  );
};
