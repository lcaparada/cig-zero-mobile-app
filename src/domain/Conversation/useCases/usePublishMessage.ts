import { useMutation } from "@tanstack/react-query";

import { conversationsService } from "../conversationsService";
import { PublishMessage } from "../conversationsTypes";

export const usePublishMessage = () => {
  const { mutateAsync } = useMutation<unknown, Error, PublishMessage.Params>({
    mutationFn: (params) => conversationsService.publishMessage(params),
  });

  const handlePublishMessage = (params: PublishMessage.Params) => {
    try {
      mutateAsync(params);
    } catch (error: any) {
      throw error;
    }
  };

  return {
    handlePublishMessage,
  };
};
