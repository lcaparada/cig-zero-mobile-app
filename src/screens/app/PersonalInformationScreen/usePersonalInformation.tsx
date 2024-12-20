import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { usePostHog } from "posthog-react-native";
import { useForm } from "react-hook-form";

import { PostHogEventsName } from "@constraints";
import { useUpdateUserInformation } from "@domain";
import { useAuth, UserMetaData } from "@services";

import {
  personalInformationSchema,
  PersonalInformationSchemaType,
} from "./schema/personalInformationSchema";

export const usePersonalInformation = () => {
  const { session } = useAuth();
  const { handleUpdateUserInformation, isPending } = useUpdateUserInformation();

  const userMetaData = session?.user.user_metadata as UserMetaData;

  const posthog = usePostHog();

  const navigation = useNavigation();

  const { control, getValues } = useForm<PersonalInformationSchemaType>({
    resolver: zodResolver(personalInformationSchema),
    defaultValues: {
      name: userMetaData.name,
    },
    mode: "onChange",
  });

  const updateUserInformation = () => {
    posthog.capture(PostHogEventsName.PRESS_TO_UPDATE_USER_INFORMATION);
    handleUpdateUserInformation(getValues()).then(() => navigation.goBack());
  };

  return {
    control,
    isPending,
    userMetaData,
    handleUpdateUserInformation: updateUserInformation,
  };
};
