import { useMutation } from "@tanstack/react-query";

import { friendsService } from "../friendsService";
import { RejectFriendRequest } from "../friendsType";

export const useRejectFriendRequest = () => {
  const { mutateAsync, isPending } = useMutation<
    unknown,
    Error,
    RejectFriendRequest.Params
  >({
    mutationFn: (params) => friendsService.rejectFriendRequest(params),
  });

  return {
    handleRejectFriendRequest: mutateAsync,
    rejectingFriendRequest: isPending,
  };
};
