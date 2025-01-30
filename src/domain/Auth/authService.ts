import { supabase, supabaseEdgeFunction } from "@api";

import { secureStorage } from "../../services/localStorage/implementations/secureStorage";

import { CheckUserAccount, SignInWithProvider } from "./authTypes";

const signInWithProvider = async ({
  idToken,
  provider,
}: SignInWithProvider.Params): Promise<SignInWithProvider.Result> => {
  try {
    const { error, data } = await supabase.auth.signInWithIdToken({
      provider,
      token: idToken,
    });
    if (error) throw error;
    return data;
  } catch (error) {
    throw error;
  }
};

const checkUserAccount = async (
  params: CheckUserAccount.Params
): Promise<CheckUserAccount.Result> => {
  try {
    const { error, data: existingUser } = await supabase
      .from("users")
      .select("*")
      .eq("email", params.email)
      .single();
    if (error && error.code !== "PGRST116") {
      throw error;
    }

    if (existingUser) {
      return true;
    }

    return false;
  } catch (error) {
    throw error;
  }
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
  checkUserAccount,
  signInWithProvider,
};
