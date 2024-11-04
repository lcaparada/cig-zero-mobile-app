import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@infra";

import { conversationsService } from "../conversationsService";
import { GetMessagesFromPrivateConversation } from "../conversationsTypes";

export const useGetMessagesFromPrivateConversation = () => {
  const { data: conversation, isFetching } = useQuery<
    unknown,
    Error,
    GetMessagesFromPrivateConversation.Result
  >({
    queryKey: [QueryKeys.GetMessagesFromPrivateConversation],
    queryFn: () => conversationsService.getMessagesFromPrivateConversation(),
  });

  return { conversation, isFetching };
};
