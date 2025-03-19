import { useMutation } from "@tanstack/react-query";

import { conversationsService } from "../conversationsService";
import { UpdateMessage } from "../conversationsTypes";

export const useUpdateMessage = () => {
  const { mutateAsync, isPending } = useMutation<
    unknown,
    Error,
    UpdateMessage.Params
  >({
    mutationFn: (params) => conversationsService.updateMessage(params),
  });

  return {
    updateMessage: mutateAsync,
    isUpdatingMessage: isPending,
  };
};
