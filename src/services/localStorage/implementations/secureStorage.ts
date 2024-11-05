import * as SecureStore from "expo-secure-store";

import { LocalStorage } from "../localStorage";

export const secureStorage: LocalStorage = {
  getItem: async (key) => {
    const result = await SecureStore.getItemAsync(key);
    return result ? JSON.parse(result) : null;
  },
  setItem: async (key, data) => {
    await SecureStore.setItemAsync(key, JSON.stringify(data));
  },
  removeItem: async (key) => {
    await SecureStore.deleteItemAsync(key);
  },
};
