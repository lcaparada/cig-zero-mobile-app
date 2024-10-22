import { supabase } from "@api";

import { SignInAnonymously } from "./authTypes";

const signInAnonymously = async (
  data: SignInAnonymously.Params
): Promise<SignInAnonymously.Result> => {
  const { error } = await supabase.auth.signInAnonymously({
    options: { data },
  });
  if (error) throw error;
};

export const authService = {
  signInAnonymously,
};
