import { supabase } from "@api";

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

export const authService = {
  signInAnonymously,
};
