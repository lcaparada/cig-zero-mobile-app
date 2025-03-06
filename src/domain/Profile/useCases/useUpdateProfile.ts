import { useMutation } from "@tanstack/react-query";

import { profileService } from "../profileService";
import { UpdateProfile } from "../profileTypes";

export const useUpdateProfile = () => {
  const { mutateAsync, isPending } = useMutation<
    unknown,
    Error,
    UpdateProfile.Params
  >({
    mutationFn: (params) => profileService.updateProfile(params),
  });

  return {
    handleUpdateProfile: mutateAsync,
    isUpdating: isPending,
  };
};
