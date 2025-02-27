import { useMutation } from "@tanstack/react-query";

import { friendsService } from "../friendsService";
import { DeleteFriend } from "../friendsType";

export const useDeleteFriend = () => {
  const { mutateAsync, isPending } = useMutation<
    unknown,
    Error,
    DeleteFriend.Params
  >({
    mutationFn: (params) => friendsService.deleteFriend(params),
  });

  return {
    handleDeleteFriend: mutateAsync,
    deletingFriend: isPending,
  };
};
