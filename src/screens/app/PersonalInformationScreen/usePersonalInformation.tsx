import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

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

  const navigation = useNavigation();

  const { control, getValues } = useForm<PersonalInformationSchemaType>({
    resolver: zodResolver(personalInformationSchema),
    defaultValues: {
      name: userMetaData.name,
    },
    mode: "onChange",
  });

  const updateUserInformation = () => {
    handleUpdateUserInformation(getValues()).then(() => navigation.goBack());
  };

  return {
    control,
    isPending,
    userMetaData,
    handleUpdateUserInformation: updateUserInformation,
  };
};
