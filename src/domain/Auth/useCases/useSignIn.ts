import { authService } from "./../authService";
import { useMutation } from "@tanstack/react-query";

import { useToastService } from "../../../services/toast/useToastService";
import { SignIn } from "../authTypes";

export const useSignIn = () => {
  const { showToast } = useToastService();

  const { mutateAsync, isPending } = useMutation<unknown, Error, SignIn>({
    mutationFn: (variables) => authService.signIn(variables),
  });

  const handleSignIn = async (params: SignIn) => {
    try {
      await mutateAsync(params);
    } catch (error: any) {
      if (error.message === "Invalid login credentials") {
        showToast({
          message: "Credenciais de login inválidas",
          duration: 5000,
          type: "error",
        });
        return;
      }
      throw error;
    }
  };

  return { handleSignIn, isPending };
};
