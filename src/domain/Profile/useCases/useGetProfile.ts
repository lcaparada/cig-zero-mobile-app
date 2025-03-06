import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@infra";

import { profileService } from "../profileService";
import { GetProfile } from "../profileTypes";

export const useGetProfile = () => {
  const { data: profile, isLoading } = useQuery<
    unknown,
    Error,
    GetProfile.Result
  >({
    queryKey: [QueryKeys.GetProfile],
    queryFn: () => profileService.getProfile(),
  });

  return {
    profile,
    isLoading,
  };
};
