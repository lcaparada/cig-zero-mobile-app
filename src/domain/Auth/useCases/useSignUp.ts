import { useMutation } from "@tanstack/react-query";

import { useToastService } from "../../../services/toast/useToastService";
import { SignUp } from "../authTypes";
import { authService } from "../authService";

export const useSignUp = () => {
  const { showToast } = useToastService();

  const { mutateAsync, isPending } = useMutation<unknown, Error, SignUp>({
    mutationFn: (variables) => authService.signUp(variables),
  });

  const handleSignUp = async (params: SignUp) => {
    try {
      await mutateAsync(params);
    } catch (error: any) {
      if (error.code === "user_already_exists") {
        showToast({
          duration: 5000,
          type: "error",
          message: "Usuário já existe!",
        });
        return;
      }
      console.log(error);
    }
  };

  return { handleSignUp, isPending };
};
