import { useMutation } from "@tanstack/react-query";

import { friendsService } from "../friendsService";
import { AcceptFriendRequest } from "../friendsType";

export const useAcceptFriendRequest = () => {
  const { mutateAsync, isPending } = useMutation<
    unknown,
    Error,
    AcceptFriendRequest.Params
  >({
    mutationFn: (params) => friendsService.acceptFriendRequest(params),
  });

  return {
    handleAcceptFriendRequest: mutateAsync,
    acceptingFriendRequest: isPending,
  };
};
