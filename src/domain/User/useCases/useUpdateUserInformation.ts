import { useMutation } from "@tanstack/react-query";

import { useAuth, useToastService } from "@services";

import { userService } from "../userService";
import { UpdateUserInformation } from "../userTypes";

export const useUpdateUserInformation = () => {
  const { updateUserInformation } = useAuth();
  const { showToast } = useToastService();

  const { isPending, mutateAsync } = useMutation<
    UpdateUserInformation.Result,
    Error,
    UpdateUserInformation.Params
  >({
    mutationFn: (params) => userService.updateUserInformation(params),
    onSuccess: (params) => updateUserInformation(params),
  });

  const handleUpdateUserInformation = async (
    params: UpdateUserInformation.Params
  ) => {
    try {
      await mutateAsync(params);
    } catch (error: any) {
      showToast({ message: error.message, duration: 5000, type: "error" });
    }
  };

  return {
    isPending,
    handleUpdateUserInformation,
  };
};
