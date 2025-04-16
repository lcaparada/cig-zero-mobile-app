import { supabase, supabaseEdgeFunction } from "@api";

import { secureStorage } from "../../services/localStorage/implementations/secureStorage";

import {
  CheckUserAccount,
  SendResetPassword,
  SignIn,
  SignInWithProvider,
  SignUp,
} from "./authTypes";

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

const signUp = async (params: SignUp) => {
  const { error } = await supabase.auth.signUp(params);
  if (error) throw error;
};

const signIn = async ({ email, password }: SignIn) => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
};

const sendResetPassword = async ({ email }: SendResetPassword) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "https://www.cigzero.app/auth/recovery-password",
  });
  if (error) throw error;
};

const deleteAccount = async () => {
  try {
    await supabaseEdgeFunction.post("delete-user-account");
  } catch (error) {
    throw error;
  }
};

export const authService = {
  signIn,
  signUp,
  signOut,
  deleteAccount,
  checkUserAccount,
  sendResetPassword,
  signInWithProvider,
};
