import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@infra";

import { friendsService } from "../friendsService";
import { GetFriends } from "../friendsType";

export const useGetFriends = () => {
  const { data: friends, isLoading } = useQuery<
    unknown,
    Error,
    GetFriends.Result
  >({
    queryKey: [QueryKeys.GetFriends],
    queryFn: () => friendsService.getFriends(),
  });

  return {
    friends,
    isLoading,
  };
};
