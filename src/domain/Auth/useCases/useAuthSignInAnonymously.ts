import { AuthResponse } from "@supabase/supabase-js";
import { useMutation } from "@tanstack/react-query";

import { authService } from "../authService";
import { SignInAnonymously } from "../authTypes";

export const useAuthSignInAnonymously = () => {
  const { mutateAsync, isPending } = useMutation<
    AuthResponse["data"],
    Error,
    SignInAnonymously.Params
  >({
    mutationFn: (params) => authService.signInAnonymously(params),
  });

  const handleSignInAnonymously = async (params: SignInAnonymously.Params) => {
    try {
      const result = await mutateAsync(params);
      return result;
    } catch (error: any) {
      console.error(error);
      throw error;
    }
  };

  return { handleSignInAnonymously, isPending };
};
