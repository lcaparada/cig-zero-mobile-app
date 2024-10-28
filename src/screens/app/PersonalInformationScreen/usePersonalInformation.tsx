import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useAuth, UserMetaData } from "@services";

import {
  personalInformationSchema,
  PersonalInformationSchemaType,
} from "./schema/personalInformationSchema";

export const usePersonalInformation = () => {
  const { session } = useAuth();

  const userMetaData = session?.user.user_metadata as UserMetaData;

  const { control } = useForm<PersonalInformationSchemaType>({
    resolver: zodResolver(personalInformationSchema),
    defaultValues: {
      name: userMetaData.name,
    },
    mode: "onChange",
  });

  return {
    control,
    userMetaData,
  };
};
