import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AuthStackParamList } from "./AuthStack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList {}
  }
}

export type AuthScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;
