import { useMutation } from "@tanstack/react-query";

import { useAuth } from "@services";

import { userService } from "../userService";
import { UpdateUserMetadata } from "../userTypes";

export const useUpdateUserMetadata = () => {
  const { updateUserMetadata } = useAuth();

  const { isPending, mutateAsync } = useMutation<
    UpdateUserMetadata.Result,
    Error,
    UpdateUserMetadata.Params
  >({
    mutationFn: (params) => userService.updateUserMetadata(params),
    onSuccess: (params) => updateUserMetadata(params),
  });

  return {
    isUpdatingUserMetada: isPending,
    handleUpdateUserMetadata: mutateAsync,
  };
};
