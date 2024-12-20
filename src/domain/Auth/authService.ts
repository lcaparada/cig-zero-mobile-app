import { supabase, supabaseEdgeFunction } from "@api";

import { secureStorage } from "../../services/localStorage/implementations/secureStorage";

import { SignInAnonymously } from "./authTypes";

const signInAnonymously = async (
  params: SignInAnonymously.Params
): Promise<SignInAnonymously.Result> => {
  const { error, data } = await supabase.auth.signInAnonymously({
    options: { data: params },
  });
  if (error) throw error;
  return data;
};

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
  try {
    await secureStorage.removeItem("supabase.auth.token");
  } catch (error) {
    throw error;
  }
};

const deleteAccount = async () => {
  try {
    await supabaseEdgeFunction.post("delete-user-account");
  } catch (error) {
    throw error;
  }
};

export const authService = {
  signOut,
  deleteAccount,
  signInAnonymously,
};
