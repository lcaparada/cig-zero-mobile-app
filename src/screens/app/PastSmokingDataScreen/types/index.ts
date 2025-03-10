import { KeyboardTypeOptions } from "react-native";

import { IconName } from "@components";

export interface PastSmokingData {
  icon: IconName;
  label: string;
  value: string;
  onChange: (text: string) => void;
  rightComponent?: JSX.Element;
  keyboardTypeOptions?: KeyboardTypeOptions;
}

export interface IPastSmokingDataState {
  howManyYearsSmoke: string;
  howManyCigarettesPerDay: string;
  pricePackCigarrete: string;
}
