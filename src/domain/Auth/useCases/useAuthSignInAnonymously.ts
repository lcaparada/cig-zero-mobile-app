import { useMutation } from "@tanstack/react-query";

import { authService } from "../authService";
import { SignInAnonymously } from "../authTypes";

export const useAuthSignInAnonymously = () => {
  const { mutateAsync, isPending } = useMutation<
    unknown,
    Error,
    SignInAnonymously.Params
  >({
    mutationFn: (params) => authService.signInAnonymously(params),
  });

  const handleSignInAnonymously = async (params: SignInAnonymously.Params) => {
    try {
      await mutateAsync(params);
    } catch (error: any) {
      console.error(error);
    }
  };

  return { handleSignInAnonymously, isPending };
};
