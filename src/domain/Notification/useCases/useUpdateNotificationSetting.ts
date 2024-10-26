import { useMutation } from "@tanstack/react-query";

import { useAuth, useToastService } from "@services";

import { notificationService } from "../notificationService";
import { UpdateNotificationSetting } from "../notificationTypes";

export const useUpdateNotificationSetting = () => {
  const { session } = useAuth();
  const { showToast } = useToastService();

  const { mutateAsync, isPending } = useMutation<
    unknown,
    Error,
    UpdateNotificationSetting
  >({
    mutationFn: (params) =>
      notificationService.upsertNotificationSetting(params),
  });

  const updateNotificationSetting = async (
    params: Omit<UpdateNotificationSetting, "userId"> &
      Partial<Pick<UpdateNotificationSetting, "userId">>
  ) => {
    try {
      await mutateAsync({
        ...params,
        userId: params.userId ?? session?.user?.id ?? "",
      });
    } catch (error: any) {
      showToast({ message: error.message, duration: 5000, type: "error" });
    }
  };

  return { isPending, updateNotificationSetting };
};
