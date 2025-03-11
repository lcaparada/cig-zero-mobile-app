import { useMutation } from "@tanstack/react-query";

import { useAuth } from "@services";

import { userService } from "../userService";
import { UpdateLastTimeOpenedChat } from "../userTypes";

export const useUpdateLastTimeOpenedChat = () => {
  const { updateUserMetadata } = useAuth();

  const { isPending, mutateAsync } = useMutation<
    UpdateLastTimeOpenedChat.Result,
    Error,
    unknown
  >({
    mutationFn: () => userService.updateLastTimeOpenedChat(),
    onSuccess: (params) => updateUserMetadata(params),
  });

  return {
    isUpdatingUserMetada: isPending,
    handleUpdateLastTimeOpenedChat: mutateAsync,
  };
};
