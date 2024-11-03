import { useMutation } from "@tanstack/react-query";

import { useToastService } from "@services";

import { conversationsService } from "../conversationsService";
import { AddMessageToPrivateConversation } from "../conversationsTypes";

export const useAddMessageToPrivateConversation = () => {
  const { showToast } = useToastService();

  const { mutateAsync, isPending: isAddMessageToPrivateConversationPending } =
    useMutation<
      AddMessageToPrivateConversation.Result,
      Error,
      AddMessageToPrivateConversation.Params
    >({
      mutationFn: (params) =>
        conversationsService.addMessageToPrivateConversation(params),
    });

  const handleAddMessageToPrivateConversation = async (
    params: AddMessageToPrivateConversation.Params
  ) => {
    try {
      const result = await mutateAsync(params);
      return result;
    } catch (error: any) {
      showToast({ message: error.message, type: "error", duration: 5000 });
      throw error;
    }
  };

  return {
    handleAddMessageToPrivateConversation,
    isAddMessageToPrivateConversationPending,
  };
};
