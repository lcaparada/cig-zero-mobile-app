import { useMutation } from "@tanstack/react-query";

import { conversationsService } from "../conversationsService";
import { DeleteMessage } from "../conversationsTypes";

export const useDeleteMessage = () => {
  const { mutateAsync } = useMutation<unknown, Error, DeleteMessage.Params>({
    mutationFn: (params) => conversationsService.deleteMessage(params),
  });

  const handleDeleteMessage = (params: DeleteMessage.Params) => {
    try {
      mutateAsync(params);
    } catch (error: any) {
      throw error;
    }
  };

  return {
    handleDeleteMessage,
  };
};
