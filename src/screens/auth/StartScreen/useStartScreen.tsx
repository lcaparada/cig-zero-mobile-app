import {
  useAuthSignInAnonymously,
  useUpdateNotificationSetting,
} from "@domain";
import { registerForPushNotificationsAsync } from "@helpers";

import { OnboardingScreenSchemaType } from "../OnboardingScreen/schema/onboardingScreenSchema";

export const useStartScreen = () => {
  const { handleSignInAnonymously, isPending } = useAuthSignInAnonymously();
  const { updateNotificationSetting } = useUpdateNotificationSetting();

  const authenticateSignInAnonymously = async (
    params: OnboardingScreenSchemaType
  ) => {
    try {
      const { session } = await handleSignInAnonymously(params);
      if (params.likeToReceiveDailyReminders === "YES" && session) {
        registerForPushNotificationsAsync().then((token) => {
          updateNotificationSetting({
            state: token ?? null,
            userId: session?.user?.id,
            key: "notification_token",
          });
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { authenticateSignInAnonymously, isPending };
};
