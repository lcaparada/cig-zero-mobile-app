import { useMutation } from "@tanstack/react-query";

import { userService } from "../userService";
import { UpdateNotificationToken } from "../userTypes";

export const useUpdateNotificationToken = () => {
  const { isPending, mutateAsync } = useMutation<
    UpdateNotificationToken.Result,
    Error,
    UpdateNotificationToken.Params
  >({
    mutationFn: (params) => userService.updateNotificationToken(params),
  });

  const updateNotificationToken = async (
    params: UpdateNotificationToken.Params
  ) => {
    try {
      await mutateAsync(params);
    } catch (error: any) {
      throw error;
    }
  };

  return {
    isPending,
    updateNotificationToken,
  };
};
