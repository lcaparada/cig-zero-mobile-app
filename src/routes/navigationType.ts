import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AppStackParamList } from "./AppStack";
import { AppTabBottomTabParamList } from "./AppTabNavigator";
import { AuthStackParamList } from "./AuthStack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList {}
  }
}

export type AuthScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

export type AppScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

export type AppTabScreenProps<T extends keyof AppTabBottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<AppTabBottomTabParamList, T>,
    NativeStackScreenProps<AppStackParamList, "AppTabNavigator">
  >;
