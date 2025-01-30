import { useMutation } from "@tanstack/react-query";

import { CheckUserAccount } from "../authTypes";

import { authService } from "./../authService";

export const useCheckUserAccount = () => {
  const { mutateAsync, isPending: isChecking } = useMutation<
    unknown,
    Error,
    CheckUserAccount.Params
  >({
    mutationFn: (variables) => authService.checkUserAccount(variables),
  });

  const handleCheckUserAccount = async (params: CheckUserAccount.Params) => {
    try {
      await mutateAsync(params);
    } catch (error) {
      throw error;
    }
  };

  return {
    isChecking,
    handleCheckUserAccount,
  };
};
