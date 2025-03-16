import { Box, Screen, Text, TextInput } from "@components";

import { PastSmokingData } from "./types";
import { usePastSmokingDataScreen } from "./usePastSmokingDataScreen";
import { swapDotComma } from "./utils";

export const PastSmokingDataScreen = () => {
  const {
    canSave,
    pastSmokingDataState,
    updateUserMetadata,
    isUpdatingUserMetada,
    updateState,
  } = usePastSmokingDataScreen();

  const pastSmokingData: PastSmokingData[] = [
    {
      icon: "clock2",
      label: "Anos fumando",
      value: pastSmokingDataState.howManyYearsSmoke,
      keyboardTypeOptions: "number-pad",
      onChange: (text) => updateState("howManyYearsSmoke", text),
    },
    {
      icon: "cigarette",
      label: "Cigarros por dia",
      value: pastSmokingDataState.howManyCigarettesPerDay,
      keyboardTypeOptions: "number-pad",
      onChange: (text) => updateState("howManyCigarettesPerDay", text),
    },
    {
      icon: "packOfCigarette",
      label: "Preço do maço",
      value: swapDotComma(pastSmokingDataState.pricePackCigarrete),
      rightComponent: (
        <Text weight="medium" color={"backgroundConstrast"}>
          Reais
        </Text>
      ),
      keyboardTypeOptions: "numeric",
      onChange: (text) => updateState("pricePackCigarrete", swapDotComma(text)),
    },
  ];

  return (
    <Screen
      canGoBack
      scrollable
      button={{
        text: "Salvar",
        action: updateUserMetadata,
        disabled: !canSave || isUpdatingUserMetada,
      }}
      screenTitle="Dados de Fumo Passado"
    >
      <Box rowGap={"s10"}>
        {pastSmokingData.map((data, index) => (
          <TextInput
            keyboardType={data.keyboardTypeOptions}
            key={index}
            label={data.label}
            onChangeText={data.onChange}
            icon={data.icon}
            value={data.value}
            rightComponent={data.rightComponent}
          />
        ))}
      </Box>
    </Screen>
  );
};
