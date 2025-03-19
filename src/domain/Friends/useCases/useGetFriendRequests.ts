import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@infra";

import { friendsService } from "../friendsService";
import { Friend } from "../friendsType";

export const useGetFriendRequests = () => {
  const { data: friendRequests, isLoading } = useQuery<
    unknown,
    Error,
    Friend[]
  >({
    queryKey: [QueryKeys.GetFriendRequests],
    queryFn: () => friendsService.getFriendRequests(),
  });

  return {
    isLoading,
    friendRequests,
  };
};
